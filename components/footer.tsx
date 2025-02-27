import Link from 'next/link'
import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

export function Footer() {
   return (
      <footer className="bg-gray-100 dark:bg-gray-900">
         <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
               {/* Logo & Short Description */}
               <div>
                  <Link href="/" className="flex items-center">
                     <span className="text-2xl font-bold">ShopNow</span>
                  </Link>
                  <p className="mt-4 text-sm text-gray-600 dark:text-gray-400">
                     Your one-stop shop for all your needs. Quality products,
                     great prices, and excellent customer service.
                  </p>
               </div>

               {/* Navigation Links */}
               <div>
                  <h3 className="text-lg font-semibold">Quick Links</h3>
                  <ul className="mt-4 space-y-2">
                     <li>
                        <Link
                           href="/category/clothing"
                           className="text-sm text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100"
                        >
                           Clothing
                        </Link>
                     </li>
                     <li>
                        <Link
                           href="/category/electronics"
                           className="text-sm text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100"
                        >
                           Electronics
                        </Link>
                     </li>
                     <li>
                        <Link
                           href="/category/home"
                           className="text-sm text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100"
                        >
                           Home
                        </Link>
                     </li>
                     <li>
                        <Link
                           href="/about"
                           className="text-sm text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100"
                        >
                           About Us
                        </Link>
                     </li>
                     <li>
                        <Link
                           href="/contact"
                           className="text-sm text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100"
                        >
                           Contact
                        </Link>
                     </li>
                     <li>
                        <Link
                           href="/faq"
                           className="text-sm text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100"
                        >
                           FAQs
                        </Link>
                     </li>
                     <li>
                        <Link
                           href="/blog"
                           className="text-sm text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100"
                        >
                           Blog
                        </Link>
                     </li>
                  </ul>
               </div>

               {/* Customer Support */}
               <div>
                  <h3 className="text-lg font-semibold">Customer Support</h3>
                  <ul className="mt-4 space-y-2">
                     <li>
                        <Link
                           href="/help-center"
                           className="text-sm text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100"
                        >
                           Help Center
                        </Link>
                     </li>
                     <li>
                        <Link
                           href="/returns"
                           className="text-sm text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100"
                        >
                           Returns & Refunds
                        </Link>
                     </li>
                     <li>
                        <Link
                           href="/shipping"
                           className="text-sm text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100"
                        >
                           Shipping Information
                        </Link>
                     </li>
                     <li>
                        <Link
                           href="/track-order"
                           className="text-sm text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100"
                        >
                           Track Order
                        </Link>
                     </li>
                  </ul>
               </div>

               {/* Social Media & Newsletter */}
               <div>
                  <h3 className="text-lg font-semibold">Stay Connected</h3>
                  <div className="mt-4 flex space-x-4">
                     <a
                        href="#"
                        className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100"
                     >
                        <span className="sr-only">Instagram</span>
                        <Instagram className="h-6 w-6" />
                     </a>
                     <a
                        href="#"
                        className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100"
                     >
                        <span className="sr-only">Facebook</span>
                        <Facebook className="h-6 w-6" />
                     </a>
                     <a
                        href="#"
                        className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100"
                     >
                        <span className="sr-only">Twitter</span>
                        <Twitter className="h-6 w-6" />
                     </a>
                     <a
                        href="#"
                        className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100"
                     >
                        <span className="sr-only">LinkedIn</span>
                        <Linkedin className="h-6 w-6" />
                     </a>
                  </div>
                  <form className="mt-4">
                     <h4 className="text-sm font-semibold">
                        Subscribe to our newsletter
                     </h4>
                     <div className="mt-2 flex">
                        <Input
                           type="email"
                           placeholder="Enter your email"
                           className="mr-2"
                        />
                        <Button type="submit">Subscribe</Button>
                     </div>
                  </form>
               </div>
            </div>

            {/* Payment Methods & Security */}
            <div className="mt-8 border-t border-gray-200 pt-8 dark:border-gray-700">
               <p className="text-sm text-gray-600 dark:text-gray-400">
                  We accept the following payment methods:
               </p>
               <div className="mt-2 flex space-x-4">
                  <span className="text-2xl">💳</span>
                  <span className="text-2xl">💰</span>
                  <span className="text-2xl">🏦</span>
               </div>
               <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                  All transactions are secure and encrypted.
               </p>
            </div>

            {/* Terms & Policies */}
            <div className="mt-8 border-t border-gray-200 pt-8 dark:border-gray-700">
               <ul className="flex flex-wrap justify-center space-x-6">
                  <li>
                     <Link
                        href="/privacy-policy"
                        className="text-sm text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100"
                     >
                        Privacy Policy
                     </Link>
                  </li>
                  <li>
                     <Link
                        href="/terms"
                        className="text-sm text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100"
                     >
                        Terms & Conditions
                     </Link>
                  </li>
                  <li>
                     <Link
                        href="/cookie-policy"
                        className="text-sm text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100"
                     >
                        Cookie Policy
                     </Link>
                  </li>
               </ul>
            </div>

            {/* Copyright Notice */}
            <div className="mt-8 text-center">
               <p className="text-sm text-gray-600 dark:text-gray-400">
                  &copy; {new Date().getFullYear()} ShopNow. All rights
                  reserved.
               </p>
            </div>
         </div>
      </footer>
   )
}
