---
title: 수정가능한 요소를 만드는 가장 쉬운 방법(contenteditable)
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

# 수정가능한 요소를 만드는 가장 쉬운 방법(contenteditable)

:::tip
간단한 방법으로 수정가능한 요소를 만들 수 있습니다.
:::

기존에 수정가능한 인풋을 제작하려면 아래와 같이 button 클릭시 인풋을 노출하는 방식으로 제작할 수 있습니다.

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

위 영상처럼 버튼을 클릭하면 input요소와 button요소를 노출시켜서 수정하고 버튼을 클릭하면 텍스트를 수정해주는 방식으로 적용할 수 있습니다.

하지만 html의 아주 좋은 속성을 이용하면 이런 불필요한 코드들이 필요가 없는데요.

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

`contentEditable={true}`라는 속성만 넣어주면 텍스트를 클릭해서 수정할 수 있는 요소로 적용할 수 있습니다.

속성 하나만 사용했다고 해서 코드 수도 굉장히 짧아졌고, 사용성도 굉장히 짧아졌네요..

## 활용

이런 수정가능한 요소는 TODO나 카드 형태의 레이아웃에서 내용을 간편하게 수정할 때 용이하기 때문에 수정가능한 인풋 수정가능한 카드를 작업할 때 사용하시면 좋을 것 같습니다.
