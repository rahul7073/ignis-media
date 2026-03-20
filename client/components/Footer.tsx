import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <img
                src="https://res.cloudinary.com/drrj8rl9n/image/upload/v1774023651/WhatsApp_Image_2026-03-20_at_9.35.47_PM_sxvzll.jpg"
                alt="IGNIS VENTURES MEDIA"
                className="h-10 w-auto"
              />
              <h3 className="font-bold text-lg">Ignis Ventures</h3>
            </div>
            <p className="text-gray-400 text-sm mb-4">Igniting Digital Growth & Political Impact</p>
            <div className="flex gap-3">
              <a href="https://www.facebook.com/share/18FKwypUL6/?mibextid=wwXIfr" className="p-2 bg-red-600/20 hover:bg-red-600 rounded-lg transition-colors">
                <Facebook size={16} />
              </a>
              <a href="#" className="p-2 bg-red-600/20 hover:bg-red-600 rounded-lg transition-colors">
                <Twitter size={16} />
              </a>
              <a href="#" className="p-2 bg-red-600/20 hover:bg-red-600 rounded-lg transition-colors">
                <Linkedin size={16} />
              </a>
              <a href="https://www.instagram.com/ignis_ventures_?igsh=eW1mbXM0bWY1Zzd1&utm_source=qr" className="p-2 bg-red-600/20 hover:bg-red-600 rounded-lg transition-colors">
                <Instagram size={16} />
              </a>
            </div>
          </div>

          {/* Services */}
          <div className="col-span-1">
            <h4 className="font-bold text-lg mb-4 text-white">Services</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#services" className="hover:text-red-400 transition-colors">Digital Marketing</a></li>
              <li><a href="#services" className="hover:text-red-400 transition-colors">Creative Services</a></li>
              <li><a href="#services" className="hover:text-red-400 transition-colors">Web Development</a></li>
              <li><a href="#services" className="hover:text-red-400 transition-colors">Political Campaigns</a></li>
              <li><a href="#services" className="hover:text-red-400 transition-colors">School Media</a></li>
            </ul>
          </div>

          {/* Company */}
          <div className="col-span-1">
            <h4 className="font-bold text-lg mb-4 text-white">Company</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#about" className="hover:text-red-400 transition-colors">About Us</a></li>
              <li><Link to="/careers" className="hover:text-red-400 transition-colors">Careers</Link></li>
              <li><Link to="/portfolio" className="hover:text-red-400 transition-colors">Portfolio</Link></li>
              <li><Link to="/branches" className="hover:text-red-400 transition-colors">Branches</Link></li>
              <li><Link to="/blog" className="hover:text-red-400 transition-colors">Blog</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="col-span-1">
            <h4 className="font-bold text-lg mb-4 text-white">Contact</h4>
            <div className="space-y-3 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <Phone size={16} className="text-red-600" />
                <span>+91 9783952367 , 7733952367</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={16} className="text-red-600" />
                <span>ignisventuresmedia@gmail.com</span>
              </div>
              <div className="flex items-start gap-2">
                <MapPin size={16} className="text-red-600 mt-0.5" />
                <span>India</span>
              </div>
              <div className="flex items-center gap-2 mt-4">
                <MessageCircle size={16} className="text-red-600" />
                <a href="#" className="hover:text-red-400 transition-colors">WhatsApp</a>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-gray-400 text-sm text-center md:text-left">
              © {currentYear} Ignis Ventures Media. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm text-gray-400">
              <Link to="/privacy-policy" className="hover:text-red-400 transition-colors">Privacy Policy</Link>
              <Link to="/terms-conditions" className="hover:text-red-400 transition-colors">Terms & Conditions</Link>
              <Link to="/cookies-policy" className="hover:text-red-400 transition-colors">Cookies Policy</Link>
            </div>
          </div>
        </div>
      </div>

      {/* WhatsApp Floating Button */}
      <div className="fixed bottom-6 right-6 z-40">
        <a
          href="https://wa.me/917733952367?text=Hello%20sir%20%2C%20I%20need%20a%20service%20.%20Please%20help%20me"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center w-14 h-14 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-110 animate-bounce"
          title="Chat with us on WhatsApp"
        >
          <MessageCircle size={24} />
        </a>
      </div>
    </footer>
  );
};
