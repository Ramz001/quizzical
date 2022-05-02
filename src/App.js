import './index.css'
import Modal from './components/Modal';
import Quiz from './components/Quiz';
import { useSelector } from 'react-redux'


function App() {
  const { isOpen } = useSelector(state => state.modal);
  return (
    <main>
      {isOpen && <Modal />}
      <Quiz />
    </main>
  );
}

export default App;
