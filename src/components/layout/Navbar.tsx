'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { NAV_ITEMS } from '@/constants/navigation';
import { Container } from '@/components/ui/Container';
import { cn } from '@/lib/utils';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > window.innerHeight - 100);
    };

    handleScroll(); // initial check
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-all duration-300',
        isScrolled
          ? 'bg-white shadow-soft'
          : 'bg-transparent'
      )}
    >
      <Container className="flex h-20 items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className={cn(
            'text-lg font-semibold tracking-wide transition-colors duration-300',
            isScrolled ? 'text-primary' : 'text-white'
          )}
        >
          <span className="font-display text-accent">Sof</span> Mebel
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-10 text-sm font-medium md:flex">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className={cn(
                'transition-colors duration-300',
                isScrolled
                  ? 'text-primary hover:text-accent'
                  : 'text-white hover:text-accent'
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Mobile toggle */}
        <button
          onClick={() => setIsOpen((prev) => !prev)}
          className={cn(
            'md:hidden transition-colors duration-300',
            isScrolled ? 'text-primary' : 'text-white'
          )}
          aria-label="Menyu"
        >
          <svg viewBox="0 0 24 24" className="h-6 w-6">
            {isOpen ? (
              <path stroke="currentColor" strokeWidth="2" d="M6 6l12 12M18 6l-12 12" />
            ) : (
              <path stroke="currentColor" strokeWidth="2" d="M4 7h16M4 12h16M4 17h16" />
            )}
          </svg>
        </button>
      </Container>

      {/* Mobile menu */}
      {isOpen && (
        <div className="border-t border-primary/10 bg-white md:hidden">
          <Container className="py-4">
            <nav className="flex flex-col gap-4 text-sm font-medium text-primary">
              {NAV_ITEMS.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="transition hover:text-accent"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </Container>
        </div>
      )}
    </header>
  );
}