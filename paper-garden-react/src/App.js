import React from 'react';
import MainContainer from './components/MainContainer';
import './App.css';

function App({plantPosition}) {
  return (
    <div className="App">
      <MainContainer plantPosition={plantPosition}/>
    </div>
  );
}

export default App;
