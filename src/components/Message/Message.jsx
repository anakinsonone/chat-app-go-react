import "./Message.scss";

const Message = ({ message }) => {
  const messageJSON = JSON.parse(message);

  return <div className="message">{messageJSON.body}</div>;
};

export default Message;
