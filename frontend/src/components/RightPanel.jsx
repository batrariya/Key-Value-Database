import React from "react";
import CustomButton from "./CustomButton";
import "./RightPanel.css";


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
  { label: "Latest Snapshot", action: "exportDB" },
  // { label: "Import DB", action: "importDB" },
  { label: "Delete Snapshot", action: "deleteSnapshot" },
  { label: "History", action: "getHistory" },
];

const RightPanel = ({ currentAction, onButtonClick }) => {
  return (
    <div className="right-panel">
      <div className="button-grid">
        {buttons.map(({ label, action }, index) => (
          <CustomButton
            key={index}
            text={label}
            isActive={currentAction === action}
            onClick={() => onButtonClick(action)}
          />
        ))}
      </div>
    </div>
  );
};

export default RightPanel;
