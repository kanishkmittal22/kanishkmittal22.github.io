import { CheckCircle } from 'lucide-react';

interface ProductCertificationsProps {
  certifications: string[];
}

const ProductCertifications = ({ certifications }: ProductCertificationsProps) => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-black mb-10">
          Certifications & Standards
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {certifications.map((cert, idx) => (
            <div
              key={idx}
              className="flex items-start gap-4 bg-white p-4 rounded-xl shadow border border-gray-100"
            >
              <div className="w-8 h-8 flex items-center justify-center bg-green-900 rounded-full mt-1">
                <CheckCircle className="w-4 h-4 text-white" />
              </div>
              <p className="text-gray-800 text-sm leading-relaxed">{cert}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductCertifications;
