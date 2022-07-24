// pages/Hoi.jsx
import {useState} from "react";
import { ActionButton } from "../components/ActionButton";

export const Hoi = () => {
    const [hoiResult, setHoiResult] = useState({
        myHand: "入力待ち",
        comHand: "待機中",
        result: "未対戦",
    });

// 履歴を保存するためのstateを作成、初期値は空配列
const[history, setHistory] = useState([]);

const getHoiResult =(myHand) =>{
    const hand =["上","左","右","下"];
    const myIndex =hand.indexOf(myHand);// 文字列の検索をしていて、配列の何番目なのかを数字として表示している
    const comIndex = Math.floor(Math.random()*4);
    const resultSheet =[
        ["Win", "Lose", "Lose", "Lose"],
        ["Lose", "Win", "Lose", "Lose"],
        ["Lose", "Lose", "Win", "Lose"],
        ["Lose", "Lose", "Lose", "Win"],
    ];
  return {
    // 以下、連想配列 (ex){"apple":100, "orange":80,"lemon":60};　＝オブジェクト
    myHand: myHand,
    comHand: hand[comIndex],
    result: resultSheet[myIndex][comIndex], // 何配列名の、何番目かを出している
  };
};
const getHoi = (myHand) => {
    const result = getHoiResult(myHand);
    setHoiResult(result);
    setHistory([result, ...history]);
  };
  return (
    <>
      <p>じゃんけんの画面</p>
      <ActionButton text="上" action={() => getHoi("上")} />
      <ActionButton text="左" action={() => getHoi("左")} />
      <ActionButton text="右" action={() => getHoi("右")} />
      <ActionButton text="下" action={() => getHoi("下")} />
      {/* 🔽 タグ内は文字列のみ使用できるのでJSON形式に変換して動作確認 */}
      <p>自分の手：{hoiResult.myHand}</p>
      <p>相手の手：{hoiResult.comHand}</p>
      <p>結果：{hoiResult.result}</p>
      <p>■履歴■</p>
      <table>
        <thead>
          <tr>
            <th>自分の手</th>
            <th>相手の手</th>
            <th>結果</th>
          </tr>
        </thead>
        <tbody>
          {/* 🔽 履歴の配列から要素を生成して表示する */}
          {history.map((x, i) => (
            <tr key={i}>
              <td>{x.myHand}</td>
              <td>{x.comHand}</td>
              <td>{x.result}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

