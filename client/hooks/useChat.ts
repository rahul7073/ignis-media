import { useState, useCallback, useEffect } from 'react';

export interface ChatMessage {
  id: string;
  role: 'user' | 'assistant' | 'system';
  content: string;
  timestamp: number;
  buttons?: { label: string; value: string }[];
}

export const services = [
  { id: 'digital', label: 'Digital Marketing Services', icon: '📱' },
  { id: 'creative', label: 'Creative & Media Services', icon: '🎨' },
  { id: 'development', label: 'Development Services', icon: '💻' },
  { id: 'political', label: 'Political Campaign Management', icon: '🗳️' },
  { id: 'school', label: 'School Media Solutions', icon: '🎓' },
];

const getInitialMessages = (): ChatMessage[] => {
  try {
    const savedMessages = localStorage.getItem('ignis_chat_history');
    if (savedMessages) {
      return JSON.parse(savedMessages);
    }
  } catch (err) {
    console.error('Failed to load chat history:', err);
  }

  // Show welcome message on first load
  const welcomeMessage: ChatMessage = {
    id: 'welcome',
    role: 'system',
    content: ` Welcome to Ignis Ventures Media!\n\n 🇬 English:\nHello! Welcome to Ignis Ventures Media. We offer premium digital marketing, creative services, web development, political campaigns, and school media solutions. Which service are you interested in?\n\n 🇮  हिंदी:\nनमस्ते! Ignis Ventures Media में आपका स्वागत है। हम डिजिटल मार्केटिंग, क्रिएटिव सेवाएं, वेब डेवलपमेंट, राजनीतिक अभियान और स्कूल मीडिया समाधान प्रदान करते हैं। कौन सी सेवा में आप रुचि रखते हैं?`,
    timestamp: Date.now(),
    buttons: services.map(s => ({ label: `${s.icon} ${s.label}`, value: s.id })),
  };
  return [welcomeMessage];
};

export const useChat = () => {
  const [messages, setMessages] = useState<ChatMessage[]>(() => getInitialMessages());
  const [loading, setLoading] = useState(false);
  const [selectedService, setSelectedService] = useState<string | null>(() => {
    try {
      const savedMessages = localStorage.getItem('ignis_chat_history');
      if (savedMessages) {
        const parsed = JSON.parse(savedMessages) as ChatMessage[];
        const lastUserMessage = [...parsed].reverse().find((m: ChatMessage) => m.role === 'user');
        if (lastUserMessage) {
          const selectedSvc = services.find(s => lastUserMessage.content.includes(s.label));
          if (selectedSvc) {
            return selectedSvc.id;
          }
        }
      }
    } catch (err) {
      console.error('Failed to load selected service:', err);
    }
    return null;
  });

  // Sync messages to localStorage whenever they change
  useEffect(() => {
    try {
      localStorage.setItem('ignis_chat_history', JSON.stringify(messages));
    } catch (err) {
      console.error('Failed to save messages:', err);
    }
  }, [messages]);

  const sendMessage = useCallback(async (userMessage: string) => {
    if (!userMessage.trim()) return;

    setLoading(true);

    // User message
    const newUserMessage: ChatMessage = {
      id: `user-${Date.now()}`,
      role: 'user',
      content: userMessage,
      timestamp: Date.now(),
    };

    // Check if user selected a service
    const selectedSvc = services.find(s => userMessage.includes(s.label) || userMessage === s.id);
    let assistantResponse: ChatMessage;

    if (selectedSvc) {
      setSelectedService(selectedSvc.id);
      assistantResponse = {
        id: `assistant-${Date.now()}`,
        role: 'assistant',
        content: `Perfect! You've selected ${selectedSvc.icon} ${selectedSvc.label}.\n\nOur team specializes in:\n• Expert solutions tailored to your needs\n• Professional execution & delivery\n• 24/7 customer support\n\nPlease click the "Contact Us via WhatsApp" button to discuss your requirements directly with our team. They'll welcome you and guide you through the process!\n\n💬 Let's connect on WhatsApp for a personalized consultation.`,
        timestamp: Date.now(),
        buttons: [{ label: '📱 Contact Us via WhatsApp', value: 'whatsapp' }],
      };
    } else {
      // General inquiry
      assistantResponse = {
        id: `assistant-${Date.now()}`,
        role: 'assistant',
        content: `Thank you for your interest! 🙏\n\nTo better assist you, please select one of our services:\n\n💡 Our expertise includes:\n• Digital Marketing (SEO, Google Ads, Meta Ads, SMS, Email, WhatsApp)\n• Creative & Media (Design, Branding, Video, Reels, Campaigns)\n• Web & App Development (Custom solutions)\n• Political Campaigns (Strategy & Management)\n• School Media (Educational content)\n\nChoose a service above to learn more!`,
        timestamp: Date.now(),
        buttons: services.map(s => ({ label: `${s.icon} ${s.label}`, value: s.id })),
      };
    }

    const updatedMessages = [...messages, newUserMessage, assistantResponse];
    setMessages(updatedMessages);
    setLoading(false);
  }, [messages]);

  const handleServiceSelect = useCallback(async (serviceId: string) => {
    const service = services.find(s => s.id === serviceId);
    if (service) {
      await sendMessage(service.label);
    }
  }, [sendMessage]);

  const clearHistory = useCallback(() => {
    try {
      const welcomeMessage: ChatMessage = {
        id: 'welcome',
        role: 'system',
        content: `🔥 Welcome to Ignis Ventures Media!\n\n🇬🇧 English:\nHello! Welcome to Ignis Ventures Media. We offer premium digital marketing, creative services, web development, political campaigns, and school media solutions. Which service are you interested in?\n\n🇮🇳 हिंदी:\nनमस्ते! Ignis Ventures Media में आपका स्वागत है। हम डिजिटल मार्केटिंग, क्रिएटिव सेवाएं, वेब डेवलपमेंट, राजनीतिक अभियान और स्कूल मीडिया समाधान प्रदान करते हैं। कौन सी सेवा में आप रुचि रखते हैं?`,
        timestamp: Date.now(),
        buttons: services.map(s => ({ label: `${s.icon} ${s.label}`, value: s.id })),
      };
      setMessages([welcomeMessage]);
      setSelectedService(null);
    } catch (err) {
      console.error('Failed to clear chat history:', err);
    }
  }, []);

  return {
    messages,
    loading,
    sendMessage,
    handleServiceSelect,
    clearHistory,
    selectedService,
  };
};
