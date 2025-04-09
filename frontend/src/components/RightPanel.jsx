import React, { useState } from "react";
import CustomButton from "./CustomButton";
import "./RightPanel.css";

// Button labels and backend actions
const buttons = [
  { label: "Set Key", action: "setKey" },
  { label: "Get Value", action: "getValue" },
  { label: "Delete Key", action: "deleteKey" },
  { label: "Update Value", action: "updateValue" },
  { label: "List All Keys", action: "listKeys" },
  { label: "Clear DB", action: "clearDB" },
  { label: "Snapshot DB", action: "snapshotDB" },
  { label: "Restore Snapshot", action: "restoreSnapshot" },
  { label: "View Snapshots", action: "viewSnapshots" },
  { label: "Export DB", action: "exportDB" },
  { label: "Import DB", action: "importDB" },
  { label: "Health Check", action: "healthCheck" },
];

const RightPanel = ({ setCurrentAction }) => {
  const [activeButton, setActiveButton] = useState(null);

  const handleClick = (action) => {
    setActiveButton(action);          // highlight active button
    setCurrentAction(action);         // pass to App.jsx
  };

  return (
    <div className="right-panel">
      <div className="button-grid">
        {buttons.map(({ label, action }, index) => (
          <CustomButton
            key={index}
            text={label}
            isActive={activeButton === action}
            onClick={() => handleClick(action)}
          />
        ))}
      </div>
    </div>
  );
};

export default RightPanel;
