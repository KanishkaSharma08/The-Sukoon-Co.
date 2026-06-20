import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Nav from '@/components/layout/Nav/Nav';
import Footer from '@/components/layout/Footer/Footer';
import { ModalProvider } from '@/context/ModalContext';
import '@/styles/index.scss';

const HomePage         = lazy(() => import('@/pages/HomePage'));
const AboutPage        = lazy(() => import('@/pages/AboutPage'));
const DestinationsPage = lazy(() => import('@/pages/DestinationsPage'));
const StoriesPage      = lazy(() => import('@/pages/StoriesPage'));

const pageVariants = {
  initial: { opacity: 0, y: 12 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.45, ease: 'easeOut' } },
  exit:    { opacity: 0, y: -8, transition: { duration: 0.25, ease: 'easeIn' } },
};

const AnimatedRoutes: React.FC = () => {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        variants={pageVariants}
        initial="initial"
        animate="animate"
        exit="exit"
      >
        <Routes location={location}>
          <Route path="/"             element={<HomePage />} />
          <Route path="/about"        element={<AboutPage />} />
          <Route path="/destinations" element={<DestinationsPage />} />
          <Route path="/stories"      element={<StoriesPage />} />
        </Routes>
      </motion.div>
    </AnimatePresence>
  );
};

const App: React.FC = () => (
  <BrowserRouter>
    <ModalProvider>
      <Nav />
      <main>
        <Suspense fallback={null}>
          <AnimatedRoutes />
        </Suspense>
      </main>
      <Footer />
    </ModalProvider>
  </BrowserRouter>
);

export default App;
