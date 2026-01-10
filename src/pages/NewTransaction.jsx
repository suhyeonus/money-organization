import TransactionEditor from '../components/TransactionEditor';
import { useContext } from 'react';
import { TransactionDispatchContext } from '../App';
import { useNavigate } from 'react-router-dom';

const NewTransaction = () => {
  const { onCreateTransaction } = useContext(TransactionDispatchContext);
  const navigate = useNavigate();

  const onSumbit = (input) => {
    onCreateTransaction(
      input.name, 
      input.amount, 
      input.type, 
      input.category, 
      input.date
    );
    navigate('/', { replace: true });
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
      <h1>새로운 기록</h1>
      <TransactionEditor onSubmit={onSumbit} />
    </div>
  );
};

export default NewTransaction;