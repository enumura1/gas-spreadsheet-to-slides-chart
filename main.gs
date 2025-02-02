function createBarChartInSlides() {
  // スプレッドシートとスライドのIDを指定
  const spreadsheetId = 'あなたのスプレッドシートID';
  const presentationId = 'あなたのプレゼンテーションID';
  
  // スプレッドシートからデータを取得
  const sheet = SpreadsheetApp.openById(spreadsheetId).getActiveSheet();
  const dataRange = sheet.getRange('A1:B5');
  
  // スプレッドシート内にグラフを作成
  const chartBuilder = sheet.newChart()
    .setChartType(Charts.ChartType.COLUMN)
    .addRange(dataRange)
    .setPosition(5, 5, 0, 0)
    .setOption('title', '2023年度 四半期別売上実績')
    .setOption('width', 600)
    .setOption('height', 400)
    .setOption('legend', {position: 'none'})
    .setOption('vAxis', {
      title: '売上（百万円）',
      format: '#,###'
    })
    .setOption('colors', ['#4472C4']);
    
  // グラフをスプレッドシートに配置
  const chart = chartBuilder.build();
  sheet.insertChart(chart);
  
  // スライドを取得
  const presentation = SlidesApp.openById(presentationId);
  const slide = presentation.getSlides()[0];
  
  // スプレッドシートのグラフをスライドにコピー
  const chartInSlide = slide.insertSheetsChart(chart)
    .setLeft(50)
    .setTop(50)
    .setWidth(600)
    .setHeight(400);
    
  // スプレッドシートの一時的なグラフを削除（オプション）
  sheet.getCharts().forEach(chart => sheet.removeChart(chart));
}
