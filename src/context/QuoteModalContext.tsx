import React, { createContext, useContext, useState, useCallback } from 'react';

interface QuoteModalContextValue {
  isOpen: boolean;
  preselectedProduct: string;
  sessionKey: number;
  openQuoteModal: (productName?: string) => void;
  closeQuoteModal: () => void;
}

const QuoteModalContext = createContext<QuoteModalContextValue>({
  isOpen: false,
  preselectedProduct: '',
  sessionKey: 0,
  openQuoteModal: () => {},
  closeQuoteModal: () => {},
});

export function QuoteModalProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [preselectedProduct, setPreselectedProduct] = useState('');
  const [sessionKey, setSessionKey] = useState(0);

  const openQuoteModal = useCallback((productName?: string) => {
    setPreselectedProduct(productName ? productName.trim() : '');
    setSessionKey((prev) => prev + 1);
    setIsOpen(true);
  }, []);

  const closeQuoteModal = useCallback(() => {
    setIsOpen(false);
  }, []);

  return (
    <QuoteModalContext.Provider
      value={{
        isOpen,
        preselectedProduct,
        sessionKey,
        openQuoteModal,
        closeQuoteModal,
      }}
    >
      {children}
    </QuoteModalContext.Provider>
  );
}

export function useQuoteModal() {
  return useContext(QuoteModalContext);
}
