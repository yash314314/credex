import { useEffect, useRef, useState } from 'react';

type Message = {
  text: string;
  sender: 'bot' | 'user';
};

interface ChatWidgetProps {
  onClose: () => void;
}

const ChatWidget: React.FC<ChatWidgetProps> = ({ onClose }) => {
  const [messages, setMessages] = useState<Message[]>([
    {
      text: "Hello! I'm the SoftSell assistant. How can I help you today?",
      sender: 'bot',
    },
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  const exampleQuestions = [
    'How do I sell my license?',
    'What types of licenses do you accept?',
    'How long does the process take?',
    "What's your commission rate?",
  ];

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = { text: inputValue, sender: 'user' };
    setMessages((prev) => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    const lower = inputValue.toLowerCase();
    let responseText =
      "I'm sorry, I can't answer that right now. Please contact our support team for more detailed assistance.";

    if (lower.includes('sell')) {
      responseText =
        'To sell your license, simply fill out our contact form with details about your software licenses. We\'ll provide a valuation within 24 hours.';
    } else if (lower.includes('type') || lower.includes('accept')) {
      responseText =
        'We accept most major software licenses including Microsoft, Adobe, Autodesk, and Oracle. If you don\'t see your software listed, please ask!';
    } else if (lower.includes('long') || lower.includes('take')) {
      responseText =
        'The entire process typically takes 3-5 business days from initial contact to payment, depending on the complexity of your licenses.';
    } else if (lower.includes('commission') || lower.includes('rate')) {
      responseText =
        'Our standard commission rate is 15% of the sale price. We offer discounted rates for bulk license sales.';
    }

    setTimeout(() => {
      setMessages((prev) => [...prev, { text: responseText, sender: 'bot' }]);
      setIsTyping(false);
    }, 1000);
  };

  const handleExampleQuestion = (question: string) => {
    setInputValue(question);
  };

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  return (
    <div className="fixed bottom-24 right-6 w-80 bg-white dark:bg-gray-800 rounded-lg shadow-xl border border-gray-200 dark:border-gray-700 flex flex-col z-50">
      <div className="flex justify-between items-center p-4 border-b border-gray-200 dark:border-gray-700 bg-blue-600 text-white rounded-t-lg">
        <h3 className="font-semibold">SoftSell Assistant</h3>
        <button type="button" onClick={onClose} aria-label="Close chat" className="text-white hover:text-gray-200">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path
              fillRule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>

      <div className="flex-1 p-4 overflow-y-auto max-h-80">
        {messages.map((message, index) => (
          <div key={index} className={`mb-4 ${message.sender === 'user' ? 'text-right' : 'text-left'}`}>
            <div
              className={`inline-block p-3 rounded-lg ${
                message.sender === 'user'
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200'
              }`}
            >
              {message.text}
            </div>
          </div>
        ))}
        {isTyping && (
          <div className="text-left mb-4">
            <div className="inline-block p-3 rounded-lg bg-gray-200 dark:bg-gray-700">
              <div className="flex space-x-1">
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
              </div>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      <div className="p-4 border-t border-gray-200 dark:border-gray-700">
        <div className="mb-2">
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">Try asking:</p>
          <div className="flex flex-wrap gap-2">
            {exampleQuestions.map((question, index) => (
              <button
                key={index}
                type="button"
                onClick={() => handleExampleQuestion(question)}
                className="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 rounded-md"
              >
                {question}
              </button>
            ))}
          </div>
        </div>
        <div className="flex">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter') handleSendMessage();
            }}
            placeholder="Type your question..."
            className="flex-1 p-2 border border-gray-300 dark:border-gray-600 rounded-l-lg focus:outline-none focus:ring-1 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
            aria-label="Chat input"
          />
          <button
            type="button"
            onClick={handleSendMessage}
            className="px-4 bg-blue-600 text-white rounded-r-lg hover:bg-blue-700"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatWidget;
