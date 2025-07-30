import React from "react";
import Chats from "../Components/Chats/Chats";
import { useState } from "react";
import NewMessageForm from "../Components/NewMessage/NewMessageForm";
import { useParams } from "react-router";
import { getContactsById } from "../Services/contactServices";
import "./ChatScreen.css";
import ContactsScreen from "./ContactsScreen";

const date = new Date();

const ChatScreen = () => {
    const { contact_id } = useParams();
    const contact_selected = getContactsById(contact_id);
    const [chats, setChats] = useState(contact_selected.messages);
    const deleteMessage = (message_id) => {
        const deletedMessages = chats.filter(
            (message) => message.id !== message_id
        );
        setChats(deletedMessages);
    };

    const addNewMessage = (new_text) => {
        const new_message = {
            id: chats.length + 1,
            user: "Yo",
            time: date.getHours() + ":" + date.getMinutes(),
            text: new_text,
            status: "unread",
        };

        const newChats = [...chats];
        newChats.push(new_message);
        setChats(newChats);
    };

    return (
        <div className="chat-screen">
            <Chats chats={chats} deleteMessage={deleteMessage} />
            <NewMessageForm addNewMessage={addNewMessage} />
        </div>
    );
};

export default ChatScreen;
