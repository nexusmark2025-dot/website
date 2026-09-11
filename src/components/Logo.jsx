/**
 * NexusMark Logo — SVG recreation of the winged-M emblem + wordmark.
 *
 * Props:
 *   variant   – "dark" (black icon + black text, for white navbar)
 *               "light" (white icon + white text, for dark footer/bg)
 *               "icon"  (emblem only, no text — used for favicon-like spots)
 *   height    – height of the whole mark in px (default 36)
 *   className – extra wrapper classes
 */
export default function Logo({ variant = 'dark', height = 36, className = '' }) {
  const iconColor  = variant === 'light' ? '#ffffff' : '#0a0a0a';
  const textColor  = variant === 'light' ? '#ffffff' : '#0a0a0a';
  const subColor   = variant === 'light' ? 'rgba(255,255,255,0.5)' : 'rgba(10,10,10,0.45)';

  /* Scale everything relative to height */
  const iconH  = height;
  const iconW  = height;                  // emblem is square
  const gap    = Math.round(height * 0.3);
  const totalW = variant === 'icon'
    ? iconW
    : iconW + gap + Math.round(height * 3.2);

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={totalW}
      height={height}
      viewBox={`0 0 ${totalW} ${height}`}
      aria-label="NexusMark logo"
      role="img"
      className={className}
      fill="none"
    >
      {/* ── Winged-M / lightning emblem ───────────────────── */}

      {/* Left wing — sweeping feather shape */}
      <path
        d={`
          M${iconW * 0.5} ${iconH * 0.5}
          C${iconW * 0.35} ${iconH * 0.32}
           ${iconW * 0.15} ${iconH * 0.28}
           ${iconW * 0.04} ${iconH * 0.38}
          L${iconW * 0.10} ${iconH * 0.44}
          C${iconW * 0.20} ${iconH * 0.36}
           ${iconW * 0.34} ${iconH * 0.40}
           ${iconW * 0.5}  ${iconH * 0.5}
          Z
        `}
        fill={iconColor}
        opacity="0.9"
      />
      <path
        d={`
          M${iconW * 0.5} ${iconH * 0.5}
          C${iconW * 0.32} ${iconH * 0.38}
           ${iconW * 0.08} ${iconH * 0.42}
           ${iconW * 0.02} ${iconH * 0.56}
          L${iconW * 0.10} ${iconH * 0.58}
          C${iconW * 0.16} ${iconH * 0.48}
           ${iconW * 0.34} ${iconH * 0.46}
           ${iconW * 0.5}  ${iconH * 0.5}
          Z
        `}
        fill={iconColor}
        opacity="0.65"
      />
      <path
        d={`
          M${iconW * 0.5} ${iconH * 0.5}
          C${iconW * 0.32} ${iconH * 0.46}
           ${iconW * 0.12} ${iconH * 0.56}
           ${iconW * 0.08} ${iconH * 0.70}
          L${iconW * 0.16} ${iconH * 0.70}
          C${iconW * 0.20} ${iconH * 0.60}
           ${iconW * 0.35} ${iconH * 0.54}
           ${iconW * 0.5}  ${iconH * 0.5}
          Z
        `}
        fill={iconColor}
        opacity="0.4"
      />

      {/* Right wing — mirror */}
      <path
        d={`
          M${iconW * 0.5} ${iconH * 0.5}
          C${iconW * 0.65} ${iconH * 0.32}
           ${iconW * 0.85} ${iconH * 0.28}
           ${iconW * 0.96} ${iconH * 0.38}
          L${iconW * 0.90} ${iconH * 0.44}
          C${iconW * 0.80} ${iconH * 0.36}
           ${iconW * 0.66} ${iconH * 0.40}
           ${iconW * 0.5}  ${iconH * 0.5}
          Z
        `}
        fill={iconColor}
        opacity="0.9"
      />
      <path
        d={`
          M${iconW * 0.5} ${iconH * 0.5}
          C${iconW * 0.68} ${iconH * 0.38}
           ${iconW * 0.92} ${iconH * 0.42}
           ${iconW * 0.98} ${iconH * 0.56}
          L${iconW * 0.90} ${iconH * 0.58}
          C${iconW * 0.84} ${iconH * 0.48}
           ${iconW * 0.66} ${iconH * 0.46}
           ${iconW * 0.5}  ${iconH * 0.5}
          Z
        `}
        fill={iconColor}
        opacity="0.65"
      />
      <path
        d={`
          M${iconW * 0.5} ${iconH * 0.5}
          C${iconW * 0.68} ${iconH * 0.46}
           ${iconW * 0.88} ${iconH * 0.56}
           ${iconW * 0.92} ${iconH * 0.70}
          L${iconW * 0.84} ${iconH * 0.70}
          C${iconW * 0.80} ${iconH * 0.60}
           ${iconW * 0.65} ${iconH * 0.54}
           ${iconW * 0.5}  ${iconH * 0.5}
          Z
        `}
        fill={iconColor}
        opacity="0.4"
      />

      {/* Centre lightning-bolt / M shape */}
      <path
        d={`
          M${iconW * 0.50} ${iconH * 0.14}
          L${iconW * 0.38} ${iconH * 0.50}
          L${iconW * 0.46} ${iconH * 0.50}
          L${iconW * 0.38} ${iconH * 0.86}
          L${iconW * 0.50} ${iconH * 0.60}
          L${iconW * 0.62} ${iconH * 0.86}
          L${iconW * 0.54} ${iconH * 0.50}
          L${iconW * 0.62} ${iconH * 0.50}
          Z
        `}
        fill={iconColor}
      />

      {/* ── Wordmark (hidden when variant="icon") ─────────── */}
      {variant !== 'icon' && (
        <>
          {/* NEXUSMARK */}
          <text
            x={iconW + gap}
            y={iconH * 0.62}
            fontFamily="'Inter', system-ui, sans-serif"
            fontWeight="900"
            fontSize={Math.round(iconH * 0.46)}
            letterSpacing={Math.round(iconH * 0.005)}
            fill={textColor}
          >
            NEXUSMARK
          </text>
          {/* CUSTOM PRINTING */}
          <text
            x={iconW + gap}
            y={iconH * 0.88}
            fontFamily="'Inter', system-ui, sans-serif"
            fontWeight="500"
            fontSize={Math.round(iconH * 0.22)}
            letterSpacing={Math.round(iconH * 0.06)}
            fill={subColor}
          >
            CUSTOM PRINTING
          </text>
        </>
      )}
    </svg>
  );
}
