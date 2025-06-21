
import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const TestimonialsSection = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      quote: "Outstanding quality and reliability. SpiceHeritage has been our trusted supplier for over 5 years, consistently delivering premium spices that exceed our customers' expectations.",
      author: "Maria Rodriguez",
      company: "European Spice Co.",
      country: "Spain",
      flag: "🇪🇸"
    },
    {
      quote: "The foxnuts quality is exceptional and the logistics support is seamless. Their attention to detail and customer service makes them our preferred partner for bulk orders.",
      author: "James Mitchell",
      company: "North American Foods Ltd.",
      country: "Canada",
      flag: "🇨🇦"
    },
    {
      quote: "Professional service with competitive pricing. The organic certification and traceability documentation provided gives us complete confidence in their products.",
      author: "Hiroshi Tanaka",
      company: "Asian Import Solutions",
      country: "Japan",
      flag: "🇯🇵"
    }
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-forest-green font-semibold text-sm uppercase tracking-wider">Testimonials</span>
          <h2 className="font-['Playfair_Display'] text-4xl font-bold text-gray-900 mt-2 mb-6">
            Trusted by Global Partners
          </h2>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative bg-black rounded-2xl p-8 md:p-12">
            <div className="text-center">
              <div className="text-6xl text-white/20 mb-4">"</div>
              <blockquote className="text-xl md:text-2xl text-white font-medium leading-relaxed mb-8">
                {testimonials[currentTestimonial].quote}
              </blockquote>
              
              <div className="flex items-center justify-center space-x-4">
                <div className="text-3xl">{testimonials[currentTestimonial].flag}</div>
                <div className="text-left">
                  <div className="font-semibold text-white">
                    {testimonials[currentTestimonial].author}
                  </div>
                  <div className="text-white/70 text-sm">
                    {testimonials[currentTestimonial].company}, {testimonials[currentTestimonial].country}
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex justify-center space-x-4 mt-8">
              <Button
                variant="outline"
                size="sm"
                onClick={prevTestimonial}
                className="rounded-full w-10 h-10 p-0 border-white text-white hover:bg-white hover:text-black"
              >
                <ChevronLeft size={16} />
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={nextTestimonial}
                className="rounded-full w-10 h-10 p-0 border-white text-white hover:bg-white hover:text-black"
              >
                <ChevronRight size={16} />
              </Button>
            </div>

            {/* Dots */}
            <div className="flex justify-center space-x-2 mt-4">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-200 ${
                    index === currentTestimonial ? 'bg-white w-6' : 'bg-white/30'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
