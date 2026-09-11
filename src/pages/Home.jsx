import { Link } from 'react-router-dom';
import { WhatsAppBtn, WhatsAppIcon } from '../components/WhatsAppButton';
import SectionHeading from '../components/SectionHeading';
import CustomizationCard from '../components/CustomizationCard';
import ScrollReveal from '../components/ScrollReveal';
import customizations from '../data/customizations';

const WA_URL = 'https://wa.me/917981335587';

/* ─── USP data ───────────────────────────────────────────── */
const USPs = [
  { icon: '🎨', label: 'Custom Printing' },
  { icon: '✏️', label: 'Personalized Designs' },
  { icon: '📦', label: 'Small & Bulk Orders' },
  { icon: '∞',  label: 'Any Quantity' },
];

/* ─── How it works steps ─────────────────────────────────── */
const steps = [
  {
    number: '01',
    title: 'Tell Us What You Need',
    desc: 'Tell us what product you want customized and we\'ll guide you through the rest.',
  },
  {
    number: '02',
    title: 'Share Your Design',
    desc: 'Send your photo, logo, name, artwork or just describe your requirements.',
  },
  {
    number: '03',
    title: 'We Customize It',
    desc: 'We prepare your customized product with care, according to your exact requirements.',
  },
  {
    number: '04',
    title: 'Get Your Order',
    desc: "We'll coordinate delivery or pickup details with you directly.",
  },
];

/* ─── Why NexusMark cards ────────────────────────────────── */
const whyUs = [
  {
    icon: '🎯',
    title: 'Custom Made',
    desc: 'Your product is customized according to your requirements — no templates, no compromise.',
  },
  {
    icon: '🛍️',
    title: 'Wide Range',
    desc: 'Customize T-shirts, mugs, bottles, pillows, gifts and much more.',
  },
  {
    icon: '📐',
    title: 'Any Quantity',
    desc: 'Single pieces and bulk orders are equally welcome — no minimums.',
  },
  {
    icon: '🤝',
    title: 'Personalized Service',
    desc: 'Discuss your requirements directly with us for the best result.',
  },
  {
    icon: '💬',
    title: 'Easy Enquiry',
    desc: 'Send your requirements through WhatsApp — fast, simple, and convenient.',
  },
];

/* ─── Hero section ───────────────────────────────────────── */
function Hero() {
  return (
    <section
      className="relative overflow-hidden bg-white section-padding"
      aria-label="Hero"
    >
      {/* Subtle background accent */}
      <div
        className="absolute inset-0 -z-10 opacity-[0.03]"
        style={{
          backgroundImage:
            'radial-gradient(circle at 70% 40%, #000 0%, transparent 60%)',
        }}
        aria-hidden="true"
      />

      <div className="container-max py-16 md:py-24 lg:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Left — copy */}
          <div>
            <ScrollReveal>
              <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase
                tracking-widest text-brand-gray border border-brand-border rounded-full
                px-4 py-1.5 mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-whatsapp inline-block" />
                Custom Printing · Hyderabad
              </span>
            </ScrollReveal>

            <ScrollReveal delay={80}>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight
                leading-[1.08] text-brand-black">
                Custom Printing<br />
                <span className="text-brand-black">Made For You.</span>
              </h1>
            </ScrollReveal>

            <ScrollReveal delay={160}>
              <p className="mt-5 text-base sm:text-lg text-brand-gray leading-relaxed max-w-lg">
                Customize T-shirts, mugs, water bottles, pillows, gifts and much more
                with your own designs, names, logos and ideas.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={220}>
              <p className="mt-3 text-sm font-medium text-brand-black">
                From a single piece to bulk orders — we customize it for you.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={300}>
              <div className="mt-8 flex flex-wrap gap-3">
                <WhatsAppBtn label="WhatsApp Us" className="text-sm" />
                <Link
                  to="/customizations"
                  className="btn-outline text-sm"
                  aria-label="Explore all customization options"
                >
                  Explore Customizations
                </Link>
              </div>
            </ScrollReveal>
          </div>

          {/* Right — hero visual */}
          <ScrollReveal delay={200} scale className="w-full">
            <div className="relative">
              {/* Main hero image container */}
              <div className="rounded-3xl overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200
                aspect-[4/3] flex items-center justify-center shadow-sm border border-brand-border">
                <img
                  src="/images/hero/hero-main.jpg"
                  alt="Custom printed products — T-shirts, mugs, gifts and more by NexusMark"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    e.currentTarget.nextElementSibling.style.display = 'flex';
                  }}
                />
                {/* Fallback illustration */}
                <div
                  className="hidden w-full h-full flex-col items-center justify-center gap-4 p-8"
                  aria-hidden="true"
                >
                  <div className="grid grid-cols-3 gap-4">
                    {['👕','☕','🍶','🎁','🖼️','🧢'].map((e, i) => (
                      <div
                        key={i}
                        className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center
                          text-3xl shadow-sm border border-white/80"
                      >
                        {e}
                      </div>
                    ))}
                  </div>
                  <p className="text-brand-gray text-sm font-medium mt-2">
                    T-Shirts · Mugs · Bottles · Gifts · Frames · Caps
                  </p>
                </div>
              </div>

              {/* Floating badge — top left */}
              <div className="absolute -top-3 -left-3 bg-white border border-brand-border
                rounded-2xl px-4 py-2.5 shadow-md hidden sm:flex items-center gap-2">
                <span className="text-xl">🎨</span>
                <div>
                  <p className="text-xs font-semibold text-brand-black leading-none">Custom Design</p>
                  <p className="text-[10px] text-brand-gray mt-0.5">Your idea, our craft</p>
                </div>
              </div>

              {/* Floating badge — bottom right */}
              <div className="absolute -bottom-3 -right-3 bg-white border border-brand-border
                rounded-2xl px-4 py-2.5 shadow-md hidden sm:flex items-center gap-2">
                <span className="text-xl">📦</span>
                <div>
                  <p className="text-xs font-semibold text-brand-black leading-none">Any Quantity</p>
                  <p className="text-[10px] text-brand-gray mt-0.5">1 piece or 500+</p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

