import React, { useState } from 'react';
import { motion } from 'framer-motion';

// Layout Components
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import HamburgerMenu from './components/layout/HamburgerMenu';

// Section Components
import HeroSection from './components/sections/HeroSection';
import AppPromoSection from './components/sections/AppPromoSection';
import CarReviewSection from './components/sections/CarReviewSection';
import ServiceCardsSection from './components/sections/ServiceCardsSection';
import MaintenanceSection from './components/sections/MaintenanceSection';
import TrustSection from './components/sections/TrustSection';
import ReviewsSection from './components/sections/ReviewsSection';
import FAQSection from './components/sections/FAQSection';
import CTASection from './components/sections/CTASection';

// UI Components
import FloatingButton from './components/ui/FloatingButton';
import Modal from './components/ui/Modal';

// Form Components
import ConsultationForm from './components/forms/ConsultationForm';

// Utils
import { submitConsultation } from './utils/api';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isFloatingOpen, setIsFloatingOpen] = useState(false);

  const handleConsultSubmit = async (formData) => {
    try {
      // API 호출 (실제 API 엔드포인트 설정 필요)
      // await submitConsultation(formData);
      console.log('Form submitted:', formData);

      // 임시로 로컬 저장 (개발 중)
      // 실제 서비스에서는 백엔드 API로 전송
    } catch (error) {
      console.error('Submission error:', error);
      throw error;
    }
  };

  const openConsultModal = () => {
    setIsFloatingOpen(true);
  };

  const closeConsultModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-gradient-mesh pb-20 md:pb-24">
      {/* Header */}
      <Header onMenuClick={() => setIsMenuOpen(true)} />

      {/* Hamburger Menu */}
      <HamburgerMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />

      {/* Main Content with Animations */}
      <main>
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <HeroSection onConsultClick={openConsultModal} />
        </motion.div>

        {/* App Promo Section */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: '-100px' }}
        >
          <AppPromoSection onConsultClick={openConsultModal} />
        </motion.div>

        {/* Service Cards Section */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: '-100px' }}
        >
          <ServiceCardsSection />
        </motion.div>

        {/* Car Review Section */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: '-100px' }}
        >
          <CarReviewSection />
        </motion.div>

        {/* Maintenance Section */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: '-100px' }}
        >
          <MaintenanceSection />
        </motion.div>

        {/* Trust Section */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: '-100px' }}
        >
          <TrustSection />
        </motion.div>

        {/* Reviews Section */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: '-100px' }}
        >
          <ReviewsSection />
        </motion.div>

        {/* FAQ Section */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: '-100px' }}
        >
          <FAQSection />
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: '-100px' }}
        >
          <CTASection onConsultClick={openConsultModal} />
        </motion.div>
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Button */}
      <FloatingButton
        onConsultClick={handleConsultSubmit}
        isOpen={isFloatingOpen}
        setIsOpen={setIsFloatingOpen}
      />

      {/* Consultation Modal */}
      <Modal
        isOpen={isModalOpen}
        onClose={closeConsultModal}
        title="무료 상담 신청"
        size="medium"
      >
        <p className="text-gray-60 mb-6">
          전문가가 빠르게 연락드리겠습니다
        </p>
        <ConsultationForm onClose={closeConsultModal} onSubmit={handleConsultSubmit} />
      </Modal>
    </div>
  );
}

export default App;
