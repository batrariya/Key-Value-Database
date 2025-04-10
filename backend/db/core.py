import json
import os
from datetime import datetime

STORE_FILE = os.path.join(os.path.dirname(__file__), 'store.json')
HISTORY_FILE = os.path.join(os.path.dirname(__file__), 'history.json')


def log_action(action):
    history = load_file(HISTORY_FILE)
    history[str(datetime.now())] = action
    save_file(HISTORY_FILE, history)


def load_file(path):
    if not os.path.exists(path):
        return {}
    with open(path, 'r') as f:
        return json.load(f)


def save_file(path, data):
    with open(path, 'w') as f:
        json.dump(data, f, indent=4)


def set_key(key, value):
    store = load_file(STORE_FILE)
    store[key] = value
    save_file(STORE_FILE, store)
    log_action(f"SET {key} = {value}")


def get_key(key):
    store = load_file(STORE_FILE)
    log_action(f"GET {key}")
    return store.get(key)


def delete_key(key):
    store = load_file(STORE_FILE)
    if key in store:
        del store[key]
        save_file(STORE_FILE, store)
        log_action(f"DELETE {key}")


def key_exists(key):
    store = load_file(STORE_FILE)
    log_action(f"CHECK EXISTS {key}")
    return key in store


def view_store():
    store = load_file(STORE_FILE)
    log_action("VIEW STORE")
    return store


def get_history():
    return load_file(HISTORY_FILE)

# def clear_db():
#     """Clear all entries in the store (store.json)"""
#     save_file(STORE_FILE, {})  # Save an empty dictionary to the store.json
#     log_action("CLEAR STORE")  # Log the clear action


def clear_db():
    try:
        store = load_file(STORE_FILE)
        store.clear()  # Clear all entries
        save_file(STORE_FILE, store)  # Save the empty store back to the file
        log_action("Database cleared.")
    except Exception as e:
        raise Exception(f"Error while clearing the database: {str(e)}")

# hi priyamvada