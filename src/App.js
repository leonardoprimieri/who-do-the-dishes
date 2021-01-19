import { useState } from 'react';
import { ReactComponent as Banner } from './img/banner.svg';
import './App.css';

function App() {
  const [names, setNames] = useState(['Leo', 'Feef']);
  const [dishes, setDishes] = useState(['Heavy', 'Light']);
  const [dish, setDish] = useState();

  const [winner, setWinner] = useState();

  function handleChoice(arr) {
    setWinner(names[Math.floor(Math.random() * 2)]);
    setDish(dishes[Math.floor(Math.random() * 2)]);
  }

  return (
    <div
      className="container"
      style={
        dish === 'Heavy' ? { background: '#192a56' } : { background: '#78e08f' }
      }
    >
      <div className="content">
        <div className="info">
          <span>
            {winner} clean the {dish}
          </span>
          <button className="btn-choice" onClick={handleChoice}>
            Choose
          </button>
        </div>
        <Banner />
      </div>
    </div>
  );
}

export default App;
