// assets/js/app.js

// 1) CSV 파일 경로
const DATA_URL = './assets/data/ice_cream_sales_data.csv';

// 2) 모델 성능·예측 결과 (실제 결과로 대체하세요)
const MODEL_RESULTS = {
  bestModel: 'RandomForest',
  cvScores: {
    'SVM': 0.65,
    'KNN': 0.60,
    'RandomForest': 0.78
  },
  cvStds: {
    'SVM': 0.04,
    'KNN': 0.05,
    'RandomForest': 0.03
  },
  modelErrors: {
    'SVM': [10, 15, 12, 20, 18],
    'KNN': [12, 18, 13, 22, 20],
    'RandomForest': [8, 10, 7, 12, 9]
  },
  actual: [100, 150, 200, 180, 220, 260],
  predicted: [95, 155, 190, 185, 210, 270],
  testDates: ['2023-01', '2023-02', '2023-03', '2023-04', '2023-05', '2023-06']
};

// 3) CSV 파싱 후 차트 그
