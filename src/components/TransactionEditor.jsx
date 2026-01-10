import './TransactionEditor.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const categories = ["🍚 식비", "💧 구독", "🏠 생활", "🏢 급여", "💰 금융"];

export default function TransactionEditor({ onSubmit }) {
  const navigate = useNavigate();
  const [input, setInput] = useState({
    name: '',
    amount: 0,
    type: 'expense',
    category: categories[0],
    date: new Date(),
  });

  const onChangeInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    if (name === 'date') {
      value = new Date(value);
    }

    setInput({
      ...input,
      [name]: value,
    });
  }

  const onClickSubmit = () => {
    if (!onSubmit 
      || input.name === '' 
      || input.amount === 0 
      || input.type === '' 
      || input.category === '' 
      || input.date === '') {
        alert('입력되지 않은 값이 있습니다.');
        return;
      }
    onSubmit(input);
  }

  const getStringifiedDate = (date) => {
    let year = date.getFullYear();
    let month = date.getMonth() + 1;
    let day = date.getDate();

    if (month < 10) {
      month = `0${month}`;
    }
    if (day < 10) {
      day = `0${day}`;
    }
    return `${year}-${month}-${day}`;
  }


  return (
    <div className="transaction-editor">
      <section className="transaction-input">
        <p>분류</p>
        <select 
          name="type" 
          value={input.type} 
          onChange={onChangeInput}
        >
          <option value="expense">지출</option>
          <option value="income">수입</option>
        </select>
      </section>
      <section className="transaction-input">
        <p>지출/수입 이름</p>
        <input 
          type="text" 
          name="name" 
          value={input.name} 
          onChange={onChangeInput}
        />
      </section>
      <section className="transaction-input">
        <p>금액</p>
        <input 
          type="number" 
          name="amount" 
          value={input.amount} 
          onChange={onChangeInput}
        />
      </section>
      <section className="transaction-input">
        <p>분류</p>
        <select 
          name="category" 
          value={input.category} 
          onChange={onChangeInput}
        >
          {categories.map(category => (
            <option key={category} value={category}>{category}</option>
          ))}
        </select>
      </section>
      <section className="transaction-input">
        <p>날짜</p>
        <input type="date" 
          name="date" 
          value={getStringifiedDate(input.date)} 
          onChange={onChangeInput}
        />
      </section>
      <section className="button-container">
        <button 
          className="button-save" 
          onClick={onClickSubmit}
        >
          저장
        </button>
        <button 
          className="button-cancel"
          onClick={() => navigate('/')}
        >
          취소
        </button>
      </section>
    </div>
    );
}
