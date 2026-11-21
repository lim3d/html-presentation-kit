#!/usr/bin/env python3
"""Create offline presentation from separated source files (stdlib only)."""
from pathlib import Path
import re,base64,mimetypes
ROOT=Path(__file__).resolve().parent
def embed_assets(text):
    def replace(m):
        src=m.group(3)
        if src.startswith(('data:','https:','http:','#')): return m.group(0)
        p=(ROOT/src).resolve()
        if not p.is_relative_to(ROOT): raise ValueError('Outside project: '+src)
        if not p.is_file(): raise FileNotFoundError(src)
        mime=mimetypes.guess_type(p.name)[0] or 'application/octet-stream'
        return m.group(1)+'='+m.group(2)+'data:'+mime+';base64,'+base64.b64encode(p.read_bytes()).decode()+m.group(2)
    return re.sub(r'(src|poster)=(["\'])([^"\']+)\2',replace,text)
t=(ROOT/'src/template.html').read_text(encoding='utf-8')
css=(ROOT/'src/theme.css').read_text(encoding='utf-8')
js=(ROOT/'src/engine.js').read_text(encoding='utf-8')
slides=embed_assets((ROOT/'slides.html').read_text(encoding='utf-8'))
out=t.replace('{{TITLE}}','HTML 발표자료').replace('{{CSS}}',css).replace('{{SLIDES}}',slides).replace('{{ENGINE}}',js)
p=ROOT/'dist/presentation.html';p.parent.mkdir(exist_ok=True)
p.write_text(out,encoding='utf-8')
print('Created:',p)
