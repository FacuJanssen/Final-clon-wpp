import React from "react";
import { Link } from "react-router-dom";
import "./ContactsItem.css";
import { useParams } from "react-router-dom";
import { getContactsById } from "../../Services/contactServices";

const ContactsItem = ({ contact }) => {
    const { contact_id } = useParams();
    const contactSelected =
        Number(contact_id) === Number(contact.id)
            ? "contact-item selected"
            : "contact-item";
    return (
        <Link
            to={`/contact/${contact.id}/messages`}
            className={contactSelected}
        >
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
