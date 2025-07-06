# icecream-forecast

아이스크림 판매량 예측 시각화
프로젝트 구조
icecream-forecast/
├─ index.html
├─ assets/
│  ├─ css/
│  │  └─ style.css
│  ├─ js/
│  │  └─ app.js
│  └─ data/
│     └─ ice_cream_sales_data.csv
└─ README.md
설명
이 프로젝트는 2019년부터 2023년까지 월별 아이스크림 판매량 데이터를 시각화하는 웹 기반 대시보드입니다. CSV 파일을 파싱하여 다양한 차트를 그리며, 온도와 판매량 관계, 월별 추이, 모델별 성능 비교, 실제 vs 예측 결과 등을 한눈에 확인할 수 있습니다.

사전 준비
최신 웹 브라우저(Chrome, Firefox 등)

로컬 웹 서버 (VSCode Live Server, Python http.server 등)

실행 방법
저장소를 클론합니다.

bash
git clone https://github.com/USERNAME/icecream-forecast.git
cd icecream-forecast
로컬 웹 서버를 실행합니다.

VSCode Live Server 확장 활용

또는 Python 간단 서버:

bash
python -m http.server 8000
브라우저에서 다음 주소에 접속합니다.

http://localhost:8000
GitHub Pages 배포
저장소의 GitHub Pages 설정에서 브랜치를 main 또는 gh-pages 로 지정합니다.

index.html 및 assets/ 폴더가 루트에 위치해야 정상 동작합니다.

배포 후 제공된 URL로 접속하여 차트를 확인합니다.

데이터 갱신
CSV 파일(assets/data/ice_cream_sales_data.csv)을 교체하면 차트가 자동으로 업데이트됩니다.

데이터 포맷(헤더, 컬럼 순서 등)이 변경되지 않도록 주의하세요.

차트 설정
Chart.js 옵션은 assets/js/app.js의 각 차트 함수에서 조정 가능합니다.

스타일 변경은 assets/css/style.css에서 수정합니다.
