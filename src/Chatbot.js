import React, { useState } from 'react';


const Chatbot = () => {
  const [messages, setMessages] = useState([{ text: "Hello! How can I assist you today?", sender: "bot" }]);
  const [input, setInput] = useState('');

  const sendMessage = async () => {
    if (!input.trim()) return;

    // Add the user's message to the conversation
    const userMessage = { text: input, sender: "user" };
    setMessages((prevMessages) => [...prevMessages, userMessage]);

    // Reset input field
    setInput('');

    // Call the GPT-like API (e.g., OpenAI API)
    try {
      const response = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': ``,  // Replace with your API key
        },
        body: JSON.stringify({
          model: "gpt-3.5-turbo",  // Specify the model
          messages: [
            { role: "system", content: "You are a helpful assistant." },  // The system message
            ...messages.map((msg) => ({ role: msg.sender === 'bot' ? 'assistant' : 'user', content: msg.text })),
            { role: "user", content: input },
          ],
        }),
      });

      const data = await response.json();
      const botMessage = { text: data.choices[0].message.content, sender: "bot" };

      // Update the conversation with the bot's response
      setMessages((prevMessages) => [...prevMessages, botMessage]);

    } catch (error) {
      console.error("Error fetching from the API:", error);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      sendMessage();
    }
  };

  return (
    <div className="chatbot-container">
      <div className="chat-window">
        <div className="chat-messages">
          {messages.map((message, index) => (
            <div key={index} className={`message ${message.sender}`}>
              {message.text}
            </div>
          ))}
        </div>
        <div className="chat-input">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Type your message..."
          />
          <button onClick={sendMessage}>Send</button>
        </div>
      </div>
    </div>
  );
};

export default Chatbot;
