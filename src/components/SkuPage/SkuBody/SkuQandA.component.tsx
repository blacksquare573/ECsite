import axios from "axios";
import { ChangeEventHandler } from "react";
import { QandA } from "../SkuPage.component";
import "./SkuQandA.styles.css";

type skuQandAProps = {
  goodsId: number;
  QandAList: QandA[];
  setQandAList: React.Dispatch<React.SetStateAction<QandA[]>>;
  orderBy: string;
  setOrderBy: React.Dispatch<React.SetStateAction<string>>;
  questionPageNum: number;
  setQuestionPageNum: React.Dispatch<React.SetStateAction<number>>;
  questionRef: React.RefObject<HTMLInputElement>;
};

const SkuQandA = ({
  goodsId,
  QandAList,
  setQandAList,
  orderBy,
  setOrderBy,
  questionPageNum,
  setQuestionPageNum,
  questionRef,
}: skuQandAProps) => {
  const sortHandler: ChangeEventHandler<HTMLSelectElement> = (event) => {
    console.log(event.target.value);
    setOrderBy(event.target.value);
    setQuestionPageNum(1);
  };

  const pageTotal = QandAList[0]
    ? Math.ceil(QandAList[0].questionCount / 3)
    : 0;

  const pageChangeHandler: (page: number) => void = (page) => {
    setQuestionPageNum(page);
  };

  const addQandA: (goodsId: number) => void = (goodsId) => {
    if (goodsId !== 0 && questionRef.current!.value) {
      let question = questionRef.current!.value;
      console.log(questionRef.current!.value);
      axios
        .post(`http://localhost:8080/QandA`, {
          goodsId: goodsId,
          question: question,
          orderBy: orderBy,
        })
        .then((response) => {
          setQandAList(response.data.data);
        })
        .then(() => alert("送信しました"));
      questionRef.current!.value = "";
    } else {
      alert("質問を入力してください");
    }
  };

  const addLike: (
    goodsId: number,
    questionId: number,
    orderBy: string
  ) => void = (goodsId, questionId) => {
    if (goodsId !== 0) {
      axios
        .post(`http://localhost:8080/QandA/${goodsId}/${questionId}/${orderBy}`)
        .then((response) => {
          setQandAList(response.data.data);
          setQuestionPageNum(1);
        });
    }
  };

  return (
    <div>
      <h2 className="QandA-title">{`商品Q&A`}</h2>
      <div className="QandA-page-and-sort">
        <div className="question-page-change-bar">
          全{QandAList[0] ? QandAList[0].questionCount : 0}件{" "}
          <span>
            {questionPageNum !== 1 && (
              <span
                className="question-page-change-button"
                onClick={(event) => pageChangeHandler(questionPageNum - 1)}
              >
                ＜
              </span>
            )}
            ページ{questionPageNum}/{pageTotal}
            {questionPageNum !== pageTotal && (
              <span
                className="question-page-change-button"
                onClick={(event) => pageChangeHandler(questionPageNum + 1)}
              >
                ＞
              </span>
            )}
          </span>
        </div>
        <div className="sort-button-container">
          <select className="sort-button" onChange={sortHandler}>
            <option value="q_date">新しい順</option>
            <option value="likes">トップ評価</option>
          </select>
        </div>
      </div>

      {QandAList.map((QandA) => {
        return (
          <div key={QandA.questionId} className="question-unit">
            <div className="question-text">Q.{QandA.question}</div>
            <div className="question-date">投稿日 {QandA.qDate}</div>
            <div className="answer-info-container">
              <div className="answer-text">A.{QandA.answer}</div>
              <div className="answer-date">回答日 {QandA.aDate}</div>
              <div className="answer-likes-container">
                <a
                  className="answer-likes"
                  onClick={(event) =>
                    addLike(goodsId, QandA.questionId, orderBy)
                  }
                >
                  参考になった（{QandA.likes}人）
                </a>
              </div>
            </div>
          </div>
        );
      })}

      <div className="QandA-page-and-sort">
        <div className="question-page-change-bar">
          全{QandAList[0] ? QandAList[0].questionCount : 0}件{" "}
          <span>
            {questionPageNum !== 1 && (
              <span
                className="question-page-change-button"
                onClick={(event) => pageChangeHandler(questionPageNum - 1)}
              >
                ＜
              </span>
            )}
            ページ{questionPageNum}/{pageTotal}
            {questionPageNum !== pageTotal && (
              <span
                className="question-page-change-button"
                onClick={(event) => pageChangeHandler(questionPageNum + 1)}
              >
                ＞
              </span>
            )}
          </span>
        </div>
      </div>

      <div className="question-page-caution-container">
        <div className="question-page-rules">
          <p className="rules-title">ご注意ください</p>
          <p>
            ・
            「ニトリ商品Q&A」は、お客様のご質問とニトリの回答を、他のお客様に参考にしていただくためのサービスです。
          </p>
          <p>
            ・
            ニトリが不適切と判断した際、後日投稿を削除する場合がございます。詳細はご利用ガイドのニトリ商品Q&Aについてをご確認ください。
          </p>
        </div>
        <input
          className="input-question"
          ref={questionRef}
          placeholder="不明な点を質問（例：この製品には耐久性がありますか？）"
        ></input>
        <div className="question-post-area">
          <button className="post-button" onClick={() => addQandA(goodsId)}>
            質問を投稿
          </button>
        </div>
      </div>
    </div>
  );
};
export default SkuQandA;
