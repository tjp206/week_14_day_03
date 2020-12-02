import React from 'react';
import './App.css';
import Sound from "./components/Sound.js"
import MetronomeContainer from './containers/MetronomeContainer';

function App() {
  return (
    <div className="App">
      <MetronomeContainer />
      <Sound />
    </div>
  );
}

export default App;
