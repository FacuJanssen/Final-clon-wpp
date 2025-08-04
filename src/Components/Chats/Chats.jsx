import React from "react";
import Message from "../Message/Message";
import "../Message/Message.css";

const Chats = ({ chats, deleteMessage }) => {
    const noMessages =
        chats.length === 0 ? (
            <span className="no-messages">No messages</span>
        ) : null;

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
            <img
                src="/Images/whatsapp-background.png"
                className="chat-background"
            />
            {message}
            {noMessages}
        </div>
    );
};

export default Chats;
