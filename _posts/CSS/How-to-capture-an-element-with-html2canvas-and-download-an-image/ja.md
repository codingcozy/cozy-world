---
title: "html2canvasで要素をキャプチャして画像をダウンロードする方法（反応）"
description: "HTMLタグをキャプチャし、HTML2Canvasを使用して画像をダウンロードする方法を共有します。"
coverImage: "/assets/posts/Blog/How-to-generate-sitemap-in-nextjs/cover.png"
date: "2023-08-21T21:00:07.322Z"
author:
  name: Cozy Coding
ogImage:
  url: "/assets/posts/Blog/How-to-generate-sitemap-in-nextjs/cover.png"
tag: html2canvas
category: CSS
---

<Image width="846" height="190"  alt="html2canvas image download" src="/assets/posts/CSS/How-to-capture-an-element-with-html2canvas-and-download-an-image/2.gif" />

<GoogleAd/>

HTML2Canvas は、Web ページの HTML 要素をキャプチャし、それらを画像に変える JavaScript ライブラリです。これを使用して、特定の HTML 要素を画像としてキャプチャおよびダウンロードする方法を次に示します。

HTML2Canvas ライブラリをインポート：最初に HTML2Canvas ライブラリを Web ページに追加します。このような `<script> `タグを使用してライブラリをインポートできます。現時点では、ライブラリファイルのパスは Web ページに従って変更する必要があります。

```html
<script src="path/to/html2canvas.min.js"></script>
```

HTML 要素をキャプチャして画像を作成する関数を記述します。以下に示すように JavaScript コードを作成して、特定の HTML 要素をキャプチャして画像として生成する関数を作成します。

```html
<script>
  function captureAndDownload() {
    const targetElement = document.getElementById("target"); //キャプチャするHTML要素を選択します
    html2canvas(targetElement).then((canvas) => {
      const link = document.createElement("a");
      link.download = "captured_image.png"; //画像ファイル名をダウンロードして設定します
      link.href = canvas.toDataURL(); //キャンバス画像データをダウンロードURLとして設定します
      link.click(); //想像上のリンクをクリックしてダウンロードをトリガーします
    });
  }
</script>
```

<GoogleAd/>

## ダウンロードボタンを作成します

ボタンをクリックすると、ダウンロードするボタンが作成されます。

関数をボタンまたはイベントに添付します。ダウンロードするボタンを作成するか、上記の関数を必要なイベントに添付します。

```html
<button onclick="captureAndDownload()">Download Image</button>
<div id="target">
  <!--キャプチャするターゲットHTML要素コンテンツ -->
</div>
```

上記のコードでは、ターゲットはキャプチャするターゲット HTML 要素の ID を表し、その要素のコンテンツは画像としてキャプチャされてダウンロードされます。関数 CaptureAndDownload は、HTML2Canvas を使用してキャプチャした後に画像を作成し、ダウンロードリンクを介して生成された画像をユーザーに提供します。

このコードを使用して、特定の HTML 要素を画像としてキャプチャしてダウンロードできます。ただし、ブラウザのセキュリティと CORS ポリシーに応じて機能しない場合があるため、実際の使用における環境に応じて適切な応答が必要です。

### 結果画面

<Image width="846" height="190"  alt="html2canvas image download" src="/assets/posts/CSS/How-to-capture-an-element-with-html2canvas-and-download-an-image/1.png" />

## React

### html2canvas をインストールします

```bash
npm install html2canvas
```

以下のコードでは、html2canvas を使用してキャプチャとダウンロードの機能を持つ Captureanddownload コンポーネントを作成しました。

ボタンをクリックすると、CaptureAndDownLoad メソッドを呼び出して画像をキャプチャしてダウンロードします。ターゲット HTML 要素は、ID「ターゲット」を持つ要素であると想定されていました。実際に使用する場合は、プロジェクトに合わせて変更してください。

このコンポーネントを別の React コンポーネント内で使用できます。

```jsx
import React from "react";
import html2canvas from "html2canvas";

class CaptureAndDownload extends React.Component {
  captureAndDownload = () => {
    const targetElement = document.getElementById("target"); //キャプチャするHTML要素を選択します
    html2canvas(targetElement).then((canvas) => {
      const link = document.createElement("a");
      link.download = "captured_image.png"; //画像ファイル名をダウンロードして設定します
      link.href = canvas.toDataURL(); //キャンバス画像データをダウンロードURLとして設定します
      link.click(); //想像上のリンクをクリックしてダウンロードをトリガーします
    });
  };

  render() {
    return (
      <div>
        <button onClick={this.captureAndDownload}>画像をダウンロードします</button>
        <div id="target">{/* HTML要素コンテンツをキャプチャする */}</div>
      </div>
    );
  }
}

export default CaptureAndDownload;
```
