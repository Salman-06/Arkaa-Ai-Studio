'use client';

import { useActionState, useEffect, useRef } from 'react';
import { useFormStatus } from 'react-dom';
import { submitContactFormAction } from '@/lib/actions';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Loader2, Mail, Phone, MapPin } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} className="w-full">
      {pending ? (
        <>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          Sending...
        </>
      ) : (
        'Send Message'
      )}
    </Button>
  );
}

const initialState = {
  message: '',
  errors: { name: [], email: [], message: [] },
};

export default function ContactSection() {
  const [state, formAction] = useActionState(submitContactFormAction, initialState);
  const formRef = useRef<HTMLFormElement>(null);
  const { toast } = useToast();

  useEffect(() => {
    if (state.message) {
        if(state.message.startsWith("Thank you")){
            toast({ title: "Success", description: state.message });
            formRef.current?.reset();
        } else {
            toast({ variant: 'destructive', title: 'Error', description: state.message });
        }
    }
  }, [state, toast]);

  return (
    <section id="contact" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-primary">Get in Touch</h2>
          <p className="text-lg text-foreground/80 mt-2 max-w-2xl mx-auto">
            Have a project in mind? We'd love to hear from you.
          </p>
        </div>
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12">
          <Card className="bg-card shadow-lg">
            <CardHeader>
              <CardTitle>Send Us a Message</CardTitle>
              <CardDescription>Fill out the form and we'll get back to you shortly.</CardDescription>
            </CardHeader>
            <CardContent>
              <form ref={formRef} action={formAction} className="space-y-4">
                <div>
                  <Label htmlFor="name">Full Name</Label>
                  <Input type="text" id="name" name="name" required />
                  {state.errors?.name && <p className="text-sm font-medium text-destructive">{state.errors.name[0]}</p>}
                </div>
                <div>
                  <Label htmlFor="email">Email Address</Label>
                  <Input type="email" id="email" name="email" required />
                  {state.errors?.email && <p className="text-sm font-medium text-destructive">{state.errors.email[0]}</p>}
                </div>
                <div>
                  <Label htmlFor="message">Your Message</Label>
                  <Textarea id="message" name="message" rows={5} required />
                   {state.errors?.message && <p className="text-sm font-medium text-destructive">{state.errors.message[0]}</p>}
                </div>
                <SubmitButton />
              </form>
            </CardContent>
          </Card>
          <div className="space-y-8">
            <Card className="bg-card shadow-lg">
              <CardHeader>
                <CardTitle>Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-foreground/90">
                <div className="flex items-center gap-4">
                  <Phone className="w-5 h-5 text-primary" />
                  <span>+91-9677552088</span>
                </div>
                <div className="flex items-center gap-4">
                  <Mail className="w-5 h-5 text-primary" />
                  <span>arkaa.aioffice@gmail.com</span>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-card shadow-lg">
              <CardHeader>
                <CardTitle>Our Studios</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-foreground/90">
                 <div className="flex items-start gap-4">
                  <MapPin className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold">Tirupur Office</h3>
                    <p className="text-foreground/80">123 Design Street, Tirupur, Tamil Nadu</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <MapPin className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold">Vellore Office</h3>
                    <p className="text-foreground/80">456 Architecture Ave, Vellore, Tamil Nadu</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
