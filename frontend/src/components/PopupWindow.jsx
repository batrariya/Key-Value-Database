import React from "react";
import "./PopupWindow.css";

const functionDetails = {
  setKey: {
    title: "Set Key",
    description: "Insert a new key-value entry into the database.",
  },
  getValue: {
    title: "Get Value",
    description: "Retrieve the value for a specific key.",
  },
  deleteKey: {
    title: "Delete Key",
    description: "Remove a key and its associated value.",
  },
  updateValue: {
    title: "Update Value",
    description: "Update an existing value for a given key.",
  },
  listKeys: {
    title: "List All Keys",
    description: "Displays all keys currently stored in the database.",
  },
  clearDB: {
    title: "Clear DB",
    description: "Removes all key-value pairs from the database.",
  },
  snapshotDB: {
    title: "Snapshot DB",
    description: "Creates a snapshot of the current database state.",
  },
  restoreSnapshot: {
    title: "Restore Snapshot",
    description: "Restores the database from a previous snapshot.",
  },
  viewSnapshots: {
    title: "View Snapshots",
    description: "Lists all saved database snapshots.",
  },
  exportDB: {
    title: "Export DB",
    description: "Exports the database to a file.",
  },
  importDB: {
    title: "Import DB",
    description: "Imports data from a file into the database.",
  },
  healthCheck: {
    title: "Health Check",
    description: "Performs a health check of the database system.",
  },
};

const PopupWindow = ({ action }) => {
  const content = functionDetails[action];

  return (
    <div className="popup-window">
      <h2>{content?.title || "Function"}</h2>
      <p>{content?.description || "No description available."}</p>
    </div>
  );
};

export default PopupWindow;
