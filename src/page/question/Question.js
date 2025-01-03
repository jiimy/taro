import classNames from "classnames";
import { QuestionType } from "constants/QuestionType";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { questionText } from "redux/question";
import s from "./question.module.scss";
// import search from '../../assets/image/search.svg';
import search from "../../assets/image/05.png";

const Question = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [text, setText] = useState();
  const [spreadType, setSpreadType] = useState();
  const [selectedText, setSelectedText] = useState(QuestionType[0]);

  const onChange = (e) => {
    setText(e.target.value);
  };

  const onEnter = () => {
    if (text) {
      dispatch(questionText(text));
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      onEnter();
    }
  };

  return (
    <div className={s.search_page}>
      <section>
        <div className={s.input}>
          <input
            type="text"
            value={text || ""}
            onChange={onChange}
            placeholder="질문 입력"
            onKeyDown={handleKeyDown}
          />
          <div>
            <button
              onClick={() => {
                onEnter();
              }}
              className={s.question}
            ></button>
          </div>
        </div>
        <button
          className={s.not_question}
          onClick={() => {
            dispatch(questionText("-1"));
          }}
        >
          질문하지 않기
        </button>
        <div className={s.quick_q}>빠른 질문</div>
        <div className={s.tag}>
          {QuestionType.map((item) => (
            <span
              key={item.text}
              onClick={() => setSelectedText(item)}
              className={classNames("", {
                [s.selected]: selectedText.text === item.text,
              })}
            >
              {item.text}
            </span>
          ))}
        </div>
        <ul>
          {selectedText.subText &&
            Object.entries(selectedText.subText).map(([key, value]) => (
              <li
                key={key}
                onClick={() => {
                  setText(key);
                }}
              >
                {key} - 선택카드 {value?.length}장
              </li>
            ))}
        </ul>
      </section>
    </div>
  );
};

export default Question;
