import React from "react";
import "./Message.css";

const Message = ({ id, user, time, text, status, deleteMessage }) => {
    const userMessageStyle = user === "Yo" ? "message-rigth" : "message-left";
    return (
        <div className={userMessageStyle}>
            <p className="text">{text}</p>
            <span className="time">{time}</span>
            <span className="status">{status}</span>
            <button onClick={() => deleteMessage(id)}>Delete</button>
        </div>
    );
};

export default Message;
