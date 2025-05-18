import React from 'react';

interface Testimonial {
  quote: string;
  name: string;
  role: string;
  company: string;
}

const Testimonials: React.FC = () => {
  const testimonials: Testimonial[] = [
    {
      quote:
        'SoftSell helped us recover over $50,000 in unused Microsoft licenses. The process was seamless and their team was extremely professional.',
      name: 'Sarah Johnson',
      role: 'IT Director',
      company: 'TechForward Inc.',
    },
    {
      quote:
        'As a small business, every dollar counts. SoftSell provided a fair valuation and quick payment for our unused Adobe licenses. Highly recommended!',
      name: 'Michael Chen',
      role: 'CEO',
      company: 'DesignHub LLC',
    },
  ];

  return (
    <section className="py-16">
      <h2 className="text-3xl font-bold text-center mb-12">What Our Customers Say</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md border-l-4 border-blue-600"
          >
            <p className="text-lg italic mb-6">"{testimonial.quote}"</p>
            <div>
              <p className="font-semibold">{testimonial.name}</p>
              <p className="text-gray-600 dark:text-gray-400">
                {testimonial.role}, {testimonial.company}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
