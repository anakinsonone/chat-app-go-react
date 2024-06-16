import "./ChatInput.scss";

const ChatInput = ({ send }) => {
  return (
    <div className="chat-input">
      <input
        type="text"
        onKeyDown={send}
        placeholder="Type to chat. Hit Enter to send"
      />
    </div>
  );
};

export default ChatInput;
