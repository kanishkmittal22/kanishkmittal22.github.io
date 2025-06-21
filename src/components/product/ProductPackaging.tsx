import { Package } from 'lucide-react';

interface ProductPackagingProps {
  packaging: string[];
}

const certifications = [
  { name: 'FSSAI', image: '/Logos Photo/fssai.jpg' },
  { name: 'ISO 22000', image: '/Logos Photo/ISO.png' },
  { name: 'HACCP', image: '/Logos Photo/HACCP.jpg' },
  { name: 'Organic India', image: '/Logos Photo/India_organic.jpg' },
];

const ProductPackaging = ({ packaging }: ProductPackagingProps) => {
  return (
    <section className="py-16 bg-mint">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Packaging Options */}
          <div>
            <h2 className="font-['Playfair_Display'] text-3xl font-bold text-gray-900 mb-8">
              Packaging Options
            </h2>
            <div className="grid grid-cols-2 gap-4">
              {packaging.map((pack, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg p-6 text-center shadow-sm h-40 flex flex-col items-center justify-center"
                >
                  <Package className="w-8 h-8 text-forest-green mb-2" />
                  <span className="text-forest-green font-medium text-sm">{pack}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h2 className="font-['Playfair_Display'] text-3xl font-bold text-gray-900 mb-8">
              Certifications
            </h2>
            <div className="grid grid-cols-2 gap-4">
              {certifications.map((cert, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg p-6 text-center shadow-sm h-40 flex flex-col items-center justify-center"
                >
                  <img
                    src={cert.image}
                    alt={cert.name}
                    className="h-20 w-auto mx-auto mb-4 object-contain"
                  />
                  <span className="text-forest-green font-medium text-sm">{cert.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductPackaging;
