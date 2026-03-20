import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

export default function Branches() {
  const branches = [
    {
      id: 1,
      name: 'ignis venture media',
      address: 'Paota Kotputli Behror',
      phone: '+91 7733952367',
      email: 'ignisventuresmedia@gmai.com',
      services: 'Full Services',
      hours: '9:00 AM - 6:00 PM',
      Day:'Monday-Saturday',
      team: '25+ professionals',
      coordinates: { lat: 28.0, lng: 75.5 }
    },
    {
      id: 2,
      name: 'ignis ventures media',
      address: 'Mehendra Haryana',
      phone: '+91 9783952367',
      email: 'ignisventuresmedia@gmai.com',
      services: 'Marketing, Design, Development',
      hours: '9:00 AM - 6:00 PM',
      Day: 'Monday-Saturday',
      team: '15+ professionals',
      coordinates: { lat: 26.9124, lng: 75.7873 }
    },
    // {
    //   id: 3,
    //   name: 'Branch - Delhi',
    //   address: 'Tech Park, New Delhi, India',
    //   phone: '+91 9876543211',
    //   email: 'delhi@ignisventures.com',
    //   services: 'Strategy, Campaign Management',
    //   hours: '9:00 AM - 7:00 PM',
    //   team: '10+ professionals',
    //   coordinates: { lat: 28.7041, lng: 77.1025 }
    // }
  ];

  const expandedServices = [
    'Digital Marketing Services',
    'Creative & Media Production',
    'Web & App Development',
    'Political Campaign Management',
    'School Media Solutions',
    'Branding & Logo Design',
    'Video Production & Editing',
    'Social Media Management',
    'Graphic Design',
    '24/7 Customer Support'
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-black to-red-950 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">Our Branches</h1>
          <p className="text-xl text-gray-300">Connect with us at any of our locations across India</p>
        </div>
      </section>

      {/* Branches Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {branches.map((branch, idx) => (
              <div key={branch.id} className="bg-white border-2 border-gray-200 rounded-xl overflow-hidden hover:border-red-600 transition-all duration-300">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                  {/* Left - Info */}
                  <div className="p-8 bg-gray-50">
                    <div className="mb-2">
                      {idx === 0 && (
                        <span className="inline-block bg-red-600 text-white px-4 py-1 rounded-full text-sm font-bold mb-4">
                          Main Office
                        </span>
                      )}
                    </div>
                    
                    <h3 className="text-3xl font-bold text-black mb-6">{branch.name}</h3>

                    {/* Contact Details */}
                    <div className="space-y-4 mb-8">
                      <div className="flex items-start gap-4">
                        <MapPin className="text-red-600 mt-1 flex-shrink-0" size={20} />
                        <div>
                          <p className="font-bold text-black mb-1">Address</p>
                          <p className="text-gray-700">{branch.address}</p>
                        </div>
                      </div>

                      <div className="flex items-start gap-4">
                        <Phone className="text-red-600 mt-1 flex-shrink-0" size={20} />
                        <div>
                          <p className="font-bold text-black mb-1">Phone</p>
                          <p className="text-gray-700">{branch.phone}</p>
                        </div>
                      </div>

                      <div className="flex items-start gap-4">
                        <Mail className="text-red-600 mt-1 flex-shrink-0" size={20} />
                        <div>
                          <p className="font-bold text-black mb-1">Email</p>
                          <p className="text-gray-700">{branch.email}</p>
                        </div>
                      </div>

                      <div className="flex items-start gap-4">
                        <Clock className="text-red-600 mt-1 flex-shrink-0" size={20} />
                        <div>
                          <p className="font-bold text-black mb-1">Working Hours</p>
                          <p className="text-gray-700">{branch.hours}</p>
                        </div>
                      </div>
                    </div>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row gap-3">
                      <a href={`tel:${branch.phone.replace(/\s+/g, '')}`} className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg font-bold text-center transition-colors">
                        Call Us
                      </a>
                      <a href={`mailto:${branch.email}`} className="border-2 border-red-600 text-red-600 hover:bg-red-50 px-4 py-2 rounded-lg font-bold text-center transition-colors">
                        Email Us
                      </a>
                    </div>
                  </div>

                  {/* Right - Details Card */}
                  <div className="p-8 bg-gradient-to-br from-red-50 to-white">
                    <h4 className="text-xl font-bold text-black mb-4">Branch Details</h4>

                    <div className="space-y-6">
                      <div>
                        <p className="text-sm text-gray-600 font-bold mb-2 uppercase">Team Size</p>
                        <p className="text-lg font-bold text-black">{branch.team}</p>
                      </div>

                      <div>
                        <p className="text-sm text-gray-600 font-bold mb-2 uppercase">Services Available</p>
                        <p className="text-gray-700">{branch.services}</p>
                      </div>

                      <div>
                        <p className="text-sm text-gray-600 font-bold mb-4 uppercase">Specializations</p>
                        <div className="space-y-2">
                          {expandedServices.slice(0, 4).map((service, sIdx) => (
                            <div key={sIdx} className="flex items-center gap-2">
                              <div className="w-2 h-2 bg-red-600 rounded-full"></div>
                              <span className="text-gray-700">{service}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <button className="w-full bg-black hover:bg-gray-900 text-white py-2 rounded-lg font-bold transition-colors mt-6">
                        Schedule Visit
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Available */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-black mb-12 text-center">Services Available at All Branches</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {expandedServices.map((service, idx) => (
              <div key={idx} className="bg-white p-6 rounded-xl border border-gray-200 hover:shadow-lg transition-all">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white font-bold">✓</span>
                  </div>
                  <p className="text-gray-700 font-medium">{service}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Coming Soon */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-black mb-4">Expanding Soon!</h2>
          <p className="text-lg text-gray-600 mb-8">We're opening new branches in major cities across India. Stay tuned for announcements!</p>
          <button className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-lg font-bold transition-colors">
            Notify Me
          </button>
        </div>
      </section>

      {/* Map Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-black mb-8 text-center">Find Us on the Map</h2>
          <div className="bg-gray-200 h-96 rounded-xl flex items-center justify-center">
            <div className="text-center">
              <MapPin size={48} className="text-red-600 mx-auto mb-3" />
              <p className="text-gray-600">Interactive map coming soon...</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
