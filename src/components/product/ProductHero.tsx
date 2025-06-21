import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Star, Shield, Truck } from 'lucide-react';

interface ProductHeroProps {
  product: {
    name: string;
    image: string;
    description: string;
  };
}

const ProductHero = ({ product }: ProductHeroProps) => {
  const navigate = useNavigate();

  return (
    <section className="pt-24 pb-12 bg-green-900">
      <div className="container mx-auto px-4">
        <Button
          variant="outline"
          onClick={() => navigate('/product')}
          className="mb-6 border-white text-green-900 hover:bg-white hover:text-green-900"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Products
        </Button>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Product Info */}
          <div>
            <h1 className="font-['Playfair_Display'] text-4xl md:text-5xl font-bold text-white mb-6">
              {product.name}
            </h1>
            <p className="text-white/80 text-lg leading-relaxed mb-8">
              {product.description}
            </p>
            <div className="flex flex-wrap gap-6 text-white">
              <div className="flex items-center space-x-2">
                <Star className="w-5 h-5" />
                <span>Premium Quality</span>
              </div>
              <div className="flex items-center space-x-2">
                <Shield className="w-5 h-5" />
                <span>Industry Certified</span>
              </div>
              <div className="flex items-center space-x-2">
                <Truck className="w-5 h-5" />
                <span>Bulk & OEM Ready</span>
              </div>
            </div>
          </div>

          {/* Product Image */}
          <div>
            <img
              src={product.image}
              alt={product.name}
              className="rounded-2xl shadow-2xl w-full h-96 object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductHero;
