import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white"
    >
      {/* Background Image with Dark Green Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: ` url('/images/test.png')`
        }}
      />

      {/* Animated Copper Particles (Subtle) */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-black/20 rounded-full animate-particle"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.7}s`,
              animationDuration: `${4 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      {/* Hero Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto text-white">
        <h1 className="text-5xl md:text-6xl font-['Playfair_Display'] font-bold mb-6 animate-fade-in leading-tight">
          High-Purity Copper Wires Engineered for Trust & Performance
        </h1>
        <p
          className="text-lg md:text-xl text-mint mb-8 animate-fade-in text-white"
          style={{ animationDelay: '0.2s' }}
        >
          Reliable Solutions for Submersible Motors, Earthing Systems & Industrial Applications
        </p>
        <div className="flex flex-wrap justify-center gap-4 animate-fade-in" style={{ animationDelay: '0.4s' }}>
          <Button
            variant="outline"
            size="lg"
            className="border-green-900 text-green-900 px-8 py-4 text-lg rounded-full hover:bg-green-900 hover:text-white transition-all duration-300"
            onClick={() => navigate('/product')}
          >
            Explore Our Products
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="border-green-900 text-green-900 px-8 py-4 text-lg rounded-full hover:bg-green-900 hover:text-white transition-all duration-300"
            onClick={() => navigate('/contact')}
          >
            Get a Quote
          </Button>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-float">
        <div className="w-6 h-10 border-2 border-green-900/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-green-900/70 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
