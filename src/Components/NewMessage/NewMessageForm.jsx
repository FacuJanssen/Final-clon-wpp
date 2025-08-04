import React from "react";
import "./NewMessageForm.css";
import ICONS from "../../constants/Icons";

const NewMessageForm = ({ addNewMessage }) => {
    const handleSubmitSendMessage = (event) => {
        event.preventDefault();
        let new_text = event.target.message.value;
        addNewMessage(new_text);
        event.target.message.value = "";
    };

    return (
        <form onSubmit={handleSubmitSendMessage} className="new-message-form">
            <label htmlFor="message" className="message-label">
                Type a message
            </label>
            <input
                type="text"
                placeholder="Type a message"
                id="message"
                name="message"
                className="message-input"
                autoComplete="off"
                required
            />
            <button type="submit" className="send-button">
                <ICONS.send className="send-icon" />
            </button>
        </form>
    );
};

export default NewMessageForm;
