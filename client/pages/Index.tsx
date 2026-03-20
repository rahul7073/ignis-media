import { useState, useEffect } from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { motion, AnimatePresence } from 'framer-motion';
declare global {
  interface Window {
    botpressWebChat: any;
  }
}
import {
  ChevronRight,
  X,
  ChevronLeft,
  Star,
  Send,
  ArrowRight,
  Mail,
  Phone,
  MessageCircle,
  BarChart3,
  Palette,
  Code,
  Users,
  Target,
  TrendingUp,
  Award,
  Zap,
  MessageSquare,
  Video,
  Image,
  LucideImage,
  ImageIcon,
  Megaphone, 
} from 'lucide-react';



export default function Index() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    message: '',
  });
  // --- FIX: Define Slider Functions ---
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % galleryItems.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + galleryItems.length) % galleryItems.length);
  };

  // Auto-slide every 4 seconds
  useEffect(() => {
    const timer = setInterval(nextSlide, 4000);
    return () => clearInterval(timer);
  }, []);
  // ===== BOTPRESS AI CHAT =====
useEffect(() => {
  const script1 = document.createElement("script");
  script1.src = "https://cdn.botpress.cloud/webchat/v3.6/inject.js";
  script1.async = true;

  const script2 = document.createElement("script");
  script2.src = "https://files.bpcontent.cloud/2026/03/05/02/20260305021955-3EOQU6YH.js";
  script2.defer = true;

  script2.onload = () => {
    // 🔥 CHAT AUTO OPEN
    window.botpressWebChat.onEvent(
      () => {
        window.botpressWebChat.open();
      },
      ["LIFECYCLE.LOADED"]
    );
  };

  document.body.appendChild(script1);
  document.body.appendChild(script2);
}, []);
  const [selectedGalleryImage, setSelectedGalleryImage] = useState<number | null>(null);
  const [selectedService, setSelectedService] = useState<any>(null);

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for contacting us! We will get back to you soon.');
    setFormData({ name: '', phone: '', email: '', service: '', message: '' });
  };

  const digitalServices = [
    {
      icon: BarChart3,
      title: 'SEO',
      description: 'Increase your online visibility with optimized search engine rankings',
      details: {
        overview: 'Search Engine Optimization (SEO) helps your website rank higher on Google and other search engines, driving organic traffic to your business.',
        included: [
          'Keyword research and analysis',
          'On-page optimization (titles, meta tags, content)',
          'Technical SEO audit',
          'Backlink analysis and building',
          'Monthly performance reports',
          'Competitor analysis',
          'Google Analytics setup and tracking'
        ],
        benefits: [
          'Long-term sustainable traffic',
          'Higher conversion rates',
          'Cost-effective compared to paid ads',
          'Builds credibility and trust',
          'Targets ready-to-buy customers',
          '24/7 visibility online'
        ],
        timeline: '3-6 months for significant results',
        price: 'Custom based on competition level'
      }
    },
    {
      icon: Target,
      title: 'Google Ads',
      description: 'High-converting paid search campaigns to drive qualified traffic',
      details: {
        overview: 'Google Ads puts your business at the top of search results immediately, driving targeted traffic from customers actively searching for your services.',
        included: [
          'Campaign strategy and setup',
          'Keyword bidding optimization',
          'Ad copy creation and testing',
          'Landing page optimization',
          'Daily campaign monitoring',
          'Conversion tracking setup', 
          'Weekly performance reports',
          'Budget management and optimization'
        ],
        benefits: [
          'Immediate visibility and traffic',
          'Pay only for actual clicks',
          'Highly targeted customers',
          'Full campaign control',
          'Real-time performance data',
          'High ROI potential'
        ],
        timeline: 'Results within days',
        price: 'Pay per click + management fee'
      }
    },
    {
      icon: Megaphone,
      title: 'Meta Ads',
      description: 'Strategic Facebook & Instagram advertising for targeted reach',
      details: {
        overview: 'Reach your ideal customers on Facebook and Instagram with visually engaging ads that drive awareness, leads, and sales.',
        included: [
          'Audience research and targeting',
          'Ad creative design',
          'Video ad production (optional)',
          'A/B testing of ad variations',
          'Campaign setup and launch',
          'Daily optimization and monitoring',
          'Conversion pixel setup',
          'Monthly analytics and insights'
        ],
        benefits: [
          'Massive audience reach',
          'Advanced targeting options',
          'Visual storytelling capability',
          'Cost-effective advertising',
          'Retargeting capabilities',
          'Mobile-first approach'
        ],
        timeline: 'Results within 2-4 weeks',
        price: 'Custom based on target audience'
      }
    },
    {
      icon: MessageSquare,
      title: 'SMS Marketing',
      description: 'Direct mobile messaging campaigns for instant engagement',
      details: {
        overview: 'Send targeted SMS messages directly to customers\' phones with instant delivery and high open rates for promotions, updates, and alerts.',
        included: [
          'SMS campaign strategy',
          'Message template creation',
          'List management and segmentation',
          'Scheduling and automation',
          'Delivery tracking',
          'Opt-in/opt-out management',
          'Performance analytics',
          'A/B testing'
        ],
        benefits: [
          '98% open rate within minutes',
          'Direct customer communication',
          'Perfect for time-sensitive offers',
          'High conversion rates',
          'Cost-effective bulk messaging',
          'Instant delivery'
        ],
        timeline: 'Immediate delivery',
        price: 'Per SMS + monthly management'
      }
    },
    {
      icon: Mail,
      title: 'Email Marketing',
      description: 'Personalized email campaigns that convert leads to customers',
      details: {
        overview: 'Build relationships with customers through personalized, strategic email campaigns that nurture leads and drive repeat business.',
        included: [
          'Email list building strategy',
          'Template design and customization',
          'Personalization and segmentation',
          'Automated drip campaigns',
          'Monthly newsletter creation',
          'Unsubscribe management',
          'Click and open tracking',
          'A/B testing and optimization'
        ],
        benefits: [
          'High ROI on investment',
          'Builds customer relationships',
          'Drives repeat business',
          'Lead nurturing automation',
          'Detailed performance metrics',
          'Cost-effective at scale'
        ],
        timeline: 'Campaigns run 24/7',
        price: 'Based on email volume'
      }
    },
    {
      icon: Zap,
      title: 'WhatsApp Marketing',
      description: 'WhatsApp business solutions for customer communication',
      details: {
        overview: 'Engage customers on their favorite messaging app with WhatsApp Business, offering direct communication, automation, and customer support.',
        included: [
          'WhatsApp Business account setup',
          'Broadcast messaging campaigns',
          'Automated chatbot creation',
          'Customer support integration',
          'Message templates and scheduling',
          'Contact management',
          'Performance analytics',
          'Integration with CRM'
        ],
        benefits: [
          'Direct customer engagement',
          'High message delivery rate',
          'Personal touch to marketing',
          'Cost-effective communication',
          'Multi-media support (images, docs)',
          'Customer support automation'
        ],
        timeline: 'Real-time engagement',
        price: 'Per message + monthly plan'
      }
    }
  ];

  const creativeServices = [
    {
      icon: Palette,
      title: 'Graphic Design',
      description: 'Professional graphics that capture your brand identity',
      details: {
        overview: 'High-quality graphic design that makes your brand stand out. From social media posts to print materials, we create visually stunning designs that communicate your message.',
        included: [
          'Brand identity design',
          'Social media graphics (posts, stories, banners)',
          'Print materials (flyers, brochures, business cards)',
          'Infographics and data visualization',
          'Product packaging design',
          'Unlimited revisions',
          'High-resolution file formats',
          'Design consultation'
        ],
        benefits: [
          'Professional brand image',
          'Consistent visual identity',
          'Increased engagement on social media',
          'Cost-effective compared to print',
          'Fast turnaround time',
          'Creative and unique designs'
        ],
        timeline: '3-7 days per project',
        price: 'Per design + revision packages'
      }
    },
    {
      icon: Award,
      title: 'Branding & Logo',
      description: 'Complete brand identity development and logo design',
      details: {
        overview: 'Build a powerful brand identity from the ground up. We create memorable logos and complete brand guidelines that represent your business values and resonate with your audience.',
        included: [
          'Logo design (5+ concepts)',
          'Brand color palette',
          'Typography selection',
          'Brand guidelines document',
          'Letterhead design',
          'Email signature templates',
          'Social media brand kit',
          'Brand story development'
        ],
        benefits: [
          'Memorable brand identity',
          'Professional logo that stands out',
          'Consistent branding across channels',
          'Strong market positioning',
          'Emotional connection with customers',
          'Increased brand recognition'
        ],
        timeline: '2-4 weeks',
        price: 'Complete branding package'
      }
    },
    {
      icon: Video,
      title: 'Video Editing',
      description: 'Professional video production and editing services',
      details: {
        overview: 'Transform raw video footage into engaging, professional-quality videos. We handle editing, effects, color grading, and audio to create compelling visual content.',
        included: [
          'Video editing and post-production',
          'Color grading and correction',
          'Motion graphics and animations',
          'Audio mixing and sound design',
          'Title and subtitle creation',
          'Multiple export formats',
          'Fast turnaround editing',
          'Unlimited revisions'
        ],
        benefits: [
          'Professional video quality',
          'Increased viewer engagement',
          'Better storytelling capability',
          'Suitable for all platforms',
          'Cost-effective production',
          'Quick publication ready'
        ],
        timeline: '5-10 days per video',
        price: 'Per minute of video'
      }
    },
    {
      icon: Image,
      title: 'Reel Editing',
      description: 'Bulk reel creation for schools, brands, and campaigns',
      details: {
        overview: 'Create engaging short-form videos (reels) in bulk for Instagram, TikTok, and other platforms. Perfect for schools, brands, and campaigns to boost social media presence.',
        included: [
          'Bulk reel production (10-50+ reels)',
          'Trending audio and music',
          'On-brand editing and effects',
          'Text overlays and transitions',
          'Captions and subtitles',
          'Optimized dimensions for platforms',
          'Fast delivery schedule',
          'Social media optimization'
        ],
        benefits: [
          'High-volume content creation',
          'Consistent posting schedule',
          'Viral potential with trending content',
          'Increased follower engagement',
          'Time-saving solution',
          'Professional quality at scale'
        ],
        timeline: '1-3 weeks for bulk order',
        price: 'Per reel (bulk discounts available)'
      }
    },
    {
      icon: Image,
      title: 'Poster Design',
      description: 'Eye-catching posters for campaigns and promotions',
      details: {
        overview: 'Create visually striking posters that grab attention and drive action. Perfect for political campaigns, school events, product launches, and promotional activities.',
        included: [
          'Custom poster design',
          'Multiple layout options',
          'High-resolution printing files',
          'Print-ready specifications',
          'Digital and print formats',
          'Unlimited revisions',
          'Campaign theme consistency',
          'Design consultation'
        ],
        benefits: [
          'Eye-catching designs',
          'High visibility and impact',
          'Professional printing quality',
          'Perfect for street marketing',
          'Memorable visual communication',
          'Quick deployment'
        ],
        timeline: '3-5 days',
        price: 'Per poster design'
      }
    },
    {
      icon: Megaphone,
      title: 'Campaign Creatives',
      description: 'Custom creatives for political and marketing campaigns',
      details: {
        overview: 'Develop comprehensive creative packages for political campaigns and marketing initiatives. From social media to traditional media, we ensure consistent messaging and maximum impact.',
        included: [
          'Comprehensive creative strategy',
          'Multiple format design (social, print, digital)',
          'Campaign messaging and copy',
          'Photo editing and retouching',
          'Video content creation',
          'Animated graphics and videos',
          'Complete asset library',
          'Campaign management support'
        ],
        benefits: [
          'Unified campaign identity',
          'Professional and impactful messaging',
          'Multi-channel reach',
          'Consistent brand voice',
          'Higher campaign effectiveness',
          'Complete creative support'
        ],
        timeline: '1-4 weeks (varies by scope)',
        price: 'Custom campaign package'
      }
    }
  ];

  const developmentServices = [
    {
      icon: Code,
      title: 'Website Development',
      description: 'Modern, responsive websites built with latest technologies',
      details: {
        overview: 'Build powerful, modern websites that attract customers and drive conversions. Responsive design, fast loading, and SEO-optimized for maximum visibility.',
        included: [
          'Custom website development',
          'Responsive design (mobile, tablet, desktop)',
          'SEO optimization',
          'Fast loading speeds',
          'Contact forms and CTA buttons',
          'Blog or news section',
          'Analytics integration',
          'SSL security certificate'
        ],
        benefits: [
          'Professional online presence',
          'Mobile-friendly experience',
          'Better search engine rankings',
          'Increased customer inquiries',
          ' 24/7 online availability',
          'Measurable results and ROI'
        ],
        timeline: '4-8 weeks',
        price: 'Custom based on features'
      }
    },
    {
      icon: Code,
      title: 'App Development',
      description: 'Custom mobile and web applications for your business',
      details: {
        overview: 'Create custom mobile and web applications tailored to your business needs. From concept to launch, we handle everything for seamless app experiences.',
        included: [
          'App design and development',
          'iOS and Android compatibility',
          'User-friendly interface design',
          'Backend development and APIs',
          'Database design',
          'Testing and QA',
          'App store submission',
          'Post-launch support'
        ],
        benefits: [
          'Custom functionality',
          'Multi-platform reach',
          'Enhanced user engagement',
          'Scalable solutions',
          'Full technical support',
          'Competitive advantage'
        ],
        timeline: '8-16 weeks',
        price: 'Custom development package'
      }
    },
    {
      icon: Target,
      title: 'Landing Pages',
      description: 'High-converting landing pages designed for results',
      details: {
        overview: 'Specialized landing pages designed to convert visitors into customers. Optimized for specific campaigns, products, or offers with compelling CTAs.',
        included: [
          'Custom landing page design',
          'High-converting copy',
          'Clear call-to-action buttons',
          'Lead capture forms',
          'A/B testing capabilities',
          'Fast loading optimization',
          'Mobile-responsive design',
          'Analytics tracking setup'
        ],
        benefits: [
          'Increased conversion rates',
          'Campaign-specific messaging',
          'Reduced bounce rates',
          'Improved ad ROI',
          'Clear customer journey',
          'Data-driven optimization'
        ],
        timeline: '5-10 days',
        price: 'Per landing page'
      }
    },
    {
      icon: Code,
      title: 'Business Portfolios',
      description: 'Professional portfolio websites to showcase your work',
      details: {
        overview: 'Showcase your best work with a professional portfolio website. Perfect for creatives, agencies, and service professionals to attract new clients.',
        included: [
          'Portfolio website design',
          'Project showcase galleries',
          'About and services pages',
          'Client testimonials section',
          'Contact and inquiry forms',
          'Blog capability',
          'SEO optimization',
          'Fast loading and mobile-responsive'
        ],
        benefits: [
          'Professional image',
          'Showcase your best work',
          'Attract high-quality clients',
          'Build credibility',
          ' 24/7 marketing tool',
          'Increase client inquiries'
        ],
        timeline: '3-6 weeks',
        price: 'Custom portfolio package'
      }
    }
  ];

  const politicalServices = [
    {
      icon: Users,
      title: 'Social Media Management',
      description: 'Political campaign social media strategy and execution',
      details: {
        overview: 'Manage all aspects of political campaign social media presence. From daily posting to community engagement and crisis management, we keep your campaign visible and relevant.',
        included: [
          'Social media strategy development',
          'Daily content creation and posting',
          'Community engagement and comments',
          'Follower growth campaigns',
          'Crisis management protocols',
          'Hashtag strategy and trending',
          'Live streaming and events',
          'Monthly performance reports'
        ],
        benefits: [
          'Constant candidate visibility',
          'Direct voter engagement',
          'Rapid message dissemination',
          'Community building',
          'Real-time feedback capture',
          'Viral potential with trending content'
        ],
        timeline: 'Ongoing campaign management',
        price: 'Monthly management package'
      }
    },
    {
      icon: Target,
      title: 'Campaign Strategy',
      description: 'Data-driven political campaign planning and execution',
      details: {
        overview: 'Develop comprehensive, data-driven political campaign strategies. From target audience analysis to messaging frameworks, we ensure maximum impact for electoral success.',
        included: [
          'Campaign planning and strategy',
          'Voter demographic analysis',
          'Message development and testing',
          'Timeline and milestone planning',
          'Budget optimization',
          'Channel strategy (digital, traditional)',
          'Competitive analysis',
          'Performance metrics and KPIs'
        ],
        benefits: [
          'Strategic advantage',
          'Data-driven decisions',
          'Targeted messaging',
          'Efficient budget allocation',
          'Higher voter engagement',
          'Measurable campaign success'
        ],
        timeline: '2-4 weeks planning',
        price: 'Custom campaign strategy'
      }
    },
    {
      icon: Megaphone,
      title: 'Digital Targeting',
      description: 'Booth-level digital targeting for political campaigns',
      details: {
        overview: 'Reach voters with precision using geo-targeting and demographic targeting. Deliver candidate messages to specific audiences at booth-level granularity for maximum impact.',
        included: [
          'Geo-targeted digital ads',
          'Booth-level targeting setup',
          'Demographic filtering',
          'Interest-based targeting',
          'Behavioral targeting',
          'Real-time campaign optimization',
          'Voter touchpoint tracking',
          'Conversion analytics'
        ],
        benefits: [
          'Precise voter targeting',
          'Reduced ad waste',
          'Higher engagement rates',
          'Cost-effective advertising',
          'Real-time optimization',
          'Competitive intelligence gathering'
        ],
        timeline: 'Ongoing during campaign',
        price: 'Per campaign cycle'
      }
    },
    {
      icon: Image,
      title: 'Poster & Banner',
      description: 'Design and distribution of campaign materials',
      details: {
        overview: 'Create and distribute impactful political campaign posters and banners. Professional designs that communicate candidate messaging and values effectively.',
        included: [
          'Poster design and concept',
          'Multiple design variations',
          'Printing coordination',
          'Distribution strategy',
          'Placement optimization',
          'Print-ready file preparation',
          'Campaign theme consistency',
          'Quantity management'
        ],
        benefits: [
          'High visibility in public spaces',
          'Professional campaign image',
          'Message consistency',
          'Cost-effective distribution',
          'Brand recognition',
          'Voter awareness building'
        ],
        timeline: '5-7 days',
        price: 'Per poster + printing + distribution'
      }
    },
    {
      icon: TrendingUp,
      title: 'Voter Awareness',
      description: 'Strategic voter engagement campaigns',
      details: {
        overview: 'Create comprehensive voter awareness campaigns that educate and engage voters. Multi-channel approach to maximize voter participation and support.',
        included: [
          'Campaign messaging development',
          'Multi-channel awareness strategy',
          'Voter education materials',
          'Community engagement events',
          'Grassroots mobilization',
          'Digital and traditional media',
          'Performance tracking',
          'Voter feedback collection'
        ],
        benefits: [
          'Informed voter base',
          'Higher voter participation',
          'Strong community connection',
          'Message penetration',
          'Brand loyalty',
          'Electoral success'
        ],
        timeline: 'Ongoing campaign',
        price: 'Custom awareness package'
      }
    },
    {
      icon: Award,
      title: 'Election Management',
      description: 'Complete election campaign management services',
      details: {
        overview: 'Full-service election campaign management from planning to victory. We handle all aspects of your political campaign with expertise and precision.',
        included: [
          'Complete campaign strategy',
          'Campaign team coordination',
          'Digital and traditional marketing',
          'Media relations and PR',
          'Volunteer management',
          'Fundraising support',
          'Opposition research',
          'Election day operations',
          'Post-election analysis'
        ],
        benefits: [
          'Comprehensive campaign support',
          'Professional management',
          'Coordinated multi-channel approach',
          'Expert guidance and support',
          'Increased winning probability',
          'Complete peace of mind'
        ],
        timeline: 'Full campaign duration',
        price: 'Complete campaign management package'
      }
    }
  ];

  const whyChooseUs = [
    { icon: TrendingUp, title: 'Result Driven Strategy', description: 'Focus on measurable outcomes and ROI' },
    { icon: Users, title: 'Experienced Digital Team', description: 'Expert professionals with proven track records' },
    { icon: Target, title: 'Political Media Experts', description: 'Specialized knowledge in political campaigns' },
    { icon: Zap, title: 'Creative & Innovative', description: 'Cutting-edge ideas and modern approaches' },
    { icon: BarChart3, title: 'Transparent Reporting', description: 'Detailed analytics and regular performance updates' },
    { icon: MessageSquare, title: '24/7 Support', description: 'Always available for your needs' },
  ];

  const testimonials = [
    {
      name: 'Rahul Yadav',
      role: 'CEO & FOUNDER OF AURIXAI SOFTWARE COMPANY',
      text: 'Ignis Ventures transformed our company\'s online presence. Their creative team delivered outstanding results.',
      rating: 5,
    },
    {
      name: 'Kuldeep Chaudhary',
      role: 'DIRECTOR - THE SHRIRAM FOUNDATION SCHOOL',
      text: 'The digital marketing campaigns exceeded our expectations. Highly professional and results-driven team!',
      rating: 5,
    },
    {
      name: 'Amit Patel',
      role: 'Political Campaign Manager',
      text: 'Their political campaign strategies and execution were exceptional. Highly recommended!',
      rating: 5,
    },
  ];

  // const galleryItems = [
  //   { type: 'campaign', title: 'Political Campaign Poster' },
  //   { type: 'school', title: 'School Event Coverage' },
  //   { type: 'reel', title: 'Viral Marketing Reel' },
  //   { type: 'branding', title: 'Corporate Branding' },
  //   { type: 'campaign', title: 'Election Campaign' },
  //   { type: 'school', title: 'School Annual Function' },
  // ];

  const galleryItems = [
    {
      type: 'campaign',
      title: 'Santosh Eye Hospital Campaign',
      image: 'https://cdn.builder.io/api/v1/image/assets%2F1cc8f68dafc342bcab518cbe4f3c04ef%2F878347d8a607407cb6e76501abdd716c?format=webp&width=800&height=1200'
    },
    {
      type: 'school',
      title: 'Paragon Career Institute',
      image: 'https://cdn.builder.io/api/v1/image/assets%2F1cc8f68dafc342bcab518cbe4f3c04ef%2F7c4c884b684c45cbb15ce69a94369d1a?format=webp&width=800&height=1200'
    },
    {
      type: 'campaign',
      title: 'Paragon Hiring Campaign',
      image: 'https://cdn.builder.io/api/v1/image/assets%2F1cc8f68dafc342bcab518cbe4f3c04ef%2Fc3bfb398f3a044f4b7b7976d7dfb8aa0?format=webp&width=800&height=1200'
    },
    {
      type: 'branding',
      title: 'RTSE 2026 Campaign',
      image: 'https://cdn.builder.io/api/v1/image/assets%2F1cc8f68dafc342bcab518cbe4f3c04ef%2Fa94f24bd0591412895b1cf129043bd46?format=webp&width=800&height=1200'
    },
    {
      type: 'school',
      title: 'Krishna Multispeciality Hospital',
      image: 'https://cdn.builder.io/api/v1/image/assets%2F1cc8f68dafc342bcab518cbe4f3c04ef%2Fa71ebb1a8bc845e88e1577b3c21db911?format=webp&width=800&height=1200'
    },
    {
      type: 'school',
      title: 'Vijay International School',
      image: 'https://cdn.builder.io/api/v1/image/assets%2F1cc8f68dafc342bcab518cbe4f3c04ef%2F7ce5630aac0844839d48299dd1991a0c?format=webp&width=800&height=1200'
    },
    {
      type: 'campaign',
      title: 'Navodaya Selection 2025',
      image: 'https://cdn.builder.io/api/v1/image/assets%2F1cc8f68dafc342bcab518cbe4f3c04ef%2F61aa7705286c4004a4f7b218726f3dfc?format=webp&width=800&height=1200'
    },
    {
      type: 'branding',
      title: 'GEM Classes Success Campaign',
      image: 'https://cdn.builder.io/api/v1/image/assets%2F1cc8f68dafc342bcab518cbe4f3c04ef%2F2dd7df84d38044dfbaad2f56c33573c5?format=webp&width=800&height=1200'
    },
    {
      type: 'campaign',
      title: 'Nirbhay Pain Clinic Campaign',
      image: 'https://cdn.builder.io/api/v1/image/assets%2F1cc8f68dafc342bcab518cbe4f3c04ef%2F1568b0a6092a4eb9b145ecef32ded889?format=webp&width=800&height=1200'
    },
    {
      type: 'school',
      title: 'Krishna Hospital Campaign',
      image: 'https://cdn.builder.io/api/v1/image/assets%2F1cc8f68dafc342bcab518cbe4f3c04ef%2Ff1cb83f6a0d14ef4b707e0af165ebb07?format=webp&width=800&height=1200'
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* ===== HERO SECTION ===== */}
      <section id="home" className="relative min-h-[90vh] flex items-center bg-gradient-to-br from-black via-black to-red-950 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-red-600 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-red-600 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="animate-fade-in-up">
              <div className="inline-block mb-6">
                <span className="bg-red-600/20 text-red-400 px-4 py-2 rounded-full text-sm font-medium border border-red-600/40 flex items-center gap-2 w-fit">
                  <span className="text-lg">🔥</span>
                  Premium Digital Solutions
                </span>
              </div>

              <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Grow <span className="text-red-600">Digitally</span>. Lead <span className="text-red-600">Politically</span>.
                <br />
                <span className="text-red-500">Dominate Strategically.</span>
              </h1>

              <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                Ignis Ventures Media is a full-service digital marketing and political strategy agency helping brands, schools,
                and political leaders achieve powerful growth and visibility.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all hover:shadow-2xl hover:shadow-red-600/30 flex items-center justify-center gap-2 group"
                >
                  Get Free Consultation
                  <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
                </button>
                <button
                  onClick={() => document.getElementById('gallery')?.scrollIntoView({ behavior: 'smooth' })}
                  className="border-2 border-red-600 hover:bg-red-600/10 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all flex items-center justify-center gap-2"
                >
                  View Our Work
                  <ChevronRight size={20} />
                </button>
              </div>

              <div className="flex gap-8 mt-12 pt-8 border-t border-gray-700">
                <div>
                  <p className="text-3xl font-bold text-red-600">300+</p>
                  <p className="text-gray-400">Projects Completed</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-red-600">70+</p>
                  <p className="text-gray-400">Happy Clients</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-red-600">5+</p>
                  <p className="text-gray-400">Years Experience</p>
                </div>
              </div>
            </div>

            {/* Right Content - Visual */}
            <div className="hidden lg:block animate-fade-in-down">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-red-600 to-red-900 rounded-2xl blur-3xl opacity-20"></div>
                <div className="relative bg-gradient-to-br from-gray-900 to-black border border-red-600/30 rounded-2xl p-8 backdrop-blur-sm">
                  <div className="aspect-square bg-gradient-to-br from-red-600/20 to-black/50 rounded-xl flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-6xl mb-4">🎯</div>
                      <p className="text-gray-300 text-lg">Digital Marketing <br /> & Political Strategy</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-red-600 rounded-full flex justify-center p-2">
            <div className="w-1 h-2 bg-red-600 rounded-full animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* ===== ABOUT US SECTION ===== */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl lg:text-5xl font-bold text-black mb-4">About Ignis Ventures Media</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A 360° Digital Marketing and Political Campaign Management company providing result-driven strategies, branding, advertisement, and media management services.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="bg-gray-50 border border-gray-200 p-8 rounded-xl hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-fade-in-up">
              <div className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center mb-4">
                <TrendingUp className="text-white" size={24} />
              </div>
              <h3 className="text-2xl font-bold text-black mb-3">Business Growth Marketing</h3>
              <p className="text-gray-600">Strategic marketing solutions to accelerate your business growth and market presence.</p>
            </div>

            <div className="bg-gray-50 border border-gray-200 p-8 rounded-xl hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-fade-in-up">
              <div className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center mb-4">
                <Users className="text-white" size={24} />
              </div>
              <h3 className="text-2xl font-bold text-black mb-3">School & College Media Management</h3>
              <p className="text-gray-600">Comprehensive media solutions for educational institutions to boost visibility and enrollment.</p>
            </div>

            <div className="bg-gray-50 border border-gray-200 p-8 rounded-xl hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-fade-in-up">
              <div className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center mb-4">
                <Users className="text-white" size={24} />
              </div>
              <h3 className="text-2xl font-bold text-black mb-3">Graphics Design</h3>
              <p className="text-gray-600">Comprehensive graphics solutions for educational institutions to boost visibility and enrollment.</p>
            </div>

            <div className="bg-gray-50 border border-gray-200 p-8 rounded-xl hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-fade-in-up">
              <div className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center mb-4">
                <Target className="text-white" size={24} />
              </div>
              <h3 className="text-2xl font-bold text-black mb-3">Political Strategy & Execution</h3>
              <p className="text-gray-600">Expert political campaign management and digital targeting for electoral success.</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-up">
              <h3 className="text-3xl font-bold text-black mb-6">Our Mission & Vision</h3>
              <div className="space-y-6">
                <div>
                  <h4 className="text-xl font-bold text-red-600 mb-2">🎯 Mission</h4>
                  <p className="text-gray-600 leading-relaxed">
                    Deliver measurable growth and impactful campaigns that transform brands, institutions, and political movements through innovative digital strategies.
                  </p>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-red-600 mb-2">🚀 Vision</h4>
                  <p className="text-gray-600 leading-relaxed">
                    Become a leading digital & political marketing agency in India, recognized for excellence, innovation, and delivering extraordinary results.
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-red-600 to-red-800 rounded-2xl p-12 text-white animate-scale-in">
              <div className="text-6xl mb-4">💼</div>
              <h3 className="text-3xl font-bold mb-4">Why We Exist</h3>
              <p className="text-lg leading-relaxed">
                We believe in the power of strategic digital marketing and authentic political engagement. Our mission is to help organizations of all sizes reach their goals through innovative, data-driven, and creative solutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== SERVICES SECTION ===== */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl lg:text-5xl font-bold text-black mb-4">Our Services</h2>
            <p className="text-xl text-gray-600">Comprehensive solutions for your digital and marketing needs</p>
          </div>

          {/* Political Campaign Services */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 bg-red-600 rounded-lg flex items-center justify-center">
                <Target className="text-white" size={24} />
              </div>
              <h3 className="text-3xl font-bold text-black">🗳 Political Campaign Management</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {politicalServices.map((service, idx) => {
                const Icon = service.icon;
                return (
                  <div
                    key={idx}
                    className="bg-white border border-gray-200 p-6 rounded-xl hover:shadow-lg hover:border-red-600 transition-all duration-300 hover:-translate-y-1 group animate-fade-in-up cursor-pointer"
                    onClick={() => setSelectedService(service)}
                  >
                    <div className="w-12 h-12 bg-red-600/10 group-hover:bg-red-600 rounded-lg flex items-center justify-center mb-4 transition-colors">
                      <Icon className="text-red-600 group-hover:text-white" size={24} />
                    </div>
                    <h4 className="text-lg font-bold text-black mb-2">{service.title}</h4>
                    <p className="text-gray-600 text-sm mb-4">{service.description}</p>
                    <button className="text-red-600 hover:text-red-700 font-medium text-sm flex items-center gap-1">
                      Learn More <ChevronRight size={16} />
                    </button>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Creative & Media Services */}
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 bg-red-600 rounded-lg flex items-center justify-center">
                <Palette className="text-white" size={24} />
              </div>
              <h3 className="text-3xl font-bold text-black">🎨 Creative & Media Services</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {creativeServices.map((service, idx) => {
                const Icon = service.icon;
                return (
                  <div
                    key={idx}
                    className="bg-white border border-gray-200 p-6 rounded-xl hover:shadow-lg hover:border-red-600 transition-all duration-300 hover:-translate-y-1 group animate-fade-in-up cursor-pointer"
                    onClick={() => setSelectedService(service)}
                  >
                    <div className="w-12 h-12 bg-red-600/10 group-hover:bg-red-600 rounded-lg flex items-center justify-center mb-4 transition-colors">
                      <Icon className="text-red-600 group-hover:text-white" size={24} />
                    </div>
                    <h4 className="text-lg font-bold text-black mb-2">{service.title}</h4>
                    <p className="text-gray-600 text-sm mb-4">{service.description}</p>
                    <button className="text-red-600 hover:text-red-700 font-medium text-sm flex items-center gap-1">
                      Learn More <ChevronRight size={16} />
                    </button>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Development Services */}
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 bg-red-600 rounded-lg flex items-center justify-center">
                <Code className="text-white" size={24} />
              </div>
              <h3 className="text-3xl font-bold text-black">💻 Development Services</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {developmentServices.map((service, idx) => {
                const Icon = service.icon;
                return (
                  <div
                    key={idx}
                    className="bg-white border border-gray-200 p-6 rounded-xl hover:shadow-lg hover:border-red-600 transition-all duration-300 hover:-translate-y-1 group animate-fade-in-up cursor-pointer"
                    onClick={() => setSelectedService(service)}
                  >
                    <div className="w-12 h-12 bg-red-600/10 group-hover:bg-red-600 rounded-lg flex items-center justify-center mb-4 transition-colors">
                      <Icon className="text-red-600 group-hover:text-white" size={24} />
                    </div>
                    <h4 className="text-lg font-bold text-black mb-2">{service.title}</h4>
                    <p className="text-gray-600 text-sm mb-4">{service.description}</p>
                    <button className="text-red-600 hover:text-red-700 font-medium text-sm flex items-center gap-1">
                      Learn More <ChevronRight size={16} />
                    </button>
                  </div>
                );
              })}
            </div>
          </div>

          {/* digital marketing Services */}
         <div className="mb-16">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 bg-red-600 rounded-lg flex items-center justify-center">
                <BarChart3 className="text-white" size={24} />
              </div>
              <h3 className="text-3xl font-bold text-black">📈 Digital Marketing Services</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {digitalServices.map((service, idx) => {
                const Icon = service.icon;
                return (
                  <div
                    key={idx}
                    className="bg-white border border-gray-200 p-6 rounded-xl hover:shadow-lg hover:border-red-600 transition-all duration-300 hover:-translate-y-1 group animate-fade-in-up cursor-pointer"
                    onClick={() => setSelectedService(service)}
                  >
                    <div className="w-12 h-12 bg-red-600/10 group-hover:bg-red-600 rounded-lg flex items-center justify-center mb-4 transition-colors">
                      <Icon className="text-red-600 group-hover:text-white" size={24} />
                    </div>
                    <h4 className="text-lg font-bold text-black mb-2">{service.title}</h4>
                    <p className="text-gray-600 text-sm mb-4">{service.description}</p>
                    <button className="text-red-600 hover:text-red-700 font-medium text-sm flex items-center gap-1">
                      Learn More <ChevronRight size={16} />
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ===== SCHOOL MEDIA SOLUTIONS SECTION ===== */}
      <section className="py-20 bg-gradient-to-r from-red-600 to-red-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-up">
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">🎥 School Media Solutions</h2>
              <p className="text-lg mb-8 leading-relaxed opacity-90">
                Specialized media management services designed specifically for educational institutions to enhance their brand presence and boost admissions.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex gap-4 items-start">
                  <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                    <ChevronRight size={16} />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">School Video Shoots</h4>
                    <p className="opacity-80">Professional video production for your school events</p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                    <ChevronRight size={16} />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Annual Function Coverage</h4>
                    <p className="opacity-80">Complete event coverage and post-production</p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                    <ChevronRight size={16} />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Bulk Reel & Photo Content</h4>
                    <p className="opacity-80">Scalable content creation for social media marketing</p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                    <ChevronRight size={16} />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Social Media Management</h4>
                    <p className="opacity-80">Complete social media strategy and daily management</p>
                  </div>
                </div>
              </div>

              <button className="bg-white text-red-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-bold text-lg transition-all hover:shadow-lg flex items-center gap-2 group">
                Boost Your School Presence
                <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
              </button>
            </div>

            <div className="hidden lg:block">
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-12 animate-scale-in">
                <div className="aspect-square bg-gradient-to-br from-white/20 to-black/20 rounded-xl flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-6xl mb-4">🎓</div>
                    <p className="text-lg opacity-80">Schools, Colleges & Institutions</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== WHY CHOOSE US SECTION ===== */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl lg:text-5xl font-bold text-black mb-4">📊 Why Choose Ignis Ventures Media?</h2>
            <p className="text-xl text-gray-600">We deliver excellence across every project</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChooseUs.map((reason, idx) => {
              const Icon = reason.icon;
              return (
                <div
                  key={idx}
                  className="text-center p-8 bg-gray-50 border border-gray-200 rounded-xl hover:shadow-lg hover:border-red-600 transition-all duration-300 hover:-translate-y-1 animate-fade-in-up"
                >
                  <div className="w-16 h-16 bg-red-600/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="text-red-600" size={32} />
                  </div>
                  <h3 className="text-xl font-bold text-black mb-3">{reason.title}</h3>
                  <p className="text-gray-600">{reason.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

    {/* ===== UPDATED GALLERY SECTION (FIXED IMAGE RATIO) ===== */}
      <section id="gallery" className="py-24 bg-gray-950 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4 italic uppercase tracking-tighter">Our Work Gallery</h2>
            <p className="text-xl text-gray-400 font-medium">Strategic impact across campaigns and institutions</p>
          </div>

          {/* Slider Container */}
          <div className="relative h-[600px] flex items-center justify-center">
            {/* Nav Buttons */}
            <button
              onClick={prevSlide}
              className="absolute left-0 md:left-4 z-40 bg-red-600 hover:bg-red-700 text-white p-4 rounded-full transition-all shadow-xl"
            >
              <ChevronLeft size={28} />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-0 md:right-4 z-40 bg-red-600 hover:bg-red-700 text-white p-4 rounded-full transition-all shadow-xl"
            >
              <ChevronRight size={28} />
            </button>

            {/* Slider Box */}
            <div className="relative w-full max-w-4xl h-full flex items-center justify-center" style={{ perspective: '1200px' }}>
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentSlide}
                  initial={{ opacity: 0, rotateY: 20, x: 100, scale: 0.9 }}
                  animate={{ opacity: 1, rotateY: 0, x: 0, scale: 1 }}
                  exit={{ opacity: 0, rotateY: -20, x: -100, scale: 0.9 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  className="relative w-full h-[550px] rounded-[2rem] overflow-hidden cursor-pointer shadow-2xl border border-white/10 bg-neutral-900 group"
                  onClick={() => setSelectedGalleryImage(currentSlide)}
                >
                  {/* FIX: Object-contain and background blur for full image view */}
                  <div className="absolute inset-0 bg-neutral-900">
                     <img 
                        src={galleryItems[currentSlide].image} 
                        className="absolute inset-0 w-full h-full object-cover opacity-20 blur-xl" 
                        alt="background blur"
                     />
                  </div>
                  
                  <img
                    src={galleryItems[currentSlide].image}
                    alt={galleryItems[currentSlide].title}
                    className="relative w-full h-full object-contain z-10 p-4 transition-transform duration-700 group-hover:scale-[1.02]"
                  />

                  {/* Overlay Details */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/10 to-transparent flex flex-col justify-end p-8 z-20">
                    <span className="text-red-500 font-black tracking-widest text-xs uppercase mb-2">
                      {galleryItems[currentSlide].type}
                    </span>
                    <h3 className="text-3xl font-bold text-white mb-2 drop-shadow-md">{galleryItems[currentSlide].title}</h3>
                    <div className="flex items-center gap-2 text-white/70 text-sm font-semibold group-hover:text-red-400 transition-colors">
                      <LucideImage size={18} /> Click to expand full preview
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Indicators */}
            <div className="absolute -bottom-10 flex gap-2">
              {galleryItems.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentSlide(i)}
                  className={`h-2 rounded-full transition-all duration-500 ${i === currentSlide ? 'w-12 bg-red-600' : 'w-2.5 bg-gray-700'}`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* --- FULL PREVIEW MODAL --- */}
        <AnimatePresence>
          {selectedGalleryImage !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[100] bg-black/98 flex items-center justify-center p-4 backdrop-blur-xl"
              onClick={() => setSelectedGalleryImage(null)}
            >
              <button
                className="absolute top-8 right-8 text-white bg-red-600 p-3 rounded-full hover:rotate-90 transition-all z-[110]"
                onClick={() => setSelectedGalleryImage(null)}
              >
                <X size={32} />
              </button>

              <motion.div
                initial={{ scale: 0.8, opacity: 0, y: 20 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                className="relative max-w-6xl w-full flex flex-col items-center"
                onClick={(e) => e.stopPropagation()}
              >
                <img
                  src={galleryItems[selectedGalleryImage].image}
                  className="max-h-[85vh] w-auto rounded-lg shadow-2xl border border-white/10"
                  alt="Full Preview"
                />
                <div className="mt-6 text-center">
                  <h3 className="text-3xl font-bold text-white tracking-tight">{galleryItems[selectedGalleryImage].title}</h3>
                  <p className="text-red-600 font-black uppercase tracking-[0.3em] text-xs mt-2">
                    {galleryItems[selectedGalleryImage].type}
                  </p>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </section>

      {/* ===== TESTIMONIALS SECTION ===== */}
      <section id="testimonials" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl lg:text-5xl font-bold text-black mb-4">👥 What Our Clients Say</h2>
            <p className="text-xl text-gray-600">Trusted by brands, schools, and political leaders</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, idx) => (
              <div
                key={idx}
                className="bg-gray-50 border border-gray-200 p-8 rounded-xl hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-fade-in-up"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={18} className="fill-red-600 text-red-600" />
                  ))}
                </div>

                <p className="text-gray-700 mb-6 leading-relaxed italic">"{testimonial.text}"</p>

                <div className="pt-6 border-t border-gray-200">
                  <p className="font-bold text-black">{testimonial.name}</p>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CONTACT SECTION ===== */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl lg:text-5xl font-bold text-black mb-4">📞 Get In Touch</h2>
            <p className="text-xl text-gray-600">Let's discuss your project and goals</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <form onSubmit={handleFormSubmit} className="space-y-6 animate-fade-in-up">
              <div>
                <label className="block text-sm font-bold text-black mb-2">Full Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleFormChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-red-600 transition-colors"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-black mb-2">Phone</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleFormChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-red-600 transition-colors"
                  placeholder="Your phone number"
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-black mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleFormChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-red-600 transition-colors"
                  placeholder="Your email"
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-black mb-2">Service Required</label>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleFormChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-red-600 transition-colors"
                >
                  <option value="">Select a service</option>
                  <option value="digital">Digital Marketing</option>
                  <option value="creative">Creative & Media</option>
                  <option value="development">Development</option>
                  <option value="political">Political Campaign</option>
                  <option value="school">School Media</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-bold text-black mb-2">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleFormChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-red-600 transition-colors resize-none"
                  placeholder="Tell us about your project"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-red-600 hover:bg-red-700 text-white py-4 rounded-lg font-bold text-lg transition-all hover:shadow-lg hover:shadow-red-600/30 flex items-center justify-center gap-2 group"
              >
                Send Message
                <Send className="group-hover:translate-x-1 transition-transform" size={20} />
              </button>
            </form>

            {/* Contact Info */}
            <div className="space-y-8 animate-fade-in-up">
              <div className="bg-white border border-gray-200 p-8 rounded-xl hover:shadow-lg transition-all">
                <div className="flex gap-4 items-start mb-4">
                  <div className="w-12 h-12 bg-red-600/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="text-red-600" size={24} />
                  </div>
                    <div>
                    <h4 className="font-bold text-black text-lg mb-1">Phone Number</h4>
                    <p className="text-gray-600">+91 9783952367 ,+91 7733952367</p>
                  </div>
                </div>
              </div>

              <div className="bg-white border border-gray-200 p-8 rounded-xl hover:shadow-lg transition-all">
                <div className="flex gap-4 items-start mb-4">
                  <div className="w-12 h-12 bg-red-600/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="text-red-600" size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-black text-lg mb-1">Email Us</h4>
                    <p className="text-gray-600">Info@ignisventuresmedia.com</p>
                  </div>
                </div>
              </div>

              <div className="bg-white border border-gray-200 p-8 rounded-xl hover:shadow-lg transition-all">
                <div className="flex gap-4 items-start mb-4">
                  <div className="w-12 h-12 bg-red-600/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MessageCircle className="text-red-600" size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-black text-lg mb-1">WhatsApp Chat</h4>
                    <a href="https://wa.me/917733952367" target="_blank" rel="noopener noreferrer" className="text-red-600 hover:text-red-700 font-medium">
                      Chat with us
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-red-600 to-red-800 text-white p-8 rounded-xl">
                <h4 className="font-bold text-lg mb-4">Quick Facts</h4>
                <ul className="space-y-3 text-sm">
                  <li className="flex items-center gap-2">
                    <ChevronRight size={18} />
                    <span>300+ projects completed</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <ChevronRight size={18} />
                    <span>70+ satisfied clients</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <ChevronRight size={18} />
                    <span>5+ years of experience</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <ChevronRight size={18} />
                    <span>Monday To Saturday</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <ChevronRight size={18} />
                    <span>9:00AM To 6:00PM</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== SERVICE DETAILS MODAL ===== */}
      {selectedService && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4 animate-fade-in overflow-y-auto"
          onClick={() => setSelectedService(null)}
        >
          <div
            className="bg-white rounded-2xl max-w-2xl w-full my-8"
            onClick={e => e.stopPropagation()}
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-red-600 to-red-800 text-white p-8 rounded-t-2xl flex items-start justify-between">
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 bg-white/20 rounded-lg flex items-center justify-center">
                  {selectedService.icon && <selectedService.icon className="text-white" size={32} />}
                </div>
                <div>
                  <h2 className="text-3xl font-bold mb-2">{selectedService.title}</h2>
                  <p className="text-white/90">{selectedService.description}</p>
                </div>
              </div>
              <button
                onClick={() => setSelectedService(null)}
                className="text-white hover:bg-white/20 p-2 rounded-lg transition-colors"
              >
                ✕
              </button>
            </div>

            {/* Content */}
            <div className="p-8 space-y-8">
              {/* Overview */}
              <div>
                <h3 className="text-2xl font-bold text-black mb-3">Overview</h3>
                <p className="text-gray-600 leading-relaxed">{selectedService.details.overview}</p>
              </div>

              {/* What's Included */}
              <div>
                <h3 className="text-2xl font-bold text-black mb-4">What's Included</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {selectedService.details.included.map((item: string, idx: number) => (
                    <div key={idx} className="flex items-start gap-3">
                      <div className="w-5 h-5 bg-red-600 rounded-full flex items-center justify-center mt-0.5 flex-shrink-0">
                        <span className="text-white text-sm">✓</span>
                      </div>
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Benefits */}
              <div>
                <h3 className="text-2xl font-bold text-black mb-4">Key Benefits</h3>
                <div className="space-y-3">
                  {selectedService.details.benefits.map((benefit: string, idx: number) => (
                    <div key={idx} className="flex items-center gap-3 bg-red-50 p-3 rounded-lg">
                      <span className="text-red-600 font-bold">✓</span>
                      <span className="text-gray-700">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Timeline & Price */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                  <p className="text-sm text-blue-600 font-medium mb-1">Timeline</p>
                  <p className="text-lg font-bold text-blue-900">{selectedService.details.timeline}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                  <p className="text-sm text-green-600 font-medium mb-1">Pricing</p>
                  <p className="text-lg font-bold text-green-900">{selectedService.details.price}</p>
                </div>
              </div>

              {/* CTA Button */}
              <button
                onClick={() => {
                  setSelectedService(null);
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="w-full bg-red-600 hover:bg-red-700 text-white py-4 rounded-lg font-bold text-lg transition-all hover:shadow-lg"
              >
                Get Started with {selectedService.title}
              </button>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}
