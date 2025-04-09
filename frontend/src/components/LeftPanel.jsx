import React from "react";
import PopupWindow from "./PopupWindow";
import "./LeftPanel.css";

const LeftPanel = ({ currentAction }) => {
  return (
    <div className="left-panel">
      {!currentAction ? (
        <div>
          <h2>Welcome to the Database</h2>
          <p>Select a function from the right panel to view its backend operation here.</p>
          <p>You can perform actions like setting, retrieving, deleting keys, managing snapshots, and more.</p>
        </div>
      ) : (
        <PopupWindow action={currentAction} />
      )}
    </div>
  );
};

export default LeftPanel;