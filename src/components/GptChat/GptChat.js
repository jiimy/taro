// NOTE:
// 예시) { 이 사람을 계속 만나도 될까요? } 에 대한 타로카드로 { 1번카드 역방향, 8번카드 정방향, 15번카드 역방향 } 이 나왔어 { 과거 현재 미래 } 기준으로 총정리만 300자 이내로 말해줘

// 위 기준 70토큰 0.5 + 201토큰 + 1.5 = 0.000365 / 달러 = 1원이 안됨
import Interpre from "hooks/useInterpre";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import s from "./gptChat.module.scss";

const GptChat = () => {
  const card = useSelector((state) => state.card.value);
  const qstn = useSelector((state) => state.question.value);
  const [loading, setLoading] = useState(false);
  const [responseData, setResponseData] = useState("");

  useEffect(() => {
    console.log("question: ", Interpre(card, qstn?.question));
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
                },
              ],
              temperature: 0.5,
              max_tokens: 400,
            }),
          }
        );

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        console.log("API Key:", process.env.REACT_APP_OPENAI_API_KEY);

        const data = await response.json();
        const content = data.choices?.[0]?.message?.content || "응답 없음";
        setResponseData(content);
      } catch (error) {
        console.error("API 호출 중 오류 발생:", error);
        setResponseData("API 호출 실패");
      } finally {
        setLoading(false);
      }
    };
    GptResponse();
  }, []);

  return (
    <div className={s.chat}>
      <div className={s.chat_result}>
        {loading ? "답변을 작성중..." : responseData}
      </div>
    </div>
  );
};

export default GptChat;
