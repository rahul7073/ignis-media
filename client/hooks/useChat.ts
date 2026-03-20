import { useState, useCallback, useEffect } from 'react';

export interface ChatMessage {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: number;
}

export const useChat = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Load chat history from localStorage
  useEffect(() => {
    try {
      const savedMessages = localStorage.getItem('ignis_chat_history');
      if (savedMessages) {
        setMessages(JSON.parse(savedMessages));
      }
    } catch (err) {
      console.error('Failed to load chat history:', err);
    }
  }, []);

  // Save chat history to localStorage
  const saveMessages = useCallback((newMessages: ChatMessage[]) => {
    try {
      localStorage.setItem('ignis_chat_history', JSON.stringify(newMessages));
      setMessages(newMessages);
    } catch (err) {
      console.error('Failed to save chat history:', err);
    }
  }, []);

  const sendMessage = useCallback(async (userMessage: string) => {
    if (!userMessage.trim()) return;

    const newUserMessage: ChatMessage = {
      id: `user-${Date.now()}`,
      role: 'user',
      content: userMessage,
      timestamp: Date.now(),
    };

    setLoading(true);
    setError(null);

    try {
      const updatedMessages = [...messages, newUserMessage];
      saveMessages(updatedMessages);

      // Call OpenAI API
      const response = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${import.meta.env.VITE_OPENAI_API_KEY}`,
        },
        body: JSON.stringify({
          model: 'gpt-3.5-turbo',
          messages: updatedMessages.map(msg => ({
            role: msg.role,
            content: msg.content,
          })),
          temperature: 0.7,
          max_tokens: 500,
          system: `You are a helpful customer support assistant for Ignis Ventures Media, a digital marketing and political campaign management company. 
          
          Our services include:
          - Digital Marketing Services (SEO, Google Ads, Meta Ads, SMS Marketing, Email Marketing, WhatsApp Marketing)
          - Creative & Media Services (Graphic Design, Branding, Video Production, Reels, Posters, Social Media Campaigns)
          - Development Services (Web Development, App Development, Landing Pages, Portfolio Websites)
          - Political Campaign Management (Social Media Strategy, Campaign Strategy, Targeting, Campaign Materials, Awareness, Campaign Management)
          - School Media Solutions
          
          Be professional, helpful, and guide customers toward our services. Always encourage them to contact us via WhatsApp or the contact form for detailed consultations.
          Contact: +91 7733952367 | Email: ignisventuresmedia@gmail.com`,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error?.message || 'Failed to get response from AI');
      }

      const data = await response.json();
      const assistantMessage: ChatMessage = {
        id: `assistant-${Date.now()}`,
        role: 'assistant',
        content: data.choices[0].message.content,
        timestamp: Date.now(),
      };

      const finalMessages = [...updatedMessages, assistantMessage];
      saveMessages(finalMessages);
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'An error occurred';
      setError(errorMessage);
      console.error('Chat error:', err);
    } finally {
      setLoading(false);
    }
  }, [messages, saveMessages]);

  const clearHistory = useCallback(() => {
    try {
      localStorage.removeItem('ignis_chat_history');
      setMessages([]);
    } catch (err) {
      console.error('Failed to clear chat history:', err);
    }
  }, []);

  return {
    messages,
    loading,
    error,
    sendMessage,
    clearHistory,
  };
};
