// AIService.js
import React, { useState } from 'react';

const AIService = () => {
  const [messageInput, setMessageInput] = useState('');
  const [chatMessages, setChatMessages] = useState([]);

  const sendMessage = () => {
    const trimmedMessage = messageInput.trim();

    if (trimmedMessage !== '') {
      const newMessage = {
        type: 'sent',
        text: trimmedMessage,
      };

      setChatMessages((prevMessages) => [...prevMessages, newMessage]);
      setMessageInput('');

      // Simulate a received message after a short delay (for demonstration purposes)
      setTimeout(receiveMessage, 1000);
    }
  };

  const receiveMessage = () => {
    const newReceivedMessage = {
      type: 'received',
      text: 'This is a received message.',
    };

    setChatMessages((prevMessages) => [...prevMessages, newReceivedMessage]);
  };

  return (
    <div className="chat-container">
      <div className="chat-header">
        <div className="contact-info">
          <h2>Jobby (Your AI friend)</h2>
          <p>Last seen recently</p>
        </div>
      </div>

      <div className="chat-messages">
        {/* Display chat messages */}
        {chatMessages.map((message, index) => (
          <div key={index} className={`message ${message.type}`}>
            {message.text}
          </div>
        ))}
      </div>

      <div className="chat-input">
        <input
          type="text"
          value={messageInput}
          onChange={(e) => setMessageInput(e.target.value)}
          placeholder="Type a message"
        />
        <button onClick={sendMessage}>Send</button>
      </div>
    </div>
  );
};

export default AIService;
