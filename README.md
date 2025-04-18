# SnapNStore – A Fast, Lightweight Key-Value Store with Snapshot Support

Welcome to **SnapNStore**, a blazing-fast and minimalistic key-value database system, engineered for speed and simplicity. Built using **FastAPI** for the backend and **React** for the frontend, KVDB supports essential database operations along with advanced features like **snapshot management**, **operation history tracking**, and **state restoration** — all without relying on any external database engine.

> Created in under 72 hours during **Nutanix Hackathon 2025**

---

## Why SnapNStore?

- **Super Lightweight**  
  SnapNStore runs entirely in memory using Python dictionaries — no need for SQL or NoSQL databases. Ideal for real life applications, testing environments, or fast prototyping.

- **Snapshot System**  
  Easily capture the current state of the key-value store at any moment. Snapshots can be restored later to rollback or test different states.

- **History Tracking**  
  Every operation (set, delete, restore, etc.) is logged with a timestamp. This gives you full visibility into changes made over time.

- **Delete Keys / Clear DB**  
  Remove specific keys or completely wipe the database with a single action. Ideal for sessions, testing, or quickly resetting state.

- **Export Snapshots**  
  Instantly export the latest snapshot of the database. Great for backup, sharing states, or portability between environments.

- **In-Memory & FastAPI Powered**  
  Leveraging Python's built-in data structures and FastAPI's async capabilities, SnapNStore delivers a high-performance FastAPI that can be integrated with any client.

---

## Tech Stack

| Frontend   | Backend | Database            | Misc                     |
|------------|---------|---------------------|--------------------------|
| React.js   | FastAPI | Python In-Memory Dict | Git, GitHub, JSON |

- **React.js**: For building a fast, responsive UI to interact with the API  
- **FastAPI**: A modern Python web framework for building fast, asynchronous APIs  
- **In-Memory Database**: All data is stored in a Python dictionary — no external DB  
- **JSON**: Lightweight communication using JSON over FastAPI endpoints

---

## Core Features

- **CRUD Operations**  
  Set new key-value pairs, get their values, delete them, or view the full list — all via clean API endpoints or frontend UI.

- **Snapshot Management**  
  Take full backups (snapshots) of the current database state. View and delete past snapshots or restore the DB to a specific snapshot with one click.

- **History of Operations**  
  Every action you take — whether it’s updating a key, restoring a snapshot, or clearing the DB — is recorded. View it as an audit trail or change log.

- **Key Existence Checker**  
  Instantly check if a specific key exists in the current DB without fetching its value. Perfect for validations and edge-case handling.

- **Clear Entire DB**  
  Reset the entire key-value store to an empty state with a single API call or UI action. Handy for reinitializing apps or tests.

- **API-First Design**  
  SnapNStore is built around FastAPI principles with a strong focus on modularity and reusability. Use it with any client — web, CLI, or scripts.

---

## Getting Started

### 🔧 Backend (FastAPI)

```bash
# Clone the repository
git clone https://github.com/batrariya/Key-Value-Database.git
cd Key-Value-Database

# Install backend dependencies
pip install -r requirements.txt

# Run the FastAPI server
uvicorn backend.server:app --reload
```

### Frontend (React)

```bash
# Navigate to frontend
cd frontend

# Install dependencies
npm install

# Start the development server
npm run dev
```

## Command Reference

| Bash Command                                              | Description                           |
|-------------------------------------------------------------|------------------------------------------|
| `git clone https://github.com/batrariya/Key-Value-Database.git` | Clone the SnapNStore repository               |
| `pip install -r requirements.txt`                           | Install Python backend dependencies      |
| `uvicorn backend.server:app --reload`                         | Start FastAPI server with live reload    |
| `cd frontend`                                               | Move into frontend project directory     |
| `npm install`                                               | Install React frontend packages          |
| `npm run dev`                                                 | Start React development server           |

## How It Works

SnapNStore uses a **Python dictionary** as its primary data store, making it extremely fast and memory-efficient. Here's how key operations are handled:

- **Set**: Adds or updates a key-value pair.
- **Get**: Retrieves a value by key.
- **Delete**: Removes a specific key from the store.
- **Snapshot**: Saves the current state of the database (deep copy of the dictionary).
- **Restore**: Replaces the current state with a previously saved snapshot.
- **History**: Appends every operation to a history list, along with a timestamp for tracking.

## Authors

Built with ❤️ at Nutanix 2025 by:

- [Riya](https://github.com/batrariya)
- [Priyamvada](https://github.com/Priyamvada28)
- [Kirti](https://github.com/Kirti32)
- [Surabhi](https://github.com/Surabhi-Mdn)
- [Gayatri](https://github.com/AspireAce)
- [Bhavya](https://github.com/bhavya8823)

> Special thanks to the Nutanix team!
