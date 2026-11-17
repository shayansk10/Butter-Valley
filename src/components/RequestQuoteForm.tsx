import React, { useState, useEffect, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { ChevronDown, CheckCircle2, AlertCircle, Loader2, ArrowRight } from 'lucide-react';
import { PRODUCT_CATEGORIES } from '../data/products';
import { COMPANY } from '../data/company';
import { CountrySelect } from './CountrySelect';

export interface QuoteFormValues {
  name: string;
  email: string;
  product: string;
  address: string;
  phone: string;
  country: string;
  message: string;
}

interface RequestQuoteFormProps {
  initialProduct?: string;
  onClose?: () => void;
  variant?: 'modal' | 'embedded';
}

const EMAILJS_SERVICE_ID = 'service_umcsipq';
const EMAILJS_TEMPLATE_ID = 'template_0g372jb';
const EMAILJS_PUBLIC_KEY = 'ldRWtZJsKwArbV6i-';

let emailJsInitialized = false;

function ensureEmailJsInitialized() {
  if (!emailJsInitialized) {
    emailjs.init({ publicKey: EMAILJS_PUBLIC_KEY });
    emailJsInitialized = true;
  }
}

/**
 * Reusable quotation submission handler using EmailJS.
 * Sends a single request to the main Contact Us template; EmailJS handles
 * the linked customer Auto-Reply template automatically on the dashboard.
 */
export async function handleQuoteSubmission(
  values: QuoteFormValues
): Promise<{ status: 'sent'; payload: QuoteFormValues }> {
  ensureEmailJsInitialized();

  const templateParams: Record<string, string> = {
    name: values.name,
    email: values.email,
    product: values.product,
    address: values.address,
    phone: values.phone,
    country: values.country,
    message: values.message,
  };

  await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, templateParams);

  return {
    status: 'sent',
    payload: { ...values },
  };
}

const ALL_SELECTABLE_PRODUCTS = new Set(
  PRODUCT_CATEGORIES.flatMap((category) => category.skus.map((sku) => sku.name))
);

function normalizeInitialProduct(product?: string): string {
  if (!product) return '';
  const trimmed = product.trim();
  return ALL_SELECTABLE_PRODUCTS.has(trimmed) ? trimmed : '';
}

