import React, { useEffect, useState } from "react";
import s from "./question.module.scss";
import { QuestionType } from "constants/QuestionType";
import { useDispatch } from "react-redux";
import { questionText } from "redux/question";
import { useNavigate } from "react-router-dom";

const Question = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [text, setText] = useState();
  const [selectedText, setSelectedText] = useState();

  const onChange = (e) => {
    setText(e.target.value);
  };

  const onEnter = () => {
    if (text) {
      dispatch(questionText(text));
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
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
          <button onClick={onEnter}>아이콘</button>
        </div>
        <div className={s.quick_q}>빠른 질문</div>
        <div className={s.tag}>
          {QuestionType.map((item, index) => (
            <span key={index} onClick={() => setSelectedText(item.text)}>
              {item.text}
            </span>
          ))}
        </div>
        <ul>
          {QuestionType.find((item) => item.text === selectedText)?.subText.map(
            (subItem, index) => (
              <li key={index} onClick={() => setText(subItem)}>
                {subItem}
              </li>
            )
          )}
        </ul>
      </section>
    </div>
  );
};

export default Question;
