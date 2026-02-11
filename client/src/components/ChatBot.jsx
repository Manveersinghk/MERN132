import React, { useState, useRef, useEffect } from 'react';
import { ChatBubbleLeftRightIcon, XMarkIcon, PaperAirplaneIcon } from '@heroicons/react/24/solid';

const ChatBot = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([
        { role: 'bot', content: 'Hi there! 👋 How can I help you today?' }
    ]);
    const [input, setInput] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const messagesEndRef = useRef(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    const toggleChat = () => {
        setIsOpen(!isOpen);
    };

    const handleSendMessage = async (e) => {
        e.preventDefault();
        if (!input.trim()) return;

        const userMessage = { role: 'user', content: input };
        setMessages((prev) => [...prev, userMessage]);
        setInput('');
        setIsLoading(true);

        try {
            const response = await fetch('http://localhost:5000/api/chat', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ message: userMessage.content }),
            });

            const data = await response.json();
            const botMessage = { role: 'bot', content: data.response };
            setMessages((prev) => [...prev, botMessage]);
        } catch (error) {
            console.error('Error sending message:', error);
            setMessages((prev) => [
                ...prev,
                { role: 'bot', content: 'Sorry, I encountered an error. Please try again later.' },
            ]);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="fixed bottom-4 right-4 z-50 font-inter">
            {/* Chat Window */}
            {isOpen && (
                <div className="mb-2 w-80 md:w-96 bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-100 flex flex-col transition-all duration-300 animate-fade-in-up h-[450px]">
                    {/* Header */}
                    <div className="bg-gradient-to-r from-blue-600 to-indigo-700 p-4 text-white flex justify-between items-center">
                        <div className="flex items-center space-x-2">
                            <div className="bg-white/20 p-1.5 rounded-full">
                                <ChatBubbleLeftRightIcon className="h-5 w-5" />
                            </div>
                            <div>
                                <h3 className="font-semibold text-sm">JBLS Assistant</h3>
                                <p className="text-xs text-blue-100 flex items-center">
                                    <span className="w-1.5 h-1.5 bg-green-400 rounded-full mr-1"></span>
                                    Online
                                </p>
                            </div>
                        </div>
                        <button
                            onClick={toggleChat}
                            className="text-white/80 hover:text-white hover:bg-white/10 p-1.5 rounded-full transition-colors"
                        >
                            <XMarkIcon className="h-5 w-5" />
                        </button>
                    </div>

                    {/* Messages Area */}
                    <div className="flex-1 p-4 overflow-y-auto bg-gray-50/50 space-y-4">
                        {messages.map((msg, index) => (
                            <div
                                key={index}
                                className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                            >
                                {msg.role === 'bot' && (
                                    <div className="w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center mr-2 flex-shrink-0">
                                        <ChatBubbleLeftRightIcon className="h-4 w-4 text-indigo-600" />
                                    </div>
                                )}
                                <div
                                    className={`max-w-[80%] p-3 text-sm rounded-2xl shadow-sm ${msg.role === 'user'
                                        ? 'bg-blue-600 text-white rounded-br-none'
                                        : 'bg-white text-gray-700 border border-gray-100 rounded-bl-none'
                                        }`}
                                >
                                    {msg.content}
                                </div>
                            </div>
                        ))}
                        {isLoading && (
                            <div className="flex justify-start">
                                <div className="w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center mr-2 flex-shrink-0">
                                    <ChatBubbleLeftRightIcon className="h-4 w-4 text-indigo-600" />
                                </div>
                                <div className="bg-white text-gray-500 p-3 rounded-2xl rounded-bl-none border border-gray-100 shadow-sm text-sm flex items-center space-x-1">
                                    <div className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                                    <div className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                                    <div className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                                </div>
                            </div>
                        )}
                        <div ref={messagesEndRef} />
                    </div>

                    {/* Input Area */}
                    <form onSubmit={handleSendMessage} className="p-3 bg-white border-t border-gray-100 flex items-center space-x-2">
                        <input
                            type="text"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            placeholder="Type your message..."
                            className="flex-1 bg-gray-50 border border-gray-200 text-gray-800 text-sm rounded-full px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all placeholder:text-gray-400"
                        />
                        <button
                            type="submit"
                            disabled={!input.trim() || isLoading}
                            className="bg-blue-600 text-white p-2.5 rounded-full hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500/40 disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-md shadow-blue-500/20"
                        >
                            <PaperAirplaneIcon className="h-5 w-5 -rotate-45 translate-x-px -translate-y-px" />
                        </button>
                    </form>
                </div>
            )}

            {/* Toggle Button */}
            <button
                onClick={toggleChat}
                className={`w-14 h-14 rounded-full shadow-xl flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95 ${isOpen
                    ? 'bg-red-500 text-white rotate-90'
                    : 'bg-gradient-to-tr from-blue-600 to-indigo-600 text-white hover:shadow-blue-500/30'
                    }`}
            >
                {isOpen ? (
                    <XMarkIcon className="h-7 w-7" />
                ) : (
                    <ChatBubbleLeftRightIcon className="h-7 w-7" />
                )}
            </button>
        </div>
    );
};

export default ChatBot;
