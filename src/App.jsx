import './App.css'
import { Routes, Route } from 'react-router-dom'
import { createContext, useReducer, useRef } from 'react'
import Home from './pages/Home'
import NewTransaction from './pages/NewTransaction'
import EditTransaction from './pages/EditTransaction'
import NotFound from './pages/NotFound'

const mockData = [
  {
    id: 0,
    name: "마라탕 & 꿔바로우",
    amount: 59000,
    type: "expense",
    category: "🍚 식비",
    date: new Date().getTime() + 1,
  },
  {
    id: 1,
    name: "월세",
    amount: 500000,
    type: "expense",
    category: "🏠 생활",
    date: new Date().getTime() + 2,
  },
  {
    id: 2,
    name: "월급",
    amount: 3500000,
    type: "income",
    category: "🏢 급여",
    date: new Date().getTime() + 3,
  },
];

function reducer(transactions, action) {
  switch (action.type) {
    case 'INIT': {
      return action.data;
    }
    case 'CREATE': {
      return [...transactions, action.data];
    }
    case 'UPDATE': {
      return transactions.map(transaction => 
        String(transaction.id) === String(action.data.id) 
        ? action.data 
        : transaction
      );
    }
    case 'DELETE': {
      return transactions.filter(transaction => 
        String(transaction.id) !== String(action.id)
      );
    }
    default: {
      return transactions;
    }
  }
}

const TransactionStateContext = createContext();
const TransactionDispatchContext = createContext();

function App() {
  const [transactions, dispatch] = useReducer(reducer, mockData);
  const idRef = useRef(3);

  const onCreateTransaction = (name, amount, type, category, date) => {
    dispatch({
      type: 'CREATE',
      data: {
        id: idRef.current++,
        name,
        amount,
        type,
        category,
        date,
      }
    });
  };

  const onUpdateTransaction = (id, name, amount, type, category, date) => {
    dispatch({
      type: 'UPDATE',
      data: {
        id,
        name,
        amount,
        type,
        category,
        date,
      }
    });
  };

  const onDeleteTransaction = (id) => {
    dispatch({
      type: 'DELETE',
      id,
    });
  };


  return (
    <TransactionStateContext.Provider value={transactions}>
      <TransactionDispatchContext.Provider 
        value={{
          onCreateTransaction, 
          onUpdateTransaction, 
          onDeleteTransaction
          }}
        >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/new-transaction" element={<NewTransaction />} />
          <Route path="/edit-transaction/:id" element={<EditTransaction />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </TransactionDispatchContext.Provider>
    </TransactionStateContext.Provider>
  );
}

export default App;