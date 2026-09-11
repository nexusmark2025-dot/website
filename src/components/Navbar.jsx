import { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { WhatsAppIcon } from './WhatsAppButton';

const WA_URL = 'https://wa.me/917981335587';

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/customizations', label: 'Customizations' },
  { to: '/bulk-orders', label: 'Bulk Orders' },
  { to: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  /* Close mobile menu on route change */
  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  /* Sticky scroll shadow */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  /* Lock body scroll when mobile menu is open */
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300
          ${scrolled ? 'navbar-scrolled' : 'bg-white/80 backdrop-blur-sm'}`}
      >
        <div className="container-max section-padding">
          <nav className="flex items-center justify-between h-16 md:h-18" aria-label="Main navigation">

            {/* Brand */}
            <Link
              to="/"
              className="flex items-center gap-2.5 group"
              aria-label="NexusMark – Home"
            >
              <img
                src="/nexusmark_logo_1.jpg"
                alt="NexusMark logo"
                className="h-10 w-auto object-contain rounded-xl group-hover:opacity-80 transition-opacity"
              />
              <span className="text-lg font-black tracking-tight text-brand-black group-hover:opacity-80 transition-opacity">
                NexusMark
              </span>
            </Link>

            {/* Desktop nav links */}
            <ul className="hidden md:flex items-center gap-1" role="list">
              {navLinks.map(({ to, label }) => (
                <li key={to}>
                  <NavLink
                    to={to}
                    end={to === '/'}
                    className={({ isActive }) =>
                      `px-4 py-2 rounded-full text-sm font-medium transition-all duration-200
                       ${isActive
                         ? 'bg-brand-black text-white'
                         : 'text-brand-charcoal hover:bg-gray-100'}`
                    }
                  >
                    {label}
                  </NavLink>
                </li>
              ))}
            </ul>

            {/* Desktop CTA */}
            <div className="hidden md:flex items-center gap-3">
              <a
                href={WA_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp text-sm px-5 py-2.5"
                aria-label="Chat with NexusMark on WhatsApp"
              >
                <WhatsAppIcon size={16} />
                WhatsApp Us
              </a>
            </div>

            {/* Mobile hamburger */}
            <button
              onClick={() => setMenuOpen((prev) => !prev)}
              className="md:hidden flex flex-col justify-center items-center w-10 h-10 gap-1.5
                rounded-xl hover:bg-gray-100 transition-colors"
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
            >
              <span
                className={`block w-5 h-0.5 bg-brand-black rounded transition-all duration-300
                  ${menuOpen ? 'rotate-45 translate-y-2' : ''}`}
              />
              <span
                className={`block w-5 h-0.5 bg-brand-black rounded transition-all duration-300
                  ${menuOpen ? 'opacity-0' : ''}`}
              />
              <span
                className={`block w-5 h-0.5 bg-brand-black rounded transition-all duration-300
                  ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`}
              />
            </button>
          </nav>
        </div>
      </header>

      {/* Mobile menu overlay */}
      {menuOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/20 backdrop-blur-sm md:hidden"
          onClick={() => setMenuOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Mobile menu panel */}
      <div
        id="mobile-menu"
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
        className={`fixed top-16 left-0 right-0 z-50 bg-white border-b border-brand-border
          md:hidden transition-all duration-300 origin-top
          ${menuOpen ? 'opacity-100 scale-y-100 mobile-menu-enter' : 'opacity-0 scale-y-95 pointer-events-none'}`}
      >
        <div className="section-padding py-4">
          <ul className="flex flex-col gap-1" role="list">
            {navLinks.map(({ to, label }) => (
              <li key={to}>
                <NavLink
                  to={to}
                  end={to === '/'}
                  className={({ isActive }) =>
                    `block px-4 py-3 rounded-xl text-base font-medium transition-colors duration-200
                     ${isActive
                       ? 'bg-brand-black text-white'
                       : 'text-brand-charcoal hover:bg-gray-50'}`
                  }
                >
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>

          <div className="mt-4 pt-4 border-t border-brand-border">
            <a
              href={WA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp w-full justify-center"
              aria-label="Chat with NexusMark on WhatsApp"
            >
              <WhatsAppIcon size={18} />
              WhatsApp Us
            </a>
          </div>
        </div>
      </div>

      {/* Spacer so content starts below fixed navbar */}
      <div className="h-16 md:h-18" aria-hidden="true" />
    </>
  );
}
