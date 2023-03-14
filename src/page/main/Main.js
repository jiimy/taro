import React from "react";
import "./main.scss";

const Main = () => {
  return (
    <div className="main-page">
      <h2>메뉴 설명</h2>
      <dl>
        <dt>
          <strong>원 오라클</strong>
        </dt>
        <dd>
          <p>
            한장의 카드만 선택합니다. 간단명료한 답을 얻고 싶을때 적절한
            방법입니다.
          </p>
          <div className="example">
            <span>질문 예시</span>
            <ul>
              <li>- 오늘 주의해야 할 점은?</li>
              <li>- 내일 있을 일을 잘 해내려면 어떻게 해야 할까?</li>
            </ul>
          </div>
        </dd>
      </dl>
      <dl>
        <dt>
          <strong>쓰리 카드</strong>
        </dt>
        <dd>
          <p>
            세 장의 카드를 선택합니다. <br />
            과거/원인/YES, 현재/결과/보류, 가까운 미래/조언/No 의 의미를
            나타냅니다.
          </p>
          <div className="example">
            <span>질문 예시</span>
            <ul>
              <li>22</li>
              <li>111</li>
            </ul>
          </div>
        </dd>
      </dl>
      <h2>용어 설명</h2>
      <dl>
        <dt>
          <strong>스프레드란?</strong>
        </dt>
        <dd>
          <p>선택하는 카드 갯수와 카드 배치에 따라 해석하는 방법의 종류</p>
          {/*
          <div className="example">
            <span>배치 종류</span>
            <ul>
              <li>원 오라클</li>
              <li>쓰리카드</li>
            </ul>
          </div>
          */}
        </dd>
      </dl>
    </div>
  );
};

export default Main;
