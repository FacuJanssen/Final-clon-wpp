import React from "react";
import { Link, Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import ChatScreen from "./Screens/ChatScreen";
import ContactsScreen from "./Screens/ContactsScreen";
import ICONS from "./constants/Icons";

function App() {
    const location = useLocation();
    return (
        <>
            <Link to="/" className="app-logo">
                <ICONS.whatsapp className="whatsapp-icon" />
                <h1 className="app-title">WhatsApp</h1>
            </Link>
            <Link
                to="https://github.com/FacuJanssen/Final-clon-wpp"
                className="github"
                target="_blank"
            >
                <ICONS.github className="github-icon" />
            </Link>
            <Routes location={location} key={location.key}>
                <Route path="/" element={<ContactsScreen />} />
                <Route
                    path="/contact/:contact_id/messages"
                    element={<ChatScreen />}
                />
            </Routes>
        </>
    );
}

export default App;
