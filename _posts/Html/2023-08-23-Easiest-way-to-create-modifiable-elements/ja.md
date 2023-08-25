---
title: 変更された要素を作成する最も簡単な方法
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

:::tip
簡単な方法で、変更できる要素を作成できます。
:::

変更された入力を作成するには、以下に示すようにボタンをクリックするときに入力を公開することで生成できます。

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

上のビデオに示すようにボタンをクリックすると、入力要素とボタン要素を公開して変更し、ボタンをクリックしてテキストを変更できます。

しかし、HTML の非常に良い属性を使用すると、これらの不要なコードは必要ありません。

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

`contenteditable = {true}`の属性を置くと、テキストをクリックして、変更できる要素として適用できます。

1 つのプロパティのみを使用することは非常に短く、使いやすさは非常に短いです。

## 用途

この変更された要因は、TODO またはカードレイアウトのコンテンツを簡単に変更できるため、変更された入力変更カードを使用するときに使用できます。
