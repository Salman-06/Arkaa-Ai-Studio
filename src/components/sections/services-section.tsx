import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Building2, Home, Trees, Cuboid } from 'lucide-react';

const services = [
  {
    icon: <Building2 className="w-10 h-10 text-primary" />,
    title: 'Architecture',
    description: 'Creating innovative and sustainable architectural solutions from concept to completion.',
  },
  {
    icon: <Home className="w-10 h-10 text-primary" />,
    title: 'Interior Design',
    description: 'Designing functional and beautiful interior spaces that reflect your personality and style.',
  },
  {
    icon: <Trees className="w-10 h-10 text-primary" />,
    title: 'Landscape Design',
    description: 'Crafting outdoor spaces that harmonize with nature and architecture.',
  },
  {
    icon: <Cuboid className="w-10 h-10 text-primary" />,
    title: '3D Design',
    description: 'Visualizing projects with stunningly realistic 3D renderings and walkthroughs.',
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-16 md:py-24 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-primary">Our Services</h2>
          <p className="text-lg text-foreground/80 mt-2 max-w-2xl mx-auto">
            From initial sketches to the final build, we offer a complete range of design services.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="text-center bg-background shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
              <CardHeader>
                <div className="flex justify-center mb-4">{service.icon}</div>
                <CardTitle className="text-xl font-semibold">{service.title}</CardTitle>
                <CardDescription className="pt-2">{service.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
