import { CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

const ProductsSection = () => {
  const navigate = useNavigate();
  const showHeading = !location.pathname.startsWith('/product');

  const products = [
    {
      id: 'submersible-copper-winding-wire',
      name: 'Submersible Copper Winding Wire',
      image: '/images/SCWW.png',
      description:
        'Designed for moisture-resistant motor windings, our poly-wrap copper wires ensure long-lasting electrical performance in submersible pump applications.',
      keyFeatures: ['Moisture Proof', 'High Conductivity', 'Thermal Resistant']
    },
    {
      id: 'bare-copper-wire',
      name: 'Bare Copper Wire',
      image: '/images/CopperWire2.png',
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
        <div className="text-center mb-16">
          {/* <span className="text-green-900 font-semibold text-sm uppercase tracking-wider">Our Products</span> */}
          {showHeading && (<span className="text-green-900 font-semibold text-sm uppercase tracking-wider">Our Products</span>)}
          <h2 className="text-4xl font-bold text-black mt-2 mb-6 font-['Playfair_Display']">
            Our Copper Wire Solutions
          </h2>
          <p className="text-black/70 max-w-3xl mx-auto text-lg">
            We specialize in manufacturing high-conductivity, durable, and application-specific copper wires. Each product is engineered to deliver consistent electrical performance and structural integrity.
          </p>
        </div>

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
      </div>
    </section>
  );
};

export default ProductsSection;
