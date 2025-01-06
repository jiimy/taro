import React, { useEffect, useState } from "react";
import "./main.scss";
import Question from "page/question/Question";
import { useSelector } from "react-redux";

const Main = () => {
  const [view, setView] = useState();
  const qstn = useSelector((state) => state.question.value);

  useEffect(() => {
    setView(qstn.questionState);
  }, [qstn]);

  if (view) {
    return (
      <>
        {view === true && (
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
                    <li>- 현재 당신의 운세는?</li>
                    <li>- 새로운 일을 제안받았다. 어떻게 답해야 할까?</li>
                    <li>- 친구와 싸웠다. 화해하려면 어떻게 해야 할까?</li>
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
                <p>
                  선택하는 카드 갯수와 카드 배치에 따라 해석하는 방법의 종류
                </p>
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
            <h2>제작자의 말</h2>
            <dl>
              <dt>
                <strong>카드를 선택하기 전</strong>
              </dt>
              <dd>
                <p>
                  타로 카드는 점성술이나 사주와는 달리 매번 뽑는 카드가
                  달라집니다. 그래서 정해져있는 규칙이 없어 심리 상담쪽에
                  가깝습니다. <br />
                  타로의 풀이결과가 안좋게 나오더라도 너무 감정이입하지 마시고,
                  풀이를 보고 마음을 정리할 수 있는 기회가 됬으면 합니다. <br />
                  또한, 정방향이어도 좋은 의미가 아닐수도있고, 역방향이라도
                  나쁜의미가 아닐 수 있습니다.
                </p>
              </dd>
              <dt>
                <strong>카드 질문</strong>
              </dt>
              <dd>
                <p>
                  위에서 기술했다시피 카드의 풀이는 정해진 운명이 아닙니다.{" "}
                  <br />
                  운명을 향해 노력하지 않고 흘러가는대로 행동하는 것보다는
                  마음의 힘을 얻고 결과가 나온것을 바탕으로 (긍정적인 결과라면
                  그 결과를 만들기 위한 행동, 부정적인 결과라면 결과가 나오지
                  않게 자기회고 및 행동을 고치는것 )자신의 행동을 만드는것이
                  좋습니다.
                </p>
              </dd>
              <dt>
                <strong>카드 해석 풀이</strong>
              </dt>
              <dd>
                <p>
                  구술로 풀어내는 의미해석에 익숙하지 않아 키워드로만 1차적으로
                  정의를 내립니다. 점차적으로 풀이가 더 부드러워지고
                  자연스러워질 예정입니다.
                </p>
              </dd>
              <dt>
                <strong>업데이트 에정</strong>
              </dt>
              <dd>
                <p>- 해설 풀이 키워드가 아닌 서술형으로 바꿔주기</p>
                <p>- 카드 배치 띄워주기</p>
                <p>- 질문지 작성하기</p>
              </dd>
            </dl>
          </div>
        )}
      </>
    );
  } else {
    return <>{view === false && <Question />}</>;
  }
};

export default Main;
