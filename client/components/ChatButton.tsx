import { MessageCircle, X } from 'lucide-react';
import { ChatBot } from './ChatBot';
import { useState, useEffect } from 'react';

export const ChatButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [unreadCount, setUnreadCount] = useState(0);

  // Check for new messages when opening
  useEffect(() => {
    if (isOpen) {
      setUnreadCount(0);
    }
  }, [isOpen]);

  // Check if there are saved messages
  useEffect(() => {
    try {
      const savedMessages = localStorage.getItem('ignis_chat_history');
      if (savedMessages) {
        const messages = JSON.parse(savedMessages);
        setUnreadCount(Math.max(0, messages.length - unreadCount));
      }
    } catch (err) {
      console.error('Failed to check messages:', err);
    }
  }, []);

  return (
    <>
      {/* Floating Chat Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-24 right-6 z-30 w-14 h-14 bg-red-600 hover:bg-red-700 text-white rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-110 flex items-center justify-center group"
        title={isOpen ? 'Close chat' : 'Open chat'}
      >
        {isOpen ? (
          <X size={24} className="group-hover:rotate-90 transition-transform" />
        ) : (
          <>
            <MessageCircle size={24} />
            {unreadCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-yellow-500 text-white text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center">
                {unreadCount > 9 ? '9+' : unreadCount}
              </span>
            )}
          </>
        )}
      </button>

      {/* Chat Modal */}
      <ChatBot isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
};
