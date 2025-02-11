import { useState } from 'react';
import './App.css';

function LemonadeStand() {
  const [profit, setProfit] = useState(0);
  
  function sellButton() {
    setProfit((profit) => profit + 5);
  }
  function buyButton() {
    setProfit((profit) => profit - 2);
  }

  return (
    <div className='LemonadeStand'>
      <h2>Profit: ${profit}</h2>
      <button className='sellButton' onClick={sellButton}>
        Sælg Lemonade
      </button> 
      <button className='buyButton' onClick={buyButton}>
        Køb citroner
      </button>
    </div>
  );
}

export default LemonadeStand;