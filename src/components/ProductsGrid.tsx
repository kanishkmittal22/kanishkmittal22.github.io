import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { Clock, Package, Leaf } from 'lucide-react';

const ProductsSection = () => {
  const navigate = useNavigate();

  const products = [
    {
      id: 'submersible-copper-winding-wire',
      name: 'Submersible Copper Winding Wire (Poly-Wrap)',
      image: '/images/submersible-wire.jpg',
      description:
        'Designed for moisture-resistant motor windings, our poly-wrap copper wires ensure long-lasting electrical performance in submersible pump applications.',
      keyFeatures: ['Moisture Proof', 'High Conductivity', 'Thermal Resistant']
    },
    {
      id: 'bare-copper-wire',
      name: 'Bare Copper Wire',
      image: '/images/bare-copper-wire.jpg',
      description:
        'Highly conductive and mechanically robust bare copper wires suitable for earthing, control panels, and industrial wiring setups.',
      keyFeatures: ['Soft Annealed', 'Flexible Gauges', 'ISI Certified']
    }
  ];
  const handleViewDetails = (productId: string) => {
    navigate(`/product/${productId}`);
    window.scrollTo(0, 0);
  };

  return (
    <section id="products" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          {/* <span className="text-forest-green font-semibold text-sm uppercase tracking-wider">
            Our Products
          </span> */}
          <h2 className="font-['Playfair_Display'] text-4xl font-bold text-gray-900 mt-2 mb-6">
            Premium Spices, Foxnuts & Powders
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Discover our carefully curated selection of organic spices, nutritious foxnuts,
            and premium powders, sourced directly from the finest regions across India and
            beyond.
          </p>
        </div>

        {/* === GRID START === */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, idx) => (
            // Card Start
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
          {products.map((product) => (
            <div
              key={product.id}
              className="group overflow-hidden border-0 shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 bg-white rounded-lg"
              role="button"
              onClick={() => handleViewDetails(product.id)}
            >
              <div className="relative overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-6 flex flex-col justify-between">
                <div>
                  <h3 className="font-semibold text-xl text-black mb-3">
                    {product.name}
                  </h3>
                  <p className="text-black/70 mb-4 text-sm leading-relaxed">
                    {product.description}
                  </p>
                  <div className="mb-4">
                    <h4 className="font-medium text-black mb-2 text-sm">
                      Key Features:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {product.keyFeatures.map((feature, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-1 bg-green-900/10 text-green-900 rounded text-xs"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <Button
                  variant="outline"
                  className="w-full border-green-900 text-green-900 hover:bg-green-900 hover:text-white transition-colors duration-200 mt-4"
                >
                  View Details
                </Button>
              </CardContent>
            </div>
          ))}
        </div>
          ))}
        </div>
        {/* === GRID END === */}
      </div>
    </section>
  );
};

export default ProductsSection;
