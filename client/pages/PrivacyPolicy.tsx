import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h1 className="text-4xl font-bold text-black mb-4">Privacy Policy</h1>
        <p className="text-gray-600 mb-8">Last updated: February 2026</p>

        <div className="prose prose-lg max-w-none space-y-8">
          <section>
            <h2 className="text-2xl font-bold text-black mb-4">1. Introduction</h2>
            <p className="text-gray-700 leading-relaxed">
              Ignis Ventures Media ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website and use our services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-black mb-4">2. Information We Collect</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-bold text-red-600 mb-2">Personal Information</h3>
                <p className="text-gray-700">We collect information you voluntarily provide, including:</p>
                <ul className="list-disc list-inside text-gray-700 mt-2 space-y-1">
                  <li>Name and contact information</li>
                  <li>Email address</li>
                  <li>Phone number</li>
                  <li>Company information</li>
                  <li>Service preferences</li>
                  <li>Payment information</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-bold text-red-600 mb-2">Automatically Collected Information</h3>
                <p className="text-gray-700">When you visit our website, we automatically collect:</p>
                <ul className="list-disc list-inside text-gray-700 mt-2 space-y-1">
                  <li>IP address</li>
                  <li>Browser type and version</li>
                  <li>Operating system</li>
                  <li>Pages visited and time spent</li>
                  <li>Referring URL</li>
                  <li>Device identifiers</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-black mb-4">3. How We Use Your Information</h2>
            <p className="text-gray-700 mb-3">We use collected information for:</p>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Providing and improving our services</li>
              <li>Responding to inquiries and requests</li>
              <li>Sending marketing communications (with consent)</li>
              <li>Processing payments and transactions</li>
              <li>Analyzing website usage and trends</li>
              <li>Detecting and preventing fraud</li>
              <li>Complying with legal obligations</li>
              <li>Personalizing user experience</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-black mb-4">4. Data Sharing and Disclosure</h2>
            <p className="text-gray-700 leading-relaxed">
              We do not sell, trade, or rent your personal information. However, we may share your information with:
            </p>
            <ul className="list-disc list-inside text-gray-700 mt-3 space-y-2">
              <li>Service providers and contractors</li>
              <li>Business partners for joint services</li>
              <li>Legal authorities when required</li>
              <li>Acquirers in case of business sale or merger</li>
              <li>Third parties with your explicit consent</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-black mb-4">5. Data Security</h2>
            <p className="text-gray-700 leading-relaxed">
              We implement industry-standard security measures to protect your information, including encryption, secure servers, and access controls. However, no transmission over the internet is completely secure, and we cannot guarantee absolute security.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-black mb-4">6. Cookies and Tracking Technologies</h2>
            <p className="text-gray-700 leading-relaxed">
              We use cookies and similar technologies to enhance your experience. You can control cookie settings through your browser preferences. See our Cookies Policy for more details.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-black mb-4">7. Third-Party Links</h2>
            <p className="text-gray-700 leading-relaxed">
              Our website may contain links to third-party websites. We are not responsible for their privacy practices. We encourage you to review their privacy policies before providing personal information.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-black mb-4">8. Your Rights and Choices</h2>
            <p className="text-gray-700 mb-3">You have the right to:</p>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Access your personal information</li>
              <li>Correct inaccurate information</li>
              <li>Request deletion of your data</li>
              <li>Opt-out of marketing communications</li>
              <li>Withdraw consent</li>
              <li>Data portability</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-black mb-4">9. Children's Privacy</h2>
            <p className="text-gray-700 leading-relaxed">
              Our website is not directed to children under 13. We do not knowingly collect personal information from children. If we become aware of such collection, we will take immediate steps to delete the information.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-black mb-4">10. Updates to This Policy</h2>
            <p className="text-gray-700 leading-relaxed">
              We may update this Privacy Policy periodically. We will notify you of significant changes by updating the "Last updated" date and posting the revised policy on our website.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-black mb-4">11. Contact Us</h2>
            <p className="text-gray-700 mb-3">If you have questions about this Privacy Policy, contact us at:</p>
            <div className="bg-gray-50 p-6 rounded-lg">
              <p className="text-gray-700"><strong>Ignis Ventures Media</strong></p>
              <p className="text-gray-700">Email: hello@ignisventures.com</p>
              <p className="text-gray-700">Phone: +91 (XXX) XXX-XXXX</p>
              <p className="text-gray-700">Address: India</p>
            </div>
          </section>
        </div>
      </div>

      <Footer />
    </div>
  );
}
