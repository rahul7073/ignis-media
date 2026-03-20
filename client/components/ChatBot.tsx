import { useState, useEffect, useRef } from 'react';
import { X, Send, Trash2, MessageCircle } from 'lucide-react';
import { useChat } from '@/hooks/useChat';

interface ChatBotProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ChatBot = ({ isOpen, onClose }: ChatBotProps) => {
  const { messages, loading, error, sendMessage, clearHistory } = useChat();
  const [inputValue, setInputValue] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to bottom
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    const messageToSend = inputValue;
    setInputValue('');
    await sendMessage(messageToSend);
  };

  const handleSendToWhatsApp = () => {
    if (messages.length === 0) {
      const defaultMessage = "Hello sir, I need a service. Please help me";
      const whatsappUrl = `https://wa.me/917733952367?text=${encodeURIComponent(defaultMessage)}`;
      window.open(whatsappUrl, '_blank');
      return;
    }

    // Format chat history for WhatsApp
    const chatText = messages
      .map(msg => {
        const prefix = msg.role === 'user' ? 'You: ' : 'Ignis AI: ';
        return prefix + msg.content;
      })
      .join('\n\n');

    const messageToSend = `Conversation with Ignis AI:\n\n${chatText}\n\nPlease help me with my service request.`;
    const whatsappUrl = `https://wa.me/917733952367?text=${encodeURIComponent(messageToSend)}`;
    window.open(whatsappUrl, '_blank');
  };

  if (!isOpen) return null;

  return (
    <div className="fixed bottom-24 right-6 w-96 max-h-[600px] bg-white rounded-xl shadow-2xl flex flex-col z-40 border border-gray-200 md:w-96 sm:w-80 sm:bottom-20">
      {/* Header */}
      <div className="bg-gradient-to-r from-red-600 to-red-700 text-white p-4 rounded-t-xl flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
            <MessageCircle size={18} />
          </div>
          <div>
            <h3 className="font-bold text-sm">Ignis AI Assistant</h3>
            <p className="text-xs text-white/80">Always here to help</p>
          </div>
        </div>
        <button
          onClick={onClose}
          className="p-1 hover:bg-white/20 rounded-lg transition-colors"
        >
          <X size={20} />
        </button>
      </div>

      {/* Messages Container */}
      <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-gray-50">
        {messages.length === 0 ? (
          <div className="h-full flex flex-col items-center justify-center text-center">
            <MessageCircle size={32} className="text-gray-300 mb-2" />
            <p className="text-gray-500 text-sm font-medium">Welcome to Ignis AI!</p>
            <p className="text-gray-400 text-xs mt-1">Ask us about our services</p>
          </div>
        ) : (
          <>
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-xs px-4 py-2 rounded-lg ${
                    message.role === 'user'
                      ? 'bg-red-600 text-white rounded-br-none'
                      : 'bg-white text-gray-800 border border-gray-200 rounded-bl-none'
                  }`}
                >
                  <p className="text-sm leading-relaxed break-words">{message.content}</p>
                  <p
                    className={`text-xs mt-1 ${
                      message.role === 'user' ? 'text-red-100' : 'text-gray-400'
                    }`}
                  >
                    {new Date(message.timestamp).toLocaleTimeString([], {
                      hour: '2-digit',
                      minute: '2-digit',
                    })}
                  </p>
                </div>
              </div>
            ))}
            {loading && (
              <div className="flex justify-start">
                <div className="bg-white text-gray-800 border border-gray-200 px-4 py-2 rounded-lg rounded-bl-none">
                  <div className="flex gap-1">
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                  </div>
                </div>
              </div>
            )}
            {error && (
              <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-2 rounded-lg text-sm">
                <p className="font-medium">Error</p>
                <p className="text-xs mt-1">{error}</p>
              </div>
            )}
            <div ref={messagesEndRef} />
          </>
        )}
      </div>

      {/* Input Area */}
      <div className="border-t border-gray-200 p-4 bg-white rounded-b-xl space-y-2">
        <div className="flex gap-2">
          {messages.length > 0 && (
            <>
              <button
                onClick={clearHistory}
                className="flex-1 text-xs text-gray-500 hover:text-red-600 flex items-center justify-center gap-1 py-1 transition-colors"
              >
                <Trash2 size={14} />
                Clear
              </button>
              <button
                onClick={handleSendToWhatsApp}
                className="flex-1 text-xs text-green-600 hover:text-green-700 bg-green-50 hover:bg-green-100 flex items-center justify-center gap-1 py-1 rounded transition-colors font-medium"
              >
                📱 Send to WhatsApp
              </button>
            </>
          )}
        </div>
        <form onSubmit={handleSendMessage} className="flex gap-2">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Ask me anything..."
            disabled={loading}
            className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-red-600 text-sm disabled:bg-gray-100"
          />
          <button
            type="submit"
            disabled={loading || !inputValue.trim()}
            className="bg-red-600 hover:bg-red-700 text-white p-2 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
          >
            <Send size={18} />
          </button>
        </form>
      </div>
    </div>
  );
};
