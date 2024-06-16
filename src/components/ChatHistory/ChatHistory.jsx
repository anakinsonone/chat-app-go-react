import Message from "../Message";
import "./ChatHistory.scss";

const ChatHistory = ({ chatHistory }) => {
  return (
    <div className="chat-history">
      <h2>Chat History</h2>
      {chatHistory ? (
        chatHistory.map((message, index) => {
          return <Message key={index} message={message.data} />;
        })
      ) : (
        <></>
      )}
    </div>
  );
};

export default ChatHistory;
