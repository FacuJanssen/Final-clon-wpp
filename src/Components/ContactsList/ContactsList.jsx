import React from "react";
import ContactsItem from "../ContactsItem/ContactsItem";
import "./ContactsList.css";

const ContactsList = ({ contacts }) => {
    return (
        <div className="contacts-list">
            <h2 className="contacts-list-title">Chats</h2>
            <label htmlFor="search" className="search-label">
                Search or start a new chat
            </label>
            <input
                type="text"
                placeholder="Search or start a new chat"
                className="search-input"
            />
            {contacts.map((contact) => {
                return <ContactsItem key={contact.id} contact={contact} />;
            })}
        </div>
    );
};

export default ContactsList;
