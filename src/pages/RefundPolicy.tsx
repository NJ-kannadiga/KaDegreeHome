import { Helmet } from "react-helmet-async";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export default function RefundPolicy() {
  return (
    <div className="min-h-screen bg-slate-950 flex flex-col font-sans selection:bg-blue-500/30">
      <Helmet>
        <title>Refund Policy - KA Degree</title>
      </Helmet>
      <Navbar />
      
      <main className="flex-grow pt-32 pb-24">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
           <h1 className="text-3xl md:text-5xl font-bold text-white mb-8">Refund Policy</h1>
           <div className="text-slate-300 leading-relaxed space-y-6">
             <p>At <strong>KA Degree</strong>, your satisfaction is our top priority. We are confident in the quality of our training programs and stand by our commitment to delivering exceptional value.</p>
             <p>However, we understand that sometimes a program might not meet your expectations. To ensure your peace of mind, we offer a money-back guarantee on our digital products and courses under certain conditions.</p>
             
             <h2 className="text-2xl font-bold text-white mt-8 mb-4">How to Request a Refund</h2>
             <p>If you are not completely satisfied with your purchase, you can request a full refund within the stipulated time of your purchase date. To initiate a refund, simply visit our website at <strong>kadegree.in</strong> or contact our support team.</p>
             <p>Our customer service team is ready to assist you with any questions or concerns throughout the process, making it as straightforward and hassle-free as possible. To process your refund, please provide your order number and the reason for your dissatisfaction. We will promptly review your request and, if eligible, issue a full refund to your original payment method.</p>
             
             <h2 className="text-2xl font-bold text-white mt-8 mb-4">Refund Claim Details</h2>
             <p>Send your Refund Claim with the following details to <strong>admin@kadegree.com</strong> to process:</p>
             <ul className="list-disc pl-6 space-y-2">
               <li>Your Name</li>
               <li>Service / Product Availed Details</li>
               <li>Amount Claimed</li>
               <li>Payment Transaction Details</li>
               <li>Payment Date</li>
             </ul>
             
             <p className="mt-8">At KA Degree, we value your trust and are dedicated to providing an excellent experience. Thank you for choosing KA Degree. We look forward to continuing to serve your needs and exceed your expectations.</p>
           </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
