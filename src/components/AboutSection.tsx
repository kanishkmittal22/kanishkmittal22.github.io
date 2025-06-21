import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const AboutSection = () => {
  const navigate = useNavigate();

  const handleLearnMore = () => {
    navigate('/about');
    window.scrollTo(0, 0);
  };

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image Block */}
          <div className="relative">
            <div className="absolute inset-0 bg-green-900/10 rounded-lg transform rotate-3"></div>
            <img
              src="/images/Industry.png"
              alt="Copper wire manufacturing"
              className="relative rounded-lg shadow-2xl w-full h-80 object-cover"
            />
          </div>

          {/* Text Content */}
          <div className="space-y-6">
            <div>
              <span className="text-green-900 font-semibold text-sm uppercase tracking-wider">About Us</span>
              <h2 className="font-['Playfair_Display'] text-4xl font-bold text-black mt-2 mb-6">
                Crafting Copper Excellence Since 1992
              </h2>
            </div>

            <p className="text-black/80 text-lg leading-relaxed">
              AAR KAY INDUSTRIES is a trusted manufacturer of premium copper wire products including
              Submersible Copper Winding Wire and Bare Copper Wire. With a manufacturing legacy
              spanning over three decades, we combine modern technology with strict quality assurance to deliver
              copper wires that exceed industry expectations.
            </p>

            <Button
              onClick={handleLearnMore}
              className="bg-green-900 hover:bg-green-800 text-white mt-6 group"
            >
              Read More About Us
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
