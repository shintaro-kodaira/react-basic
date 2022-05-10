import React, { useEffect, useState } from "react";
import ColorfulMessage from "./components/ColorfulMessage";
// import { ColorfulMessage } from "./components/ColorfulMessage";

// JSの中でリターンしてHTMLのタグを書くのをJSX
// {}はJS
// onClick -> キャメルケースで記載
// コンポーネント名はパスカルケース(App〇, app×)
// 外の{}はJS、内側はJSのオブジェクト
// CSSだとfont-sizeだけど、ReactだとfontSizeとキャメルケース
// useStateでstatusが変った場合とpropsの中身が変った場合再レンダリング
const App = () => {
  console.log("さいしょ");
  // 初期化, setNumはstateを更新するメソッド名
  const [num, setNum] = useState(0);
  const [faceShowFlag, setFaceShowFlag] = useState(false);

  const onClickCountUp = () => {
    setNum(num + 1);
  };
  const onClickSwitchShowFlag = () => {
    setFaceShowFlag(!faceShowFlag);
  };

  // useEffectだと必ず通る
  // 空の配列を渡すと最初の一回だけ通るようになる
  useEffect(() => {
    if (num > 0) {
      if (num % 3 === 0) {
        faceShowFlag || setFaceShowFlag(true);
      } else {
        faceShowFlag && setFaceShowFlag(false);
      }
    }
  }, [num]);

  return (
    <>
      <h1 style={{ color: "red" }}>こんにちは！</h1>
      <ColorfulMessage color="blue">お元気ですか？</ColorfulMessage>
      <ColorfulMessage color="pink">元気です！</ColorfulMessage>
      <button onClick={onClickCountUp}>カウントアップ</button>
      <br />
      <button onClick={onClickSwitchShowFlag}>on/off</button>
      <p>{num}</p>
      {faceShowFlag && <p>(^^♪</p>}
    </>
  );
};

// Appを他のファイルから使えるようにする
export default App;
