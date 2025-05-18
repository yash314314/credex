import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="py-16 md:py-24 flex flex-col items-center text-center">
      <h1 className="text-4xl md:text-6xl font-bold mb-6">
        Turn Your Unused Software into Cash
      </h1>
      <p className="text-xl md:text-2xl mb-8 max-w-3xl">
        SoftSell helps businesses recover value from unused software licenses with our fast, secure, and hassle-free resale platform.
      </p>
      <div className="flex flex-col sm:flex-row gap-4">
        <a 
          href="#contact" 
          className="px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-lg font-medium"
        >
          Sell My Licenses
        </a>
        <a 
          href="#how-it-works" 
          className="px-8 py-4 border-2 border-blue-600 text-blue-600 dark:text-blue-400 rounded-lg hover:bg-blue-50 dark:hover:bg-gray-800 transition-colors text-lg font-medium"
        >
          Learn How It Works
        </a>
      </div>
    </section>
  );
};

export default Hero;
