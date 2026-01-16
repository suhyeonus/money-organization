import TransactionEditor from '../components/TransactionEditor';
import { TransactionDispatchContext } from '../App';
import usePageTitle from '../hooks/usePageTitle';

const NewTransaction = () => {
  usePageTitle("한입 가계부 - 새로운 기록");
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
      <h1>새로운 기록</h1>
      <TransactionEditor type="CREATE" />
    </div>
  );
};

export default NewTransaction;