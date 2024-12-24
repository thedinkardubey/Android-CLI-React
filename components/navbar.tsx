"use client";
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button } from "@/components/ui/button";
import { Menu, X  } from 'lucide-react';
import { ThemeToggle } from "@/components/theme-toggle";
import { motion } from "framer-motion";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const [isDocPage, setIsDocPage] = useState(false);

  useEffect(() => {
    setIsDocPage(pathname.startsWith('/docs'));
  }, [pathname]);

  return (
    <motion.header
      className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
            <span className="font-mono text-lg font-bold bg-clip-text text-transparent 
                bg-gradient-to-r 
                from-[#d8dee9] to-[#4c566a] // Light mode gradient (default styles)
                dark:from-[#FFFFFF] dark:to-[#3D556E] // Dark mode gradient
              ">
                Android CLI
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-4">
            <motion.div className="flex space-x-1" layout>
              {/* Documentation/Home Toggle */}
              {isDocPage ? (
                <Link href="/" passHref legacyBehavior>
                  <Button variant="ghost" className="text-foreground/60 hover:text-foreground transition-colors duration-200" asChild>
                    <a>Home</a>
                  </Button>
                </Link>
              ) : (
                <Link href="/docs" passHref legacyBehavior>
                  <Button variant="ghost" className="text-foreground/60 hover:text-foreground transition-colors duration-200" asChild>
                    <a>Documentation</a>
                  </Button>
                </Link>
              )}

              {/* Developer Button */}
              <a href="https://github.com/thedinkardubey/" target="_blank" rel="noopener noreferrer">
                <Button variant="ghost" className="text-foreground/60 hover:text-foreground transition-colors duration-200">
                  Developer
                </Button>
              </a>

              {/* GitHub Button */}
              <a href="https://github.com/thedinkardubey/Android-CLI" target="_blank" rel="noopener noreferrer">
                <Button variant="ghost" className="text-foreground/60 hover:text-foreground transition-colors duration-200">
                  GitHub
                </Button>
              </a>
            </motion.div>

            {/* Theme Toggle */}
            <ThemeToggle />
          </nav>

          {/* Mobile Menu Toggle */}
          <div className="flex items-center md:hidden">
            <ThemeToggle />
            <Button
              variant="ghost"
              className="ml-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="h-6 w-6" aria-label="Close menu icon" /> : <Menu className="h-6 w-6" aria-label="Open menu icon" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <motion.div
          className="md:hidden"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.2 }}
        >
          <nav className="flex flex-col items-center space-y-4 py-6 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            {/* Documentation/Home Toggle */}
            {isDocPage ? (
              <Link href="/" passHref legacyBehavior>
                <Button variant="ghost" className="w-full text-foreground/60 hover:text-foreground transition-colors duration-200" asChild>
                  <a>Home</a>
                </Button>
              </Link>
            ) : (
              <Link href="/docs" passHref legacyBehavior>
                <Button variant="ghost" className="w-full text-foreground/60 hover:text-foreground transition-colors duration-200" asChild>
                  <a>Documentation</a>
                </Button>
              </Link>
            )}

            {/* Developer Button */}
            <a href="https://github.com/thedinkardubey/" target="_blank" rel="noopener noreferrer" className="w-full">
              <Button variant="ghost" className="w-full text-foreground/60 hover:text-foreground transition-colors duration-200">
                Developer
              </Button>
            </a>

            {/* GitHub Button */}
            <a href="https://github.com/thedinkardubey/Android-CLI" target="_blank" rel="noopener noreferrer" className="w-full">
              <Button variant="ghost" className="w-full text-foreground/60 hover:text-foreground transition-colors duration-200">
                GitHub
              </Button>
            </a>
          </nav>
        </motion.div>
      )}
    </motion.header>
  );
}

