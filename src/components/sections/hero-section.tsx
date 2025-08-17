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
      src: 'https://images.unsplash.com/photo-1654200150895-5be29dc62762?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw5fHxtb2Rlcm4lMjBob3VzZXxlbnwwfHx8fDE3NTU0MzM3NTJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
      alt: 'Modern house exterior',
      hint: 'modern house'
    },
    {
      src: 'https://images.unsplash.com/photo-1628744876497-eb30460be9f6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw4fHxsdXh1cnklMjBpbnRlcmlvcnxlbnwwfHx8fDE3NTU0MzM3NTJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
      alt: 'Luxury living room interior',
      hint: 'luxury interior'
    },
    {
      src: 'https://images.unsplash.com/photo-1665249934445-1de680641f50?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwzfHxhcGFydG1lbnQlMjBpbnRlcmlvcnxlbnwwfHx8fDE3NTU0MzM3NTJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
      alt: 'Cozy apartment living room',
      hint: 'apartment interior'
    },
  ];

export default function HeroSection() {
    const plugin = React.useRef(
        Autoplay({ delay: 5000, stopOnInteraction: true })
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
                className="absolute inset-0 w-full h-full -z-10"
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
                                priority={index === 0}
                            />
                        </CarouselItem>
                    ))}
                </CarouselContent>
            </Carousel>

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