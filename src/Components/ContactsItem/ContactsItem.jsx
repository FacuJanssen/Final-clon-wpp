import React from "react";
import { Link } from "react-router-dom";
import "./ContactsItem.css";

const ContactsItem = ({ contact }) => {
    return (
        <Link to={`/contact/${contact.id}/messages`} className="contact-item">
            <img
                src={contact.profilePic}
                alt={contact.name}
                className="profile-pic"
            />
            <div className="contact-info">
                <h3 className="contact-name">{contact.name}</h3>
                <span className="last-message">
                    {contact.messages[contact.messages.length - 1].text}
                </span>
            </div>
        </Link>
    );
};

export default ContactsItem;
