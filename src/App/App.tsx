import React, { useEffect, useState } from 'react';
import logo from '../logo.svg';
import './App.css';
import Button from './components/ui/Button/Button';

function App() {
  const [counter, setcounter] = useState(0)
  useEffect(() => {
    // return () => {
    //   effect
    // };
    console.log(`voici la value du compteur : ${counter}`)
  }, [counter])
  return (
    <div className="App" data-testid="App">
      <div style={{textAlign:'center'}}>{counter}</div>
    <Button onClick={()=> {setcounter(counter+1);}}>+</Button>
    <Button onClick={()=> {setcounter(counter-1);}}>-</Button>
    </div>
  );
}

export default App;
