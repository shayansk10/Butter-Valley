import { useQuoteModal } from '../context/QuoteModalContext';

const WHATSAPP_NUMBER = '923360359225';
const WHATSAPP_MESSAGE =
  'Hello Butter Valley! I am interested in your products. Please share more information.';
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  WHATSAPP_MESSAGE
)}`;

export function WhatsAppButton() {
  const { isOpen: isQuoteModalOpen } = useQuoteModal();

  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Butter Valley on WhatsApp"
      title="Chat with Butter Valley on WhatsApp"
      aria-hidden={isQuoteModalOpen}
      tabIndex={isQuoteModalOpen ? -1 : undefined}
      className={`fixed z-40 bottom-[max(1.25rem,env(safe-area-inset-bottom))] right-[max(1rem,env(safe-area-inset-right))] sm:bottom-6 sm:right-6 w-[52px] h-[52px] sm:w-14 sm:h-14 rounded-full bg-[#25D366] text-white inline-flex items-center justify-center shadow-[0_10px_28px_rgba(24,15,10,0.22)] ring-2 ring-[#FFFCF6]/90 transition-all duration-200 hover:bg-[#20BD5A] hover:scale-105 hover:-translate-y-0.5 hover:shadow-[0_14px_32px_rgba(37,211,102,0.38)] active:scale-95 focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[#C99536] ${
        isQuoteModalOpen ? 'opacity-0 pointer-events-none scale-90' : 'opacity-100'
      }`}
    >
      <svg
        viewBox="0 0 32 32"
        aria-hidden="true"
        className="w-7 h-7 sm:w-[30px] sm:h-[30px] fill-current"
      >
        <path d="M16.004 3.2c-7.06 0-12.8 5.74-12.8 12.8 0 2.256.588 4.46 1.706 6.404L3.1 28.8l6.548-1.718a12.74 12.74 0 0 0 6.356 1.698h.006c7.058 0 12.796-5.74 12.798-12.8 0-3.42-1.332-6.634-3.75-9.054A12.72 12.72 0 0 0 16.004 3.2zm0 23.42h-.004a10.58 10.58 0 0 1-5.394-1.476l-.388-.23-3.886 1.02 1.038-3.79-.252-.4a10.556 10.556 0 0 1-1.622-5.644c0-5.844 4.756-10.6 10.604-10.6 2.83 0 5.492 1.104 7.492 3.106a10.532 10.532 0 0 1 3.102 7.496c-.002 5.844-4.756 10.6-10.598 10.6zm5.814-7.938c-.318-.16-1.886-.93-2.178-1.036-.292-.106-.504-.16-.716.16-.212.318-.822 1.036-1.008 1.248-.186.214-.372.24-.69.08-.318-.16-1.346-.496-2.564-1.582-.948-.846-1.588-1.89-1.774-2.208-.186-.318-.02-.49.14-.65.144-.142.318-.372.478-.558.16-.186.212-.318.318-.53.106-.214.054-.398-.026-.558-.08-.16-.716-1.726-.982-2.364-.258-.62-.52-.536-.716-.546-.186-.01-.398-.012-.61-.012-.212 0-.558.08-.85.398-.292.318-1.114 1.088-1.114 2.654s1.14 3.078 1.3 3.29c.16.214 2.246 3.43 5.44 4.81.76.328 1.354.524 1.816.67.762.242 1.456.208 2.004.126.612-.092 1.886-.77 2.152-1.514.266-.744.266-1.382.186-1.514-.08-.132-.292-.212-.61-.372z" />
      </svg>
    </a>
  );
}
