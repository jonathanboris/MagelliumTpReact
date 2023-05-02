import React, { useState } from 'react';
import logo from '../logo.svg';
import './App.css';
import Button from './components/ui/Button/Button';

function App() {
  const [counter, setcounter] = useState(0)
  return (
    <div className="App" data-testid="App">
      <div style={{textAlign:'center'}}>{counter}</div>
    <Button onClick={()=> {setcounter(counter+1); console.log(counter);}}>+</Button>
    <Button onClick={()=> {setcounter(counter-1); console.log(counter);}}>-</Button>
    </div>
  );
}

export default App;
