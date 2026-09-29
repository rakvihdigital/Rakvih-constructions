import Header from '@/components/Header';
import FadeIn from '@/components/FadeIn';
import Footer from '@/components/Footer';

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen flex flex-col bg-dark-bg text-white font-sans selection:bg-gold selection:text-black">
      <Header />
      <main className="flex-grow pt-16 animate-fade-in-up">
        <section className="relative pt-16 pb-24 border-b border-white/5">
        <div className="container mx-auto px-6 max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-light mb-8">
              Privacy <span className="font-bold">Policy</span>
            </h1>
            <p className="text-gray-400 mb-12 text-sm uppercase tracking-wider font-semibold">Last Updated: September 2026</p>
            
            <div className="space-y-8 text-gray-300 leading-relaxed">
              <div>
                <h3 className="text-2xl font-bold text-white mb-4">1. Introduction</h3>
                <p>Welcome to Rakvih Construction. We respect your privacy and are committed to protecting your personal data. This privacy policy will inform you as to how we look after your personal data when you visit our website and tell you about your privacy rights.</p>
              </div>
              
              <div>
                <h3 className="text-2xl font-bold text-white mb-4">2. The Data We Collect</h3>
                <p className="mb-4">We may collect, use, store and transfer different kinds of personal data about you which we have grouped together as follows:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Identity Data:</strong> includes first name, last name, username or similar identifier, title, and company name.</li>
                  <li><strong>Contact Data:</strong> includes billing address, delivery address, email address and telephone numbers.</li>
                  <li><strong>Technical Data:</strong> includes internet protocol (IP) address, browser type and version, time zone setting and location, browser plug-in types and versions, operating system and platform, and other technology on the devices you use to access this website.</li>
                  <li><strong>Usage Data:</strong> includes information about how you use our website, products and services.</li>
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-white mb-4">3. How We Use Your Data</h3>
                <p>We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:</p>
                <ul className="list-disc pl-6 space-y-2 mt-4">
                  <li>Where we need to perform the contract we are about to enter into or have entered into with you.</li>
                  <li>Where it is necessary for our legitimate interests (or those of a third party) and your interests and fundamental rights do not override those interests.</li>
                  <li>Where we need to comply with a legal obligation.</li>
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-white mb-4">4. Data Security</h3>
                <p>We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used or accessed in an unauthorised way, altered or disclosed. In addition, we limit access to your personal data to those employees, agents, contractors and other third parties who have a business need to know.</p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-white mb-4">5. Your Legal Rights</h3>
                <p>Under certain circumstances, you have rights under data protection laws in relation to your personal data, including the right to request access, correction, erasure, restriction, transfer, to object to processing, to portability of data and (where the lawful ground of processing is consent) to withdraw consent.</p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-white mb-4">6. Contact Us</h3>
                <p>If you have any questions about this privacy policy or our privacy practices, please contact us at:</p>
                <p className="mt-4 font-bold text-gold">privacy@rakvihconstruction.com</p>
              </div>
            </div>
          </div>
      </section>
      </main>
      <Footer />
    </div>
  );
}
