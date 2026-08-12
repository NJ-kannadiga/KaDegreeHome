import { Helmet } from "react-helmet-async";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-slate-950 flex flex-col font-sans selection:bg-blue-500/30">
      <Helmet>
        <title>Terms of Service - KA Degree</title>
      </Helmet>
      <Navbar />
      
      <main className="flex-grow pt-32 pb-24">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
           <h1 className="text-3xl md:text-5xl font-bold text-white mb-8">Terms of Service</h1>
           <div className="text-slate-300 leading-relaxed space-y-6">
             <p>Please read these Terms and Conditions (“Terms”, “Terms and Conditions”) carefully before using the <strong>kadegree.in</strong> website (the “Service”) operated by <strong>KA Degree</strong> (“us”, “we”, or “our”).</p>
             <p>Your access to and use of the Service is conditioned upon your acceptance of and compliance with these Terms. These Terms apply to all visitors, users and others who wish to access or use the Service.</p>
             <p>By accessing or using the Service you agree to be bound by these Terms. If you disagree with any part of the terms then you do not have permission to access the Service.</p>
             
             <h2 className="text-2xl font-bold text-white mt-8 mb-4">Purchases</h2>
             <p>If you wish to purchase any product or service made available through the Service (“Purchase”), you may be asked to supply certain information relevant to your Purchase including, without limitation, your credit card number, the expiration date of your credit card, your billing address, and your shipping information.</p>
             <p>You represent and warrant that: (i) you have the legal right to use any credit card(s) or other payment method(s) in connection with any Purchase; and that (ii) the information you supply to us is true, correct and complete.</p>
             <p>We reserve the right to refuse or cancel your order at any time for reasons including but not limited to: product or service availability, errors in the description or price of the product or service, error in your order or other reasons.</p>
             
             <h2 className="text-2xl font-bold text-white mt-8 mb-4">Availability, Errors and Inaccuracies</h2>
             <p>We are constantly updating product and service offerings on the Service. We may experience delays in updating information on the Service and in our advertising on other web sites. The information found on the Service may contain errors or inaccuracies and may not be complete or current.</p>
             <p>We therefore reserve the right to change or update information and to correct errors, inaccuracies, or omissions at any time without prior notice.</p>
             
             <h2 className="text-2xl font-bold text-white mt-8 mb-4">Accounts</h2>
             <p>When you create an account with us, you guarantee that you are above the age of 18, and that the information you provide us is accurate, complete, and current at all times. Inaccurate, incomplete, or obsolete information may result in the immediate termination of your account on the Service.</p>
             <p>You are responsible for maintaining the confidentiality of your account and password, including but not limited to the restriction of access to your computer and/or account. You agree to accept responsibility for any and all activities or actions that occur under your account and/or password.</p>
             
             <h2 className="text-2xl font-bold text-white mt-8 mb-4">Intellectual Property</h2>
             <p>The Service and its original content (excluding Content provided by users), features and functionality are and will remain the exclusive property of <strong>KA Degree</strong> and its licensors. The Service is protected by copyright, trademark, and other laws of both the United States and foreign countries.</p>
             
             <h2 className="text-2xl font-bold text-white mt-8 mb-4">Termination</h2>
             <p>We may terminate or suspend your account and bar access to the Service immediately, without prior notice or liability, under our sole discretion, for any reason whatsoever and without limitation, including but not limited to a breach of the Terms.</p>
             <p>If you wish to terminate your account, you may simply discontinue using the Service.</p>
             
             <h2 className="text-2xl font-bold text-white mt-8 mb-4">Limitation Of Liability</h2>
             <p>In no event shall KA Degree, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of or inability to access or use the Service.</p>
             
             <h2 className="text-2xl font-bold text-white mt-8 mb-4">Changes</h2>
             <p>We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material we will provide at least 30 days notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.</p>
             <p>By continuing to access or use our Service after any revisions become effective, you agree to be bound by the revised terms. If you do not agree to the new terms, you are no longer authorized to use the Service.</p>
             
             <h2 className="text-2xl font-bold text-white mt-8 mb-4">Contact Us</h2>
             <p>If you have any questions about these Terms, please contact us at admin@kadegree.com.</p>
           </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
