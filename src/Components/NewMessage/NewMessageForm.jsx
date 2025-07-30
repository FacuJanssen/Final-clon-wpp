import React from "react";

const NewMessageForm = ({ addNewMessage }) => {
    const handleSubmitSendMessage = (event) => {
        event.preventDefault();
        let new_text = event.target.message.value;
        addNewMessage(new_text);
        event.target.message.value = "";
    };

    return (
        <form onSubmit={handleSubmitSendMessage}>
            <label htmlFor="message" className="message-label">
                Write a message
            </label>
            <input
                type="text"
                placeholder="Write a message"
                id="message"
                name="message"
                required
            />
            <button type="submit">Send</button>
        </form>
    );
};

export default NewMessageForm;
