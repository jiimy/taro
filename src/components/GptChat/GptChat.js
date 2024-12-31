// NOTE:
// 예시) { 이 사람을 계속 만나도 될까요? } 에 대한 타로카드로 { 1번카드 역방향, 8번카드 정방향, 15번카드 역방향 } 이 나왔어 { 과거 현재 미래 } 기준으로 총정리만 300자 이내로 말해줘

// 위 기준 70토큰 0.5 + 201토큰 + 1.5 = 0.000365 / 달러 = 1원이 안됨
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const GptChat = ({ type }) => {
  const qstn = useSelector((state) => state.question.value);
  const [messages, setMessages] = useState([]);
  const [userInput, setUserInput] = useState("");
  const [loading, setLoading] = useState(false);

  // const responseData = await response.json();
  // console.log("respon", responseData);

  console.log('dd', qstn?.question);

  useEffect(() => {
    // const GptResponse = async () => {
    //   const response = await fetch(
    //     "https://api.openai.com/v1/chat/completions",
    //     {
    //       method: "POST",
    //       headers: {
    //         "Content-Type": "application/json",
    //         Authorization: `Bearer ${process.env.REACT_APP_OPENAI_API_KEY}`,
    //       },
    //       body: JSON.stringify({
    //         model: "gpt-3.5-turbo",
    //         messages: [
    //           {
    //             role: "user",
    //             content: qstn?.question,
    //           },
    //         ],
    //         temperature: 0.5,
    //         max_tokens: 200,
    //       }),
    //     }
    //   );
    //   console.log("res: ", response);
    // };
    // GptResponse();
  }, []);

  return (
    <div id="Chatbot">
      <div className="chatDiv">
        {loading && (
          <span className="messageWait">답변을 기다리고 있습니다</span>
        )}
      </div>
    </div>
  );
};

export default GptChat;
