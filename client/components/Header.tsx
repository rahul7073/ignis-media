import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/#about' },
    { label: 'Services', href: '/#services', hasDropdown: true },
    { label: 'Gallery', href: '/#gallery' },
    { label: 'Testimonials', href: '/#testimonials' },
    { label: 'Contact', href: '/#contact' },
  ];

  const services = [
    { label: 'Digital Marketing Services', id: 'digital' },
    { label: 'Creative & Media Services', id: 'creative' },
    { label: 'Development Services', id: 'development' },
    { label: 'Political Campaign Management', id: 'political' },
    { label: 'School Media Solutions', id: 'school' },
  ];

  const handleNavClick = (href: string) => {
    setIsOpen(false);

    if (href === '/') {
      navigate('/');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    const [path, hash] = href.split('#');

    if (location.pathname === '/' && hash) {
      setTimeout(() => {
        const element = document.querySelector(`#${hash}`);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 0);
    } else if (path === '/') {
      navigate('/');
      setTimeout(() => {
        const element = document.querySelector(`#${hash}`);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b border-gray-200 shadow-sm">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">

        {/* 🔥 LOGO CLICK FIXED */}
        <div 
          className="flex items-center gap-2 cursor-pointer"
          onClick={() => {
            navigate('/');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
        >
          <img
            src="https://cdn.builder.io/api/v1/image/assets%2F1cc8f68dafc342bcab518cbe4f3c04ef%2F95f8baca14ef4282b778fed309344861?format=webp&width=800&height=1200"
            alt="Ignis Ventures Media"
            className="h-10 w-auto"
          />
          <div className="flex flex-col">
            <h1 className="font-bold text-lg text-black">
              IGNIS VENTURES MEDIA
            </h1>
            <p className="text-xs text-gray-600 hidden sm:block">
              Digital Marketing & Political Strategy
            </p>
          </div>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <div key={item.label} className="relative group">
              <button
                onClick={() => handleNavClick(item.href)}
                className="flex items-center gap-1 text-gray-700 hover:text-red-600 transition-colors font-medium text-sm py-2"
                onMouseEnter={() => item.hasDropdown && setIsServicesOpen(true)}
                onMouseLeave={() => item.hasDropdown && setIsServicesOpen(false)}
              >
                {item.label}
                {item.hasDropdown && (
                  <ChevronDown
                    size={16}
                    className={`transition-transform duration-300 ${
                      isServicesOpen ? 'rotate-180' : ''
                    }`}
                  />
                )}
              </button>

              {/* Dropdown */}
              {item.hasDropdown && (
                <div
                  className={`absolute left-0 top-full pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 min-w-64`}
                >
                  <div className="bg-white border border-gray-200 rounded-lg shadow-xl overflow-hidden">
                    <div className="bg-gradient-to-r from-red-600 to-red-700 px-4 py-3">
                      <h3 className="text-white font-bold text-sm">
                        Our Services
                      </h3>
                    </div>

                    <div className="py-2">
                      {services.map((service) => (
                        <button
                          key={service.id}
                          onClick={() => handleNavClick('#services')}
                          className="w-full px-4 py-3 text-left text-gray-700 hover:bg-red-50 hover:text-red-600 transition-colors text-sm font-medium"
                        >
                          {service.label}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="hidden md:block">
          <button
            onClick={() => handleNavClick('#contact')}
            className="bg-red-600 hover:bg-red-700 text-white px-6 py-2.5 rounded-lg font-medium"
          >
            Get Started
          </button>
        </div>

        {/* Mobile Menu */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden border-t bg-white">
          <div className="px-4 py-4 space-y-3">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => handleNavClick(item.href)}
                className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg"
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};