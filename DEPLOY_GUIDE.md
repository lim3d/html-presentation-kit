# GitHub Pages 배포 및 검수

- 저장소: https://github.com/lim3d/html-presentation-kit
- GitHub Pages: https://lim3d.github.io/html-presentation-kit/
- 설정: Settings → Pages → Deploy from a branch → `main` / `/(root)`
- 정본: `src/template.html`
- Pages 페이지: `index.html`

## 업데이트

1. `src/template.html`의 HTML 코드 변경
2. `python build.py` 실행 (index.html, dist/presentation.html 동기화)
3. 변경된 파일 Git commit/push
4. GitHub Actions의 `pages build and deployment` 성공 확인
5. Pages URL에서 편집, 발표자, 청중 창, 슬라이드 PDF 기능 검수

**경고:** 저장소가 Public이므로 사업보고서·고객자료·사내자료는 공개 배포 금지.
