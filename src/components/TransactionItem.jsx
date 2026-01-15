import './TransactionItem.css';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { TransactionDispatchContext } from '../App';

const TransactionItem = ({ id, name, amount, type, category, date }) => {
  const navigate = useNavigate();
  const { onDeleteTransaction } = useContext(TransactionDispatchContext);

  const onClickDelete = () => {
    if(window.confirm('거래 내역을 정말 삭제하시겠습니까?')) {
      onDeleteTransaction(id);
    }
  }

  return (
    <div className="transaction-item">
      <div className="transaction-item-category">{category}</div>
      <div className="transaction-item-name">{name}</div>
      <div 
        className={`transaction-item-amount type-${type === 'expense' ? 'expense' : 'income'}`}
      >
        {`${type === 'expense' ? '-' : '+'} ${Number(amount).toLocaleString()} 원`}
      </div>
      <div className="transaction-item-date">{new Date(date).toLocaleDateString()}</div>
      <button className="button" onClick={() => navigate(`/edit-transaction/${id}`)}>수정</button>
      <button className="button" onClick={onClickDelete}>삭제</button>
    </div>
  );
};

export default TransactionItem;