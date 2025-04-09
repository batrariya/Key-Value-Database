import React, { useState } from 'react';
import RightPanel from './components/RightPanel';
import LeftPanel from './components/LeftPanel';
import Navbar from './components/Navbar'
import './App.css';

function App() {
  const [currentAction, setCurrentAction] = useState(null);

  return (
    <div className="app">
      < Navbar/>
      <div className="main-content">
        <LeftPanel currentAction={currentAction} />
        <RightPanel setCurrentAction={setCurrentAction} />
      </div>
    </div>
  );
}

export default App;




