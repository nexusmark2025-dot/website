import { Link } from 'react-router-dom';
import ScrollReveal from '../components/ScrollReveal';
import WhatsAppForm from '../components/WhatsAppForm';
import { WhatsAppIcon } from '../components/WhatsAppButton';

const WA_URL = 'https://wa.me/917981335587';

/**
 * Google Maps embed URL — points to the verified NexusMark Printing location.
 * Place: NexusMark Printing, Nizampet, Hyderabad, Telangana
 * Coordinates: 17.5216679, 78.3918807
 * Place ID: 0x3bcb8ff624c3441d:0xe9da930b25151d66
 * To update the location later, replace the pb parameter below.
 */
const MAPS_EMBED_URL =
  'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3805.1!2d78.3918807!3d17.5216679!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb8ff624c3441d%3A0xe9da930b25151d66!2sNexusMark%20Printing!5e0!3m2!1sen!2sin!4v1699999999999!5m2!1sen!2sin';

const contactInfo = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"
        fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
        strokeLinejoin="round" aria-hidden="true">
        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.68A2 2 0 012 .99h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.09 8.91A16 16 0 0015.09 17.9l1.28-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/>
      </svg>
    ),
    label: 'Phone',
    value: '7981335587',
    href: 'tel:+917981335587',
  },
  {
    icon: <WhatsAppIcon size={20} color="currentColor" />,
    label: 'WhatsApp',
    value: '7981335587',
    href: WA_URL,
    external: true,
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"
        fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
        strokeLinejoin="round" aria-hidden="true">
        <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0118 0z"/>
        <circle cx="12" cy="10" r="3"/>
      </svg>
    ),
    label: 'Location',
    value: 'Nizampet, Hyderabad, Telangana, India',
    href: 'https://maps.app.goo.gl/k1HrByyYAgaVqSXF9',
    external: true,
  },
];

export default function Contact() {
  return (
    <main>
      {/* ── Page header ── */}
      <section
        className="section-padding pt-12 pb-14 bg-white border-b border-brand-border"
        aria-label="Contact page header"
      >
        <div className="container-max">
          <ScrollReveal>
            <Link
              to="/"
              className="inline-flex items-center gap-1.5 text-xs font-medium text-brand-gray
                hover:text-brand-black transition-colors mb-6"
              aria-label="Back to Home"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24"
                fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"
                strokeLinejoin="round" aria-hidden="true">
                <path d="M19 12H5M12 19l-7-7 7-7"/>
              </svg>
              Back to Home
            </Link>
          </ScrollReveal>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-end">
            <ScrollReveal>
              <h1 className="text-4xl sm:text-5xl font-black tracking-tight leading-tight text-brand-black">
                Let's Create Something Custom.
              </h1>
              <p className="mt-4 text-base sm:text-lg text-brand-gray leading-relaxed">
                Tell us what you need and we'll get back to you.
              </p>
            </ScrollReveal>

            {/* Quick WhatsApp CTA */}
            <ScrollReveal delay={100} className="lg:text-right">
              <p className="text-sm text-brand-gray mb-3">Prefer to talk directly?</p>
              <a
                href={WA_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp inline-flex"
                aria-label="Chat with NexusMark on WhatsApp"
              >
                <WhatsAppIcon size={18} />
                WhatsApp Us Now
              </a>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── Contact info + map ── */}
      <section
        className="section-padding py-14 bg-gray-50 border-b border-brand-border"
        aria-labelledby="contact-info-heading"
      >
        <div className="container-max">
          <h2 id="contact-info-heading" className="sr-only">Contact Information</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-stretch">

            {/* Contact cards */}
            <div className="flex flex-col gap-4">
              <ScrollReveal>
                <div className="bg-white border border-brand-border rounded-2xl p-6 mb-2">
                  <h3 className="text-lg font-bold text-brand-black mb-1">NexusMark</h3>
                  <p className="text-sm text-brand-gray">Custom Printing &amp; Personalization</p>
                </div>
              </ScrollReveal>

              {contactInfo.map((item, i) => (
                <ScrollReveal key={item.label} delay={i * 80}>
                  <a
                    href={item.href}
                    target={item.external ? '_blank' : undefined}
                    rel={item.external ? 'noopener noreferrer' : undefined}
                    className="bg-white border border-brand-border rounded-2xl p-5 flex
                      items-center gap-4 hover:shadow-md hover:-translate-y-0.5
                      transition-all duration-300 group"
                    aria-label={`${item.label}: ${item.value}`}
                  >
                    <div className="w-11 h-11 rounded-xl bg-gray-50 border border-brand-border
                      flex items-center justify-center text-brand-gray
                      group-hover:bg-brand-black group-hover:text-white
                      transition-all duration-300 shrink-0">
                      {item.icon}
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-widest text-brand-gray">
                        {item.label}
                      </p>
                      <p className="text-sm font-medium text-brand-black mt-0.5">{item.value}</p>
                    </div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"
                      fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                      strokeLinejoin="round"
                      className="ml-auto text-gray-300 group-hover:text-brand-black
                        transition-colors shrink-0"
                      aria-hidden="true">
                      <path d="M7 17L17 7M17 7H7M17 7v10"/>
                    </svg>
                  </a>
                </ScrollReveal>
              ))}
            </div>

            {/* Google Maps embed */}
            <ScrollReveal delay={120} scale className="h-full min-h-[320px]">
              <div className="rounded-2xl overflow-hidden border border-brand-border h-full min-h-[320px]
                shadow-sm">
                <iframe
                  src={MAPS_EMBED_URL}
                  width="100%"
                  height="100%"
                  style={{ border: 0, minHeight: '320px' }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="NexusMark Printing — Nizampet, Hyderabad"
                  aria-label="Google Maps showing NexusMark Printing location in Nizampet, Hyderabad"
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── Enquiry form ── */}
      <section
        className="section-padding section-py bg-white"
        aria-labelledby="enquiry-form-heading"
      >
        <div className="container-max">
          <ScrollReveal>
            <h2
              id="enquiry-form-heading"
              className="text-2xl sm:text-3xl font-black text-brand-black tracking-tight mb-2"
            >
              Send Your Enquiry
            </h2>
            <p className="text-brand-gray text-base mb-10">
              Fill in the form below — we'll generate a WhatsApp message for you to send instantly.
            </p>
          </ScrollReveal>

          <WhatsAppForm />
        </div>
      </section>
    </main>
  );
}
