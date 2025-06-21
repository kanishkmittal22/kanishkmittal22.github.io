import { useParams, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProductHero from '@/components/product/ProductHero';
import ProductApplications from '@/components/product/ProductApplications';
import ProductSpecifications from '@/components/product/ProductSpecifications';
import ProductFeatures from '@/components/product/ProductFeatures';
import ProductSizes from '@/components/product/ProductSizes';
import ProductCertifications from '@/components/product/ProductCertifications';
import ProductCTA from '@/components/product/ProductCTA';

const ProductDetail = () => {
  const { productId } = useParams();
  const navigate = useNavigate();

  const products = {
    "submersible-copper-winding-wire": {
      type: "submersible",
      name: "Submersible Copper Winding Wire",
      image: "/images/SCWW.png",
      description:
        "Our Submersible Copper Winding Wire is engineered to deliver outstanding electrical performance and durability in submerged environments. Designed specifically for submersible pump motors, these wires are manufactured using high-conductivity electrolytic grade copper rod and insulated using a high-quality multilayer wrapping process. At AAR KAY INDUSTRIES, we utilize advanced production techniques to ensure superior mechanical strength, moisture resistance, and thermal endurance. These wires are manufactured in compliance with IS: 8783 standards and are ideal for long-term underwater applications where reliability is non-negotiable.",
      applications: [
        "Submersible pump motors in domestic, agricultural, and industrial systems",
        "Openwell and borewell motors",
        "Underwater pumps requiring high insulation and durability"
        // "OEMs and pump manufacturers needing reliable winding solutions"
      ],
      features: [
        {
          title: "Pump Cost Savings",
          details:
            "Designed to reduce frictional losses and space usage, leading to up to 25% savings in submersible pump costs."
        },
        {
          title: "Tear Resistant Insulation",
          details:
            "Biaxially oriented insulation structure makes tear propagation difficult, ensuring high durability."
        },
        {
          title: "High Dielectric Strength",
          details:
            "Multi-layer insulation ensures strong dielectric performance and maintains concentric alignment around the conductor."
        },
        {
          title: "Superior Mechanical Strength",
          details:
            "Highly resistant to cut-through and abrasion; thin cross-section withstands stress and physical abuse effectively."
        },
        {
          title: "Minimal Current Leakage",
          details:
            "Exceptional insulation resistance even at high temperatures, keeping current leakage to an absolute minimum."
        },
        {
          title: "Easy Motor Winding",
          details:
            "Smaller overall diameter compared to PVC wires reduces winding resistance, making motor winding quicker & easier."
        },
        {
          title: "High Tensile Strength",
          details:
            "Insulation enhances tensile strength, supporting the conductor at stress points during stretching or handling."
        },
        {
          title: "Withstands Up to 130°C",
          details:
            "Performs at continuous temperatures from 60°C to 105°C and short-term peaks up to 130°C."
        },
        {
          title: "Extended Service Life",
          details:
            "Biaxially oriented synthetic film insulation ensures long-lasting durability even under harsh operating conditions."
        }
      ],
      sizes: {
        headers: ["Nominal Conductor Dia. (mm)", "Lesser OD (mm)", "Standard NOD (mm)", "Conductor Resistance at 20°C (Ω/km)"],
        rows: [
          ["0.40", "0.70", "0.80", "140.0"],
          ["0.45", "0.75", "0.85", "112.0"],
          ["0.50", "0.80", "0.90", "89.6"],
          ["0.55", "0.85", "0.95", "74.7"],
          ["0.60", "0.90", "1.00", "62.2"],
          ["0.65", "0.95", "1.05", "53.5"],
          ["0.70", "1.00", "1.10", "45.7"],
          ["0.75", "1.05", "1.15", "40.2"],
          ["0.80", "1.10", "1.20", "35.0"],
          ["0.85", "1.15", "1.25", "31.3"],
          ["0.90", "1.20", "1.30", "27.6"],
          ["0.95", "1.25", "1.35", "25.1"],
          ["1.00", "1.30", "1.40", "22.4"],
          ["1.10", "1.40", "1.50", "18.5"],
          ["1.20", "1.50", "1.65", "15.5"],
          ["1.30", "1.60", "1.75", "13.2"],
          ["1.40", "1.70", "1.85", "11.4"],
          ["1.50", "", "1.95", "9.95"],
          ["1.60", "", "2.15", "8.75"],
          ["1.70", "", "2.25", "7.75"],
          ["1.80", "", "2.35", "6.91"],
          ["1.90", "", "2.45", "6.20"],
          ["2.00", "", "2.60", "5.60"],
          ["2.10", "", "2.70", "5.08"],
          ["2.20", "", "2.80", "4.63"],
          ["2.30", "", "2.90", "4.23"],
          ["2.40", "", "3.00", "3.89"],
          ["2.50", "", "3.10", "3.58"],
          ["2.60", "", "3.20", "3.31"],
          ["2.70", "", "3.30", "3.07"],
          ["2.80", "", "3.40", "2.86"],
          ["2.90", "", "3.50", "2.66"],
          ["3.00", "", "3.60", "2.49"]
        ]
      },
      certifications: [
        "ISO 9001:2015 Certified",
        "ISI Marked (IS:8783)",
        "RoHS Compliant",
        "In-house QC Tested",
        "OEM Approved"
      ]
    },
    "bare-copper-wire": {
      type: "bare",
      name: "Bare Copper Wire",
      image: "/images/CopperWire2.png",
      description:
        "At AAR KAY INDUSTRIES, we manufacture high-conductivity Bare Copper Wires using 99.98% pure electrolytic copper rod. These wires are produced through continuous drawing and annealing lines, ensuring consistent diameter, superior conductivity, and excellent surface finish. They are essential conductors in a wide range of electrical and industrial applications. Our Bare Copper Wires are available in multiple hardness grades and conform to relevant Indian and international standards for resistance, purity, and performance.",
      applications: [
        "Grounding and earthing systems",
        "Power transmission and distribution",
        "Cable manufacturing",
        "Electrical panel wiring and busbars",
        "Submersible and transformer windings",
        "Industrial machine connections"
      ],
      features: [
        {
          title: "Variants Offered",
          details: [
            "Hard-Drawn – Ideal for overhead transmission and structural use",
            "Soft/Annealed – Excellent flexibility for windings and panels",
            "Medium-Hard – Balanced mechanical strength and flexibility"
          ]
        },
        "Consistent Diameter via Continuous Drawing",
        "High Electrical Conductivity",
        "Excellent Surface Finish",
        "Conforms to BIS / IEC Norms"
      ],
      sizes: {
        headers: ["Cross Section (Sq mm)", "Max Resistance at 20°C (Ω/km)"],
        rows: [
          ["0.5", "36.0"],
          ["0.75", "24.5"],
          ["1.0", "18.1"],
          ["1.5", "12.1"],
          ["2.5", "7.4"],
          ["4", "4.6"],
          ["6", "3.1"],
          ["10", "1.8"],
          ["16", "1.2"],
          ["25", "0.727"],
          ["35", "0.524"],
          ["50", "0.387"],
          ["70", "0.268"],
          ["95", "0.193"],
          ["120", "0.153"],
          ["150", "0.124"]
        ]
      },
      certifications: [
        "ISO 9001:2015 Certified",
        "ISI Marked (where applicable)",
        "RoHS Compliant",
        "BIS & IEC Conformance",
        "Batch-Wise Testing Reports"
      ]
    }
  };

  const product = products[productId as keyof typeof products];

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Product Not Found</h1>
          <Button onClick={() => navigate('/')} className="bg-green-900 text-white">
            Return Home
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Header />
      <ProductHero product={product} />
      {/* 🎯 Conditional Sections */}
      {product.type === 'submersible' && (
        <section className="py-16 bg-white text-gray-800">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-3xl font-bold text-center text-black mb-6">
              Advanced 4-Layer Insulation Technology
            </h2>

            <p className="text-lg leading-relaxed mb-6">
              Our submersible copper winding wire features a robust 4-layer insulation system that offers exceptional
              moisture resistance, thermal stability, and mechanical durability—ideal for long-term submersion environments.
            </p>

            <div className="bg-gray-50 rounded-xl p-6 border border-gray-200 shadow-sm space-y-4">
              <h3 className="text-xl font-semibold text-black mb-2">Layer Composition</h3>
              <ul className="list-disc list-inside text-gray-700 text-base space-y-1">
                <li><strong>Layer 1 & 2:</strong> High-grade polyester film for superior electrical insulation</li>
                <li><strong>Layer 3:</strong> Opaque BOPP layer for enhanced abrasion resistance</li>
                <li><strong>Layer 4:</strong> Transparent BOPP layer for added insulation integrity and protection</li>
              </ul>
            </div>

            <p className="text-md text-gray-700 mt-6">
              <strong>Customization Available:</strong> We also offer customized insulation configurations tailored to your application needs.
            </p>
          </div>
        </section>
      )}
      {product.type === 'submersible' && <ProductFeatures features={product.features} />}
      {product.type === 'bare' && (
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="font-['Playfair_Display'] text-3xl font-bold text-gray-900 mb-8 text-center">
              Types Of Bare Copper Wire Available
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-gray-50  border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition">
                <h3 className="font-bold text-black mb-3">Hard-Drawn Bare Copper Wire</h3>
                <p className="text-gray-700 text-sm">Used in structural electrical applications and overhead transmission due to its higher tensile strength.</p>
              </div>
              <div className="bg-gray-50  border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition">
                <h3 className="font-bold text-black mb-3">Soft or Annealed Bare Copper Wire</h3>
                <p className="text-gray-700 text-sm">Offers excellent flexibility and is widely used in windings, electrical panels, and equipment requiring ease of bending.</p>
              </div>
              <div className="bg-gray-50  border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition">
                <h3 className="font-bold text-black mb-3">Medium-Hard Bare Copper Wire</h3>
                <p className="text-gray-700 text-sm">A balance between strength and flexibility—ideal for industrial uses needing moderate mechanical resistance.</p>
              </div>
            </div>
          </div>
        </section>
      )}
      <ProductSizes sizes={product.sizes} />


      {/* <ProductCertifications certifications={product.certifications} /> */}
      <ProductApplications applications={product.applications} />
      <ProductCTA />
      <Footer />
    </div>
  );
};

export default ProductDetail;
