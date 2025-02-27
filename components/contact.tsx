'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import {
   Form,
   FormControl,
   FormDescription,
   FormField,
   FormItem,
   FormLabel,
   FormMessage,
} from '@/components/ui/form'

const formSchema = z.object({
   name: z.string().min(2, {
      message: 'Name must be at least 2 characters.',
   }),
   email: z.string().email({
      message: 'Please enter a valid email address.',
   }),
   message: z.string().min(10, {
      message: 'Message must be at least 10 characters.',
   }),
})

export function Contact() {
   const [isSubmitting, setIsSubmitting] = useState(false)

   const form = useForm<z.infer<typeof formSchema>>({
      resolver: zodResolver(formSchema),
      defaultValues: {
         name: '',
         email: '',
         message: '',
      },
   })

   function onSubmit(values: z.infer<typeof formSchema>) {
      setIsSubmitting(true)
      // In a real application, you would send this data to your server
      console.log(values)
      setTimeout(() => {
         setIsSubmitting(false)
         form.reset()
         alert('Message sent successfully!')
      }, 1000)
   }

   return (
      <section className="py-12" id="contact">
         <h2 className="mb-8 text-3xl font-bold">Contact Us</h2>
         <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
               <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                     <FormItem>
                        <FormLabel>Name</FormLabel>
                        <FormControl>
                           <Input placeholder="John Doe" {...field} />
                        </FormControl>
                        <FormDescription>
                           Please enter your full name.
                        </FormDescription>
                        <FormMessage />
                     </FormItem>
                  )}
               />
               <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                     <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                           <Input placeholder="john@example.com" {...field} />
                        </FormControl>
                        <FormDescription>
                           {' '}
                           We will never share your email with anyone else.
                        </FormDescription>
                        <FormMessage />
                     </FormItem>
                  )}
               />
               <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                     <FormItem>
                        <FormLabel>Message</FormLabel>
                        <FormControl>
                           <Textarea
                              placeholder="Your message here..."
                              {...field}
                           />
                        </FormControl>
                        <FormDescription>
                           Please provide as much detail as possible.
                        </FormDescription>
                        <FormMessage />
                     </FormItem>
                  )}
               />
               <Button type="submit" disabled={isSubmitting}>
                  {isSubmitting ? 'Sending...' : 'Send Message'}
               </Button>
            </form>
         </Form>
      </section>
   )
}
