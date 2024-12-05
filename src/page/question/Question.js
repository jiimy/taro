import React, { useState } from "react";

const Question = () => {
  const [text, setText] = useState();

  const onChange = (e) => {
    setText(e.target.value);
  };
  return (
    <div className="main-page">
      <div className="input">
        <input type="text" text={text} onChange={onChange} />
        <button>아이콘</button>
      </div>
      {/* 태그를 나열해서 태그 선택시 예시 질문 나열해주고, 클릭시 그 지문으로 질문하게 */}
      <div>
        <span>연애</span>
        <span>사업</span>
        <span>진로</span>
      </div>
      <ul>
        <li></li>
      </ul>
    </div>
  );
};

export default Question;
