import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroOtherPage from '@/components/HeroOtherPage';
import { Eye, Target, Award, Users, Globe } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen">
      <Header />

      <HeroOtherPage
        title="About Us"
        subtitle="AAR KAY INDUSTRIES"
        description="Crafting Copper Excellence Since 1992"
        backgroundImage="/images/Production.png"
      />

      {/* Main Content */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Company Overview */}
            <div className="prose prose-lg max-w-none mb-16 text-black">
              <p className="text-lg leading-relaxed mb-6">
                AAR KAY INDUSTRIES is a leading manufacturer and supplier of premium copper winding wire products, proudly serving a wide array of industries with a focus on quality, precision, and trust. With deep-rooted values in craftsmanship, consistency, and innovation, we specialize in Submersible Copper Winding Wire and Bare Copper Wire.
              </p>

              <p className="text-lg leading-relaxed mb-6">
                Over the years, we have earned a reputation for delivering copper wire solutions that meet the highest standards of electrical performance and durability. Each wire we produce is manufactured using high-purity electrolytic copper rod and tested under stringent protocols to ensure long-term reliability across industrial applications.
              </p>

              <p className="text-lg leading-relaxed">
                Whether it’s powering motors, submersible pumps, transformers, or other industrial setups, AAR KAY INDUSTRIES stands for durability, conductivity, and trust in every coil.
              </p>
            </div>

            {/* Mission & Vision */}
            <div className="grid md:grid-cols-2 gap-12 mb-16">
              {/* Vision */}
              <div className="bg-green-900 text-white p-8 rounded-2xl">
                <div className="flex items-center mb-6">
                  <Eye className="h-8 w-8 mr-3 text-white/80" />
                  <h3 className="text-3xl font-bold">Our Vision</h3>
                </div>
                <p className="text-lg leading-relaxed opacity-90">
                  To become a globally recognized brand in the copper wire manufacturing industry by continuously innovating, upholding quality, and fostering long-term partnerships with customers based on trust, performance, and service excellence.
                </p>
              </div>

              {/* Mission */}
              <div className="bg-green-900 text-white p-8 rounded-2xl">
                <div className="flex items-center mb-6">
                  <Target className="h-8 w-8 mr-3 text-white/80" />
                  <h3 className="text-3xl font-bold">Our Mission</h3>
                </div>
                <p className="text-lg leading-relaxed opacity-90">
                  To deliver top-quality copper wire products that meet global performance standards, while maintaining a customer-centric approach through timely delivery, technical reliability, and ethical business practices.
                </p>
              </div>
            </div>

            {/* Company History */}
            <div className="mb-16">
              <h3 className="text-3xl font-bold text-center text-black mb-10">
                Our History
              </h3>
              <p className="text-lg text-black/80 leading-relaxed">
                The roots of AAR KAY INDUSTRIES trace back to 1992, when Mr. Krishanlal Agrawal began manufacturing copper wires in Mathura, U.P., under the name Mittal Wire Industries. Built on quality and integrity, the business quickly gained recognition in the local market.
              </p>
              <p className="text-lg text-black/80 leading-relaxed mt-4">
                In 2012, his son, Mr. Rajesh Agrawal, established AAR KAY INDUSTRIES in Delhi to expand operations and modernize production. Since then, we've grown into a trusted brand serving OEMs, industrial manufacturers, and wholesale buyers across India and abroad — known for our precision, purity, and performance.
              </p>
            </div>

            {/* What Sets Us Apart */}
            <div className="mb-16">
              <h3 className="text-3xl font-bold text-center text-black mb-12">
                What Sets Us Apart
              </h3>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center p-6 rounded-xl bg-white shadow-lg border border-gray-100">
                  <Award className="h-12 w-12 text-green-900 mx-auto mb-4" />
                  <h4 className="text-xl font-semibold text-black mb-3">Proven Quality</h4>
                  <p className="text-black/70">
                    Every product is backed by rigorous in-house testing, conforming to ISO, ISI, and IEC standards.
                  </p>
                </div>

                <div className="text-center p-6 rounded-xl bg-white shadow-lg border border-gray-100">
                  <Globe className="h-12 w-12 text-green-900 mx-auto mb-4" />
                  <h4 className="text-xl font-semibold text-black mb-3">Nationwide Reach</h4>
                  <p className="text-black/70">
                    Serving industrial buyers, pump manufacturers, and exporters with prompt delivery and reliable logistics.
                  </p>
                </div>

                <div className="text-center p-6 rounded-xl bg-white shadow-lg border border-gray-100">
                  <Users className="h-12 w-12 text-green-900 mx-auto mb-4" />
                  <h4 className="text-xl font-semibold text-black mb-3">Customer Trust</h4>
                  <p className="text-black/70">
                    Built on word-of-mouth, we are proud partners to OEMs, dealers, and manufacturing firms nationwide.
                  </p>
                </div>
              </div>
            </div>

            {/* Stats (Optional Enhancement) */}
            <div className="bg-green-900/5 p-8 rounded-2xl">
              <h3 className="text-3xl font-bold text-center text-black mb-8">
                Our Legacy in Numbers
              </h3>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold text-green-900 mb-2">1992</div>
                  <div className="text-black/70">Started in Mathura</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-green-900 mb-2">2012</div>
                  <div className="text-black/70">Founded AAR KAY INDUSTRIES</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-green-900 mb-2">100%</div>
                  <div className="text-black/70">Quality Assurance</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-green-900 mb-2">30+</div>
                  <div className="text-black/70">Years in the Industry</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
