import { useEffect, useRef } from 'react';

/**
 * ScrollReveal — wraps children in a div that fades up when it enters the viewport.
 *
 * Props:
 *   className   – extra classes on the wrapper
 *   delay       – transition-delay in ms (default 0)
 *   scale       – use scale-in variant instead of fade-up
 *   threshold   – IntersectionObserver threshold (default 0.15)
 *   as          – element tag to render (default 'div')
 */
export default function ScrollReveal({
  children,
  className = '',
  delay = 0,
  scale = false,
  threshold = 0.12,
  as: Tag = 'div',
}) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('visible');
          observer.unobserve(el);
        }
      },
      { threshold }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return (
    <Tag
      ref={ref}
      className={`${scale ? 'reveal-scale' : 'reveal'} ${className}`}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </Tag>
  );
}
