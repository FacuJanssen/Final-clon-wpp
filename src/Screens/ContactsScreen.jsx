import React from "react";
import ContactsList from "../Components/ContactsList/ContactsList";
import { useState } from "react";
import { getContacts } from "../Services/contactServices.js";
import "./ContactsScreen.css";
import ICONS from "../constants/Icons.jsx";

const ContactsScreen = () => {
    const contacts = getContacts();
    const [contactsState, setContactsState] = useState(contacts);

    return (
        <div className="contacts-screen">
            <ContactsList contacts={contactsState} />
            {
                <div className="contacts-screen-info">
                    <ICONS.whatsapp className="contacts-screen-info-icon" />
                    <h3 className="contacts-screen-info-title">
                        WhatsApp for Windows
                    </h3>
                    <span className="contacts-screen-info-subtitle">
                        Send and receive messages without keeping your phone
                        online.
                    </span>
                    <span className="contacts-screen-info-subtitle">
                        Use WhatsApp on up to 4 linked devices and 1 phone at
                        the same time.
                    </span>
                </div>
            }
        </div>
    );
};

export default ContactsScreen;
