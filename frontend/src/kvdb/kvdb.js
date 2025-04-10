const BASE_URL = "http://localhost:8000";

// Core APIs
export async function setKey(key, value) {
  const response = await fetch(`${BASE_URL}/set/?key=${key}&value=${value}`, {
    method: "POST",
  });
  return response.json();
}

export async function getKey(key) {
  const response = await fetch(`${BASE_URL}/get/${key}`);
  if (!response.ok) throw new Error("Key not found");
  return response.json();
}

export async function deleteKey(key) {
  const response = await fetch(`${BASE_URL}/delete/${key}`, {
    method: "DELETE",
  });
  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.detail || `Key '${key}' not found and hence can't be deleted`);
  }
  return response.json();
}

export async function keyExists(key) {
  const response = await fetch(`${BASE_URL}/exists/${key}`);
  return response.json();
}

export async function viewAllKeys() {
  const response = await fetch(`${BASE_URL}/view`);
  return response.json();
}

// export async function getHistory() {
//   const response = await fetch(`${BASE_URL}/history`);
//   return response.json();
// }

// Snapshot APIs
export async function takeSnapshot(name) {
  const response = await fetch(`${BASE_URL}/snapshot/take/?name=${name}`, {
    method: "POST",
  });
  return response.json();
}

export async function viewSnapshot(name) {
  const response = await fetch(`${BASE_URL}/snapshot/view/${name}`);
  if (!response.ok) throw new Error("Snapshot not found");
  return response.json();
}

export async function restoreSnapshot(name) {
  const response = await fetch(`${BASE_URL}/snapshot/restore/?name=${name}`, {
    method: "POST",
  });
  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.detail || "Failed to restore snapshot");
  }
  return response.json();
}

export async function deleteSnapshot(name) {
  const response = await fetch(`${BASE_URL}/snapshot/delete/${name}`, {
    method: "DELETE",
  });
  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.detail || `Snapshot '${name}' not found and hence can't be deleted`);
  }
  return response.json();
}

export async function viewAllSnapshots() {
  const response = await fetch(`${BASE_URL}/snapshot/all`);
  return response.json();
}

// export async function viewLatestSnapshot() {
//   const response = await fetch(`${BASE_URL}/snapshot/latest`);
//   return response.json();
// }


// export async function exportDB() {
//   const response = await fetch(`${BASE_URL}/view`);
//   if (!response.ok) throw new Error("Failed to export DB");
//   return await response.json();
// }

export async function exportDB() {
  const response = await fetch(`${BASE_URL}/snapshot/latest`);
  if (!response.ok) throw new Error("Failed to export DB");
  return await response.json();
}


// export async function importDB() {

  
//   return { message: "Import functionality not yet implemented." };
// }

export async function getHistory() {
  const response = await fetch(`${BASE_URL}/history`);
  return response.json();
}

// -------------------- New Clear Database API --------------------

// Clear Database API
export async function clearDB() {
  const response = await fetch(`${BASE_URL}/clear_db/`, {
    method: "POST",
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.detail || "Failed to clear database");
  }

  return response.json();
}

