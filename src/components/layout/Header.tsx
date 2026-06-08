import { Link, useLocation } from 'react-router-dom';
import { Menu, Download } from 'lucide-react';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { useScrollPosition } from '@/hooks/useScrollPosition';
import { ThemeToggle } from './ThemeToggle';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { photographerInfo } from '@/data/photographer';
import { cn } from '@/lib/utils';

const navLinks = [
  { name: 'Home', href: '' },
  { name: 'About', href: 'about' },
  { name: 'Impact Journey', href: '#impact' },
  { name: 'Organizations', href: '#journey' },
  { name: 'Awards', href: '#awards' },
  { name: 'Gallery', href: '#gallery' },
  { name: 'Projects', href: 'portfolio' },
  { name: 'Contact', href: '#contact' },
  { name: 'Resume', href: 'resume' },
];

export function Header() {
  const location = useLocation();
  const { isScrolled } = useScrollPosition();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const isHome = location.pathname === '/';
  const isTransparent = isHome && !isScrolled;

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
        isTransparent
          ? 'bg-transparent'
          : 'glass-strong border-b border-border'
      )}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link
            to="/"
            className={cn(
              'font-display text-xl tracking-tight transition-colors',
              isTransparent ? 'text-white' : 'text-foreground'
            )}
          >
            Narendhar<span className="text-indigo-glow">  </span>
          </Link>

          <nav className="hidden md:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={isHome ? link.href : `/${link.href}`}
                className={cn(
                  'text-sm font-medium tracking-wide transition-colors',
                  isTransparent
                    ? 'text-white/85 hover:text-white'
                    : 'text-muted-foreground hover:text-foreground'
                )}
              >
                {link.name}
              </a>
            ))}
            <a
              href="/resume.pdf"
              download="resume.pdf"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:opacity-90 transition"
            >
              <Download className="size-4" /> Resume
            </a>
            <ThemeToggle />
          </nav>

          <div className="md:hidden flex items-center gap-2">
            <ThemeToggle />
            <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className={cn('size-9', isTransparent && 'text-white hover:bg-white/10')}
                  aria-label="Open menu"
                >
                  <Menu className="size-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-full sm:w-80">
                <nav className="flex flex-col gap-5 mt-10">
                  {navLinks.map((link) => (
                    <a
                      key={link.href}
                      href={isHome ? link.href : `/${link.href}`}
                      onClick={() => setMobileMenuOpen(false)}
                      className="text-lg font-medium tracking-wide text-foreground"
                    >
                      {link.name}
                    </a>
                  ))}
                  <a
                    href="/resume.pdf"
                    download="resume.pdf"
                    onClick={() => setMobileMenuOpen(false)}
                    className="inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground w-fit"
                  >
                    <Download className="size-4" /> Download resume
                  </a>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </motion.header>
  );
}
