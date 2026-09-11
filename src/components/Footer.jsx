import { Link } from 'react-router-dom';
import { WhatsAppIcon } from './WhatsAppButton';

const WA_URL = 'https://wa.me/917981335587';

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/customizations', label: 'Customizations' },
  { to: '/bulk-orders', label: 'Bulk Orders' },
  { to: '/contact', label: 'Contact' },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-brand-black text-white" role="contentinfo">
      <div className="container-max section-padding pt-14 pb-8">

        {/* Top grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 pb-10
          border-b border-white/10">

          {/* Brand col */}
          <div className="lg:col-span-2">
            <Link to="/" className="inline-flex items-center gap-2.5 mb-4" aria-label="NexusMark Home">
              <img
                src="/nexusmark_logo_1.jpg"
                alt="NexusMark logo"
                className="h-12 w-auto object-contain rounded-xl"
              />
              <span className="text-xl font-black tracking-tight text-white">
                NexusMark
              </span>
            </Link>
            <p className="text-white/60 text-sm leading-relaxed max-w-xs">
              Custom Printing &amp; Personalization. We customize T-shirts, mugs, water bottles,
              pillows, gifts and much more with your own designs, names, logos and ideas.
            </p>

            <a
              href={WA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 bg-whatsapp hover:bg-green-500
                text-white text-sm font-semibold px-5 py-2.5 rounded-full transition-all duration-200
                hover:scale-105 active:scale-95"
              aria-label="Chat with NexusMark on WhatsApp"
            >
              <WhatsAppIcon size={16} />
              WhatsApp Us
            </a>
          </div>

          {/* Navigation */}
          <nav aria-label="Footer navigation">
            <h3 className="text-xs font-semibold uppercase tracking-widest text-white/40 mb-4">
              Navigation
            </h3>
            <ul className="space-y-2.5" role="list">
              {navLinks.map(({ to, label }) => (
                <li key={to}>
                  <Link
                    to={to}
                    className="text-sm text-white/70 hover:text-white transition-colors duration-200"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest text-white/40 mb-4">
              Contact
            </h3>
            <ul className="space-y-3 text-sm text-white/70" role="list">
              <li>
                <a
                  href="tel:+917981335587"
                  className="hover:text-white transition-colors duration-200 flex items-center gap-2"
                  aria-label="Call NexusMark"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24"
                    fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                    strokeLinejoin="round" aria-hidden="true">
                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.68A2 2 0 012 .99h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.09 8.91A16 16 0 0015.09 17.9l1.28-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/>
                  </svg>
                  7981335587
                </a>
              </li>
              <li>
                <a
                  href={WA_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors duration-200 flex items-center gap-2"
                  aria-label="WhatsApp NexusMark"
                >
                  <WhatsAppIcon size={14} color="currentColor" />
                  7981335587
                </a>
              </li>
              <li className="flex items-start gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24"
                  fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                  strokeLinejoin="round" className="mt-0.5 shrink-0" aria-hidden="true">
                  <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0118 0z"/>
                  <circle cx="12" cy="10" r="3"/>
                </svg>
                <span>Nizampet, Hyderabad,<br />Telangana, India</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/40">
          <p>© {year} NexusMark. All rights reserved.</p>
          <p>Custom Printing &amp; Personalization · Hyderabad, India</p>
        </div>
      </div>
    </footer>
  );
}
