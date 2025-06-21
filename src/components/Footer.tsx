
import { Mail, MapPin, Phone, Smartphone } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Products', href: '/product' },
    { label: 'Quality', href: '/quality' },
    { label: 'Contact', href: '/contact' }
  ];

  const products = [
    { label: 'Submersible Copper Winding Wire', href: '/product/submersible-copper-winding-wire' },
    { label: 'Bare Copper Wire', href: '/product/bare-copper-wire' }
  ];


  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-[2fr_1fr_1fr_2fr] gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="font-['Playfair_Display'] text-2xl font-bold text-forest-green">
              AAR KAY INDUSTRIES
            </div>
            <p className="text-gray-300 leading-relaxed">
              AAR KAY INDUSTRIES is committed to manufacturing premium copper winding wires with
              unwavering attention to quality, precision, and customer satisfaction. Backed by
              decades of expertise, we deliver consistent performance you can trust.
              </p>
            {/* <div className="space-y-2">
              <div className="flex items-center space-x-2 text-gray-300">
                <Mail size={16} />
                <span className="text-sm">kansonimpex@gmail.com</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-300">
                <Phone size={16} />
                <span className="text-sm">+91 9582791407</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-300">
                <MapPin size={16} />
                <span className="text-sm">Delhi, India</span>
              </div>
            </div> */}
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="text-gray-300 hover:text-forest-green transition-colors duration-200 text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Our Products</h3>
            <ul className="space-y-2">
              {products.map((product, index) => (
                <li key={index}>
                  <a 
                    href={product.href}
                    className="text-gray-300 hover:text-forest-green transition-colors duration-200 text-sm"
                  >
                    {product.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>


          {/* Office */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Office</h3>
            
            <div className="flex items-start gap-3 mb-3">
              <MapPin className="mt-1" size={50} />
              <p>458/466, Shambhunath Compound, Street No. 8, Friends Colony, Jhilmil Industrial Area, Delhi- 110095, India.</p>
            </div>

            <div className="flex items-start gap-3 mb-3">
              <Mail className="mt-1" size={25} />
              <div>
                <p>aarkayindustries2013@gmail.com</p>
              </div>
            </div>

            <div className="flex items-start gap-3 mb-3">
              <Phone className="mt-1" size={25} />
              <p><strong>9582791407</strong>, <strong>9310155801</strong></p>
            </div>

            {/* <div className="flex items-start gap-3">
              <Smartphone className="mt-1" size={20} />
              <p><strong>+91 8817 408 791</strong></p>
            </div> */}
          </div>

          
          {/* Certifications */}
          {/* <div>
            <h3 className="font-semibold text-lg mb-4">Certifications</h3>
            <div className="grid grid-cols-2 gap-4">
              {['ISO 22000', 'HACCP', 'Organic India', 'FSSAI'].map((cert, index) => (
                <div key={index} className="bg-gray-800 rounded-lg p-3 text-center">
                  <div className="text-xs font-medium text-forest-green">{cert}</div>
                </div>
              ))}
            </div>
            <div className="mt-6">
              <h4 className="font-medium mb-2">Follow Us</h4>
              <div className="flex space-x-4">
                <a 
                  href="#" 
                  className="text-gray-300 hover:text-forest-green transition-colors duration-200"
                  aria-label="LinkedIn"
                >
                  LinkedIn
                </a>
                <a 
                  href="#" 
                  className="text-gray-300 hover:text-forest-green transition-colors duration-200"
                  aria-label="Instagram"
                >
                  Instagram
                </a>
              </div>
            </div>
          </div> */}

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © {currentYear} AAR KAY INDUSTRIES. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-forest-green transition-colors duration-200">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-forest-green transition-colors duration-200">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
