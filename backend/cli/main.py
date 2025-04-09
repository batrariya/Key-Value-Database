import sys
import os
sys.path.append(os.path.abspath(os.path.join(os.path.dirname(__file__), '..')))

import click
from db import core, snapshot


@click.group()
def cli():
    """KVDB - A simple key-value store with snapshots."""
    pass


@cli.command()
@click.argument('key')
@click.argument('value')
def set(key, value):
    core.set_key(key, value)
    click.echo(f"Set {key} = {value}")


@cli.command()
@click.argument('key')
def get(key):
    val = core.get_key(key)
    if val is not None:
        click.echo(f"{key} = {val}")
    else:
        click.echo(f"{key} not found.")


@cli.command()
@click.argument('key')
def delete(key):
    core.delete_key(key)
    click.echo(f"Deleted {key}")


@cli.command()
@click.argument('key')
def exists(key):
    exists = core.key_exists(key)
    click.echo(f"{key} exists: {exists}")


@cli.command()
def view():
    store = core.view_store()
    click.echo("Current Store:")
    click.echo(store)


@cli.command()
@click.argument('name')
def snapshot(name):
    snapshot.take_snapshot(name)
    click.echo(f"Snapshot '{name}' created.")


@cli.command()
@click.argument('name')
def restore(name):
    snapshot.restore_snapshot(name)
    click.echo(f"Restored snapshot '{name}'.")


@cli.command()
@click.argument('name')
def viewsnap(name):
    snap = snapshot.view_snapshot(name)
    if snap is not None:
        click.echo(snap)
    else:
        click.echo(f"Snapshot '{name}' not found.")


@cli.command()
def allsnap():
    snaps = snapshot.view_all_snapshots()
    click.echo(snaps)


@cli.command()
def latestsnap():
    snap = snapshot.view_latest_snapshot()
    click.echo(snap)


@cli.command()
@click.argument('name')
def deletesnap(name):
    snapshot.delete_snapshot(name)
    click.echo(f"Deleted snapshot '{name}'.")


@cli.command()
def history():
    hist = core.get_history()
    click.echo(hist)


if __name__ == "__main__":
    cli()
