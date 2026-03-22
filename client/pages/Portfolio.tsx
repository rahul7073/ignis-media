import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ExternalLink, Award } from 'lucide-react';

export default function Portfolio() {
  const projects = [
    {
      id: 1,
      title: 'Santosh Eye Hospital - Digital Campaign',
      category: 'Healthcare Marketing',
      description: 'Comprehensive digital marketing campaign for eye hospital including social media, paid ads, and content marketing.',
      results: '150% increase in patient inquiries',
      client: 'Santosh Eye Hospital',
      tags: ['Digital Marketing', 'Healthcare', 'Ads']
    },
    {
      id: 2,
      title: 'Paragon Career Institute - Admission Drive',
      category: 'Education Marketing',
      description: 'Full-scale admission campaign for career institute with multi-channel approach and targeted reach.',
      results: '200+ student enrollments',
      client: 'Paragon Career Institute',
      tags: ['Education', 'Content Marketing', 'Social Media']
    },
    {
      id: 3,
      title: 'Political Campaign Strategy & Execution',
      category: 'Political Strategy',
      description: 'Complete political campaign management including digital targeting, social media, and voter engagement.',
      results: '35% voter turnout increase',
      client: 'Political Client',
      tags: ['Political Strategy', 'Digital Targeting', 'Campaign']
    },
    {
      id: 4,
      title: 'Krishna Multispeciality Hospital - Branding',
      category: 'Healthcare Branding',
      description: 'Complete hospital branding including logo design, website development, and marketing collaterals.',
      results: '120% website traffic growth',
      client: 'Krishna Hospital',
      tags: ['Branding', 'Web Development', 'Design']
    },
    {
      id: 5,
      title: 'Vijay International School - Media Management',
      category: 'School Media',
      description: 'Comprehensive school media management with video content creation, social media, and admission marketing.',
      results: '80% increase in school visibility',
      client: 'Vijay International School',
      tags: ['School Media', 'Video Content', 'Marketing']
    },
    {
      id: 6,
      title: 'GEM Classes - Success Campaign',
      category: 'Education Marketing',
      description: 'Student success showcase campaign with content creation and social media promotion.',
      results: '250+ qualified leads',
      client: 'GEM Classes',
      tags: ['Education', 'Content Marketing', 'Social Media']
    },
    {
      id: 7,
      title: 'Dr. Nirbhay - Pain Clinic Marketing',
      category: 'Healthcare Marketing',
      description: 'Specialized healthcare marketing for pain management clinic with patient testimonials and education.',
      results: '180 new patient appointments',
      client: "Dr. Nirbhay's Pain Clinic",
      tags: ['Healthcare', 'Marketing', 'Digital']
    },
    {
      id: 8,
      title: 'RCI Education Hub - Complete Branding',
      category: 'Education Branding',
      description: 'Comprehensive branding and marketing for educational institution from logo to full campaign.',
      results: 'thousand student enrollment',
      client: 'RCI Education Hub',
      tags: ['Branding', 'Marketing', 'Education']
    }
  ];

  const stats = [
    { number: '300+', label: 'Projects Completed' },
    { number: '50+', label: 'Happy Clients' },
    { number: '5+', label: 'Years Experience' },
    { number: '500%', label: 'Avg Client Growth' }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-black to-red-950 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">Our Portfolio</h1>
          <p className="text-xl text-gray-300">Showcase of successful projects and campaigns across digital marketing, healthcare, education, and political strategy</p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, idx) => (
              <div key={idx} className="text-center bg-white p-8 rounded-xl border border-gray-200">
                <p className="text-4xl font-bold text-red-600 mb-2">{stat.number}</p>
                <p className="text-gray-600 font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-black mb-12">Featured Projects</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project) => (
              <div key={project.id} className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                {/* Project Header */}
                <div className="bg-gradient-to-r from-red-600 to-red-800 p-6 text-white">
                  <div className="mb-3">
                    <span className="inline-block bg-white/20 px-3 py-1 rounded-full text-xs font-bold">
                      {project.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <p className="text-gray-600 mb-4">{project.description}</p>

                  {/* Results */}
                  <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-4">
                    <div className="flex items-center gap-2 text-green-700">
                      <Award size={18} />
                      <span className="font-bold">{project.results}</span>
                    </div>
                  </div>

                  {/* Client */}
                  <p className="text-sm text-gray-600 mb-4">
                    <strong>Client:</strong> {project.client}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, idx) => (
                      <span key={idx} className="bg-red-100 text-red-700 px-3 py-1 rounded-full text-xs font-medium">
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* View Project */}
                  <button className="w-full bg-red-600 hover:bg-red-700 text-white py-2 rounded-lg font-bold flex items-center justify-center gap-2 transition-colors">
                    View Case Study
                    <ExternalLink size={18} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Summary */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-black mb-12 text-center">Industries We Serve</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: 'Healthcare', count: '15+ projects', desc: 'Hospitals, clinics, medical services' },
              { title: 'Education', count: '20+ projects', desc: 'Schools, colleges, institutes' },
              { title: 'E-commerce', count: '25+ projects', desc: 'Online stores, marketplaces' },
              { title: 'Politics', count: '12+ projects', desc: 'Campaigns, election management' }
            ].map((industry, idx) => (
              <div key={idx} className="bg-white p-6 rounded-xl text-center border border-gray-200 hover:shadow-lg transition-all">
                <h3 className="text-xl font-bold text-black mb-2">{industry.title}</h3>
                <p className="text-red-600 font-bold text-lg mb-2">{industry.count}</p>
                <p className="text-gray-600 text-sm">{industry.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-red-600 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Want to See More?</h2>
          <p className="text-lg mb-6 opacity-90">Let's discuss how we can help your business grow and achieve your goals</p>
          <button className="bg-white text-red-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-bold transition-colors">
            Get Started
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
