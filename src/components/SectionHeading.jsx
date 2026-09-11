import ScrollReveal from './ScrollReveal';

/**
 * SectionHeading — consistent heading + optional subheading for every section.
 *
 * Props:
 *   title       – main heading text (h2)
 *   subtitle    – optional paragraph below
 *   center      – center-align (default false = left-aligned)
 *   light       – use light (white) text for dark backgrounds
 *   className   – extra wrapper classes
 */
export default function SectionHeading({ title, subtitle, center = false, light = false, className = '' }) {
  return (
    <ScrollReveal className={`${center ? 'text-center' : ''} ${className}`}>
      <h2
        className={`text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-tight
          ${light ? 'text-white' : 'text-brand-black'}`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-4 text-base sm:text-lg leading-relaxed max-w-2xl
            ${center ? 'mx-auto' : ''}
            ${light ? 'text-white/70' : 'text-brand-gray'}`}
        >
          {subtitle}
        </p>
      )}
    </ScrollReveal>
  );
}
