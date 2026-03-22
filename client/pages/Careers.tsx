import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { MapPin, DollarSign, Briefcase, ArrowRight } from 'lucide-react';

export default function Careers() {
  const openings = [
    {
      id: 1,
      title: 'Senior Digital Marketing Executive',
      department: 'Digital Marketing',
      location: 'Kotputli, Rajasthan',
      type: 'Full-time',
      salary: '₹ Depend on skills',
      experience: 'Fresher to Exprience',
      description: 'Lead digital marketing campaigns for top brands. Manage Google Ads, Meta Ads, and content strategies.'
    },
    {
      id: 2,
      title: 'Video Editor & Content Creator',
      department: 'Creative',
      location: 'Kotputli, Rajasthan',
      type: 'Full-time',
      salary: '₹ Depend on skills',
      experience: 'Fresher to Exprience',
      description: 'Create high-quality video content, reels, and graphics. Handle video editing and post-production.'
    },
    // {
    //   id: 3,
    //   title: 'Web Developer (React/Node.js)',
    //   department: 'Development',
    //   location: 'Kotputli, Rajasthan',
    //   type: 'Full-time',
    //   salary: '₹4-6.5 LPA',
    //   experience: '2-4 years',
    //   description: 'Develop responsive websites and web applications. Work with modern tech stack.'
    // },
    {
      id: 4,
      title: 'Political Campaign Manager',
      department: 'Political Strategy',
      location: 'Kotputli, Rajasthan',
      type: 'Full-time',
      salary: '₹ Depend on skills',
      experience: 'Fresher to Exprience',
      description: 'Plan and execute political campaigns. Handle voter engagement and digital targeting.'
    },
    {
      id: 5,
      title: 'Social Media Manager',
      department: 'Digital Marketing',
      location: 'Kotputli, Rajasthan',
      type: 'Full-time',
      salary: '₹ Depend on skills',
      experience: 'Fresher to Exprience',
      description: 'Manage social media accounts for brands and political campaigns. Create engaging content.'
    },
    {
      id: 6,
      title: 'Graphic Designer',
      department: 'Creative',
      location: 'Kotputli, Rajasthan',
      type: 'Full-time',
      salary: '₹ Depend on skills',
      experience: 'Fresher to Exprience',
      description: 'Design graphics, posters, and campaign materials. Create visual content for various platforms.'
    }
  ];

  const benefits = [
    '📊 Competitive salary and performance bonus',
    '🏥 Health insurance and medical benefits',
    '🎓 Continuous learning and training',
    '🌍 Work on national and international projects',
    '⚡ Fast-paced, innovative work environment',
    '🤝 Collaborative team culture',
    '⏰ Flexible working hours',
    '🎉 Annual company events and outings'
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-black to-red-950 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">Join Our Team</h1>
          <p className="text-xl text-gray-300">We're looking for talented professionals to join Ignis Ventures Media and help us grow</p>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-black mb-12 text-center">Why Work With Us?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, idx) => (
              <div key={idx} className="bg-white p-6 rounded-xl border border-gray-200 text-center hover:shadow-lg transition-all">
                <p className="text-lg text-gray-700">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-black mb-12">Open Positions</h2>
          
          <div className="space-y-6">
            {openings.map((job) => (
              <div key={job.id} className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-lg transition-all duration-300">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
                  {/* Job Details */}
                  <div className="flex-1">
                    <div className="mb-3">
                      <span className="inline-block bg-red-600/10 text-red-600 px-3 py-1 rounded-full text-sm font-bold">
                        {job.department}
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold text-black mb-3">{job.title}</h3>
                    <p className="text-gray-600 mb-4">{job.description}</p>

                    {/* Meta Information */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="flex items-center gap-2 text-gray-700">
                        <MapPin size={18} className="text-red-600" />
                        <span>{job.location}</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-700">
                        <DollarSign size={18} className="text-red-600" />
                        <span>{job.salary}</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-700">
                        <Briefcase size={18} className="text-red-600" />
                        <span>{job.type} • {job.experience}</span>
                      </div>
                    </div>
                  </div>

                  {/* Apply Button */}
                  <div className="md:flex-shrink-0">
                    <button className="w-full md:w-auto bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-lg font-bold transition-all flex items-center justify-center gap-2 group">
                      Apply Now
                      <ArrowRight className="group-hover:translate-x-1 transition-transform" size={18} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-black mb-12 text-center">Our Hiring Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: '1', title: 'Application', desc: 'Submit your resume and details' },
              { step: '2', title: 'Screening', desc: 'Initial review of your profile' },
              { step: '3', title: 'Interview', desc: 'Technical & HR rounds' },
              { step: '4', title: 'Offer', desc: 'Get your offer letter' }
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="w-16 h-16 bg-red-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="text-lg font-bold text-black mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-red-600 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Join Us?</h2>
          <p className="text-lg mb-6 opacity-90">Send your resume to ignisventuresmedia@gmail.com or call us at +91 9783952367</p>
          <button className="bg-white text-red-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-bold transition-colors">
            Send Your Resume
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
