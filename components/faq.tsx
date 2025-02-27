import {
   Accordion,
   AccordionContent,
   AccordionItem,
   AccordionTrigger,
} from '@/components/ui/accordion'

const faqItems = [
   {
      question: 'How long does shipping take?',
      answer:
         'Shipping typically takes 3-5 business days for domestic orders and 7-14 business days for international orders.',
   },
   {
      question: 'What is your return policy?',
      answer:
         'We offer a 30-day return policy for most items. Please check our Returns & Refunds page for more details.',
   },
   {
      question: 'Do you offer international shipping?',
      answer:
         'Yes, we ship to most countries worldwide. Shipping costs and delivery times may vary depending on the destination.',
   },
   {
      question: 'How can I track my order?',
      answer:
         "Once your order is shipped, you'll receive a tracking number via email. You can use this number on our Track Order page to check the status of your shipment.",
   },
   {
      question: 'Are your products eco-friendly?',
      answer:
         "We strive to offer eco-friendly options whenever possible. Look for our 'Eco-Friendly' label on product pages for items that meet our sustainability criteria.",
   },
]

export function FAQ() {
   return (
      <section className="py-12" id="faq">
         <h2 className="mb-8 text-3xl font-bold text-center">
            Frequently Asked Questions
         </h2>
         <Accordion type="single" collapsible className="w-full">
            {faqItems.map((item, index) => (
               <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger>{item.question}</AccordionTrigger>
                  <AccordionContent>{item.answer}</AccordionContent>
               </AccordionItem>
            ))}
         </Accordion>
      </section>
   )
}
