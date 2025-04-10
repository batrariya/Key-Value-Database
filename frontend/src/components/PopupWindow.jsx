import React, { useState } from "react";
import "./PopupWindow.css";
import {
  setKey,
  getKey,
  deleteKey,
  viewAllKeys,
  takeSnapshot,
  restoreSnapshot,
  viewAllSnapshots,
  exportDB,
  // importDB,
  getHistory, // ✅ Added here
  deleteSnapshot, // Import deleteSnapshot here
  clearDB, // Import clearDB here
} from "../kvdb/kvdb";

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
    title: "Latest Snapshot",
    description: "Displays the most recent snapshot of the database.",
  },

  // importDB: {
  //   title: "Import DB",
  //   description: "Imports data from a file into the database.",
  // },
  deleteSnapshot: {
    title: "Delete Snapshot",
    description: "Delete a snapshot by its name.",
  },
  getHistory: {
    title: "View History",
    description: "Displays all past operations performed on the database.",
  },
};

const PopupWindow = ({ action }) => {
  const content = functionDetails[action];
  const [key, setKeyInput] = useState("");
  const [value, setValueInput] = useState("");
  const [snapshotName, setSnapshotName] = useState("");
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleAction = async () => {
    setLoading(true);
    setResult(null);

    try {
      let res;
      switch (action) {
        case "setKey":
          res = await setKey(key, value);
          break;
        case "getValue":
          res = await getKey(key);
          break;
        case "deleteKey":
          res = await deleteKey(key);
          break;
        case "updateValue":
          res = await setKey(key, value);
          break;
        case "listKeys":
          res = await viewAllKeys();
          break;
        case "snapshotDB":
          res = await takeSnapshot(snapshotName);
          break;
        case "restoreSnapshot":
          res = await restoreSnapshot(snapshotName);
          break;
        case "viewSnapshots":
          res = await viewAllSnapshots();
          break;
        case "exportDB":
          res = await exportDB();
          break;
        case "deleteSnapshot": // Add the deleteSnapshot case
        res = await deleteSnapshot(snapshotName);
        break;

        case "getHistory": // ✅ New case
          res = await getHistory();
          break;
        
        case "clearDB": // Handle the clearDB action here
          res = await clearDB(); // Call clearDB function here
          break;

        default:
          res = { message: "Action not implemented." };
      }
      setResult(JSON.stringify(res, null, 2));
    } catch (error) {
      setResult(`❌ Error: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="popup-window">
      <h2>{content?.title || "Function"}</h2>
      <p>{content?.description || "No description available."}</p>

      {(action === "setKey" || action === "updateValue" || action === "getValue" || action === "deleteKey") && (
        <input
          type="text"
          placeholder="Key"
          value={key}
          onChange={(e) => setKeyInput(e.target.value)}
        />
      )}

      {(action === "setKey" || action === "updateValue") && (
        <input
          type="text"
          placeholder="Value"
          value={value}
          onChange={(e) => setValueInput(e.target.value)}
        />
      )}

      {(action === "snapshotDB" || action === "restoreSnapshot" || action === "deleteSnapshot") && (
        <input
          type="text"
          placeholder="Snapshot Name"
          value={snapshotName}
          onChange={(e) => setSnapshotName(e.target.value)}
        />
      )}

      <button onClick={handleAction} disabled={loading}>
        {loading ? "Processing..." : "Execute"}
      </button>

      {result && (
        <pre className="result-box">{result}</pre>
      )}
    </div>
  );
};

export default PopupWindow;
