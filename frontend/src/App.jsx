import React, { useState } from 'react';
import RightPanel from './components/RightPanel';
import LeftPanel from './components/LeftPanel';
import Navbar from './components/Navbar'
import './App.css';

function App() {
  const [currentAction, setCurrentAction] = useState(null);

  // Toggle logic: close if same button clicked again
  const handleButtonClick = (action) => {
    if (currentAction === action) {
      setCurrentAction(null); // close popup
    } else {
      setCurrentAction(action); // open new popup
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





