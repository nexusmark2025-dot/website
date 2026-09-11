import { Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/WhatsAppButton';

import Home from './pages/Home';
import Customizations from './pages/Customizations';
import BulkOrders from './pages/BulkOrders';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';

/* Scroll to top on every route change */
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Navbar />

      <Routes>
        <Route path="/"               element={<Home />} />
        <Route path="/customizations" element={<Customizations />} />
        <Route path="/bulk-orders"    element={<BulkOrders />} />
        <Route path="/contact"        element={<Contact />} />
        <Route path="*"               element={<NotFound />} />
      </Routes>

      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