export function RequestQuoteForm({
  initialProduct = '',
  onClose,
  variant = 'embedded',
}: RequestQuoteFormProps) {
  const [values, setValues] = useState<QuoteFormValues>(() => ({
    name: '',
    email: '',
    product: normalizeInitialProduct(initialProduct),
    address: '',
    phone: '',
    country: '',
    message: '',
  }));

  const [errors, setErrors] = useState<Partial<Record<keyof QuoteFormValues, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [submittedPayload, setSubmittedPayload] = useState<QuoteFormValues | null>(null);
  const isSubmittingRef = useRef(false);

  useEffect(() => {
    const resolved = normalizeInitialProduct(initialProduct);
    setValues((prev) => ({
      ...prev,
      product: resolved,
    }));
    setErrors((prev) => {
      if (!prev.product) return prev;
      const copy = { ...prev };
      delete copy.product;
      return copy;
    });
    setSubmitError(null);
    setSubmittedPayload(null);
  }, [initialProduct]);

  const validate = (formValues: QuoteFormValues): Partial<Record<keyof QuoteFormValues, string>> => {
    const nextErrors: Partial<Record<keyof QuoteFormValues, string>> = {};

    if (!formValues.name.trim()) {
      nextErrors.name = 'Full name is required.';
    }

    const trimmedEmail = formValues.email.trim();
    if (!trimmedEmail) {
      nextErrors.email = 'Email address is required.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmedEmail)) {
      nextErrors.email = 'Please enter a valid email address.';
    }

    if (!formValues.product.trim()) {
      nextErrors.product = 'Please select a product you are interested in.';
    }

    if (!formValues.address.trim()) {
      nextErrors.address = 'Complete address is required.';
    }

    const trimmedPhone = formValues.phone.trim();
    const digitCount = trimmedPhone.replace(/\D/g, '').length;
    if (!trimmedPhone) {
      nextErrors.phone = 'Phone number is required.';
    } else if (!/^[+\d\s().-]+$/.test(trimmedPhone) || digitCount < 6) {
      nextErrors.phone = 'Please enter a valid phone number including country code if applicable.';
    }

    if (!formValues.country.trim()) {
      nextErrors.country = 'Please select your country.';
    }

    return nextErrors;
  };

  const updateField = (field: keyof QuoteFormValues, value: string) => {
    setValues((prev) => ({ ...prev, [field]: value }));
    if (submitError) {
      setSubmitError(null);
    }
    if (errors[field]) {
      setErrors((prev) => {
        const copy = { ...prev };
        delete copy[field];
        return copy;
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isSubmittingRef.current || isSubmitting) return;

    const validationErrors = validate(values);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    const cleanedValues: QuoteFormValues = {
      name: values.name.trim(),
      email: values.email.trim(),
      product: values.product.trim(),
      address: values.address.trim(),
      phone: values.phone.trim(),
      country: values.country.trim(),
      message: values.message.trim(),
    };

    isSubmittingRef.current = true;
    setIsSubmitting(true);
    setSubmitError(null);

    try {
      const result = await handleQuoteSubmission(cleanedValues);
      setSubmittedPayload(result.payload);
      setValues({
        name: '',
        email: '',
        product: normalizeInitialProduct(initialProduct),
        address: '',
        phone: '',
        country: '',
        message: '',
      });
      setErrors({});
    } catch {
      setSubmitError(
        `We couldn't submit your request right now. Please check your connection and try again, or contact us directly at ${COMPANY.email}.`
      );
    } finally {
      isSubmittingRef.current = false;
      setIsSubmitting(false);
    }
  };

  const inputBase =
    'w-full min-h-[46px] px-4 py-3 bg-[#FFFCF6] border rounded-sm text-sm text-[#28231F] placeholder:text-[#59351F]/45 focus:outline-none focus:ring-2 focus:ring-[#C99536]/50 transition-colors';

  const containerClass =
    variant === 'modal'
      ? 'space-y-6'
      : 'bg-[#F7F0E3] border border-[#382319]/12 rounded-md p-6 sm:p-10 space-y-6 shadow-[0_12px_32px_rgba(56,35,25,0.06)]';

  if (submittedPayload) {
    return (
      <div className={containerClass}>
        <div className="space-y-2 border-b border-[#382319]/12 pb-5">
          <p className="text-xs font-medium tracking-[0.14em] uppercase text-[#C99536]">
            Request a Quote
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-[#382319]">
            Inquiry Submitted
          </h2>
        </div>

        <div
          role="status"
          className="bg-[#FFFCF6] border border-[#78836A]/45 rounded-sm p-5 space-y-2 text-sm text-[#382319]"
        >
          <div className="flex items-start gap-3">
            <CheckCircle2 className="w-5 h-5 text-[#78836A] shrink-0 mt-0.5" />
            <p className="text-[#382319] leading-relaxed">
              Thank you for contacting Butter Valley! Your inquiry has been successfully submitted.
              A confirmation email has been sent to your email address. Our team will review your
              request and get back to you shortly.
            </p>
          </div>
        </div>

        <dl className="bg-[#FFFCF6] border border-[#382319]/10 rounded-sm p-5 divide-y divide-[#382319]/10 text-sm">
          <div className="py-2.5 flex flex-col sm:flex-row sm:justify-between gap-1">
            <dt className="text-[#59351F]">Full Name</dt>
            <dd className="font-medium text-[#382319] sm:text-right">{submittedPayload.name}</dd>
          </div>
          <div className="py-2.5 flex flex-col sm:flex-row sm:justify-between gap-1">
            <dt className="text-[#59351F]">Email Address</dt>
            <dd className="font-medium text-[#382319] sm:text-right break-all">
              {submittedPayload.email}
            </dd>
          </div>
          <div className="py-2.5 flex flex-col sm:flex-row sm:justify-between gap-1">
            <dt className="text-[#59351F]">Product / Interested In</dt>
            <dd className="font-medium text-[#382319] sm:text-right">{submittedPayload.product}</dd>
          </div>
          <div className="py-2.5 flex flex-col sm:flex-row sm:justify-between gap-1">
            <dt className="text-[#59351F]">Complete Address</dt>
            <dd className="font-medium text-[#382319] sm:text-right">{submittedPayload.address}</dd>
          </div>
          <div className="py-2.5 flex flex-col sm:flex-row sm:justify-between gap-1">
            <dt className="text-[#59351F]">Phone Number</dt>
            <dd className="font-medium text-[#382319] sm:text-right">{submittedPayload.phone}</dd>
          </div>
          <div className="py-2.5 flex flex-col sm:flex-row sm:justify-between gap-1">
            <dt className="text-[#59351F]">Country</dt>
            <dd className="font-medium text-[#382319] sm:text-right">{submittedPayload.country}</dd>
          </div>
          {submittedPayload.message && (
            <div className="py-2.5 flex flex-col sm:flex-row sm:justify-between gap-1">
              <dt className="text-[#59351F] shrink-0">Message</dt>
              <dd className="font-medium text-[#382319] sm:text-right whitespace-pre-wrap">
                {submittedPayload.message}
              </dd>
            </div>
          )}
        </dl>

        <div className="flex flex-wrap items-center gap-3 pt-1">
          <button
            type="button"
            onClick={() => setSubmittedPayload(null)}
            className="min-h-[44px] px-6 py-2.5 text-sm font-medium rounded-sm border border-[#382319]/25 bg-[#FFFCF6] text-[#382319] hover:border-[#382319] transition-colors"
          >
            Submit Another Request
          </button>
          {onClose && (
            <button
              type="button"
              onClick={onClose}
              className="min-h-[44px] px-6 py-2.5 text-sm font-medium rounded-sm bg-[#382319] text-[#FFFCF6] hover:bg-[#59351F] transition-colors"
            >
              Close
            </button>
          )}
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className={containerClass}>
      <div className="space-y-2 border-b border-[#382319]/10 pb-5">
        <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-[#382319] leading-tight">
          Request a Quote
        </h2>
        <p className="text-sm sm:text-base text-[#59351F] leading-relaxed">
          Tell us what you're looking for, and our team will get back to you.
        </p>
      </div>

      <div className="space-y-5">
        {/* 1. Full Name */}
        <div>
          <label htmlFor={`quote-name-${variant}`} className="block text-xs font-medium text-[#382319] mb-2">
            Full Name <span className="text-[#C99536]">*</span>
          </label>
          <input
            id={`quote-name-${variant}`}
            name="name"
            type="text"
            required
            autoComplete="name"
            value={values.name}
            onChange={(e) => updateField('name', e.target.value)}
            placeholder="Enter your full name"
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? `quote-name-err-${variant}` : undefined}
            className={`${inputBase} ${
              errors.name ? 'border-[#8B2E2E]' : 'border-[#382319]/20 focus:border-[#C99536]'
            }`}
          />
          {errors.name && (
            <p id={`quote-name-err-${variant}`} className="mt-1.5 text-xs text-[#8B2E2E]">
              {errors.name}
            </p>
          )}
        </div>

        {/* 2. Email Address */}
        <div>
          <label htmlFor={`quote-email-${variant}`} className="block text-xs font-medium text-[#382319] mb-2">
            Email Address <span className="text-[#C99536]">*</span>
          </label>
          <input
            id={`quote-email-${variant}`}
            name="email"
            type="email"
            required
            autoComplete="email"
            value={values.email}
            onChange={(e) => updateField('email', e.target.value)}
            placeholder="Enter your email address"
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? `quote-email-err-${variant}` : undefined}
            className={`${inputBase} ${
              errors.email ? 'border-[#8B2E2E]' : 'border-[#382319]/20 focus:border-[#C99536]'
            }`}
          />
          {errors.email && (
            <p id={`quote-email-err-${variant}`} className="mt-1.5 text-xs text-[#8B2E2E]">
              {errors.email}
            </p>
          )}
        </div>

        {/* 3. Product / Interested In */}
        <div>
          <div className="flex items-center justify-between gap-2 mb-2">
            <label htmlFor={`quote-product-${variant}`} className="block text-xs font-medium text-[#382319]">
              Product / Interested In <span className="text-[#C99536]">*</span>
            </label>
            {values.product && (
              <span className="text-xs font-medium text-[#78836A] truncate max-w-[60%]">
                Selected: {values.product}
              </span>
            )}
          </div>
          <div className="relative">
            <select
              id={`quote-product-${variant}`}
              name="product"
              required
              value={values.product}
              onChange={(e) => updateField('product', e.target.value)}
              aria-invalid={Boolean(errors.product)}
              aria-describedby={errors.product ? `quote-product-err-${variant}` : undefined}
              className={`${inputBase} appearance-none pr-10 ${
                values.product ? 'text-[#28231F]' : 'text-[#59351F]/55'
              } ${
                errors.product ? 'border-[#8B2E2E]' : 'border-[#382319]/20 focus:border-[#C99536]'
              }`}
            >
              <option value="">Select a product from our catalogue</option>
              {PRODUCT_CATEGORIES.map((category) => (
                <optgroup key={category.id} label={category.name}>
                  {category.skus.map((sku) => (
                    <option key={`${category.id}-${sku.name}`} value={sku.name}>
                      {sku.name}
                    </option>
                  ))}
                </optgroup>
              ))}
            </select>
            <ChevronDown
              aria-hidden="true"
              className="w-4 h-4 text-[#59351F] pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2"
            />
          </div>
          {errors.product && (
            <p id={`quote-product-err-${variant}`} className="mt-1.5 text-xs text-[#8B2E2E]">
              {errors.product}
            </p>
          )}
        </div>

        {/* 4. Complete Address */}
        <div>
          <label htmlFor={`quote-address-${variant}`} className="block text-xs font-medium text-[#382319] mb-2">
            Complete Address <span className="text-[#C99536]">*</span>
          </label>
          <textarea
            id={`quote-address-${variant}`}
            name="address"
            rows={2}
            required
            autoComplete="street-address"
            value={values.address}
            onChange={(e) => updateField('address', e.target.value)}
            placeholder="Enter your complete address"
            aria-invalid={Boolean(errors.address)}
            aria-describedby={errors.address ? `quote-address-err-${variant}` : undefined}
            className={`${inputBase} resize-y ${
              errors.address ? 'border-[#8B2E2E]' : 'border-[#382319]/20 focus:border-[#C99536]'
            }`}
          />
          {errors.address && (
            <p id={`quote-address-err-${variant}`} className="mt-1.5 text-xs text-[#8B2E2E]">
              {errors.address}
            </p>
          )}
        </div>

        {/* 5. Phone Number */}
        <div>
          <label htmlFor={`quote-phone-${variant}`} className="block text-xs font-medium text-[#382319] mb-2">
            Phone Number <span className="text-[#C99536]">*</span>
          </label>
          <input
            id={`quote-phone-${variant}`}
            name="phone"
            type="tel"
            inputMode="tel"
            required
            autoComplete="tel"
            value={values.phone}
            onChange={(e) => updateField('phone', e.target.value)}
            placeholder="Enter your phone number"
            aria-invalid={Boolean(errors.phone)}
            aria-describedby={errors.phone ? `quote-phone-err-${variant}` : undefined}
            className={`${inputBase} ${
              errors.phone ? 'border-[#8B2E2E]' : 'border-[#382319]/20 focus:border-[#C99536]'
            }`}
          />
          {errors.phone && (
            <p id={`quote-phone-err-${variant}`} className="mt-1.5 text-xs text-[#8B2E2E]">
              {errors.phone}
            </p>
          )}
        </div>

        {/* 6. Country (Searchable Dropdown) */}
        <div>
          <label htmlFor={`quote-country-${variant}`} className="block text-xs font-medium text-[#382319] mb-2">
            Country <span className="text-[#C99536]">*</span>
          </label>
          <CountrySelect
            id={`quote-country-${variant}`}
            value={values.country}
            onChange={(country) => updateField('country', country)}
            hasError={Boolean(errors.country)}
            ariaDescribedBy={errors.country ? `quote-country-err-${variant}` : undefined}
          />
          {errors.country && (
            <p id={`quote-country-err-${variant}`} className="mt-1.5 text-xs text-[#8B2E2E]">
              {errors.country}
            </p>
          )}
        </div>

        {/* 7. Message (Optional) */}
        <div>
          <label htmlFor={`quote-message-${variant}`} className="block text-xs font-medium text-[#382319] mb-2">
            Message <span className="text-[#78836A] font-normal">(Optional)</span>
          </label>
          <textarea
            id={`quote-message-${variant}`}
            name="message"
            rows={4}
            value={values.message}
            onChange={(e) => updateField('message', e.target.value)}
            placeholder="Tell us about your requirements (optional)"
            className={`${inputBase} resize-y border-[#382319]/20 focus:border-[#C99536]`}
          />
        </div>
      </div>

      {submitError && (
        <div
          role="alert"
          className="bg-[#FFFCF6] border border-[#8B2E2E]/45 rounded-sm p-4 flex items-start gap-3 text-sm text-[#8B2E2E]"
        >
          <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
          <p className="leading-relaxed">{submitError}</p>
        </div>
      )}

      <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-t border-[#382319]/10">
        <p className="text-xs text-[#59351F]/80">
          Fields marked with <span className="text-[#C99536]">*</span> are required.
        </p>
        <button
          type="submit"
          disabled={isSubmitting}
          aria-disabled={isSubmitting}
          aria-busy={isSubmitting}
          className="w-full sm:w-auto min-h-[48px] inline-flex items-center justify-center gap-2 px-8 py-3.5 text-sm font-medium rounded-sm bg-[#C99536] text-[#FFFCF6] hover:bg-[#b5832b] disabled:opacity-65 disabled:cursor-not-allowed transition-colors shadow-sm"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin" />
              Submitting Request...
            </>
          ) : (
            <>
              Submit Request
              <ArrowRight className="w-4 h-4" />
            </>
          )}
        </button>
      </div>
    </form>
  );
}
