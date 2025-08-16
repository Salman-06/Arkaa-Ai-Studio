'use client';

import { useActionState, useEffect, useRef } from 'react';
import { useFormStatus } from 'react-dom';
import { generateDesignIdeasAction } from '@/lib/actions';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Loader2, Sparkles } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} className="w-full md:w-auto">
      {pending ? (
        <>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          Generating...
        </>
      ) : (
        <>
          <Sparkles className="mr-2 h-4 w-4" />
          Generate Ideas
        </>
      )}
    </Button>
  );
}

const initialState = {
  message: '',
  data: { designIdeas: '' },
  errors: { prompt: [] },
};

export default function AiDesignerSection() {
  const [state, formAction] = useActionState(generateDesignIdeasAction, initialState);
  const formRef = useRef<HTMLFormElement>(null);
  const { toast } = useToast();

  useEffect(() => {
    if (state.message === 'success') {
      formRef.current?.reset();
    }
    if (state.message !== '' && state.message !== 'success') {
      toast({
        variant: 'destructive',
        title: 'Error',
        description: state.message,
      });
    }
  }, [state, toast]);

  return (
    <section id="ai-designer" className="py-16 md:py-24 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-primary">AI Design Assistant</h2>
          <p className="text-lg text-foreground/80 mt-2 max-w-2xl mx-auto">
            Stuck for ideas? Describe your dream space and let our AI provide a spark of inspiration.
          </p>
        </div>
        <div className="grid lg:grid-cols-2 gap-8 items-start">
          <Card className="bg-background shadow-lg">
            <CardHeader>
              <CardTitle>Get Design Suggestions</CardTitle>
              <CardDescription>
                Enter a few keywords about style, colors, or materials you like. For example, "a cozy living room with warm woods, natural light, and a touch of mid-century modern style".
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form ref={formRef} action={formAction} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="prompt">Your Design Preferences</Label>
                  <Textarea
                    id="prompt"
                    name="prompt"
                    placeholder="e.g., Scandinavian kitchen, light oak, white marble..."
                    rows={5}
                    required
                  />
                  {state.errors?.prompt && (
                    <p className="text-sm font-medium text-destructive">{state.errors.prompt[0]}</p>
                  )}
                </div>
                <SubmitButton />
              </form>
            </CardContent>
          </Card>
          
          <Card className="bg-background shadow-lg min-h-full">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Sparkles className="mr-2 h-5 w-5 text-primary" />
                AI-Generated Ideas
              </CardTitle>
              <CardDescription>
                Your creative starting point will appear here.
              </CardDescription>
            </CardHeader>
            <CardContent>
              {state.data?.designIdeas ? (
                 <div className="prose prose-sm max-w-none text-foreground/90 whitespace-pre-wrap">
                    {state.data.designIdeas}
                 </div>
              ) : (
                <div className="text-center text-foreground/50 py-10">
                  <p>Ideas will be generated once you submit your prompt.</p>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
