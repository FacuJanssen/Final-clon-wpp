import React from "react";
import Chats from "../Components/Chats/Chats";
import { useState } from "react";
import NewMessageForm from "../Components/NewMessage/NewMessageForm";
import { useParams } from "react-router-dom";
import { getContactsById } from "../Services/contactServices.js";
import "./ChatScreen.css";
import ContactsList from "../Components/ContactsList/ContactsList";
import { getContacts } from "../Services/contactServices.js";

const date = new Date();
const hours = date.getHours();
const minutes = date.getMinutes();
const twoDigitHours = String(hours).padStart(2, "0");
const twoDigitMinutes = String(minutes).padStart(2, "0");

const ChatScreen = () => {
    const { contact_id } = useParams();
    const contact_selected = getContactsById(contact_id);

    const [chats, setChats] = useState(contact_selected.messages);

    const contacts = getContacts();
    const [contactsState, setContactsState] = useState(contacts);
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
            time: twoDigitHours + ":" + twoDigitMinutes,
            text: new_text,
            status: "unread",
        };

        const newChats = [...chats];
        newChats.push(new_message);
        setChats(newChats);
    };

    return (
        <div className="chat-screen">
            <ContactsList contacts={contactsState} hideContactsList />
            <div className="chat-container">
                <div className="contact-chat-header">
                    <img
                        src={contact_selected.profilePic}
                        alt={contact_selected.name}
                        className="profile-pic"
                    />
                    <h2 className="contact-chat-name">
                        {contact_selected.name}
                    </h2>
                </div>
                <Chats chats={chats} deleteMessage={deleteMessage} />
                <NewMessageForm addNewMessage={addNewMessage} />
            </div>
        </div>
    );
};

export default ChatScreen;
