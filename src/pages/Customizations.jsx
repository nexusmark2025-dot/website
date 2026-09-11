import { Link } from 'react-router-dom';
import SectionHeading from '../components/SectionHeading';
import CustomizationCard from '../components/CustomizationCard';
import ScrollReveal from '../components/ScrollReveal';
import { WhatsAppBtn, WhatsAppIcon } from '../components/WhatsAppButton';
import customizations from '../data/customizations';

const WA_URL = 'https://wa.me/917981335587';

export default function Customizations() {
  return (
    <main>
      {/* ── Page hero ── */}
      <section
        className="section-padding pt-12 pb-14 bg-white border-b border-brand-border"
        aria-label="Page header"
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

          <SectionHeading
            title="Everything You Can Customize"
            subtitle="From everyday products to special occasions, we bring your ideas to life through custom printing and personalization."
          />

          <ScrollReveal delay={120}>
            <div className="mt-8 flex flex-wrap gap-3">
              <WhatsAppBtn label="Get a Quote on WhatsApp" />
              <a
                href={`${WA_URL}?text=${encodeURIComponent("Hello NexusMark, I'd like to know more about your customization services.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline"
                aria-label="Send an enquiry on WhatsApp"
              >
                Send Enquiry
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Grid ── */}
      <section
        className="section-padding section-py bg-white"
        aria-labelledby="customizations-grid-heading"
      >
        <div className="container-max">
          <h2 id="customizations-grid-heading" className="sr-only">All Customization Categories</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {customizations.map((item, i) => (
              <ScrollReveal key={item.id} delay={Math.min(i * 55, 400)}>
                <CustomizationCard item={item} showCTA />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Bottom CTA ── */}
      <section
        className="section-padding py-16 bg-gray-50 border-t border-brand-border"
        aria-label="Bottom CTA"
      >
        <div className="container-max text-center max-w-2xl mx-auto">
          <ScrollReveal>
            <h2 className="text-2xl sm:text-3xl font-black text-brand-black tracking-tight">
              Don't see what you're looking for?
            </h2>
            <p className="mt-3 text-brand-gray text-base leading-relaxed">
              We customize a wide range of products. If you have something specific in mind,
              just ask us — we'll let you know if we can do it.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <div className="mt-8 flex flex-wrap gap-3 justify-center">
              <a
                href={`${WA_URL}?text=${encodeURIComponent("Hello NexusMark, I have a customization request that I'd like to discuss.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp"
                aria-label="Ask NexusMark about custom products on WhatsApp"
              >
                <WhatsAppIcon size={18} />
                Ask Us on WhatsApp
              </a>
              <Link to="/contact" className="btn-outline">
                Send Enquiry Form
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
}
