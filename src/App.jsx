import { createSignal } from 'solid-js';
import Card from './components/Card';
import Header from './components/Header';
import StyleText from './components/StyleText';
import './css/App.css';

function App() {
  const [count, setCount] = createSignal(0)

  return (
    <>
      <Header />
      <StyleText />
      <div class="card-container">
        <Card title="Card 1">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium exercitationem, voluptatem deserunt quasi, fugit officiis ea explicabo temporibus vel, cupiditate inventore non voluptatum odit? Perferendis, facere non! Molestias, quis quasi?
        </Card>
        <Card title="Card 2">
          The Quick Brown Fox Jumps Over The Lazy Dog!
        </Card>
        <Card title="Card 3">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga ad esse dolor sunt libero fugit iusto excepturi sint corporis, odio accusantium atque non illum voluptas deleniti aspernatur maiores laboriosam iste.
        </Card>
        <Card title="Card 4">
          To be or not to be, that is the question.
        </Card>
      </div>
    </>
  )
}

export default App
