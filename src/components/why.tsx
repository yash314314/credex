import React from 'react';

interface Feature {
  title: string;
  description: string;
  icon: string;
}

const WhyChooseUs: React.FC = () => {
  const features: Feature[] = [
    {
      title: 'Highest Payouts',
      description: 'We offer the most competitive rates in the industry with no hidden fees.',
      icon: '💰',
    },
    {
      title: 'Secure Transactions',
      description:
        'Bank-level encryption ensures your data and transactions are always protected.',
      icon: '🔒',
    },
    {
      title: 'Fast Processing',
      description:
        'From valuation to payment, our process typically completes in under 72 hours.',
      icon: '⚡',
    },
    {
      title: 'Dedicated Support',
      description:
        'Our team is available 24/7 to answer your questions and guide you through the process.',
      icon: '👨‍💻',
    },
  ];

  return (
    <section className="py-16 bg-gray-100 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          Why Choose SoftSell?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="text-3xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
