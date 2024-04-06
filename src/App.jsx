import { createSignal } from 'solid-js';
import Header from './components/Header';
import './css/App.css';

function App() {
  const [count, setCount] = createSignal(0)

  return (
    <>
      <Header />
      <p class="read-the-docs">
        Stylized text that you can use with Solid.
      </p>
    </>
  )
}

export default App
