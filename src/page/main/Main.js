import React from "react";

const Main = () => {
  return (
    <div>
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
          <p>
            <span>질문 예시</span>
            - 오늘 주의해야 할 점은? <br />- 내일 있을 일을 잘 해내려면 어떻게
            해야 할까?
          </p>
        </dd>
        <dt>
          <strong>쓰리 카드</strong>
        </dt>
        <dd>
          <p>
            세 장의 카드를 선택합니다. <br />과거/원인/YES, 현재/결과/보류, 가까운 미래/조언/No 의 의미를 나타냅니다. 
          </p>
          <p>
            <span>질문 예시</span>
            - 오늘 주의해야 할 점은? <br />- 내일 있을 일을 잘 해내려면 어떻게
            해야 할까?
          </p>
        </dd>
      </dl>
      <div>
        <strong>스프레드란?</strong>
      </div>
    </div>
  );
};

export default Main;
