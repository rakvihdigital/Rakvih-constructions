import Header from '@/components/Header';
import FadeIn from '@/components/FadeIn';
import Footer from '@/components/Footer';

export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen flex flex-col bg-dark-bg text-white font-sans selection:bg-gold selection:text-black">
      <Header />
      <main className="flex-grow pt-16 animate-fade-in-up">
        <section className="relative pt-16 pb-24 border-b border-white/5">
        <div className="container mx-auto px-6 max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-light mb-8">
              Terms & <span className="font-bold">Conditions</span>
            </h1>
            <p className="text-gray-400 mb-12 text-sm uppercase tracking-wider font-semibold">Last Updated: September 2026</p>
            
            <div className="space-y-8 text-gray-300 leading-relaxed">
              <div>
                <h3 className="text-2xl font-bold text-white mb-4">1. Agreement to Terms</h3>
                <p>By accessing or using our website and services, you agree to be bound by these Terms and Conditions and our Privacy Policy. If you do not agree to these terms, please do not use our services.</p>
              </div>
              
              <div>
                <h3 className="text-2xl font-bold text-white mb-4">2. Intellectual Property Rights</h3>
                <p>Other than the content you own, under these terms, Rakvih Construction and/or its licensors own all the intellectual property rights and materials contained in this website. You are granted a limited license only for purposes of viewing the material contained on this website.</p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-white mb-4">3. Restrictions</h3>
                <p className="mb-4">You are specifically restricted from all of the following:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Publishing any website material in any other media without prior written consent.</li>
                  <li>Selling, sublicensing and/or otherwise commercializing any website material.</li>
                  <li>Using this website in any way that is or may be damaging to this website or to the brand.</li>
                  <li>Using this website contrary to applicable laws and regulations, or in any way may cause harm to the website, or to any person or business entity.</li>
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-white mb-4">4. No Warranties</h3>
                <p>This website is provided "as is," with all faults, and Rakvih Construction expresses no representations or warranties, of any kind related to this website or the materials contained on this website. Also, nothing contained on this website shall be interpreted as advising you.</p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-white mb-4">5. Limitation of Liability</h3>
                <p>In no event shall Rakvih Construction, nor any of its officers, directors, and employees, be held liable for anything arising out of or in any way connected with your use of this website whether such liability is under contract. Rakvih Construction, including its officers, directors, and employees shall not be held liable for any indirect, consequential, or special liability arising out of or in any way related to your use of this website.</p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-white mb-4">6. Variation of Terms</h3>
                <p>Rakvih Construction is permitted to revise these terms at any time as it sees fit, and by using this website you are expected to review these terms on a regular basis.</p>
              </div>
            </div>
          </div>
      </section>
      </main>
      <Footer />
    </div>
  );
}
