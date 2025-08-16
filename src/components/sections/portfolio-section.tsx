import Image from 'next/image';
import { Card, CardContent, CardFooter } from '@/components/ui/card';

const projects = [
  {
    title: 'Modern Villa',
    category: 'Architecture',
    image: 'https://images.unsplash.com/photo-1691425700585-c108acad6467?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw1fHxNb2Rlcm4lMjBWaWxsYXxlbnwwfHx8fDE3NTUzNTQ4ODN8MA&ixlib=rb-4.1.0&q=80&w=1080',
    hint: 'modern architecture',
  },
  {
    title: 'Minimalist Apartment',
    category: 'Interior Design',
    image: 'https://images.unsplash.com/photo-1592276040264-e10344a6a10e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxOHx8TWluaW1hbGlzdCUyMEFwYXJ0bWVudHxlbnwwfHx8fDE3NTUzNTQ4OTd8MA&ixlib=rb-4.1.0&q=80&w=1080',
    hint: 'minimalist interior',
  },
  {
    title: 'Serene Garden',
    category: 'Landscape Design',
    image: 'https://images.unsplash.com/photo-1632161293871-cf2083474e34?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw3fHxTZXJlbmUlMjBHYXJkZW58ZW58MHx8fHwxNzU1MzU0OTE5fDA&ixlib=rb-4.1.0&q=80&w=1080',
    hint: 'zen garden',
  },
  {
    title: 'Corporate Headquarters',
    category: 'Architecture',
    image: 'https://placehold.co/600x400.png',
    hint: 'office building',
  },
   {
    title: 'Luxury Retail Space',
    category: 'Interior Design',
    image: 'https://placehold.co/600x400.png',
    hint: 'luxury store',
  },
  {
    title: 'Rooftop Oasis',
    category: 'Landscape Design',
    image: 'https://placehold.co/600x400.png',
    hint: 'rooftop garden',
  },
];

export default function PortfolioSection() {
  return (
    <section id="portfolio" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-primary">Our Work</h2>
          <p className="text-lg text-foreground/80 mt-2 max-w-2xl mx-auto">
            A selection of projects that showcase our commitment to design excellence.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="overflow-hidden group bg-card shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-0">
                <div className="overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={600}
                    height={400}
                    className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
                    data-ai-hint={project.hint}
                  />
                </div>
              </CardContent>
              <CardFooter className="p-4 bg-card">
                 <div>
                  <p className="font-semibold text-lg text-foreground">{project.title}</p>
                  <p className="text-sm text-primary">{project.category}</p>
                 </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
