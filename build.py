#!/usr/bin/env python3
"""Sync the canonical self-contained HTML template to GitHub Pages and dist."""
from pathlib import Path

ROOT = Path(__file__).resolve().parent
source = ROOT / "src" / "template.html"
if not source.is_file():
    raise SystemExit("Missing src/template.html")

content = source.read_bytes()
for relative in ("index.html", "dist/presentation.html"):
    target = ROOT / relative
    target.parent.mkdir(parents=True, exist_ok=True)
    target.write_bytes(content)
    print(f"Updated {relative} ({len(content):,} bytes)")
