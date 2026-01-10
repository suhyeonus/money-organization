import './Home.css';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { TransactionStateContext } from '../App';
import TransactionItem from '../components/TransactionItem';

const Home = () => {
  const navigate = useNavigate();
  const transactions = useContext(TransactionStateContext);
  const sortedTransactions = 
    transactions.toSorted((a, b) => Number(b.date) - Number(a.date));

  return (
    <div className="home">
      <header className="header">
        <h1>한입 가계부</h1>
        <button 
          className="new_button" 
          onClick={() => navigate('/new-transaction')}
        >
          + 작성하기
        </button>
      </header>
      <div className="transaction-list">
        {sortedTransactions.map(transaction => (
          <TransactionItem key={transaction.id} {...transaction} />
        ))}
      </div>
    </div>

  );
};

export default Home;