/* ─── USP Strip ─────────────────────────────────────────── */
function UspStrip() {
  return (
    <section className="usp-strip section-padding" aria-label="Key features">
      <div className="container-max py-5">
        <ul
          className="flex flex-wrap sm:flex-nowrap items-center justify-center
            divide-y sm:divide-y-0 sm:divide-x divide-brand-border w-full"
          role="list"
        >
          {USPs.map(({ icon, label }) => (
            <li
              key={label}
              className="flex items-center gap-2.5 px-6 py-3.5 flex-1 justify-center
                min-w-[50%] sm:min-w-0"
            >
              <span className="text-lg" aria-hidden="true">{icon}</span>
              <span className="text-sm font-semibold text-brand-black whitespace-nowrap">{label}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/* ─── What We Customize (preview grid — 8 cards) ─────────── */
function WhatWeCustomize() {
  const preview = customizations.slice(0, 8);

  return (
    <section className="section-padding section-py bg-white" aria-labelledby="what-we-customize-heading">
      <div className="container-max">
        <SectionHeading
          id="what-we-customize-heading"
          title="What We Customize"
          subtitle="Your idea, our customization. We print and personalize a wide range of products for individuals, businesses, events and special occasions."
        />

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {preview.map((item, i) => (
            <ScrollReveal key={item.id} delay={i * 60}>
              <CustomizationCard item={item} />
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal className="mt-10 text-center">
          <Link
            to="/customizations"
            className="btn-primary"
            aria-label="View all customization categories"
          >
            View All Customizations
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"
              fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"
              strokeLinejoin="round" aria-hidden="true">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </Link>
        </ScrollReveal>
      </div>
    </section>
  );
}

/* ─── Customization message CTA ─────────────────────────── */
function CustomizationMessage() {
  return (
    <section
      className="section-padding section-py bg-brand-black"
      aria-label="Customization CTA"
    >
      <div className="container-max">
        <div className="max-w-3xl">
          <ScrollReveal>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight
              leading-tight text-white">
              Your Design.<br />Your Style.<br />Your Product.
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <p className="mt-5 text-base sm:text-lg text-white/65 leading-relaxed max-w-xl">
              Have a design, photo, logo, name or idea? Share it with us and we'll help
              turn it into a customized product.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={180}>
            <a
              href={`${WA_URL}?text=${encodeURIComponent('Hello NexusMark, I would like to start a customization enquiry.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-2 text-base font-bold text-white
                border-b-2 border-white/30 hover:border-white pb-0.5 transition-all duration-200
                group"
              aria-label="Start your customization enquiry on WhatsApp"
            >
              Start Your Enquiry
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"
                fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"
                strokeLinejoin="round" className="group-hover:translate-x-1 transition-transform"
                aria-hidden="true">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </a>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

/* ─── Bulk Orders ────────────────────────────────────────── */
function BulkOrdersStrip() {
  return (
    <section
      className="section-padding section-py bg-gray-50 border-y border-brand-border"
      aria-labelledby="bulk-heading"
    >
      <div className="container-max">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          <div>
            <ScrollReveal>
              <span className="inline-block text-xs font-semibold uppercase tracking-widest
                text-brand-gray mb-4">
                Bulk Orders
              </span>
              <h2
                id="bulk-heading"
                className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight
                  leading-tight text-brand-black"
              >
                Need Bulk Orders?<br />We've Got You.
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <p className="mt-6 text-3xl sm:text-4xl font-black text-brand-black tracking-tight">
                1 Piece. 10 Pieces.<br />
                100 Pieces. 500+ Pieces.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={180}>
              <p className="mt-5 text-base text-brand-gray leading-relaxed max-w-lg">
                We accept bulk orders in any quantity for businesses, schools, colleges,
                events, weddings, teams, corporate requirements and more.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={240}>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href={`${WA_URL}?text=${encodeURIComponent('Hello NexusMark, I would like to enquire about a bulk order.')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-whatsapp"
                  aria-label="Discuss bulk order on WhatsApp"
                >
                  <WhatsAppIcon size={18} />
                  Discuss Bulk Order on WhatsApp
                </a>
                <Link to="/bulk-orders" className="btn-outline">
                  Learn More
                </Link>
              </div>
            </ScrollReveal>
          </div>

          {/* Right — quantity cards */}
          <div className="grid grid-cols-2 gap-4">
            {[
              { qty: '1', label: 'Single Piece', desc: 'Perfect for personal gifts & memories' },
              { qty: '10+', label: 'Small Batches', desc: 'Great for teams & small events' },
              { qty: '100+', label: 'Events & Schools', desc: 'Ideal for colleges, functions & clubs' },
              { qty: '500+', label: 'Corporate Bulk', desc: 'For businesses, brands & large events' },
            ].map((item, i) => (
              <ScrollReveal key={item.qty} delay={i * 80} scale>
                <div className="bg-white border border-brand-border rounded-2xl p-5
                  hover:shadow-md hover:-translate-y-0.5 transition-all duration-300">
                  <p className="text-3xl font-black text-brand-black">{item.qty}</p>
                  <p className="text-sm font-semibold text-brand-black mt-1">{item.label}</p>
                  <p className="text-xs text-brand-gray mt-1 leading-relaxed">{item.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── How It Works ───────────────────────────────────────── */
function HowItWorks() {
  return (
    <section
      className="section-padding section-py bg-white"
      aria-labelledby="how-it-works-heading"
    >
      <div className="container-max">
        <SectionHeading
          id="how-it-works-heading"
          title="How It Works"
          subtitle="Getting your custom product is simple. Just follow these four steps."
          center
        />

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, i) => (
            <ScrollReveal key={step.number} delay={i * 100}>
              <div className="relative group">
                {/* Connector line (hidden on mobile) */}
                {i < steps.length - 1 && (
                  <div
                    className="absolute top-5 left-[calc(100%_-_12px)] w-full h-px
                      bg-brand-border hidden lg:block z-0"
                    aria-hidden="true"
                  />
                )}
                <div className="relative z-10 bg-white border border-brand-border rounded-2xl p-6
                  hover:shadow-md hover:-translate-y-1 transition-all duration-300">
                  <p className="step-number">{step.number}</p>
                  <h3 className="mt-3 text-base font-bold text-brand-black leading-snug">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm text-brand-gray leading-relaxed">{step.desc}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal className="mt-12 text-center" delay={200}>
          <WhatsAppBtn label="Get Started on WhatsApp" />
        </ScrollReveal>
      </div>
    </section>
  );
}

/* ─── Why NexusMark ─────────────────────────────────────── */
function WhyNexusMark() {
  return (
    <section
      className="section-padding section-py bg-gray-50 border-t border-brand-border"
      aria-labelledby="why-nexusmark-heading"
    >
      <div className="container-max">
        <SectionHeading
          id="why-nexusmark-heading"
          title="Why Choose NexusMark?"
          subtitle="We're not just printers — we're your creative customization partner."
          center
        />

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
          {whyUs.map((item, i) => (
            <ScrollReveal key={item.title} delay={i * 80} scale>
              <div className="bg-white border border-brand-border rounded-2xl p-6 text-center
                hover:shadow-md hover:-translate-y-1 transition-all duration-300 h-full">
                <div className="text-4xl mb-4" aria-hidden="true">{item.icon}</div>
                <h3 className="text-sm font-bold text-brand-black">{item.title}</h3>
                <p className="mt-2 text-xs text-brand-gray leading-relaxed">{item.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Home page ─────────────────────────────────────────── */
export default function Home() {
  return (
    <main>
      <Hero />
      <UspStrip />
      <WhatWeCustomize />
      <CustomizationMessage />
      <BulkOrdersStrip />
      <HowItWorks />
      <WhyNexusMark />
    </main>
  );
}
