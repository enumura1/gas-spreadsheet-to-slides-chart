# Google Spreadsheet to Slides Chart Automation

このリポジトリには、Google Apps Script (GAS) を使用して、Google スプレッドシートのデータからGoogle スライドに棒グラフを自動生成するサンプルスクリプトが含まれています。


▼ 棒グラフイメージ

![image](https://github.com/user-attachments/assets/e42d35e5-07ab-4675-8a68-451098e4c108)


## 機能

- スプレッドシートのデータを基に棒グラフを自動生成
- グラフをGoogle スライドに自動挿入
- グラフのサイズ、位置、スタイルのカスタマイズ

## 使用方法

1. Google スプレッドシートを開き、以下の形式でデータを入力します

```
A1: 四半期        B1: 売上（百万円）
A2: Q1           B2: 75
A3: Q2           B3: 58
A4: Q3           B4: 92
A5: Q4           B5: 66
```

2. スクリプトエディタを開きます（ツール > スクリプトエディタ）

3. `main.gs` の内容をスクリプトエディタにコピーします

4. 以下の変数を適切な値に更新します：
   - `spreadsheetId`: データが含まれるスプレッドシートのID
   - `presentationId`: グラフを挿入したいスライドのID

5. スクリプトを実行します

## スクリプトのカスタマイズ

グラフの見た目は以下のオプションで調整可能です。

```javascript
.setOption('title', 'グラフタイトル')
.setOption('width', 幅)
.setOption('height', 高さ)
.setOption('legend', {position: 'none'})
.setOption('colors', ['#色コード'])
```

## ライセンス

[MIT License](./LICENSE)
