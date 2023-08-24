---
title: Easiest way to create modifiable elements
description:
coverImage: "/assets/posts/Html/2023-08-23-Easiest-way-to-create-modifiable-elements/cover.png"
date: 2023-08-23 14:43
author:
  name: Cozy Coding
ogImage:
  url: "/assets/posts/Html/2023-08-23-Easiest-way-to-create-modifiable-elements/cover.png"
tag: contenteditable
category: Html
---

# Easiest way to create modifiable elements

:::tip
You can create modifiable elements in a simple way.
:::

To create an existing editable input, you can create it in a way that exposes the input when a button is clicked as shown below.

<GoogleAd/>

```tsx
import React, { useRef, useState } from "react";
import style from "./style.module.scss";

const EditableInput = () => {
  const [showInput, setShowInput] = useState(false);
  const [value, setValue] = useState("this is editable content");
  return (
    <div>
      {!showInput && (
        <button type="button" onClick={() => setShowInput(true)} className={style.btn}>
          {value}
        </button>
      )}
      {showInput && (
        <>
          <input type="text" id="text" defaultValue={value} className={style.input} onChange={(e) => setValue(e.target.value)}></input>
          <button type="button" onClick={() => setShowInput(false)}>
            ok
          </button>
        </>
      )}
    </div>
  );
};

export default EditableInput;
```

<Image width="1515" height="771"  alt="" src="/assets/posts/Html/2023-08-23-Easiest-way-to-create-modifiable-elements/1.gif" />

As shown in the video above, when the button is clicked, the input element and button element are exposed and modified, and when the button is clicked, the text is modified.

However, if you use the very good properties of html, you don't need these unnecessary codes.

## ContentEditable

```tsx
import React, { useState } from "react";
import style from "./style.module.scss";

const EditableInput = () => {
  return (
    <div contentEditable={true} className={style.text}>
      this is editable content
    </div>
  );
};

export default EditableInput;
```

<GoogleAd/>

<Image width="1515" height="771"  alt="" src="/assets/posts/Html/2023-08-23-Easiest-way-to-create-modifiable-elements/2.gif" />

<GoogleAd/>

By adding the `contentEditable={true}` attribute, you can apply the text as an editable element by clicking on it.

The number of codes has been shortened by using only one property, and the usability has also been shortened.

## uses

Since these editable elements are easy to edit content in a TODO or card-type layout, it would be nice to use them when working with editable inputs and editable cards.
