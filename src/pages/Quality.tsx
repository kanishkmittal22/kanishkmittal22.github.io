import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroOtherPage from '@/components/HeroOtherPage';

const certifications = [
  {
    name: 'ISO 9001:2015',
    image: '/Logos Photo/ISO.png',
    alt: 'ISO Certified'
  },
  {
    name: 'ISI Marked',
    image: '/Logos Photo/ISI.png',
    alt: 'ISI Certification'
  },
  {
    name: 'RoHS Compliant',
    image: '/Logos Photo/RoHS.jpg',
    alt: 'RoHS Certified'
  },
  {
    name: 'IEC / IS Standards',
    image: '/Logos Photo/IEC.png',
    alt: 'IEC Conformance'
  }
];

const Quality = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <HeroOtherPage
        title="Our Quality Promise"
        subtitle="Trusted by Industry. Certified by Standards."
        description="At AAR KAY INDUSTRIES, quality isn't just a goal — it's the foundation of every wire we deliver."
        backgroundImage="/images/Production.png"
      />

      {/* Quality Overview */}
      <section className="py-16 px-4 md:px-12 bg-white text-gray-800">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
            Commitment to Excellence
          </h2>
          <p className="text-lg leading-relaxed text-center max-w-3xl mx-auto mb-12">
            From sourcing high-purity electrolytic copper rod to delivering finished products, every process at AAR KAY INDUSTRIES is guided by strict quality protocols. We manufacture copper wires that meet or exceed national and international standards in conductivity, durability, and precision.
          </p>

          <div className="grid md:grid-cols-2 gap-10">
            <div className="bg-gray-50 rounded-2xl shadow p-6">
              <h3 className="text-xl font-semibold mb-4 text-green-900">
                🔬 Raw Material Testing
              </h3>
              <p>
                Electrolytic copper rod is inspected for purity, conductivity, and physical attributes before entering production to ensure a strong foundation for every product.
              </p>
            </div>

            <div className="bg-gray-50 rounded-2xl shadow p-6">
              <h3 className="text-xl font-semibold mb-4 text-green-900">
                ⚙️ In-Process Quality Checks
              </h3>
              <p>
                During wire drawing, annealing, and wrapping, we continuously monitor parameters like resistance, diameter uniformity, insulation adhesion, and surface finish.
              </p>
            </div>

            <div className="bg-gray-50 rounded-2xl shadow p-6">
              <h3 className="text-xl font-semibold mb-4 text-green-900">
                📈 Final Product Testing
              </h3>
              <p>
                {/* Every finished coil is tested for:
                <ul className="list-disc list-inside mt-2 text-sm text-gray-700">
                  <li>Resistance at 20°C</li>
                  <li>Thermal & mechanical strength</li>
                  <li>Surface smoothness & continuity</li>
                  <li>Insulation & water resistance</li>
                </ul> */}
                Every finished coil is thoroughly tested for resistance at 20°C, thermal and mechanical strength, surface smoothness, continuity, and insulation to ensure high durability and water-resistant performance.
              </p>
            </div>

            <div className="bg-gray-50 rounded-2xl shadow p-6">
              <h3 className="text-xl font-semibold mb-4 text-green-900">
                🧾 Batch-Wise Documentation
              </h3>
              <p>
                Each production batch is fully traceable and backed by test reports, ensuring accountability and transparency for all outgoing products.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="bg-white py-16 px-4 md:px-12">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-10">Certifications & Standards</h2>
          <p className="text-lg mb-12 max-w-3xl mx-auto text-gray-700">
            We conform to globally recognized standards to ensure that our wires are safe, sustainable, and high-performing across all industrial applications.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 items-center justify-center">
            {certifications.map((cert, index) => (
              <div key={index} className="flex flex-col items-center">
                <img
                  src={cert.image}
                  alt={cert.alt}
                  className="h-20 object-contain mb-2"
                />
                <span className="text-sm text-gray-800 font-medium">{cert.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Customization Focus
      <section className="py-16 bg-gray-50 px-4 md:px-12">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Customization & Customer Satisfaction
          </h2>
          <p className="text-lg text-gray-700 mb-8">
            We believe quality also means flexibility. Our solutions are built to match your exact requirements.
          </p>

          <ul className="grid sm:grid-cols-2 gap-6 text-left max-w-3xl mx-auto text-gray-700 text-base">
            <li className="flex items-start">
              <span className="w-2 h-2 mt-2 mr-3 bg-green-900 rounded-full flex-shrink-0"></span>
              Customized wire sizes and configurations
            </li>
            <li className="flex items-start">
              <span className="w-2 h-2 mt-2 mr-3 bg-green-900 rounded-full flex-shrink-0"></span>
              Special insulation or resistance specs on request
            </li>
            <li className="flex items-start">
              <span className="w-2 h-2 mt-2 mr-3 bg-green-900 rounded-full flex-shrink-0"></span>
              Flexible packaging and private labeling options
            </li>
            <li className="flex items-start">
              <span className="w-2 h-2 mt-2 mr-3 bg-green-900 rounded-full flex-shrink-0"></span>
              Dedicated customer support & technical guidance
            </li>
          </ul>
        </div>
      </section> */}

      <Footer />
    </div>
  );
};

export default Quality;
