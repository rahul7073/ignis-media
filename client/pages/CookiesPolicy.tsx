import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

export default function CookiesPolicy() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h1 className="text-4xl font-bold text-black mb-4">Cookies Policy</h1>
        <p className="text-gray-600 mb-8">Last updated: February 2026</p>

        <div className="prose prose-lg max-w-none space-y-8">
          <section>
            <h2 className="text-2xl font-bold text-black mb-4">1. What Are Cookies?</h2>
            <p className="text-gray-700 leading-relaxed">
              Cookies are small files placed on your device when you visit our website. They contain information about your browsing activities and preferences. Cookies help us remember your information, improve your experience, and understand how visitors use our website.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-black mb-4">2. Types of Cookies We Use</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-bold text-red-600 mb-2">Essential Cookies</h3>
                <p className="text-gray-700">These cookies are necessary for the website to function properly. They enable basic functions like page navigation and access to secure areas. Without these cookies, the website cannot function properly.</p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-red-600 mb-2">Performance Cookies</h3>
                <p className="text-gray-700">These cookies collect information about how you use our website, such as which pages you visit and how long you spend there. This information helps us improve our website's performance and user experience.</p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-red-600 mb-2">Functional Cookies</h3>
                <p className="text-gray-700">These cookies remember your preferences and choices to provide a more personalized experience when you visit our website.</p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-red-600 mb-2">Marketing Cookies</h3>
                <p className="text-gray-700">These cookies track your activities across websites to display targeted advertisements. They help us understand your interests and show you relevant content.</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-black mb-4">3. Third-Party Cookies</h2>
            <p className="text-gray-700 leading-relaxed">
              We may allow third-party service providers to place cookies on your device for analytics, advertising, and other purposes. These cookies are governed by the privacy policies of these third parties, not by our Cookies Policy.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-black mb-4">4. Google Analytics</h2>
            <p className="text-gray-700 leading-relaxed">
              We use Google Analytics to analyze website traffic and user behavior. Google Analytics uses cookies to collect data about your visit. Google may use this information to evaluate your use of the website, compile reports on website activity for website operators, and provide other services relating to website activity and internet usage.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-black mb-4">5. How Long Do Cookies Last?</h2>
            <p className="text-gray-700 mb-3">Cookies have different lifespans:</p>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li><strong>Session Cookies:</strong> Deleted when you close your browser</li>
              <li><strong>Persistent Cookies:</strong> Stored on your device until their expiration date or until you delete them</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-black mb-4">6. Cookie Consent</h2>
            <p className="text-gray-700 leading-relaxed">
              When you first visit our website, we ask for your consent to use non-essential cookies. You can modify your preferences at any time. We require consent only for marketing and non-essential cookies; essential cookies are always used.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-black mb-4">7. How to Control Cookies</h2>
            <p className="text-gray-700 mb-3">You can control cookies through:</p>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li><strong>Browser Settings:</strong> Most browsers allow you to refuse cookies or alert you when a cookie is being sent</li>
              <li><strong>Cookie Consent Tools:</strong> Use our consent management tool to adjust your preferences</li>
              <li><strong>Browser Extensions:</strong> Install extensions that block cookies</li>
              <li><strong>Opt-out Tools:</strong> Use third-party opt-out tools</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-black mb-4">8. Disabling Cookies</h2>
            <p className="text-gray-700 leading-relaxed">
              If you disable non-essential cookies, the website will still function, but some features may not work as intended. Disabling essential cookies may prevent the website from functioning properly.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-black mb-4">9. Your Rights</h2>
            <p className="text-gray-700 mb-3">You have the right to:</p>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Know what cookies are used</li>
              <li>Accept or reject cookies (except essential)</li>
              <li>Delete cookies from your device</li>
              <li>Opt-out of tracking</li>
              <li>Withdraw consent at any time</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-black mb-4">10. Updates to This Policy</h2>
            <p className="text-gray-700 leading-relaxed">
              We may update this Cookies Policy from time to time. Any changes will be posted on this page with an updated "Last updated" date. Your continued use of the website after changes indicates your acceptance of the updated policy.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-black mb-4">11. Contact Us</h2>
            <p className="text-gray-700 mb-3">If you have questions about our use of cookies, contact us at:</p>
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
