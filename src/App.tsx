
import './App.css'
import './index.css'
import { useState } from 'react';
import Navbar from './components/navbar'
import Hero from './components/hero';
import HowItWorks from './components/howitworks';
import WhyChooseUs from './components/why';
import Testimonials from './components/testimonial';
import ContactForm from './components/Contactform';
import ChatWidget from './components/chatwidget';
function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [chatOpen, setChatOpen] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const toggleChat = () => {
    setChatOpen(!chatOpen);
  };

  return (
    <div
      className={`min-h-screen ${
        darkMode
          ? 'dark bg-gray-900 text-white'
          : 'bg-gray-50 text-gray-900'
      }`}
    >
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <main className="container mx-auto px-4 py-8">
        <Hero />
        <HowItWorks />
        <WhyChooseUs />
        <Testimonials />
        <ContactForm />
      </main>
      <footer className="py-6 text-center border-t border-gray-300 dark:border-gray-700">
        <p className="text-gray-700 dark:text-gray-400">
          © 2023 SoftSell. All rights reserved.
        </p>
      </footer>

      {/* Chat Widget Button */}
      <button
        onClick={toggleChat}
        className="fixed bottom-6 right-6 bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-full shadow-lg transition-all focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        aria-label={chatOpen ? 'Close chat' : 'Open chat'}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
          />
        </svg>
      </button>

      {/* Chat Widget */}
      {chatOpen && <ChatWidget onClose={toggleChat} />}
    </div>
  );
}

export default App;