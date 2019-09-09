import React from 'react';
import MainContainer from './components/MainContainer'
import Draggable from './components/Draggable'
import Circle from './components/Circle'
import './App.css';

function App() {
  return (
    <div className="App" style={{zIndex: '-5', position: 'relative'}}>
      <MainContainer/>
    </div>
  );
}

export default App;
