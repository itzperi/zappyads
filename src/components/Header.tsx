"use client";

import { useState, useEffect } from "react";
import { Menu } from "lucide-react";

interface HeaderProps {
  className?: string;
}

export default function Header({ className }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navigationItems = [
    { name: "About", href: "#about" },
    { name: "Pricing", href: "#pricing" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
          isScrolled ? "bg-background/95 backdrop-blur-sm shadow-lg" : "bg-background"
        } ${className}`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <div className="flex items-center">
              <div className="flex items-center space-x-3">
                {/* Lightning Bolt Logo */}
                <div className="relative">
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="none"
                    className="text-primary"
                  >
                    <path
                      d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"
                      fill="currentColor"
                      className="drop-shadow-sm"
                    />
                  </svg>
                  {/* Subtle glow effect */}
                  <div className="absolute inset-0 bg-primary/20 blur-sm rounded-full scale-150 -z-10" />
                </div>
                
                {/* Brand Name */}
                <div className="flex flex-col">
                  <span className="text-xl lg:text-2xl font-bold text-foreground font-heading">
                    ZappyAds
                  </span>
                </div>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {navigationItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-foreground/80 hover:text-foreground font-medium transition-colors duration-200 relative group"
                >
                  {item.name}
                  <span className="absolute inset-x-0 -bottom-1 h-0.5 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-left" />
                </a>
              ))}
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 text-foreground/80 hover:text-foreground transition-colors duration-200"
              aria-label="Toggle mobile menu"
            >
              <Menu size={24} />
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-background border-t border-border/20">
            <div className="container mx-auto px-4 py-4">
              <nav className="flex flex-col space-y-4">
                {navigationItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-foreground/80 hover:text-foreground font-medium transition-colors duration-200 py-2"
                  >
                    {item.name}
                  </a>
                ))}
              </nav>
            </div>
          </div>
        )}
      </header>

      {/* Spacer to prevent content from hiding behind fixed header */}
      <div className="h-16 lg:h-20" />
    </>
  );
}