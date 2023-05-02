import React from 'react';
import logo from '../logo.svg';
import './App.css';
import Button from './components/ui/Button/Button';

function App() {
  return (
    <div className="App" data-testid="App">
      DEMAT
      <Button backgroundColor='blue' onClick={()=>{console.log('hello')}}>

      </Button>
    </div>
  );
}

export default App;
