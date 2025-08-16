'use client';
import React, { useState, useEffect } from 'react';
import { Menu } from 'lucide-react';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';

const NavLink = ({
  id,
  children,
  onClick,
  className,
}: {
  id: string;
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}) => {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    if (onClick) {
      onClick();
    }
  };

  return (
    <a
      href={`#${id}`}
      onClick={handleClick}
      className={className}
    >
      {children}
    </a>
  );
};

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSheetOpen, setIsSheetOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  const closeSheet = () => setIsSheetOpen(false);


  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled ? 'bg-card/80 backdrop-blur-sm shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <div className="text-xl font-bold text-foreground">
            Arkaa AI Studios
          </div>
          <nav className="hidden md:flex items-center space-x-6">
            <NavLink id="about" className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors">About</NavLink>
            <NavLink id="services" className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors">Services</NavLink>
            <NavLink id="portfolio" className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors">Portfolio</NavLink>
            <NavLink id="ai-designer" className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors">AI Designer</NavLink>
            <NavLink id="contact" className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors">Contact</NavLink>
          </nav>
           <div className="md:hidden">
            <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Open Menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[280px] bg-card">
                  <SheetHeader>
                    <SheetTitle>Navigation</SheetTitle>
                  </SheetHeader>
                  <div className="p-6">
                     <nav className="flex flex-col space-y-5">
                      <SheetClose asChild>
                          <NavLink id="about" onClick={closeSheet} className="text-lg font-medium text-foreground/80 hover:text-foreground transition-colors">About</NavLink>
                      </SheetClose>
                       <SheetClose asChild>
                          <NavLink id="services" onClick={closeSheet} className="text-lg font-medium text-foreground/80 hover:text-foreground transition-colors">Services</NavLink>
                      </SheetClose>
                       <SheetClose asChild>
                         <NavLink id="portfolio" onClick={closeSheet} className="text-lg font-medium text-foreground/80 hover:text-foreground transition-colors">Portfolio</NavLink>
                      </SheetClose>
                       <SheetClose asChild>
                          <NavLink id="ai-designer" onClick={closeSheet} className="text-lg font-medium text-foreground/80 hover:text-foreground transition-colors">AI Designer</NavLink>
                      </SheetClose>
                      <SheetClose asChild>
                         <NavLink id="contact" onClick={closeSheet} className="text-lg font-medium text-foreground/80 hover:text-foreground transition-colors">Contact</NavLink>
                      </SheetClose>
                    </nav>
                  </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
