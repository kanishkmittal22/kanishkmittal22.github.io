import React from 'react';
import { PhoneCall } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function CallToActionBanner() {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <div className="bg-forest-green rounded-2xl shadow-lg px-8 py-6 flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0 md:space-x-8 text-white">
          {/* Icon + Contact */}
          <div className="flex items-center space-x-4">
            <div className="flex items-center justify-center w-16 h-16 rounded-full bg-white text-forest-green">
              <PhoneCall className="w-8 h-8" />
            </div>
            <div>
              <span className="text-sm font-semibold">Call us at</span>
              <h4 className="text-lg font-bold">
                <a href="tel:+917410105582" className="hover:underline">
                  +91 7410105582
                </a>
              </h4>
            </div>
          </div>

          {/* Headline */}
          <h3 className="text-center md:text-left text-xl md:text-2xl font-semibold leading-tight">
            Ready to experience the quality and <br /> reliability of Sonai Exports?
          </h3>

          {/* Button */}
          <div>
            <Link to="/contact">
              <button className="bg-white text-black border border-black font-semibold px-6 py-3 rounded-md hover:bg-gray-100 transition">
                Get A Quote&nbsp;<span className="inline-block">&rarr;</span>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
