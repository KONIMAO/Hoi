// pages/Janken.jsx
import {useState} from "react";
import { ActionButton } from "../components/ActionButton";

export const Janken = () => {
    const [jankenResult, setJankenResult] = useState({
        myHand: "入力待ち",
        comHand: "待機中",
        result: "未対戦",
    });

// 履歴を保存するためのstateを作成、初期値は空配列
const[history, setHistory] = useState([]);

const getJankenResult =(myHand) =>{
    const hand =["グー","チョキ","パー"];
    const myIndex =hand.indexOf(myHand);// 文字列の検索をしていて、配列の何番目なのかを数字として表示している
    const comIndex = Math.floor(Math.random()*3);
    const resultSheet =[
        ["Draw", "Win", "Lose"],
        ["Lose", "Draw", "Win"],
        ["Win", "Lose", "Draw"],
    ];
  return {
    // 以下、連想配列 (ex){"apple":100, "orange":80,"lemon":60};　＝オブジェクト
    myHand: myHand,
    comHand: hand[comIndex],
    result: resultSheet[myIndex][comIndex], // 何配列名の、何番目かを出している
  };
};
const getJanken = (myHand) => {
    const result = getJankenResult(myHand);
    setJankenResult(result);
    setHistory([result, ...history]);
  };
  return (
    <>
      <p>じゃんけんの画面</p>
      <ActionButton text="グー" action={() => getJanken("グー")} />
      <ActionButton text="チョキ" action={() => getJanken("チョキ")} />
      <ActionButton text="パー" action={() => getJanken("パー")} />
      {/* 🔽 タグ内は文字列のみ使用できるのでJSON形式に変換して動作確認 */}
      <p>自分の手：{jankenResult.myHand}</p>
      <p>相手の手：{jankenResult.comHand}</p>
      <p>結果：{jankenResult.result}</p>
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

