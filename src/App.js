import './App.css';
import React from 'react';
import Counter from './feature/counter/Counter';
import Coin from './feature/coin/Coin';
import Theme from './feature/theme/Theme';

function App() {

  return (
    <div className="App">
     <Counter/>
     <Coin/>
     <Theme/>
    </div>
  );
}

export default App;
 