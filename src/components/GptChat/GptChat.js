// NOTE:
// 예시) { 이 사람을 계속 만나도 될까요? } 에 대한 타로카드로 { 1번카드 역방향, 8번카드 정방향, 15번카드 역방향 } 이 나왔어 { 과거 현재 미래 } 기준으로 총정리만 300자 이내로 말해줘

// 위 기준 70토큰 0.5 + 201토큰 + 1.5 = 0.000365 / 달러 = 1원이 안됨
import Interpre from "hooks/useInterpre";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import s from "./gptChat.module.scss";
import { responseText } from "redux/question";

const GptChat = () => {
  const dispatch = useDispatch();
  const card = useSelector((state) => state.card.value);
  const qstn = useSelector((state) => state.question.value);
  const resultSolve = useSelector((state) => state.question.value);
  const [loading, setLoading] = useState(false);
  const [responseData, setResponseData] = useState("");
  const [newCardDraw, setNewCardDraw] = useState(false);

  // useEffect(() => {
  //   console.log('카드비교',
  //     localStorage.getItem('mytaroCard'),
  //     card.finalCard.join()
  //   )
  //   if (!localStorage.getItem("mytaroCard")) {
  //     localStorage.setItem("mytaroCard", card.finalCard.join());
  //     // 새 카드임
  //     console.log('새카드');
  //     setNewCardDraw(true);
  //   }
  //   if (localStorage.getItem("mytaroCard") === card.finalCard.join()) {
  //     // 이미 있음
  //     console.log('이미 드로우');
  //     setNewCardDraw(false);
  //   }
  // }, []);

  useEffect(() => {
    // console.log("resultSolve", qstn?.question);
    const GptResponse = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          "https://api.openai.com/v1/chat/completions",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${process.env.REACT_APP_OPENAI_API_KEY}`,
            },
            body: JSON.stringify({
              model: "gpt-3.5-turbo",
              // model: "gpt-4o",
              messages: [
                {
                  role: "user",
                  content: Interpre(card, qstn?.question),
                  // content:
                  // "11111 타로카드 18 정방향, 14 정방향, 2 역방향을 로 500자 미만으로 해석해줘",
                },
              ],
              temperature: 0.5,
              max_tokens: 500,
            }),
          }
        );

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        // console.log("API Key:", process.env.REACT_APP_OPENAI_API_KEY);

        const data = await response.json();
        const content = data.choices?.[0]?.message?.content || "응답 없음";
        dispatch(responseText(content));
        setResponseData(content);
      } catch (error) {
        console.error("API 호출 중 오류 발생:", error);
        setResponseData("API 호출 실패");
      } finally {
        setLoading(false);
      }
    };
    if (resultSolve?.responseData === '') {
      GptResponse();
      //  if(setTempCard)  {
    } else {
      setResponseData(resultSolve.responseData);
    }
  }, []);

  return (
    <div className={s.chat}>
      <div className={s.chat_result}>
        {resultSolve?.responseData
          ? resultSolve?.responseData
          : loading
          ? "답변을 작성중..."
          : responseData}
        {/* {loading ? "답변을 작성중..." : responseData} */}
      </div>
    </div>
  );
};

export default GptChat;
