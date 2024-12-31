import React, { useEffect, useState } from "react";
import s from "./question.module.scss";
import { QuestionType } from "constants/QuestionType";
import { useDispatch } from "react-redux";
import { questionText, questionType } from "redux/question";
import { useNavigate } from "react-router-dom";
import classNames from "classnames";

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
            value={text}
            onChange={onChange}
            placeholder="질문 입력"
            onKeyDown={handleKeyDown}
          />
          <div>
            <button
              onClick={() => {
                onEnter();
                dispatch(questionType(spreadType));
              }}
              className="question"
            >
              아이콘
            </button>
            <button
              className="not-question"
              onClick={() => {
                dispatch(questionText("-1"));
              }}
            >
              질문하지 않기
            </button>
          </div>
        </div>
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
                  setSpreadType(value);
                }}
              >
                {key} - 선택카드 {value}장
              </li>
            ))}
        </ul>
      </section>
    </div>
  );
};

export default Question;
