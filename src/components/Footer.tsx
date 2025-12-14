import { Link } from 'react-router-dom';
import { GraduationCap, Mail, Phone, MapPin } from 'lucide-react';
import { collegeInfo } from '@/data/dummyData';

export default function Footer() {
  return (
    <footer className="border-t border-border bg-card mt-auto">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                <GraduationCap className="h-6 w-6" />
              </div>
              <div>
                <span className="text-lg font-bold text-foreground">AITD</span>
                <span className="text-lg font-medium text-accent"> Connect</span>
              </div>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed">
              AI-Powered Academic & Accessible Support Portal for Dr. Ambedkar Institute of Technology for Divyangjan, Kanpur.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {[
                { to: '/college-info', label: 'About AITD' },
                { to: '/resources', label: 'Resources' },
                { to: '/dashboard', label: 'Student Dashboard' },
                { to: '/practice', label: 'Practice Tests' },
                { to: '/accessibility-support', label: 'Accessibility' },
              ].map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-sm text-muted-foreground hover:text-accent transition-colors animated-underline inline-block"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider">
              Contact Us
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4 mt-0.5 text-accent flex-shrink-0" />
                <span>{collegeInfo.contact.address}</span>
              </li>
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <Phone className="h-4 w-4 text-accent flex-shrink-0" />
                <span>{collegeInfo.contact.phone}</span>
              </li>
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <Mail className="h-4 w-4 text-accent flex-shrink-0" />
                <a 
                  href={`mailto:${collegeInfo.contact.email}`}
                  className="hover:text-accent transition-colors"
                >
                  {collegeInfo.contact.email}
                </a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider">
              Resources
            </h3>
            <ul className="space-y-2">
              {[
                { href: 'https://aktu.ac.in', label: 'AKTU Website' },
                { href: 'https://aith.ac.in', label: 'Official AITD Site' },
                { href: '#', label: 'Student Handbook' },
                { href: '#', label: 'Academic Calendar' },
              ].map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-muted-foreground hover:text-accent transition-colors animated-underline inline-block"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs text-muted-foreground text-center md:text-left">
              © {new Date().getFullYear()} AITD Connect. All rights reserved.
            </p>
            <p className="text-xs text-muted-foreground text-center md:text-right max-w-xl">
              <strong>Disclaimer:</strong> This is a high-fidelity demo project using static data and simulated AI responses for academic and accessibility UI demonstration purposes only. All college details are sourced from the AITD official website.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
