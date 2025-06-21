import { CheckCircle } from 'lucide-react';

interface ProductApplicationsProps {
  applications: string[];
}

const ProductApplications = ({ applications }: ProductApplicationsProps) => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="font-['Playfair_Display'] text-3xl font-bold text-center text-black mb-10">
          Applications & Uses
        </h2>
        <div className="grid md:grid-cols-3 gap-10 max-w-7xl mx-auto">
          {applications.map((application, index) => (
            <div
              key={index}
              className="bg-gray-50 border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition"
            >
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-green-900 rounded-full flex items-center justify-center mt-1">
                  <CheckCircle className="w-4 h-4 text-white" />
                </div>
                <p className="text-gray-800 text-base leading-relaxed">{application}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductApplications;
