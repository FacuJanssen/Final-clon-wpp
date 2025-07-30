import React from "react";
import ContactsItem from "../ContactsItem/ContactsItem";
import "./ContactsList.css";

const ContactsList = ({ contacts }) => {
    return (
        <div className="contacts-list">
            {contacts.map((contact) => {
                return <ContactsItem key={contact.id} contact={contact} />;
            })}
        </div>
    );
};

export default ContactsList;
