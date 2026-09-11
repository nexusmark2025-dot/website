import { useState } from 'react';
import { WhatsAppIcon } from './WhatsAppButton';

const WA_URL = 'https://wa.me/917981335587';

/**
 * CustomizationCard
 *
 * Props:
 *   item        – object from customizations.js
 *   showCTA     – show "Enquire on WhatsApp" button (default false)
 *   compact     – smaller card variant for home-section preview
 */
export default function CustomizationCard({ item, showCTA = false, compact = false }) {
  const [imgError, setImgError] = useState(false);

  const hasImage = item.image && !imgError;
  const enquiryMessage = `Hello NexusMark,\n\nI am interested in customizing: ${item.name}\n\nPlease share more details.`;

  return (
    <article
      className={`group bg-white rounded-2xl border border-brand-border overflow-hidden
        transition-all duration-300 hover:shadow-lg hover:-translate-y-1 flex flex-col`}
    >
      {/* Image / Emoji placeholder */}
      <div className={`relative overflow-hidden bg-gray-50 ${compact ? 'h-40' : 'h-52'}`}>
        {hasImage ? (
          <img
            src={item.image}
            alt={`Custom ${item.name} printing by NexusMark`}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
            onError={() => setImgError(true)}
          />
        ) : (
          /* Emoji fallback — shown when image is null or fails to load */
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100">
            <span className="text-6xl" role="img" aria-label={item.name}>
              {item.emoji}
            </span>
          </div>
        )}

        {/* Tag badge */}
        {item.tag && (
          <span className="absolute top-3 left-3 bg-brand-black text-white text-xs font-semibold
            px-2.5 py-1 rounded-full">
            {item.tag}
          </span>
        )}
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-1">
        <div className="flex items-start justify-between gap-2">
          <h3 className="text-base font-semibold text-brand-black leading-snug">{item.name}</h3>
          {/* Arrow icon */}
          <span className="text-gray-300 group-hover:text-brand-black transition-colors duration-200 mt-0.5 shrink-0">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"
              fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M7 17L17 7M17 7H7M17 7v10" />
            </svg>
          </span>
        </div>

        <p className="mt-1.5 text-sm text-brand-gray leading-relaxed flex-1">
          {item.description}
        </p>

        {showCTA && (
          <a
            href={`${WA_URL}?text=${encodeURIComponent(enquiryMessage)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-whatsapp
              hover:underline transition-colors"
            aria-label={`Enquire about ${item.name} on WhatsApp`}
          >
            <WhatsAppIcon size={15} color="#25D366" />
            Enquire on WhatsApp
          </a>
        )}
      </div>
    </article>
  );
}
