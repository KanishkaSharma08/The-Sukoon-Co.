import React, { createContext, useContext, useState, useCallback } from 'react';

interface ModalContextValue {
  activeId: string | null;
  openModal: (id: string) => void;
  closeModal: () => void;
}

const ModalContext = createContext<ModalContextValue>({
  activeId: null,
  openModal: () => {},
  closeModal: () => {},
});

export const ModalProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [activeId, setActiveId] = useState<string | null>(null);

  const openModal = useCallback((id: string) => {
    setActiveId(id);
    document.body.style.overflow = 'hidden';
  }, []);

  const closeModal = useCallback(() => {
    setActiveId(null);
    document.body.style.overflow = '';
  }, []);

  return (
    <ModalContext.Provider value={{ activeId, openModal, closeModal }}>
      {children}
    </ModalContext.Provider>
  );
};

export const useModal = () => useContext(ModalContext);
