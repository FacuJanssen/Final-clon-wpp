import React from "react";
import ContactsList from "../Components/ContactsList/ContactsList";
import { useState } from "react";
import { getContacts } from "../Services/contactServices";
import "./ContactsScreen.css";

const ContactsScreen = () => {
    const contacts = getContacts();
    const [contactsState, setContactsState] = useState(contacts);

    return (
        <div className="contacts-screen">
            <ContactsList contacts={contactsState} />
        </div>
    );
};

export default ContactsScreen;
