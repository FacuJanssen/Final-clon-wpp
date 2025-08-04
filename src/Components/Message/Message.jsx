import React from "react";
import "./Message.css";
import ICONS from "../../constants/Icons";

const Message = ({ id, user, time, text, status, deleteMessage }) => {
    const userMessageStyle = user === "Yo" ? "message-rigth" : "message-left";
    return (
        <div className={userMessageStyle + " message"}>
            <p className="text">{text}</p>
            <div className="message-metadata">
                <span className="time">{time}</span>
                <span className="status">
                    {status === "read" ? (
                        <ICONS.read className="read-icon" />
                    ) : (
                        <ICONS.sended className="sended-icon" />
                    )}
                </span>
                <button
                    className="delete-button"
                    onClick={() => deleteMessage(id)}
                >
                    <ICONS.delete className="delete-icon" />
                </button>
            </div>
        </div>
    );
};

export default Message;
