import React from "react";
import Message from "../Message/Message";
import "./Chat.css";

const Chats = ({ chats, deleteMessage }) => {
    const noMessages = chats.length === 0 ? <span>No messages</span> : null;

    const message = chats.map((chat, index) => {
        return (
            <Message
                key={index}
                id={chat.id}
                user={chat.user}
                time={chat.time}
                text={chat.text}
                status={chat.status}
                deleteMessage={deleteMessage}
            />
        );
    });
    return (
        <div className="chat">
            {message}
            {noMessages}
        </div>
    );
};

export default Chats;
