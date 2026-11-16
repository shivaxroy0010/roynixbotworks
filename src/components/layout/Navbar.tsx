import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Logo } from '../common/Logo';
import { WhopButton } from '../common/WhopButton';

interface NavbarProps {
  onOpenDocs: () => void;
  onOpenSupport: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenDocs, onOpenSupport }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<'home' | 'products' | 'features' | 'documentation' | 'support'>('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = ['home', 'features', 'products', 'how-it-works', 'faq'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            if (section === 'home') setActiveSection('home');
            else if (section === 'products') setActiveSection('products');
            else if (section === 'features') setActiveSection('features');
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string, sectionKey: 'home' | 'products' | 'features') => {
    setMobileMenuOpen(false);
    setActiveSection(sectionKey);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header 
      className={`sticky top-0 z-40 w-full transition-all duration-200 bg-white border-b ${
        scrolled ? 'border-zinc-200 shadow-sm' : 'border-zinc-100'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Brand Logo */}
        <a 
          href="#home" 
          onClick={(e) => {
            e.preventDefault();
            scrollToSection('home', 'home');
          }}
          className="cursor-pointer"
        >
          <Logo size="md" />
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-1.5 lg:gap-2">
          {/* Home Button with styled pill matching design reference */}
          <button
            onClick={() => scrollToSection('home', 'home')}
            className={`px-4 py-1.5 text-sm font-semibold rounded-full transition-all duration-150 cursor-pointer ${
              activeSection === 'home'
                ? 'bg-[#dcfce7] text-zinc-950 shadow-xs'
                : 'text-zinc-600 hover:text-zinc-950 hover:bg-zinc-100'
            }`}
          >
            Home
          </button>

          <button
            onClick={() => scrollToSection('products', 'products')}
            className={`px-4 py-1.5 text-sm font-semibold rounded-full transition-all duration-150 cursor-pointer ${
              activeSection === 'products'
                ? 'bg-zinc-100 text-zinc-950'
                : 'text-zinc-600 hover:text-zinc-950 hover:bg-zinc-100'
            }`}
          >
            Products
          </button>

          <button
            onClick={() => scrollToSection('features', 'features')}
            className={`px-4 py-1.5 text-sm font-semibold rounded-full transition-all duration-150 cursor-pointer ${
              activeSection === 'features'
                ? 'bg-zinc-100 text-zinc-950'
                : 'text-zinc-600 hover:text-zinc-950 hover:bg-zinc-100'
            }`}
          >
            Features
          </button>

          <button
            onClick={onOpenDocs}
            className="px-4 py-1.5 text-sm font-semibold text-zinc-600 hover:text-zinc-950 hover:bg-zinc-100 rounded-full transition-all duration-150 cursor-pointer"
          >
            Documentation
          </button>

          <button
            onClick={onOpenSupport}
            className="px-4 py-1.5 text-sm font-semibold text-zinc-600 hover:text-zinc-950 hover:bg-zinc-100 rounded-full transition-all duration-150 cursor-pointer"
          >
            Support
          </button>
        </nav>

        {/* Right CTA Button matching mockup */}
        <div className="hidden md:flex items-center gap-3">
          <WhopButton 
            variant="dark" 
            size="sm"
            className="!px-5 !py-2 !text-xs !font-bold tracking-tight bg-zinc-950 hover:bg-zinc-900 shadow-sm"
          >
            Get Started
          </WhopButton>
        </div>

        {/* Mobile Menu Hamburger Toggle */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-xl text-zinc-700 hover:bg-zinc-100 transition-colors"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-zinc-200 px-5 pt-3 pb-6 space-y-2 shadow-lg animate-in slide-in-from-top-2 duration-200">
          <button
            onClick={() => scrollToSection('home', 'home')}
            className="w-full text-left px-4 py-3 text-base font-semibold text-zinc-900 bg-zinc-50 rounded-xl"
          >
            Home
          </button>
          <button
            onClick={() => scrollToSection('products', 'products')}
            className="w-full text-left px-4 py-3 text-base font-semibold text-zinc-700 hover:bg-zinc-50 rounded-xl"
          >
            Products
          </button>
          <button
            onClick={() => scrollToSection('features', 'features')}
            className="w-full text-left px-4 py-3 text-base font-semibold text-zinc-700 hover:bg-zinc-50 rounded-xl"
          >
            Features
          </button>
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenDocs();
            }}
            className="w-full text-left px-4 py-3 text-base font-semibold text-zinc-700 hover:bg-zinc-50 rounded-xl"
          >
            Documentation
          </button>
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenSupport();
            }}
            className="w-full text-left px-4 py-3 text-base font-semibold text-zinc-700 hover:bg-zinc-50 rounded-xl"
          >
            Support
          </button>
          <div className="pt-2">
            <WhopButton 
              variant="lime" 
              fullWidth 
              size="md"
              className="text-center shadow-md font-bold"
            >
              Get Started on Whop
            </WhopButton>
          </div>
        </div>
      )}
    </header>
  );
};
