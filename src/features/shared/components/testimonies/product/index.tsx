import React, { useState, useEffect } from 'react';
import { Hexagon } from 'lucide-react';

// Testimonial data
const testimonials = [
  {
    id: 1,
    quote: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque eveniet suscipit corporis sequi usdam alias fugiat iusto perspiciatis.",
    author: "John Doe",
    position: "CEO, Company Name"
  },
  {
    id: 2,
    quote: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa, eveniet inventore! Omnis incidunt vel iste.",
    author: "Jane Smith",
    position: "CTO, Tech Corp"
  },
  {
    id: 3,
    quote: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa, eveniet inventore! Omnis incidunt vel iste.",
    author: "Mike Johnson",
    position: "Founder, StartUp Inc"
  }
];

function ProductTestimonial() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setActiveIndex((current) => (current + 1) % testimonials.length);
        setIsTransitioning(false);
      }, 200);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center p-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-[300px,1fr] gap-8 items-center">
          {/* Logo Section */}
          <div className="flex justify-center md:justify-end">
            <div className="w-32 h-32 text-white">
              <Hexagon className="w-full h-full stroke-[1.5]" />
            </div>
          </div>

          {/* Main Testimonial */}
          <div className={`bg-gray-800 rounded-2xl p-8 transition-opacity duration-200 ${
            isTransitioning ? 'opacity-0' : 'opacity-100'
          }`}>
            <blockquote className="text-3xl font-light text-white mb-6">
              {testimonials[activeIndex].quote}
            </blockquote>
            <div className="text-gray-300">
              <p className="font-medium">{testimonials[activeIndex].author}</p>
              <p className="text-gray-400">{testimonials[activeIndex].position}</p>
            </div>
          </div>
        </div>

        {/* Testimonial Cards */}
        <div className="grid md:grid-cols-3 gap-6 mt-8">
          {testimonials.map((testimonial, index) => (
            <button
              key={testimonial.id}
              onClick={() => setActiveIndex(index)}
              className={`text-left bg-gray-800 p-6 rounded-xl transition-all ${
                index === activeIndex
                  ? 'ring-2 ring-blue-500'
                  : 'hover:bg-gray-750'
              }`}
            >
              <p className="text-gray-300 text-sm mb-4">{testimonial.quote}</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center">
                  <Hexagon className="w-6 h-6 text-gray-400" />
                </div>
                <div>
                  <p className="text-sm font-medium text-white">
                    {testimonial.author}
                  </p>
                  <p className="text-sm text-gray-400">{testimonial.position}</p>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProductTestimonial;