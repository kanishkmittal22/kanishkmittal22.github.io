
import { Clock } from 'lucide-react';

interface ProductSpecificationsProps {
  specifications: Record<string, string>;
  shelfLife: string;
}

const ProductSpecifications = ({ specifications, shelfLife }: ProductSpecificationsProps) => {
  return (
    <section className="py-16 bg-mint">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="font-['Playfair_Display'] text-3xl font-bold text-gray-900 mb-8">
              Technical Specifications
            </h2>
            <div className="bg-white rounded-xl p-6">
              {Object.entries(specifications).map(([key, value]) => (
                <div key={key} className="flex justify-between py-3 border-b border-forest-green/20 last:border-b-0">
                  <span className="font-medium text-gray-700">{key}</span>
                  <span className="text-forest-green font-semibold">{value}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="font-['Playfair_Display'] text-3xl font-bold text-gray-900 mb-8">
              Storage & Shelf Life
            </h2>
            <div className="bg-white rounded-xl p-6">
              <div className="flex items-start space-x-3">
                <Clock className="w-6 h-6 text-forest-green mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">Shelf Life Details</h3>
                  <p className="text-gray-700 leading-relaxed">{shelfLife}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductSpecifications;
