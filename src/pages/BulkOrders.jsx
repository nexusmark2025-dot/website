import { Link } from 'react-router-dom';
import SectionHeading from '../components/SectionHeading';
import ScrollReveal from '../components/ScrollReveal';
import { WhatsAppBtn, WhatsAppIcon } from '../components/WhatsAppButton';

const WA_BULK = 'https://wa.me/917981335587?text=' +
  encodeURIComponent('Hello NexusMark, I would like to enquire about a bulk order.');

const useCases = [
  { icon: '🏢', title: 'Corporate Gifting', desc: 'Branded merchandise, employee kits, client gifts and promotional items.' },
  { icon: '🎓', title: 'Schools & Colleges', desc: 'Uniforms, event T-shirts, farewell gifts, club merchandise and more.' },
  { icon: '💍', title: 'Weddings & Events', desc: 'Return gifts, couple gifts, customized favors and event souvenirs.' },
  { icon: '⚽', title: 'Teams & Clubs', desc: 'Custom jerseys, caps, water bottles and team merchandise.' },
  { icon: '🎉', title: 'Parties & Celebrations', desc: 'Birthday gifts, anniversary surprises, themed party products.' },
  { icon: '🏪', title: 'Brands & Businesses', desc: 'Retail merchandise, branded products, promotional giveaways.' },
];

const howBulkWorks = [
  { step: '01', title: 'Share Your Requirement', desc: 'Tell us the product, quantity, design idea and your deadline.' },
  { step: '02', title: 'Get a Quotation', desc: 'We\'ll share a quote and timeline based on your bulk order details.' },
  { step: '03', title: 'Confirm & We Start', desc: 'Once confirmed, we begin preparing your customized products.' },
  { step: '04', title: 'Delivery or Pickup', desc: 'We coordinate delivery or pickup based on your preference.' },
];

export default function BulkOrders() {
  return (
    <main>
      {/* ── Page hero ── */}
      <section className="section-padding pt-12 pb-16 bg-brand-black" aria-label="Bulk orders header">
        <div className="container-max">
          <ScrollReveal>
            <Link
              to="/"
              className="inline-flex items-center gap-1.5 text-xs font-medium text-white/50
                hover:text-white transition-colors mb-6"
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

          <ScrollReveal delay={60}>
            <span className="inline-block text-xs font-semibold uppercase tracking-widest
              text-white/40 mb-4">
              Bulk Orders
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight
              leading-tight text-white">
              Need Bulk Orders?<br />We've Got You.
            </h1>
          </ScrollReveal>

          <ScrollReveal delay={140}>
            <p className="mt-5 text-3xl sm:text-4xl font-black text-white/40 tracking-tight">
              1 Piece. 10 Pieces.<br />100 Pieces. 500+ Pieces.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <p className="mt-6 text-base sm:text-lg text-white/65 leading-relaxed max-w-xl">
              We accept bulk orders in any quantity for businesses, schools, colleges, events,
              weddings, teams, corporate requirements and more.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={280}>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={WA_BULK}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp"
                aria-label="Discuss bulk order on WhatsApp"
              >
                <WhatsAppIcon size={18} />
                Discuss Bulk Order on WhatsApp
              </a>
              <Link to="/contact" className="inline-flex items-center gap-2 px-7 py-3.5
                bg-white/10 text-white text-sm font-semibold rounded-full border border-white/20
                hover:bg-white/20 transition-all duration-200">
                Send Enquiry Form
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Quantity showcase ── */}
      <section className="section-padding py-14 bg-white border-b border-brand-border" aria-label="Order quantities">
        <div className="container-max">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { qty: '1', tag: 'Single Piece', color: 'bg-gray-50' },
              { qty: '10+', tag: 'Small Batch', color: 'bg-gray-50' },
              { qty: '100+', tag: 'Event / School', color: 'bg-gray-50' },
              { qty: '500+', tag: 'Corporate Bulk', color: 'bg-brand-black text-white' },
            ].map((item, i) => (
              <ScrollReveal key={item.qty} delay={i * 80} scale>
                <div className={`${item.color} border border-brand-border rounded-2xl p-6 text-center
                  hover:-translate-y-1 hover:shadow-md transition-all duration-300`}>
                  <p className={`text-5xl font-black ${item.color.includes('brand-black') ? 'text-white' : 'text-brand-black'}`}>
                    {item.qty}
                  </p>
                  <p className={`mt-2 text-sm font-semibold ${item.color.includes('brand-black') ? 'text-white/70' : 'text-brand-gray'}`}>
                    {item.tag}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Who is bulk for ── */}
      <section
        className="section-padding section-py bg-gray-50 border-b border-brand-border"
        aria-labelledby="bulk-usecases-heading"
      >
        <div className="container-max">
          <SectionHeading
            id="bulk-usecases-heading"
            title="Who Orders in Bulk?"
            subtitle="From businesses to celebrations — bulk customization works for everyone."
          />

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {useCases.map((item, i) => (
              <ScrollReveal key={item.title} delay={i * 80}>
                <div className="bg-white border border-brand-border rounded-2xl p-6
                  hover:shadow-md hover:-translate-y-1 transition-all duration-300">
                  <span className="text-3xl" aria-hidden="true">{item.icon}</span>
                  <h3 className="mt-3 text-base font-bold text-brand-black">{item.title}</h3>
                  <p className="mt-1.5 text-sm text-brand-gray leading-relaxed">{item.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── How bulk works ── */}
      <section
        className="section-padding section-py bg-white border-b border-brand-border"
        aria-labelledby="how-bulk-works-heading"
      >
        <div className="container-max">
          <SectionHeading
            id="how-bulk-works-heading"
            title="How Bulk Orders Work"
            subtitle="Simple, transparent, and hassle-free."
            center
          />

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {howBulkWorks.map((item, i) => (
              <ScrollReveal key={item.step} delay={i * 100}>
                <div className="bg-white border border-brand-border rounded-2xl p-6
                  hover:shadow-md hover:-translate-y-1 transition-all duration-300">
                  <p className="step-number">{item.step}</p>
                  <h3 className="mt-3 text-base font-bold text-brand-black">{item.title}</h3>
                  <p className="mt-2 text-sm text-brand-gray leading-relaxed">{item.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Final CTA ── */}
      <section className="section-padding py-20 bg-brand-black" aria-label="Bulk order CTA">
        <div className="container-max text-center max-w-2xl mx-auto">
          <ScrollReveal>
            <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
              Ready to Place a Bulk Order?
            </h2>
            <p className="mt-4 text-white/60 text-base leading-relaxed">
              Contact us on WhatsApp with your requirement and we'll get back to you
              with a quote and timeline.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <div className="mt-8 flex flex-wrap gap-3 justify-center">
              <a
                href={WA_BULK}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp"
                aria-label="Start your bulk order enquiry on WhatsApp"
              >
                <WhatsAppIcon size={18} />
                Start Bulk Order Enquiry
              </a>
              <Link to="/contact" className="inline-flex items-center gap-2 px-7 py-3.5
                bg-white/10 text-white text-sm font-semibold rounded-full border border-white/20
                hover:bg-white/20 transition-all duration-200">
                Fill Enquiry Form
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
}
