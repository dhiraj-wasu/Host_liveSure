import React, { useState } from 'react';
import styles from './ChatBot.module.css';
import { MessageSquare, Minus, X } from 'lucide-react';

const predefinedQuestions = [
  "Discover Services",
  "Pricing details",
  "Contact Support",
  "Partner with Us",
  "Schedule a Call",
];

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showCloseConfirm, setShowCloseConfirm] = useState(false);
  const [messages, setMessages] = useState([
    { from: 'bot', text: 'Hi! How can I help you today?' }
  ]);
  const [input, setInput] = useState('');

  const toggleChat = () => {
    if (isOpen) {
      setIsOpen(false); // minimize
      setShowCloseConfirm(false);
    } else {
      setIsOpen(true);
    }
  };

  const handleSend = (text) => {
    if (!text.trim()) return;
    setMessages([...messages, { from: 'user', text }, { from: 'bot', text: 'Thanks for your message! We’ll respond soon.' }]);
    setInput('');
  };

  const confirmClose = () => setShowCloseConfirm(true);
  const closeChat = () => {
    setIsOpen(false);
    setShowCloseConfirm(false);
    setMessages([{ from: 'bot', text: 'Hi! How can I help you today?' }]); // Reset chat
  };

  return (
    <>
      <button className={styles.chatButton} onClick={toggleChat}>
        <MessageSquare size={24} />
      </button>

      <div className={`${styles.chatWindow} ${isOpen ? styles.open : ''}`}>
        <div className={styles.header}>
          <div className={styles.title}>💬 Chat with Us</div>
          <div className={styles.controls}>
            <button onClick={toggleChat}><Minus size={16} /></button>
            <button onClick={confirmClose}><X size={16} /></button>
          </div>
        </div>

        {showCloseConfirm ? (
          <div className={styles.confirmClose}>
            <p>Close this chat?</p>
            <button className={styles.confirmBtn} onClick={closeChat}>Yes, close</button>
            <button className={styles.cancelBtn} onClick={() => setShowCloseConfirm(false)}>Cancel</button>
          </div>
        ) : (
          <>
            <div className={styles.messages}>
  {messages.map((msg, index) => (
    <div
      key={index}
      className={`${styles.messageRow} ${msg.from === 'user' ? styles.userRow : styles.botRow}`}
    >
      {msg.from === 'bot' && (
        <div className={styles.avatar}>🤖</div> // Bot icon (emoji or use an <img>)
      )}

      <div className={`${styles.message} ${msg.from === 'user' ? styles.user : styles.bot}`}>
        {msg.text}
      </div>

      {msg.from === 'user' && (
        <div className={styles.avatar}>🧑</div> // User icon (emoji or <img>)
      )}
    </div>
  ))}
</div>


            <div className={styles.quickReplies}>
              {predefinedQuestions.map((q, index) => (
                <button key={index} onClick={() => handleSend(q)}>{q}</button>
              ))}
            </div>

            <div className={styles.inputArea}>
              <input
                type="text"
                placeholder="Type your message..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend(input)}
              />
              <button onClick={() => handleSend(input)}>➤</button>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default ChatBot;
