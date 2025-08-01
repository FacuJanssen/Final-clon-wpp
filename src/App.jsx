import React from "react";
import { Route, Routes, useLocation } from "react-router";
import "./App.css";
import ChatScreen from "./Screens/ChatScreen";
import ContactsScreen from "./Screens/ContactsScreen";

function App() {
    const location = useLocation();
    return (
        <>
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
