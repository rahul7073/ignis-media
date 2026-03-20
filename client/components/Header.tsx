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
      return;
    }

    const [path, hash] = href.split('#');

    // If we're already on home page, just scroll
    if (location.pathname === '/' && hash) {
      setTimeout(() => {
        const element = document.querySelector(`#${hash}`);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 0);
    } else if (path === '/') {
      // Navigate to home first, then scroll
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
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img
            src="https://cdn.builder.io/api/v1/image/assets%2F1cc8f68dafc342bcab518cbe4f3c04ef%2F95f8baca14ef4282b778fed309344861?format=webp&width=800&height=1200"
            alt="Ignis Ventures Media"
            className="h-10 w-auto"
          />
          <div className="flex flex-col">
            <h1 className="font-bold text-lg text-black">IGNIS VENTURES MEDIA</h1>
            <p className="text-xs text-gray-600 hidden sm:block">Digital Marketing & Political Strategy</p>
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
                  <ChevronDown size={16} className={`transition-transform duration-300 ${isServicesOpen ? 'rotate-180' : ''}`} />
                )}
              </button>

              {/* Dropdown Menu */}
              {item.hasDropdown && (
                <div
                  className={`absolute left-0 top-full pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 min-w-64`}
                  onMouseEnter={() => setIsServicesOpen(true)}
                  onMouseLeave={() => setIsServicesOpen(false)}
                >
                  <div className="bg-white border border-gray-200 rounded-lg shadow-xl overflow-hidden">
                    {/* Dropdown Header */}
                    <div className="bg-gradient-to-r from-red-600 to-red-700 px-4 py-3 border-b border-red-700/30">
                      <h3 className="text-white font-bold text-sm">Our Services</h3>
                    </div>

                    {/* Service Items */}
                    <div className="py-2">
                      {services.map((service) => (
                        <button
                          key={service.id}
                          onClick={() => {
                            handleNavClick('#services');
                            setIsServicesOpen(false);
                          }}
                          className="w-full px-4 py-3 text-left text-gray-700 hover:bg-red-50 hover:text-red-600 transition-colors text-sm font-medium border-l-2 border-transparent hover:border-red-600"
                        >
                          {service.label}
                        </button>
                      ))}
                    </div>

                    {/* Dropdown Footer */}
                    <div className="border-t border-gray-100 bg-gray-50 px-4 py-2">
                      <button
                        onClick={() => {
                          handleNavClick('#services');
                          setIsServicesOpen(false);
                        }}
                        className="w-full text-center text-xs font-bold text-red-600 hover:text-red-700 py-1 transition-colors"
                      >
                        VIEW ALL SERVICES →
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Desktop CTA Button */}
        <div className="hidden md:block">
          <button
            onClick={() => handleNavClick('#contact')}
            className="bg-red-600 hover:bg-red-700 text-white px-6 py-2.5 rounded-lg font-medium transition-all hover:shadow-lg hover:shadow-red-600/20"
          >
            Get Started
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden border-t border-gray-200 bg-white animate-fade-in-down">
          <div className="px-4 py-4 space-y-3">
            {navItems.map((item) => (
              <div key={item.label}>
                <button
                  onClick={() => {
                    if (item.hasDropdown) {
                      setIsServicesOpen(!isServicesOpen);
                    } else {
                      handleNavClick(item.href);
                    }
                  }}
                  className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-red-600 rounded-lg transition-colors font-medium flex items-center justify-between"
                >
                  {item.label}
                  {item.hasDropdown && (
                    <ChevronDown size={16} className={`transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} />
                  )}
                </button>

                {/* Mobile Services Dropdown */}
                {item.hasDropdown && isServicesOpen && (
                  <div className="pl-4 space-y-1 mt-2 bg-gray-50 rounded-lg p-3">
                    {services.map((service) => (
                      <button
                        key={service.id}
                        onClick={() => {
                          handleNavClick('#services');
                          setIsOpen(false);
                          setIsServicesOpen(false);
                        }}
                        className="block w-full text-left px-3 py-2 text-sm text-gray-700 hover:bg-red-50 hover:text-red-600 rounded transition-colors"
                      >
                        • {service.label}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <button
              onClick={() => handleNavClick('#contact')}
              className="w-full bg-red-600 hover:bg-red-700 text-white py-2.5 rounded-lg font-medium transition-all mt-4"
            >
              Get Started
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
