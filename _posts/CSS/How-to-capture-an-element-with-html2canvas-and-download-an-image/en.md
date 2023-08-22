---
title: "How to capture element with html2canvas and download image (React) "
description: "Share how to capture html tags and download images using html2canvas."
coverImage: "/assets/posts/Blog/How-to-generate-sitemap-in-nextjs/cover.png"
date: "2023-08-21T21:00:07.322Z"
author:
  name: Cozy Coding
ogImage:
  url: "/assets/posts/Blog/How-to-generate-sitemap-in-nextjs/cover.png"
tag: sitemap
category: CSS
---

# How to capture an element with html2canvas and download an image

<Image width="846" height="190"  alt="html2canvas image download" src="/assets/posts/CSS/How-to-capture-an-element-with-html2canvas-and-download-an-image/2.gif" />

<GoogleAd/>

html2canvas is a JavaScript library that captures HTML elements from web pages and turns them into images. Here's how to use it to capture and download a specific HTML element as an image.

Import the html2canvas library: First add the html2canvas library to your web page. You can import the library using the `<script>` tag like this: At this time, the path of the library file must be modified according to the web page.

```html
<script src="path/to/html2canvas.min.js"></script>
```

Write a function to capture HTML elements and create an image: Write the JavaScript code as shown below to create a function that captures a specific HTML element and generates it as an image.

```html
<script>
  function captureAndDownload() {
    const targetElement = document.getElementById("target"); //select HTML elements to capture
    html2canvas(targetElement).then((canvas) => {
      const link = document.createElement("a");
      link.download = "captured_image.png"; //Set the image file name to download
      link.href = canvas.toDataURL(); //set canvas image data as download URL
      link.click(); //trigger download by clicking on imaginary link
    });
  }
</script>
```

<GoogleAd/>
## Create a download button

Clicking the button creates a button to download.

Attach a function to a button or event: Create a button for download or attach the function written above to the required event.

```html
<button onclick="captureAndDownload()">Download Image</button>
<div id="target">
  <!--Target HTML element content to capture -->
</div>
```

In the code above, target represents the ID of the target HTML element you want to capture, and the content of that element is captured as an image and downloaded. The function captureAndDownload creates an image after capturing using html2canvas and provides the generated image to the user via a download link.

You can use this code to capture a specific HTML element as an image and download it. However, it may not work depending on the browser's security and CORS policies, so an appropriate response is required depending on the environment in actual use.

### result screen

<Image width="846" height="190"  alt="html2canvas image download" src="/assets/posts/CSS/How-to-capture-an-element-with-html2canvas-and-download-an-image/1.png" />

## React

### Install html2canvas

```bash
npm install html2canvas
```

In the code below, we created a CaptureAndDownload component that has the function of capturing and downloading using html2canvas.

Clicking the button calls the captureAndDownload method to capture and download the image. The target HTML element was assumed to be the element with id "target". When using it in practice, modify it to suit your project.

You can use this component inside another React component.

```jsx
import React from "react";
import html2canvas from "html2canvas";

class CaptureAndDownload extends React.Component {
  captureAndDownload = () => {
    const targetElement = document.getElementById("target"); //select HTML elements to capture
    html2canvas(targetElement).then((canvas) => {
      const link = document.createElement("a");
      link.download = "captured_image.png"; //Set the image file name to download
      link.href = canvas.toDataURL(); //set canvas image data as download URL
      link.click(); //trigger download by clicking on imaginary link
    });
  };

  render() {
    return (
      <div>
        <button onClick={this.captureAndDownload}>Download Image</button>
        <div id="target">{/*HTML element content to capture */}</div>
      </div>
    );
  }
}

export default CaptureAndDownload;
```
