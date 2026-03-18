import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Calendar, User, ArrowRight } from 'lucide-react';

export default function Blog() {
  const blogPosts = [
    {
      id: 1,
      title: 'Digital Marketing Trends for 2026',
      excerpt: 'Discover the latest digital marketing trends that will shape the industry in 2026 and how your business can adapt.',
      author: 'Ignis Team',
      date: 'February 14, 2026',
      category: 'Digital Marketing',
      image: '📱',
      content: 'The digital marketing landscape is constantly evolving. In 2026, we expect to see major shifts in AI-driven marketing, personalization, and data privacy...'
    },
    {
      id: 2,
      title: 'Political Campaign Strategy Guide',
      excerpt: 'A comprehensive guide to developing an effective political campaign strategy from planning to execution.',
      author: 'Strategy Team',
      date: 'February 10, 2026',
      category: 'Political Strategy',
      image: '🗳️',
      content: 'Political campaigns require careful planning, strategic messaging, and effective execution. This guide walks you through the essential steps...'
    },
    {
      id: 3,
      title: 'How to Boost School Enrollment',
      excerpt: 'Learn effective strategies to increase school enrollment through targeted digital marketing and media management.',
      author: 'School Marketing',
      date: 'February 5, 2026',
      category: 'School Media',
      image: '🎓',
      content: 'School enrollment is critical for institutional growth. By leveraging modern digital marketing techniques, schools can significantly increase...'
    },
    {
      id: 4,
      title: 'Social Media Strategy for Brands',
      excerpt: 'Best practices for creating a winning social media strategy that engages your audience and drives conversions.',
      author: 'Social Media Expert',
      date: 'January 28, 2026',
      category: 'Social Media',
      image: '📲',
      content: 'Social media is not just about posting content. A successful social media strategy requires planning, consistency, and data-driven decisions...'
    },
    {
      id: 5,
      title: 'Video Marketing: The Future is Here',
      excerpt: 'Explore why video marketing is crucial for businesses and how to create compelling video content that converts.',
      author: 'Content Team',
      date: 'January 20, 2026',
      category: 'Video Marketing',
      image: '🎬',
      content: 'Video content is dominating digital marketing. From short-form reels to long-form documentaries, video marketing offers unique opportunities...'
    },
    {
      id: 6,
      title: 'SEO Optimization: A Beginner\'s Guide',
      excerpt: 'Learn the fundamentals of SEO and how to optimize your website for better search engine rankings.',
      author: 'SEO Specialist',
      date: 'January 15, 2026',
      category: 'SEO',
      image: '🔍',
      content: 'SEO is essential for online visibility. This guide covers on-page optimization, technical SEO, and link building strategies...'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-black to-red-950 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">Ignis Ventures Blog</h1>
          <p className="text-xl text-gray-300">Expert insights on digital marketing, political strategy, and business growth</p>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <article key={post.id} className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                {/* Image */}
                <div className="h-48 bg-gradient-to-br from-red-100 to-gray-100 flex items-center justify-center text-6xl">
                  {post.image}
                </div>

                {/* Content */}
                <div className="p-6">
                  {/* Category */}
                  <span className="inline-block bg-red-600/10 text-red-600 px-3 py-1 rounded-full text-xs font-bold mb-3">
                    {post.category}
                  </span>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-black mb-3 line-clamp-2">
                    {post.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                    {post.excerpt}
                  </p>

                  {/* Meta Info */}
                  <div className="flex items-center gap-4 text-gray-500 text-sm mb-4 pb-4 border-b border-gray-200">
                    <div className="flex items-center gap-1">
                      <Calendar size={14} />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <User size={14} />
                      <span>{post.author}</span>
                    </div>
                  </div>

                  {/* Read More */}
                  <button className="text-red-600 hover:text-red-700 font-bold text-sm flex items-center gap-2 group">
                    Read More
                    <ArrowRight className="group-hover:translate-x-1 transition-transform" size={16} />
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-red-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Subscribe to Our Blog</h2>
          <p className="text-lg mb-6 opacity-90">Get the latest insights on digital marketing and business growth delivered to your inbox</p>
          <form className="max-w-md mx-auto flex gap-2">
            <input 
              type="email" 
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg focus:outline-none text-black"
              required
            />
            <button 
              type="submit"
              className="bg-black hover:bg-gray-900 px-6 py-3 rounded-lg font-bold transition-colors"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>

      <Footer />
    </div>
  );
}
