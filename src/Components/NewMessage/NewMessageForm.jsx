import React from "react";
import "./NewMessageForm.css";

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
                required
                className="message-input"
            />
            <button type="submit">Send</button>
        </form>
    );
};

export default NewMessageForm;
