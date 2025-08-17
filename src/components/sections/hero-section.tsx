'use client';
import * as React from 'react';
import Image from 'next/image';
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
            className="relative w-full h-[60vh] md:h-[80vh] flex items-center justify-center text-center overflow-hidden"
        >
            <div className="absolute inset-0 w-full h-full -z-10">
                <Image
                    src="XxlbnwwfHx8fDE3NTU0MzM3NTJ8MA&ixlib=rb-4.1.0&q=80&w=1080"
                    alt="Modern house exterior"
                    layout="fill"
                    objectFit="cover"
                    className="brightness-50"
                    data-ai-hint="modern house"
                    priority
                />
            </div>

            <div className="absolute inset-0 bg-black/40" />
            <div className="container relative z-10 px-4">
                <h1 className="text-4xl md:text-6xl font-headline font-bold tracking-tighter mb-4 text-white">
                    Transforming Visions into Reality
                </h1>
                <p className="max-w-3xl mx-auto text-lg md:text-xl text-slate-200 mb-8">
                    We create designs that connect occupants with their surroundings through elegance, sustainability, and cultural resonance.
                </p>
                <Button size="lg" onClick={scrollToContact} className="font-semibold">
                    Start a Project
                </Button>
            </div>
        </section>
    );
}
