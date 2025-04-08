import json
import os
from datetime import datetime

STORE_FILE = os.path.join(os.path.dirname(__file__), 'store.json')
SNAPSHOT_FILE = os.path.join(os.path.dirname(__file__), 'snapshots.json')

def load_json(path):
    if not os.path.exists(path):
        return []
    with open(path, 'r') as f:
        return json.load(f)

def save_json(path, data):
    with open(path, 'w') as f:
        json.dump(data, f, indent=4)

def take_snapshot():
    store = load_json(STORE_FILE)
    snapshots = load_json(SNAPSHOT_FILE)
    snapshots.append({
        'timestamp': datetime.now().isoformat(),
        'data': store
    })
    save_json(SNAPSHOT_FILE, snapshots)

def restore_snapshot(index):
    snapshots = load_json(SNAPSHOT_FILE)
    if 0 <= index < len(snapshots):
        store = snapshots[index]['data']
        save_json(STORE_FILE, store)
    else:
        print("Invalid snapshot index")
    