import React, { useState } from 'react';
import RightPanel from './components/RightPanel';
import LeftPanel from './components/LeftPanel';
import Navbar from './components/Navbar'
import './App.css';

function App() {
  const [currentAction, setCurrentAction] = useState(null);


  const handleButtonClick = (action) => {
    if (currentAction === action) {
      setCurrentAction(null);
    } else {
      setCurrentAction(action);
    }
  };

  return (
    <div className="app">
      < Navbar/>
      <div className="main-content">
        <LeftPanel currentAction={currentAction} />
        <RightPanel currentAction={currentAction} onButtonClick={handleButtonClick} />
      </div>
    </div>
  );
}

export default App;





