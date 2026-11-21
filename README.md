# HTML Presentation Kit

**공통 발표 엔진 + 프로젝트별 자유 디자인**을 분리한 재사용형 HTML 발표 템플릿.

- GitHub Pages 공개 데모: https://lim3d.github.io/html-presentation-kit/
- 기능: 16:9, 키보드 이동, 전체화면(F), 전체보기(O), 발표자 노트(N), PDF 인쇄
- Chrome/Edge에서 `index.html` 또는 `dist/presentation.html` 실행
- 외부 라이브러리 없이 단일 HTML로 동작

## 폴더 구조

- `AI_GUIDE.md` — AI 공통 작성 규칙
- `PROJECT_BRIEF.md` — 발표별 요구사항 입력
- `slides.html` — 예제 슬라이드 HTML; 새 프로젝트마다 교체
- `src/theme.css` — 프로젝트별 디자인; 기관 양식 우선
- `src/engine.js` — 공통 발표 기능
- `src/template.html` — HTML 빌드 틀
- `build.py` — 오프라인 단일 HTML 생성
- `dist/presentation.html` — 오프라인 발표용 완성 파일
- `index.html` — GitHub Pages 공개 데모

## 사용
1. 발표별로 `PROJECT_BRIEF.md` 작성
2. 첨부된 기관 디자인이나 발표 주제를 기준으로 `src/theme.css`와 `slides.html` 편집
3. `python build.py` 실행
4. `dist/presentation.html`을 발표에 사용
5. 공개 데모 갱신 시 동일 내용으로 `index.html` 교체

## PDF 출력
Chrome에서 PDF 버튼 또는 Ctrl+P → PDF로 저장, 여백 없음, 배경 그래픽 인쇄, 머리글/바닥글 해제.

**주의:** Pages에 올라간 파일은 공개된다. 실제 사업 증빙·고객자료·비공개 발표자료를 이 공개 저장소에 넣지 않는다.
