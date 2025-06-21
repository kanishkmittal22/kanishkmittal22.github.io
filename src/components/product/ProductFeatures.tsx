import { Check } from 'lucide-react';

type Feature =
  | string
  | {
      title: string;
      details: string | string[];
    };

interface ProductFeaturesProps {
  features: Feature[];
}

const ProductFeatures = ({ features }: ProductFeaturesProps) => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-black mb-10">
          Key Features
        </h2>

        <div className="grid md:grid-cols-3 gap-10 max-w-8xl mx-auto">
          {features.map((feature, idx) => {
            if (typeof feature === 'string') {
              return (
                <div
                  key={idx}
                  className="flex items-start gap-3 bg-gray-50 p-4 rounded-xl border border-gray-200 shadow-sm"
                >
                  <Check className="text-green-900 w-5 h-5 mt-1" />
                  <p className="text-gray-800">{feature}</p>
                </div>
              );
            } else {
              return (
                <div
                  key={idx}
                  className="bg-gray-50 p-6 rounded-xl border border-gray-200 shadow-sm"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <Check className="text-green-900 w-5 h-5" />
                    <h3 className="text-lg font-semibold text-black">{feature.title}</h3>
                  </div>
                  {Array.isArray(feature.details) ? (
                    <ul className="list-disc list-inside pl-1 text-gray-800 text-sm space-y-1">
                      {feature.details.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  ) : (
                    <p className="text-gray-700 text-sm leading-relaxed">
                      {feature.details}
                    </p>
                  )}
                </div>
              );
            }
          })}
        </div>
      </div>
    </section>
  );
};

export default ProductFeatures;
