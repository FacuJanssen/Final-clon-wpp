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
                className="search-contact-input"
                id="search-contact"
                name="search-contact"
                autoComplete="off"
            />
            <div className="contacts-list-items">
                {contacts.map((contact) => {
                    return <ContactsItem key={contact.id} contact={contact} />;
                })}
            </div>
        </div>
    );
};

export default ContactsList;
