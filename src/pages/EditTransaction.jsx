import { useParams } from 'react-router-dom';
import { useContext } from 'react';
import TransactionEditor from '../components/TransactionEditor';
import { TransactionStateContext } from '../App';

const EditTransaction = () => {
  const { id } = useParams();
  const initData = useContext(TransactionStateContext).find(transaction => transaction.id === Number(id));

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
      <h1>기록 수정하기</h1>
      <TransactionEditor type="EDIT" initData={initData} />
    </div>
  );
};

export default EditTransaction;