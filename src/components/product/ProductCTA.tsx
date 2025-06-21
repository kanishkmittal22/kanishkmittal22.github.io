import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

const ProductCTA = () => {
  const navigate = useNavigate();

  const handleQuote = () => {
    navigate("/contact");
    window.scrollTo(0, 0);
  };

  return (
    <section className="py-16 bg-green-900">
      <div className="container mx-auto px-4 text-center">
        <h2 className="font-['Playfair_Display'] text-3xl font-bold text-white mb-6">
          Interested in This Product?
        </h2>
        <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
          Get a custom quote for bulk orders or learn more about how AAR KAY INDUSTRIES ensures quality and consistency in every coil.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            size="lg"
            onClick={handleQuote}
            className="bg-white text-green-900 hover:bg-green-800 hover:text-white transition-colors px-8 py-3 font-semibold"
          >
            Request a Quote
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProductCTA;
