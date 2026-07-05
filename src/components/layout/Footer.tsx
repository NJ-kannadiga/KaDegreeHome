import { Link } from "wouter";
import { GraduationCap, Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12 md:px-6">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <GraduationCap className="h-8 w-8 text-accent" />
              <span className="font-serif text-xl font-bold">KA Degree</span>
            </div>
            <p className="text-sm text-primary-foreground/80">
  Learn from industry experts through mentor-led training that combines
  real projects, modern AI tools, and full-stack development aligned with
  global standards.            </p>
          </div>
          
          <div>
            <h3 className="mb-4 font-serif text-lg font-semibold text-accent">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/privacy"><a className="hover:text-accent">Privacy Policy</a></Link></li>
              <li><Link href="/privacy#refunds"><a className="hover:text-accent">Refund Policy</a></Link></li>
              <li><Link href="/contact"><a className="hover:text-accent">Terms of Service</a></Link></li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 font-serif text-lg font-semibold text-accent">Contact</h3>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4" /> +91 7975902348
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4" /> admissions@kadegree.com
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />  3rd Floor, Tech Park Building,<br />
  BTM Layout, Bengaluru, Karnataka 560076
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 font-serif text-lg font-semibold text-accent">Follow Us</h3>
            <div className="flex gap-4">
              <a href="https://www.facebook.com/share/189kFUwpSN/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" className="hover:text-accent"><Facebook className="h-5 w-5" /></a>
              <a href="https://www.instagram.com/ka_degree?igsh=bWxwZWVxOGx6dXRm" target="_blank" rel="noopener noreferrer" className="hover:text-accent"><Instagram className="h-5 w-5" /></a>
              <a href="https://www.linkedin.com/company/ka-degree/" target="_blank" rel="noopener noreferrer" className="hover:text-accent"><Linkedin className="h-5 w-5" /></a>
            </div>
          </div>
        </div>
        
        <div className="mt-12 border-t border-primary-foreground/20 pt-8">
          <p className="text-sm text-primary-foreground/60 mb-4 max-w-4xl mx-auto text-center">
            KA Degree provides online computer science and AI coaching for BCA, MCA, BE, and PUC students across India. Our mentor-led training focuses on real-world projects, weekly mentorship, applied AI, and modern development skills.
          </p>
          <div className="text-center text-sm text-primary-foreground/60">
            © {new Date().getFullYear()} KA Degree. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
