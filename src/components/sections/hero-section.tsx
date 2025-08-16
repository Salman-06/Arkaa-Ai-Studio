'use client';

import { Button } from '@/components/ui/button';

export default function HeroSection() {
    const scrollToContact = () => {
        const contactSection = document.getElementById('contact');
        if (contactSection) {
            contactSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section
            id="home"
            className="relative w-full h-[60vh] md:h-[70vh] flex items-center justify-center text-center overflow-hidden"
        >
            <div className="absolute inset-0 bg-card/50 z-10" />
            <div className="container relative z-20 px-4">
                <h1 className="text-4xl md:text-6xl font-headline font-bold tracking-tighter mb-4 text-foreground">
                    Transforming Visions into Reality
                </h1>
                <p className="max-w-3xl mx-auto text-lg md:text-xl text-foreground/80 mb-8">
                    We create designs that connect occupants with their surroundings through elegance, sustainability, and cultural resonance.
                </p>
                <Button size="lg" onClick={scrollToContact} className="font-semibold">
                    Start a Project
                </Button>
            </div>
        </section>
    );
}
