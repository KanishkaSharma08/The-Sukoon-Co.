import React, { createContext, useContext, useState, useCallback } from 'react';

interface ModalContextValue {
  activeId: string | null;
  openModal: (id: string) => void;
  closeModal: () => void;
  // Enquiry form pre-fill
  enquiryDestination: string;
  openEnquiry: (destination?: string) => void;
  closeEnquiry: () => void;
  enquiryOpen: boolean;
}

const ModalContext = createContext<ModalContextValue>({
  activeId: null,
  openModal: () => {},
  closeModal: () => {},
  enquiryDestination: '',
  openEnquiry: () => {},
  closeEnquiry: () => {},
  enquiryOpen: false,
});

export const ModalProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [activeId, setActiveId] = useState<string | null>(null);
  const [enquiryOpen, setEnquiryOpen] = useState(false);
  const [enquiryDestination, setEnquiryDestination] = useState('');

  const openModal = useCallback((id: string) => {
    setActiveId(id);
    document.body.style.overflow = 'hidden';
  }, []);

  const closeModal = useCallback(() => {
    setActiveId(null);
    document.body.style.overflow = '';
  }, []);

  const openEnquiry = useCallback((destination = '') => {
    setEnquiryDestination(destination);
    setEnquiryOpen(true);
    // Close itinerary modal if open
    setActiveId(null);
    document.body.style.overflow = 'hidden';
  }, []);

  const closeEnquiry = useCallback(() => {
    setEnquiryOpen(false);
    setEnquiryDestination('');
    document.body.style.overflow = '';
  }, []);

  return (
    <ModalContext.Provider value={{
      activeId, openModal, closeModal,
      enquiryDestination, openEnquiry, closeEnquiry, enquiryOpen,
    }}>
      {children}
    </ModalContext.Provider>
  );
};

export const useModal = () => useContext(ModalContext);
