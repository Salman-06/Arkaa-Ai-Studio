'use client';
import React from 'react';

const NavLink = ({
  id,
  children,
}: {
  id: string;
  children: React.ReactNode;
}) => {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <a
      href={`#${id}`}
      onClick={handleClick}
      className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
    >
      {children}
    </a>
  );
};

export default function Header() {
  const [isScrolled, setIsScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
            <NavLink id="about">About</NavLink>
            <NavLink id="services">Services</NavLink>
            <NavLink id="portfolio">Portfolio</NavLink>
            <NavLink id="ai-designer">AI Designer</NavLink>
            <NavLink id="contact">Contact</NavLink>
          </nav>
        </div>
      </div>
    </header>
  );
}
