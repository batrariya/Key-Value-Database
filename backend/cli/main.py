import sys
import os

# Fix Python path to import modules correctly
sys.path.append(os.path.abspath(os.path.join(os.path.dirname(__file__), '..')))

import click
# from db.core import set_key, get_key, delete_key
from db.snapshot import take_snapshot, restore_snapshot
from db import core

@click.group()
def cli():
    """KVDB - A simple key-value database with snapshot functionality."""
    pass

@cli.command()
@click.argument('key')
@click.argument('value')
def set(key, value):
    """Set a value for a key."""
    core.set_key(key, value)
    click.echo(f"Set {key} = {value}")

@cli.command()
@click.argument('key')
def get(key):
    """Get the value of a key."""
    value = core.get_key(key)
    if value is not None:
        click.echo(f"{key} = {value}")
    else:
        click.echo(f"{key} not found.")

@cli.command()
@click.argument('key')
def delete(key):
    """Delete a key."""
    core.delete_key(key)
    click.echo(f"{key} deleted.")

# @cli.command()
# def snapshot():
#     """Take a snapshot of current DB."""
#     snapshot.take_snapshot()
#     click.echo("Snapshot created.")

@cli.command(name="snapshot")
def snapshot_command():
    take_snapshot()
    print("Snapshot taken!")
    
@cli.command(name="restore")
@click.argument("index", type=int)
def restore_command(index):
    restore_snapshot(index)
    print(f"Restored snapshot at index {index}")

if __name__ == "__main__":
    cli()