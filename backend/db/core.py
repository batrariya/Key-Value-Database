import json
import os

STORE_FILE = os.path.join(os.path.dirname(__file__), 'store.json')

def load_store():
    if not os.path.exists(STORE_FILE):
        return {}
    with open(STORE_FILE, 'r') as f:
        return json.load(f)

def save_store(store):
    with open(STORE_FILE, 'w') as f:
        json.dump(store, f, indent=4)

def set_key(key, value):
    store = load_store()
    store[key] = value
    save_store(store)

def get_key(key):
    store = load_store()
    return store.get(key)

def delete_key(key):
    store = load_store()
    if key in store:
        del store[key]
        save_store(store)