// NOTE: 
// 예시) { 이 사람을 계속 만나도 될까요? } 에 대한 타로카드로 { 1번카드 역방향, 8번카드 정방향, 15번카드 역방향 } 이 나왔어 { 과거 현재 미래 } 기준으로 총정리만 300자 이내로 말해줘

import { useState } from "react";

const Test = () => {
  const [messages, setMessages] = useState([]);
  const [userInput, setUserInput] = useState("");
  const [loading, setLoading] = useState(false);

  const apiKey = "";
  const apiEndpoint = "https://api.openai.com/v1/chat/completions";

  const addMessage = (sender, message) => {
    setMessages((prevMessages) => [...prevMessages, { sender, message }]);
  };

  const handleSendMessage = async () => {
    const message = userInput.trim();
    if (message.length === 0) return;

    addMessage("user", message);
    setUserInput("");
    setLoading(true);

    try {
      const response = await fetch(apiEndpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${apiKey}`,
        },
        body: JSON.stringify({
          model: "gpt-3.5-turbo",
          messages: [{ role: "user", content: message }],
          max_tokens: 1024, // 답변 최대 글자 수,
          top_p: 1, // 다음 단어를 선택할 때 상위 p%의 확률 분포를 사용하는 매개변수, 높을수록 안정된 선택
          temperature: 1, // 답변의 다양성과 창의성, 낮을수록 일관적 (0~2)
          frequency_penalty: 0.5, // 전문적 단어의 빈도, 낮을수록 전문적 (0~1)
          presence_penalty: 0.5, // 반복되는 구문 억제, 낮을수록 억제하지 않음 (0~1)
          stop: ["문장 생성 중단 단어"],
        }),
      });

      const data = await response.json();
      const aiResponse = data.choices?.[0]?.message?.content || "No response";
      addMessage("bot", aiResponse);
    } catch (error) {
      console.error("오류 발생!", error);
      addMessage("오류 발생!");
    } finally {
      setLoading(false);
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleSendMessage();
    }
  };

  return (
    <div id="Chatbot">
      <h1>인공지능 챗봇</h1>
      <div className="chatDiv">
        {loading && (
          <span className="messageWait">답변을 기다리고 있습니다</span>
        )}
        {messages.map((msg, index) => (
          <div key={index} className={`message ${msg.sender}`}>
            {`${msg.sender === "user" ? "나" : "챗봇"} : ${msg.message}`}
          </div>
        ))}
      </div>
      <div className="inputDiv">
        <input
          type="text"
          placeholder="메시지를 입력하세요"
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <button onClick={handleSendMessage}>전송</button>
      </div>
    </div>
  );
};

export default Test;


// import React, { useState } from "react";
// import axios from "axios";

// const Test = () => {
//   const [input, setInput] = useState("");
//   const [response, setResponse] = useState("");

//   const sendMessage = async () => {
//     try {
//       const apiUrl = "https://api.openai.com/v1/chat/completions"; // Update with the correct API endpoint
//       const apiKey =
//         ""; // Replace with your actual API key
//       const headers = {
//         "Content-Type": "application/json",
//         Authorization: `Bearer ${apiKey}`,
//       };

//       const requestBody = {
//         messages: [{ role: "user", content: input }],
//       };

//       const { data } = await axios.post(apiUrl, requestBody, { headers });

//       setResponse(data.choices[0].message.content);
//     } catch (error) {
//       console.error("Error sending message:", error);
//     }
//   };

//   return (
//     <div>
//       <div>
//         <input
//           type="text"
//           value={input}
//           onChange={(e) => setInput(e.target.value)}
//         />
//         <button onClick={sendMessage}>Send</button>
//       </div>
//       <div>
//         <p>{response}</p>
//       </div>
//     </div>
//   );
// };

// export default Test;

// import React, { useState } from "react";
// import axios from "axios";

// const Test = () => {
//   const [messages, setMessages] = useState([]);
//   const [input, setInput] = useState("");
//   const [isLoading, setIsLoading] = useState(false);

//   const handleSendMessage = async () => {
//     if (!input.trim()) return;

//     const newMessages = [...messages, { role: "user", content: input }];
//     setMessages(newMessages);
//     setInput("");
//     setIsLoading(true);

//     try {
//       const response = await axios.post(
//         "https://api.openai.com/v1/chat/completions",
//         {
//           model: "gpt-3.5-turbo",
//           messages: newMessages.map(({ role, content }) => ({ role, content })),
//         },
//         {
//           headers: {
//             "Content-Type": "application/json",
//             Authorization: `Bearer 키값`, // Set your API key in an environment variable
//           },
//         }
//       );

//       const botMessage = response.data.choices[0].message;
//       setMessages([...newMessages, botMessage]);
//     } catch (error) {
//       console.error("Error fetching ChatGPT response:", error);
//       alert("Failed to get a response from ChatGPT.");
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   return (
//     <div style={{ padding: "20px", maxWidth: "600px", margin: "0 auto" }}>
//       <div
//         style={{
//           border: "1px solid #ddd",
//           borderRadius: "5px",
//           padding: "10px",
//           height: "400px",
//           overflowY: "scroll",
//         }}
//       >
//         {messages.map((message, index) => (
//           <div key={index} style={{ marginBottom: "10px" }}>
//             <strong>{message.role === "user" ? "You" : "ChatGPT"}:</strong>{" "}
//             {message.content}
//           </div>
//         ))}
//       </div>
//       <input
//         type="text"
//         value={input}
//         onChange={(e) => setInput(e.target.value)}
//         placeholder="Type your message..."
//         style={{
//           width: "calc(100% - 50px)",
//           marginRight: "10px",
//           padding: "5px",
//         }}
//       />
//       <button
//         onClick={handleSendMessage}
//         disabled={isLoading}
//         style={{ padding: "5px 10px" }}
//       >
//         {isLoading ? "Loading..." : "Send"}
//       </button>
//     </div>
//   );
// };

// export default Test;
