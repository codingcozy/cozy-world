---
title: "html2canvas로 요소 캡처해서 이미지 다운로드 받는 방법 (React) "
description: "html2canvas를 이용해서 html 태그를 캡처하고 이미지를 다운로드 받는 방법에 대해서 공유합니다. "
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

html2canvas는 JavaScript 라이브러리로, 웹 페이지의 HTML 요소를 캡처하여 이미지로 만들어 줍니다. 이를 사용하여 특정 HTML 요소를 이미지로 캡처하고 다운로드 받는 방법은 다음과 같습니다.

html2canvas 라이브러리 가져오기: 먼저 html2canvas 라이브러리를 웹 페이지에 추가합니다. 다음과 같이 `<script>` 태그를 사용하여 라이브러리를 가져올 수 있습니다. 이때, 라이브러리 파일의 경로는 웹 페이지에 맞게 수정해야 합니다.

```html
<script src="path/to/html2canvas.min.js"></script>
```

HTML 요소 캡처 및 이미지 생성 함수 작성: 아래와 같이 JavaScript 코드를 작성하여 특정 HTML 요소를 캡처하고 이미지로 생성하는 함수를 만듭니다.

```html
<script>
  function captureAndDownload() {
    const targetElement = document.getElementById("target"); // 캡처할 HTML 요소 선택
    html2canvas(targetElement).then((canvas) => {
      const link = document.createElement("a");
      link.download = "captured_image.png"; // 다운로드할 이미지 파일명 설정
      link.href = canvas.toDataURL(); // 캔버스 이미지 데이터를 다운로드 URL로 설정
      link.click(); // 가상의 링크 클릭하여 다운로드 트리거
    });
  }
</script>
```

<GoogleAd/>

## 다운로드 버튼 제작

버튼을 클릭하면 다운로드를 하기위해 버튼을 만들어줍니다.

버튼 또는 이벤트에 함수 연결: 다운로드를 위한 버튼을 만들거나 필요한 이벤트에 위에서 작성한 함수를 연결합니다.

```html
<button onclick="captureAndDownload()">이미지 다운로드</button>
<div id="target">
  <!-- 캡처할 대상 HTML 요소 내용 -->
</div>
```

위 코드에서 target는 캡처하려는 대상 HTML 요소의 ID를 나타내며, 해당 요소 내용을 이미지로 캡처하여 다운로드합니다. 함수 captureAndDownload는 html2canvas을 사용하여 캡처한 후 이미지를 생성하고, 생성된 이미지를 다운로드 링크를 통해 사용자에게 제공합니다.

이 코드를 사용하여 특정 HTML 요소를 이미지로 캡처하고 다운로드 받을 수 있습니다. 근데, 브라우저의 보안 및 CORS 정책 등에 따라 작동하지 않을 수도 있으므로 실제 사용 시에는 환경에 따라 적절한 대응이 필요합니다.

### 결과 화면

<Image width="846" height="190"  alt="html2canvas image download" src="/assets/posts/CSS/How-to-capture-an-element-with-html2canvas-and-download-an-image/1.png" />

## React

### html2canvas 설치

```bash
npm install html2canvas
```

아래 코드에서는 html2canvas를 이용해 캡처하고 다운로드하는 기능을 가진 CaptureAndDownload 컴포넌트를 만들었습니다.

버튼을 클릭하면 captureAndDownload 메서드가 호출되어 이미지를 캡처하고 다운로드하게 됩니다. 대상 HTML 요소는 id가 "target"인 요소로 가정했습니다. 실제로 사용할 때는 이를 프로젝트에 맞게 수정하세요.

이 컴포넌트를 다른 리액트 컴포넌트 내부에서 사용하면 됩니다.

```jsx
import React from "react";
import html2canvas from "html2canvas";

class CaptureAndDownload extends React.Component {
  captureAndDownload = () => {
    const targetElement = document.getElementById("target"); // 캡처할 HTML 요소 선택
    html2canvas(targetElement).then((canvas) => {
      const link = document.createElement("a");
      link.download = "captured_image.png"; // 다운로드할 이미지 파일명 설정
      link.href = canvas.toDataURL(); // 캔버스 이미지 데이터를 다운로드 URL로 설정
      link.click(); // 가상의 링크 클릭하여 다운로드 트리거
    });
  };

  render() {
    return (
      <div>
        <button onClick={this.captureAndDownload}>이미지 다운로드</button>
        <div id="target">{/* 캡처할 대상 HTML 요소 내용 */}</div>
      </div>
    );
  }
}

export default CaptureAndDownload;
```
