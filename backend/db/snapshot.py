import json
import os
from datetime import datetime
from .core import load_file, save_file, log_action, STORE_FILE

SNAPSHOT_FILE = os.path.join(os.path.dirname(__file__), 'snapshots.json')
SNAPSHOT_RECENT = os.path.join(os.path.dirname(__file__), 'snapshot.json')


def take_snapshot(name):
    store = load_file(STORE_FILE)
    snapshots = load_file(SNAPSHOT_FILE)
    snapshots[name] = store
    save_file(SNAPSHOT_FILE, snapshots)
    log_action(f"SNAPSHOT {name}")


def restore_snapshot(name):
    snapshots = load_file(SNAPSHOT_FILE)
    if name in snapshots:
        save_file(STORE_FILE, snapshots[name])
        log_action(f"RESTORE SNAPSHOT {name}")
    else:
        print("Snapshot not found")


def delete_snapshot(name):
    snapshots = load_file(SNAPSHOT_FILE)
    if name in snapshots:
        del snapshots[name]
        save_file(SNAPSHOT_FILE, snapshots)
        log_action(f"DELETE SNAPSHOT {name}")


def view_snapshot(name):
    snapshots = load_file(SNAPSHOT_FILE)
    log_action(f"VIEW SNAPSHOT {name}")
    # return snapshots.get(name, {}).get("data", None)
    return snapshots[name]


def view_all_snapshots():
    log_action("VIEW ALL SNAPSHOTS")
    return load_file(SNAPSHOT_FILE)


def view_latest_snapshot():
    snapshots = load_file(SNAPSHOT_FILE)
    log_action("VIEW LATEST SNAPSHOT")
    if snapshots:
        last_key = list(snapshots.keys())[-1]
        return snapshots[last_key]
    return {}

