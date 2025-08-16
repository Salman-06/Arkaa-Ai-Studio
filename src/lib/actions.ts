'use server';

import { generateDesignIdeas } from '@/ai/flows/generate-design-ideas';
import { z } from 'zod';

const generateIdeasSchema = z.object({
  prompt: z.string().min(10, { message: 'Prompt must be at least 10 characters long.' }),
});

export async function generateDesignIdeasAction(prevState: any, formData: FormData) {
  const validatedFields = generateIdeasSchema.safeParse({
    prompt: formData.get('prompt'),
  });

  if (!validatedFields.success) {
    return {
      message: 'Validation failed.',
      errors: validatedFields.error.flatten().fieldErrors,
      data: null,
    };
  }

  try {
    const result = await generateDesignIdeas({ prompt: validatedFields.data.prompt });
    if (result.designIdeas) {
      return { message: 'success', data: result, errors: null };
    } else {
       return { message: 'The AI could not generate ideas for this prompt. Please try a different one.', data: null, errors: null };
    }
  } catch (error) {
    console.error(error);
    return { message: 'An unexpected error occurred. Please try again later.', data: null, errors: null };
  }
}

const contactFormSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
  email: z.string().email({ message: 'Please enter a valid email address.' }),
  message: z.string().min(10, { message: 'Message must be at least 10 characters.' }),
});

export async function submitContactFormAction(prevState: any, formData: FormData) {
   const validatedFields = contactFormSchema.safeParse({
    name: formData.get('name'),
    email: formData.get('email'),
    message: formData.get('message'),
  });

  if (!validatedFields.success) {
    return {
      message: 'Validation failed.',
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  // In a real application, you would process this data, e.g., send an email or save to a database.
  console.log('New Contact Form Submission:');
  console.log('Name:', validatedFields.data.name);
  console.log('Email:', validatedFields.data.email);
  console.log('Message:', validatedFields.data.message);

  return { message: "Thank you for your message! We'll get back to you soon.", errors: null };
}
