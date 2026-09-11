import { Link } from 'react-router-dom';
import { WhatsAppBtn } from '../components/WhatsAppButton';

export default function NotFound() {
  return (
    <main
      className="min-h-[70vh] flex items-center justify-center section-padding py-20"
      aria-label="Page not found"
    >
      <div className="text-center max-w-md mx-auto">
        <p className="text-8xl font-black text-brand-black opacity-10 select-none" aria-hidden="true">
          404
        </p>
        <h1 className="text-3xl font-black text-brand-black tracking-tight mt-2">
          Page Not Found
        </h1>
        <p className="mt-4 text-brand-gray text-base leading-relaxed">
          The page you're looking for doesn't exist. It may have moved, or the URL
          might be incorrect.
        </p>

        <div className="mt-8 flex flex-wrap gap-3 justify-center">
          <Link to="/" className="btn-primary" aria-label="Go back to NexusMark homepage">
            Back to Home
          </Link>
          <WhatsAppBtn label="WhatsApp Us" />
        </div>

        {/* Quick links */}
        <nav className="mt-10 border-t border-brand-border pt-8" aria-label="Helpful links">
          <p className="text-xs font-semibold uppercase tracking-widest text-brand-gray mb-4">
            Helpful Pages
          </p>
          <ul className="flex flex-wrap justify-center gap-x-6 gap-y-2" role="list">
            {[
              { to: '/customizations', label: 'Customizations' },
              { to: '/bulk-orders', label: 'Bulk Orders' },
              { to: '/contact', label: 'Contact' },
            ].map(({ to, label }) => (
              <li key={to}>
                <Link
                  to={to}
                  className="text-sm text-brand-gray hover:text-brand-black transition-colors"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </main>
  );
}
