'use client';
import * as React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import {
    Carousel,
    CarouselContent,
    CarouselItem,
} from '@/components/ui/carousel';
import Autoplay from 'embla-carousel-autoplay';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

const images = [
  {
    src: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    alt: 'Modern house exterior',
    hint: 'modern house'
  },
  {
    src: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    alt: 'Luxury living room interior',
    hint: 'luxury interior'
  },
  {
    src: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    alt: 'Cozy apartment living room',
    hint: 'apartment interior'
  },
];

export default function HeroSection() {
    const plugin = React.useRef(
        Autoplay({ delay: 3000, stopOnInteraction: true })
    );

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
            <Carousel
                plugins={[plugin.current]}
                className="absolute inset-0 w-full h-full"
                onMouseEnter={plugin.current.stop}
                onMouseLeave={plugin.current.reset}
            >
                <CarouselContent className="h-full">
                    {images.map((image, index) => (
                        <CarouselItem key={index} className="h-full">
                           <Image
                                src={image.src}
                                alt={image.alt}
                                layout="fill"
                                objectFit="cover"
                                className="brightness-50"
                                data-ai-hint={image.hint}
                            />
                        </CarouselItem>
                    ))}
                </CarouselContent>
            </Carousel>

            <div className="absolute inset-0 bg-black/40 z-10" />
            <div className="container relative z-20 px-4">
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
