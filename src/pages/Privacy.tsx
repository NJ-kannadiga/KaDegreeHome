import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export default function Privacy() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <div className="container mx-auto px-4 py-16 md:px-6 max-w-4xl">
        <h1 className="font-serif text-4xl font-bold mb-8 text-primary">Privacy Policy & Refund Info</h1>
        
        <div className="prose prose-slate max-w-none space-y-8">
          <section>
            <h2 className="text-2xl font-bold text-primary mb-4">🔐 Privacy Policy</h2>
            <p className="text-muted-foreground italic mb-4">Effective Date: 15/05/2025</p>
            <p>Welcome to https://kadegree.in/ (“we,” “our,” or “us”). We are committed to protecting your privacy and ensuring your personal information is handled in a secure and responsible way.</p>
          </section>

          <section className="space-y-4">
            <h3 className="text-xl font-bold">📌 1. Information We Collect</h3>
            <div className="pl-4 border-l-2 border-accent/30">
              <h4 className="font-bold">👤 a. Personal Information</h4>
              <ul className="list-disc list-inside text-muted-foreground ml-4">
                <li>Full Name</li>
                <li>Email Address</li>
                <li>Phone Number</li>
                <li>Resume or career-related details</li>
                <li>Information from forms, surveys, or contact requests</li>
              </ul>
            </div>
          </section>

          <section className="space-y-4">
            <h3 className="text-xl font-bold">📊 2. How We Use Your Information</h3>
            <ul className="list-disc list-inside text-muted-foreground ml-4">
              <li>Providing personalized career advice and learning content</li>
              <li>Responding to support requests and inquiries</li>
              <li>Improving website performance and usability</li>
              <li>Meeting legal and regulatory requirements</li>
            </ul>
          </section>

          <section className="space-y-4 bg-muted/30 p-6 rounded-xl border-l-4 border-accent">
            <h2 className="text-2xl font-bold text-primary">📜 10. Refunds and Rescheduling Policy</h2>
            <p className="font-bold">All payments made for sessions or services on KA Degree are non-refundable. We do not allow cancellations once a booking is confirmed.</p>
            <p>However, if a session is postponed due to unforeseen circumstances (e.g., technical issues or faculty unavailability), we will notify you in advance and reschedule the session.</p>
          </section>

          <section className="space-y-4">
            <h3 className="text-xl font-bold">📞 11. Contact Us</h3>
            <p>If you have questions regarding this Privacy Policy or need support, feel free to reach out:</p>
            <p className="font-medium">📧 Email: kannadadegree@gmail.com</p>
          </section>
        </div>
      </div>
      <Footer />
    </div>
  );
}
