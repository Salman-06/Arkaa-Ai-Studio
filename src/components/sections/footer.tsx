'use client';

import { useEffect, useState } from 'react';

export default function Footer() {
  const [year, setYear] = useState(new Date().getFullYear());

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="bg-card border-t border-border/50">
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left">
          <p className="text-sm text-foreground/80">
            &copy; {year} Arkaa AI Studios. All Rights Reserved.
          </p>
          <p className="text-sm text-foreground/60 mt-2 md:mt-0">
            Innovative Architectural & Interior Consulting
          </p>
        </div>
      </div>
    </footer>
  );
}
