import './TransactionItem.css';

const TransactionItem = ({ id, name, amount, type, category, date }) => {
  return (
    <div className="transaction-item">
      <div className="transaction-item-category">{category}</div>
      <div className="transaction-item-name">{name}</div>
      <div 
        className={`transaction-item-amount type-${type === 'expense' ? 'expense' : 'income'}`}
      >
        {`${type === 'expense' ? '-' : '+'} ${amount.toLocaleString()} 원`}
      </div>
      <div className="transaction-item-date">{new Date(date).toLocaleDateString()}</div>
      <button className="button">수정</button>
      <button className="button">삭제</button>
    </div>
  );
};

export default TransactionItem;