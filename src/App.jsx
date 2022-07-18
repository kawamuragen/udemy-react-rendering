import { useState, useCallback, useMemo } from "react";
import { ChildArea } from "./ChildArea";
import "./styles.css";

export const App = () => {
  console.log("App");
  const [text, setText] = useState("");
  const [open, setOpen] = useState(false);

  const onChangeText = (e) => setText(e.target.value);

  const onClickOpen = () => setOpen(!open);

  // 処理が変わらない限りは同じ処理をしてあげる必要あり
  // 第二引数は見張る値。今回は空配列か、setOpenを書く
  const onClickClose = useCallback(() => setOpen(false), [setOpen]);

  // そこまで使うことはないが、計算が複雑なときはレンダリングを軽くするために書く。
  const temp = useMemo(() => 1 + 3, []);
  console.log(temp);

  return (
    <div className="App">
      <input value={text} onChange={onChangeText} />
      <br />
      <br />
      <button onClick={onClickOpen}>表示</button>
      <ChildArea open={open} onClickClose={onClickClose} />
    </div>
  );
};
