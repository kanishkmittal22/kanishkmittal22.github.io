import { Award, Settings, Users, FileCheck } from 'lucide-react';

const WhyChooseUs = () => {
  const features = [
    {
      icon: Award,
      title: '30+ Years of Manufacturing Expertise',
      description:
        'Established in 1992, AAR KAY INDUSTRIES brings decades of experience and precision to copper wire manufacturing.'
    },
    {
      icon: Settings,
      title: 'Customized Specifications Available',
      description:
        'We understand unique industrial needs — offering tailor-made wire gauges, wrapping options, and packaging formats.'
    },
    {
      icon: Users,
      title: 'Trusted by OEMs & Exporters',
      description:
        'Leading OEMs, panel builders, and global buyers rely on our wires for their durability and consistent quality.'
    },
    {
      icon: FileCheck,
      title: 'Tested. Certified. Proven.',
      description:
        'Each coil is supported by lab test reports, meeting ISO, ISI, and RoHS standards for performance and safety.'
    }
  ];

  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-white font-semibold text-sm uppercase tracking-wider">
            Why Choose Us
          </span>
          <h2 className="text-4xl font-bold text-white mt-2 mb-6">
            What Sets AAR KAY INDUSTRIES Apart
          </h2>
          <p className="text-white/80 max-w-2xl mx-auto text-lg">
            Engineered to outperform — our wires are built on legacy, backed by certification, and trusted across industries.
          </p>
        </div>

        <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <div
              key={index}
              className="text-center bg-white/10 backdrop-blur-sm rounded-xl p-8 hover:bg-white/20 transition-all duration-300 group"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mb-6 group-hover:bg-white/30 transition-colors duration-300">
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">
                {feature.title}
              </h3>
              <p className="text-white/90 leading-relaxed text-sm">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
