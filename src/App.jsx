import { createSignal } from 'solid-js';
import Header from './components/Header';
import StyleText from './components/StyleText';
import './css/App.css';

function App() {
  const [count, setCount] = createSignal(0)

  return (
    <>
      <Header />
      <StyleText />
    </>
  )
}

export default App
