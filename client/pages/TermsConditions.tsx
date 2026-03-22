import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

export default function TermsConditions() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h1 className="text-4xl font-bold text-black mb-4">Terms & Conditions</h1>
        <p className="text-gray-600 mb-8">Last updated: February 2026</p>

        <div className="prose prose-lg max-w-none space-y-8">
          <section>
            <h2 className="text-2xl font-bold text-black mb-4">1. Agreement to Terms</h2>
            <p className="text-gray-700 leading-relaxed">
              By accessing and using the Ignis Ventures Media website and services, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-black mb-4">2. Use License</h2>
            <p className="text-gray-700 mb-3">Permission is granted to temporarily download one copy of the materials (information or software) on our website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:</p>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Modify or copy the materials</li>
              <li>Use the materials for any commercial purpose or for any public display</li>
              <li>Attempt to decompile or reverse engineer any software contained on the website</li>
              <li>Remove any copyright or other proprietary notations from the materials</li>
              <li>Transfer the materials to another person or "mirror" the materials on any other server</li>
              <li>Violate any applicable laws or regulations</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-black mb-4">3. Disclaimer</h2>
            <p className="text-gray-700 leading-relaxed">
              The materials on our website are provided on an 'as is' basis. Ignis Ventures Media makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-black mb-4">4. Limitations</h2>
            <p className="text-gray-700 leading-relaxed">
              In no event shall Ignis Ventures Media or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on the website, even if we or an authorized representative has been notified orally or in writing of the possibility of such damage.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-black mb-4">5. Accuracy of Materials</h2>
            <p className="text-gray-700 leading-relaxed">
              The materials appearing on our website could include technical, typographical, or photographic errors. Ignis Ventures Media does not warrant that any of the materials on our website are accurate, complete, or current. We may make changes to the materials contained on our website at any time without notice.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-black mb-4">6. Links</h2>
            <p className="text-gray-700 leading-relaxed">
              Ignis Ventures Media has not reviewed all of the sites linked to its website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by Ignis Ventures Media of the site. Use of any such linked website is at the user's own risk.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-black mb-4">7. Modifications</h2>
            <p className="text-gray-700 leading-relaxed">
              Ignis Ventures Media may revise these terms of service for our website at any time without notice. By using this website, you are agreeing to be bound by the then current version of these terms of service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-black mb-4">8. Governing Law</h2>
            <p className="text-gray-700 leading-relaxed">
              These terms and conditions are governed by and construed in accordance with the laws of India, and you irrevocably submit to the exclusive jurisdiction of the courts in that location.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-black mb-4">9. User Responsibilities</h2>
            <p className="text-gray-700 mb-3">You agree to:</p>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Provide accurate and complete information</li>
              <li>Maintain the confidentiality of your account credentials</li>
              <li>Accept responsibility for all activities under your account</li>
              <li>Not engage in any illegal or harmful activities</li>
              <li>Not transmit viruses or malicious code</li>
              <li>Not attempt to gain unauthorized access</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-black mb-4">10. Service Payment and Refunds</h2>
            <p className="text-gray-700 mb-3">
              Services are provided as described. Payment terms are agreed upon before service commencement. Refunds are considered on a case-by-case basis within 30 days of service completion if the service was not provided as described.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-black mb-4">11. Intellectual Property Rights</h2>
            <p className="text-gray-700 leading-relaxed">
              All content on our website, including text, graphics, logos, images, and software, is the property of Ignis Ventures Media or its content suppliers and is protected by international copyright laws.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-black mb-4">12. Limitation of Liability</h2>
            <p className="text-gray-700 leading-relaxed">
              To the fullest extent permissible under applicable law, Ignis Ventures Media shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from use of or inability to use our services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-black mb-4">13. Contact Information</h2>
            <p className="text-gray-700 mb-3">For questions about these Terms & Conditions, contact us at:</p>
            <div className="bg-gray-50 p-6 rounded-lg">
              <p className="text-gray-700"><strong>Ignis Ventures Media</strong></p>
              <p className="text-gray-700">Email: ignisventuresmedia@gmail.com</p>
              <p className="text-gray-700">Phone: +91 9783952367</p>
              <p className="text-gray-700">Address: India</p>
            </div>
          </section>
        </div>
      </div>

      <Footer />
    </div>
  );
}
