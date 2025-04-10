from fastapi import FastAPI, HTTPException
from backend.db import core, snapshot
from fastapi import APIRouter

# app = FastAPI(title="KVDB API")
router = APIRouter()

@router.get("/")
def root():
    return {"message": "Welcome to KVDB API"}


# @app.get("/")
# def root():
#     return {"message": "Welcome to KVDB API"}


# -------------------- Core APIs --------------------
# @app.post("/set/")
@router.post("/set/")
def set_key(key: str, value: str):
    core.set_key(key, value)
    return {"message": f"Set {key} = {value}"}


# @app.get("/get/{key}")
@router.get("/get/{key}")
def get_key(key: str):
    value = core.get_key(key)
    if value is None:
        raise HTTPException(status_code=404, detail="Key not found")
    return {key: value}


# @app.delete("/delete/{key}")

@router.delete("/delete/{key}")
def delete_key(key: str):
    if not core.key_exists(key):
        raise HTTPException(status_code=404, detail=f"Key '{key}' not found and hence can't be deleted")
    
    core.delete_key(key)
    return {"message": f"Deleted {key}"}


# @app.get("/exists/{key}")
@router.get("/exists/{key}")
def key_exists(key: str):
    return {"exists": core.key_exists(key)}


# @app.get("/view")

@router.get("/view")
def view_store():
    return core.view_store()


# @app.get("/history")
@router.get("/history")
def get_history():
    return core.get_history()


# -------------------- Snapshot APIs --------------------
# @app.post("/snapshot/take/")
@router.post("/snapshot/take/")
def take_snapshot(name: str):
    snapshot.take_snapshot(name)
    return {"message": f"Snapshot '{name}' taken."}


# @app.get("/snapshot/view/{name}")
@router.get("/snapshot/view/{name}")
def view_snapshot(name: str):
    try:
        return snapshot.view_snapshot(name)
    except KeyError:
        raise HTTPException(status_code=404, detail="Snapshot not found")


# @app.post("/snapshot/restore/")
# @router.post("/snapshot/restore/")
# def restore_snapshot(name: str):
#     try:
#         snapshot.restore_snapshot(name)
#         return {"message": f"Snapshot '{name}' restored."}
#     except Exception as e:
#         raise HTTPException(status_code=400, detail=str(e))
@router.post("/snapshot/restore/")
def restore_snapshot(name: str):
    all_snapshots = snapshot.view_all_snapshots()

    if name not in all_snapshots:
        raise HTTPException(status_code=404, detail=f"Snapshot '{name}' not found and hence can't be restored")

    try:
        snapshot.restore_snapshot(name)
        return {"message": f"Snapshot '{name}' restored."}
    except Exception as e:
        raise HTTPException(status_code=400, detail=str(e))


# @router.delete("/snapshot/delete/{name}")
def delete_snapshot(name: str):
    all_snapshots = snapshot.view_all_snapshots()
    if name not in all_snapshots:
        raise HTTPException(status_code=404, detail=f"Snapshot '{name}' not found and hence can't be deleted")

    snapshot.delete_snapshot(name)
    return {"message": f"Deleted snapshot '{name}'"}


# @app.get("/snapshot/all")
@router.get("/snapshot/all")
def all_snapshots():
    return snapshot.view_all_snapshots()


# @app.get("/snapshot/latest")
@router.get("/snapshot/latest")
def latest_snapshot():
    return snapshot.view_latest_snapshot()


# -------------------- Clear Database API --------------------


@router.post("/clear_db/")
def clear_db():
    try:
        core.clear_db()
        return {"message": "Database cleared successfully."}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))