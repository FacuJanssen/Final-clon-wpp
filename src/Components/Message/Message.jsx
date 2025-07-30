import React from "react";
import "./Message.css";

const Message = ({ id, user, time, text, status, deleteMessage }) => {
    return (
        <div className="message">
            <p className="user">{user}</p>
            <p className="text">{text}</p>
            <button onClick={() => deleteMessage(id)}>Delete</button>
            <span className="time">{time}</span>
            <span className="status">{status}</span>
        </div>
    );
};

export default Message;
