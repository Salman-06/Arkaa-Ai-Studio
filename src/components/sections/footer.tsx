export default function Footer() {
  return (
    <footer className="bg-card border-t border-border/50">
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left">
          <p className="text-sm text-foreground/80">
            &copy; {new Date().getFullYear()} Arkaa AI Studios. All Rights Reserved.
          </p>
          <p className="text-sm text-foreground/60 mt-2 md:mt-0">
            Innovative Architectural & Interior Consulting
          </p>
        </div>
      </div>
    </footer>
  );
}
