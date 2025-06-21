const certifications = [
  {
    name: 'ISO 9001:2015',
    description: 'Quality Management System',
    image: '/Logos Photo/ISO.png'
  },
  {
    name: 'ISI Certified',
    description: 'Products Marked by Bureau of Indian Standards',
    image: '/Logos Photo/ISI.png'
  },
  {
    name: 'RoHS Compliant',
    description: 'Restriction of Hazardous Substances',
    image: '/Logos Photo/RoHS.jpg'
  },
  {
    name: 'IEC / IS Standards',
    description: 'Electrical Standards Conformance',
    image: '/Logos Photo/IEC.png'
  }
];

const QualitySection = () => {
  return (
    <section id="quality" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6">
            <div>
              <span className="text-green-900 font-semibold text-sm uppercase tracking-wider">
                Quality & Compliance
              </span>
              <h2 className="font-['Playfair_Display'] text-4xl font-bold text-black mt-2 mb-6">
                Built on Standards. Delivered with Confidence.
              </h2>
            </div>

            <p className="text-black/80 text-lg leading-relaxed">
              At AAR KAY INDUSTRIES, we don’t just promise quality — we prove it at every stage. Using
              high-purity electrolytic copper, our wires undergo stringent quality checks and conform to
              globally recognized manufacturing standards to ensure performance, safety, and reliability.
            </p>

            <ul className="space-y-3">
              <li className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-green-900 rounded-full"></div>
                <span className="text-black/80">ISO 9001:2015 Certified Quality Management</span>
              </li>
              <li className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-green-900 rounded-full"></div>
                <span className="text-black/80">Compliance with IS & IEC Electrical Standards</span>
              </li>
              <li className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-green-900 rounded-full"></div>
                <span className="text-black/80">RoHS Compliance for Environmental Safety</span>
              </li>
              <li className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-green-900 rounded-full"></div>
                <span className="text-black/80">ISI Marked Products for Guaranteed Trust</span>
              </li>
            </ul>
          </div>

          {/* Certifications */}
          <div className="grid grid-cols-2 sm:grid-cols-2 gap-6 items-center">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="bg-white rounded-lg p-4 shadow-lg hover:shadow-xl transition-shadow duration-300 text-center"
              >
                <img
                  src={cert.image}
                  alt={cert.name}
                  className="h-20 w-auto mx-auto mb-4 object-contain"
                />
                <h3 className="font-semibold text-black mb-1">{cert.name}</h3>
                <p className="text-black/70 text-xs">{cert.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default QualitySection;
