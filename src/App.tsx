import { useState } from 'react';
import { Navbar } from './components/layout/Navbar';
import { Hero } from './components/sections/Hero';
import { WhyUs } from './components/sections/WhyUs';
import { FeaturedProduct } from './components/sections/FeaturedProduct';
import { HowItWorks } from './components/sections/HowItWorks';
import { ProductDeepDive } from './components/sections/ProductDeepDive';
import { CodebaseExplorer } from './components/sections/CodebaseExplorer';
import { ProductsCatalog } from './components/sections/ProductsCatalog';
import { SecurityAssurance } from './components/sections/SecurityAssurance';
import { ChangelogSection } from './components/sections/ChangelogSection';
import { FAQSection } from './components/sections/FAQSection';
import { Footer } from './components/layout/Footer';
import { DocumentationModal } from './components/sections/DocumentationModal';
import { SupportModal } from './components/sections/SupportModal';
import { SolutionsModal } from './components/sections/SolutionsModal';
import { LegalModals } from './components/sections/LegalModals';
import { NotFound } from './components/sections/NotFound';
import { PRODUCTS } from './data/products';
import { Product } from './types';

export function App() {
  const [isDocsOpen, setIsDocsOpen] = useState(false);
  const [isSupportOpen, setIsSupportOpen] = useState(false);
  const [isSolutionsOpen, setIsSolutionsOpen] = useState(false);
  const [legalModalType, setLegalModalType] = useState<'terms' | 'privacy' | 'refund' | null>(null);
  const [selectedProduct, setSelectedProduct] = useState<Product>(PRODUCTS[0]);
  const [is404, setIs404] = useState(false);

  // Smooth scroll handler
  const handleScrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleViewProductDetails = (product: Product) => {
    setSelectedProduct(product);
    handleScrollToSection('product-details');
  };

  if (is404) {
    return <NotFound onBackHome={() => setIs404(false)} />;
  }

  return (
    <div className="min-h-screen bg-white text-zinc-900 flex flex-col font-sans selection:bg-brand-lime selection:text-zinc-950">
      {/* Global Top Banner / Announcement if needed */}
      <div className="bg-[#090b0e] border-b border-zinc-800 text-[11px] text-zinc-400 py-1.5 px-4 text-center font-mono">
        <span>⚡ Roynix Studio: Titan Moderation & Roynix Music Bot Source Codes are Live on Whop</span>
      </div>

      {/* Primary Sticky Header */}
      <Navbar 
        onOpenDocs={() => setIsDocsOpen(true)}
        onOpenSupport={() => setIsSupportOpen(true)}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Hero Section matching mockup */}
        <Hero 
          onExploreProducts={() => handleScrollToSection('products')}
          onViewSolutions={() => setIsSolutionsOpen(true)}
        />

        {/* Why RoynixBotWorks (4 Value Pillars) */}
        <WhyUs />

        {/* Featured Product: Titan Moderation Bot matching mockup */}
        <FeaturedProduct 
          product={PRODUCTS[0]}
          onViewDetails={handleViewProductDetails}
        />

        {/* How It Works (5 Steps) matching mockup */}
        <HowItWorks />

        {/* Dedicated Titan Deep Dive Section (Interactive Simulator, Tech Specs, Walkthrough) */}
        <ProductDeepDive product={selectedProduct} />

        {/* Codebase Transparency File Tree Explorer */}
        <CodebaseExplorer />

        {/* Extensible Product Suite Catalog */}
        <ProductsCatalog onSelectProduct={handleViewProductDetails} />

        {/* Architectural Security & Self-Hosted Sovereignty */}
        <SecurityAssurance />

        {/* Engineering Changelog & Version History */}
        <ChangelogSection />

        {/* Frequently Asked Questions */}
        <FAQSection onOpenSupport={() => setIsSupportOpen(true)} />
      </main>

      {/* Footer */}
      <Footer 
        onOpenDocs={() => setIsDocsOpen(true)}
        onOpenSupport={() => setIsSupportOpen(true)}
        onOpenLegal={(type) => setLegalModalType(type)}
      />

      {/* Global Modals */}
      <DocumentationModal 
        isOpen={isDocsOpen}
        onClose={() => setIsDocsOpen(false)}
      />

      <SupportModal 
        isOpen={isSupportOpen}
        onClose={() => setIsSupportOpen(false)}
      />

      <SolutionsModal
        isOpen={isSolutionsOpen}
        onClose={() => setIsSolutionsOpen(false)}
        onExploreProducts={() => handleScrollToSection('products')}
      />

      <LegalModals 
        type={legalModalType}
        onClose={() => setLegalModalType(null)}
      />
    </div>
  );
}

export default App;
