import { useState, useCallback } from 'react';
import { WhatsAppIcon } from './WhatsAppButton';

const WA_NUMBER = '917981335587';

const INITIAL = {
  name: '',
  phone: '',
  product: '',
  quantity: '',
  requirements: '',
};

const ERRORS_INITIAL = {
  name: '',
  phone: '',
  product: '',
  requirements: '',
};

/* Build the WhatsApp message string from form state */
function buildMessage({ name, phone, product, quantity, requirements }) {
  const lines = [
    'Hello NexusMark,',
    '',
    'I would like to enquire about custom printing.',
    '',
    `Name: ${name || '—'}`,
    `Phone: ${phone || '—'}`,
    `Customization: ${product || '—'}`,
    quantity ? `Quantity: ${quantity}` : null,
    '',
    'Requirements:',
    requirements || '—',
    '',
    'Please share the details and quotation.',
    '',
    'Thank you.',
  ];
  return lines.filter((l) => l !== null).join('\n');
}

export default function WhatsAppForm() {
  const [form, setForm] = useState(INITIAL);
  const [errors, setErrors] = useState(ERRORS_INITIAL);
  const [submitted, setSubmitted] = useState(false);

  const message = buildMessage(form);

  /* ── Validate ── */
  const validate = useCallback(() => {
    const e = { ...ERRORS_INITIAL };
    if (!form.name.trim()) e.name = 'Please enter your name.';
    if (!form.phone.trim()) {
      e.phone = 'Please enter your phone number.';
    } else if (!/^[6-9]\d{9}$/.test(form.phone.replace(/\s+/g, ''))) {
      e.phone = 'Enter a valid 10-digit Indian mobile number.';
    }
    if (!form.product.trim()) e.product = 'Please tell us what you want customized.';
    if (!form.requirements.trim()) e.requirements = 'Please describe your requirements.';
    setErrors(e);
    return Object.values(e).every((v) => v === '');
  }, [form]);

  /* ── Handle change ── */
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: '' }));
  };

  /* ── Submit ── */
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;
    const encoded = encodeURIComponent(message);
    window.open(`https://wa.me/${WA_NUMBER}?text=${encoded}`, '_blank', 'noopener,noreferrer');
    setSubmitted(true);
  };

  /* ── Reset ── */
  const handleReset = () => {
    setForm(INITIAL);
    setErrors(ERRORS_INITIAL);
    setSubmitted(false);
  };

  if (submitted) {
    return (
      <div className="bg-green-50 border border-green-200 rounded-2xl p-8 text-center">
        <div className="flex justify-center mb-4">
          <span className="text-5xl">✅</span>
        </div>
        <h3 className="text-xl font-bold text-brand-black mb-2">WhatsApp Opened!</h3>
        <p className="text-brand-gray text-sm mb-6">
          Your enquiry message has been prepared. Please send it on WhatsApp to complete your enquiry.
        </p>
        <button onClick={handleReset} className="btn-outline text-sm px-6 py-2.5">
          Send Another Enquiry
        </button>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">

      {/* ── Form ── */}
      <form onSubmit={handleSubmit} noValidate className="space-y-5" aria-label="Enquiry form">

        {/* Name */}
        <div>
          <label htmlFor="enq-name" className="form-label">
            Your Name <span className="text-red-500" aria-hidden="true">*</span>
          </label>
          <input
            id="enq-name"
            name="name"
            type="text"
            autoComplete="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Rahul Sharma"
            className={`form-input ${errors.name ? 'border-red-400 focus:ring-red-200' : ''}`}
            aria-required="true"
            aria-describedby={errors.name ? 'enq-name-error' : undefined}
          />
          {errors.name && (
            <p id="enq-name-error" className="mt-1 text-xs text-red-500" role="alert">{errors.name}</p>
          )}
        </div>

        {/* Phone */}
        <div>
          <label htmlFor="enq-phone" className="form-label">
            Phone Number <span className="text-red-500" aria-hidden="true">*</span>
          </label>
          <input
            id="enq-phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            value={form.phone}
            onChange={handleChange}
            placeholder="9876543210"
            className={`form-input ${errors.phone ? 'border-red-400 focus:ring-red-200' : ''}`}
            aria-required="true"
            aria-describedby={errors.phone ? 'enq-phone-error' : undefined}
          />
          {errors.phone && (
            <p id="enq-phone-error" className="mt-1 text-xs text-red-500" role="alert">{errors.phone}</p>
          )}
        </div>

        {/* Product */}
        <div>
          <label htmlFor="enq-product" className="form-label">
            What would you like customized? <span className="text-red-500" aria-hidden="true">*</span>
          </label>
          <input
            id="enq-product"
            name="product"
            type="text"
            value={form.product}
            onChange={handleChange}
            placeholder="T-Shirts, Mugs, Water Bottles, etc."
            className={`form-input ${errors.product ? 'border-red-400 focus:ring-red-200' : ''}`}
            aria-required="true"
            aria-describedby={errors.product ? 'enq-product-error' : undefined}
          />
          {errors.product && (
            <p id="enq-product-error" className="mt-1 text-xs text-red-500" role="alert">{errors.product}</p>
          )}
        </div>

        {/* Quantity */}
        <div>
          <label htmlFor="enq-quantity" className="form-label">
            Quantity <span className="text-gray-400 font-normal text-xs">(optional)</span>
          </label>
          <input
            id="enq-quantity"
            name="quantity"
            type="text"
            value={form.quantity}
            onChange={handleChange}
            placeholder="e.g. 50 pieces, 1 piece, bulk"
            className="form-input"
          />
        </div>

        {/* Requirements */}
        <div>
          <label htmlFor="enq-requirements" className="form-label">
            Your Requirements <span className="text-red-500" aria-hidden="true">*</span>
          </label>
          <textarea
            id="enq-requirements"
            name="requirements"
            rows={5}
            value={form.requirements}
            onChange={handleChange}
            placeholder="Tell us about your design, logo, colors, sizes, occasion, deadline, etc."
            className={`form-input resize-none ${errors.requirements ? 'border-red-400 focus:ring-red-200' : ''}`}
            aria-required="true"
            aria-describedby={errors.requirements ? 'enq-req-error' : undefined}
          />
          {errors.requirements && (
            <p id="enq-req-error" className="mt-1 text-xs text-red-500" role="alert">{errors.requirements}</p>
          )}
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="btn-whatsapp w-full justify-center text-base py-4"
          aria-label="Send enquiry on WhatsApp"
        >
          <WhatsAppIcon size={20} />
          Send Enquiry on WhatsApp
        </button>
        <p className="text-xs text-center text-brand-gray">
          Clicking the button will open WhatsApp with your message pre-filled.
        </p>
      </form>

      {/* ── Live Preview ── */}
      <div className="lg:sticky lg:top-24">
        <div className="bg-gray-50 border border-brand-border rounded-2xl overflow-hidden">

          {/* Preview header */}
          <div className="flex items-center gap-3 px-5 py-3.5 bg-[#075E54] text-white">
            <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center shrink-0">
              <WhatsAppIcon size={16} color="#fff" />
            </div>
            <div>
              <p className="text-sm font-semibold leading-none">NexusMark</p>
              <p className="text-xs text-white/70 mt-0.5">WhatsApp Message Preview</p>
            </div>
          </div>

          {/* Bubble */}
          <div className="p-5 bg-[#ECE5DD] min-h-[260px]">
            <div className="bg-white rounded-2xl rounded-tl-sm px-4 py-3.5 max-w-sm shadow-sm">
              <pre
                className="text-xs text-brand-charcoal font-sans whitespace-pre-wrap leading-relaxed"
                aria-label="WhatsApp message preview"
              >
                {message}
              </pre>
              <p className="text-right text-[10px] text-gray-400 mt-2">
                {new Date().toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit' })}
              </p>
            </div>
          </div>

          <div className="px-5 py-3 bg-gray-50 border-t border-brand-border">
            <p className="text-xs text-brand-gray text-center">
              ✦ This preview updates as you type above
            </p>
          </div>
        </div>
      </div>

    </div>
  );
}
