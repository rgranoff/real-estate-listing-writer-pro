import { useState, useEffect } from 'react';

export default function ChatPage() {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([
    {
      role: 'assistant',
      content:
        'Hello! How can I assist you today with crafting a compelling real estate listing description? Just provide me with some details about the property type, bedrooms & bathrooms, notable features, and location highlights. Feel free to mention if you have a preferred tone for the description.',
    },
  ]);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage = { role: 'user', content: input };
    setMessages((prev) => [...prev, userMessage]);
    setIsLoading(true);
    setInput('');

    try {
