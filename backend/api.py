from fastapi import FastAPI, HTTPException
from backend.db import core, snapshot

app = FastAPI(title="KVDB API")


@app.get("/")
def root():
    return {"message": "Welcome to KVDB API"}


# -------------------- Core APIs --------------------
@app.post("/set/")
def set_key(key: str, value: str):
    core.set_key(key, value)
    return {"message": f"Set {key} = {value}"}


@app.get("/get/{key}")
def get_key(key: str):
    value = core.get_key(key)
    if value is None:
        raise HTTPException(status_code=404, detail="Key not found")
    return {key: value}


@app.delete("/delete/{key}")
def delete_key(key: str):

    core.delete_key(key)
    return {"message": f"Deleted {key}"}


@app.get("/exists/{key}")
def key_exists(key: str):
    return {"exists": core.key_exists(key)}


@app.get("/view")
def view_store():
    return core.view_store()


@app.get("/history")
def get_history():
    return core.get_history()


# -------------------- Snapshot APIs --------------------
@app.post("/snapshot/take/")
def take_snapshot(name: str):
    snapshot.take_snapshot(name)
    return {"message": f"Snapshot '{name}' taken."}


@app.get("/snapshot/view/{name}")
def view_snapshot(name: str):
    try:
        return snapshot.view_snapshot(name)
    except KeyError:
        raise HTTPException(status_code=404, detail="Snapshot not found")


@app.post("/snapshot/restore/")
def restore_snapshot(name: str):
    try:
        snapshot.restore_snapshot(name)
        return {"message": f"Snapshot '{name}' restored."}
    except Exception as e:
        raise HTTPException(status_code=400, detail=str(e))


@app.delete("/snapshot/delete/{name}")
def delete_snapshot(name: str):
    snapshot.delete_snapshot(name)
    return {"message": f"Deleted snapshot '{name}'"}


@app.get("/snapshot/all")
def all_snapshots():
    return snapshot.view_all_snapshots()


@app.get("/snapshot/latest")
def latest_snapshot():
    return snapshot.view_latest_snapshot()
