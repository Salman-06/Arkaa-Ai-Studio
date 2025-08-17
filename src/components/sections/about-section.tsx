import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';

export default function AboutSection() {
  return (
    <section id="about" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <Card className="bg-card/80 border-none shadow-lg">
              <CardContent className="p-8 md:p-10">
                <h2 className="text-3xl font-bold text-primary mb-4">About Arkaa AI Studios</h2>
                <p className="text-foreground/80 leading-relaxed mb-4">
                  Led by Ar.Prithiv Anand.R, our architectural firm specializes in innovative Architectural & Interior Consulting Services. We believe that every design not only serves its purpose but also fosters a profound connection between the occupant and their surroundings.
                </p>
                <p className="text-foreground/80 leading-relaxed">
                  We transform visions into reality with a focus on elegance, sustainability & cultural resonance, ensuring our design becomes a bond for the inhabitant's environment. From scheme design to the final touches, we design and guide to perfection.
                </p>
              </CardContent>
            </Card>
          </div>
          <div className="order-1 md:order-2">
            <div className="relative w-full" style={{paddingBottom: '75%'}}>
              <Image
                src="https://images.unsplash.com/photo-1593085512500-5d55148d6f0d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxwb3J0cmFpdCUyMGFyY2hpdGVjdHxlbnwwfHx8fDE3NTU0NTg4MjF8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Ar.Prithiv Anand.R"
                layout="fill"
                className="rounded-lg object-cover shadow-2xl"
                data-ai-hint="architect portrait"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
