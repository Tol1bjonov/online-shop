'use client'

import * as React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import {
   Search,
   ShoppingCart,
   User,
   Heart,
   Menu,
   X,
   ChevronDown,
   Sun,
   Moon,
} from 'lucide-react'

import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import {
   DropdownMenu,
   DropdownMenuContent,
   DropdownMenuItem,
   DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { useTheme } from 'next-themes'

// Sample categories data - replace with your actual categories
const categories = [
   {
      name: 'Clothing',
      href: '/category/clothing',
      subcategories: [
         { name: "Men's", href: '/category/clothing/mens' },
         { name: "Women's", href: '/category/clothing/womens' },
         { name: 'Kids', href: '/category/clothing/kids' },
      ],
   },
   {
      name: 'Electronics',
      href: '/category/electronics',
      subcategories: [
         { name: 'Phones', href: '/category/electronics/phones' },
         { name: 'Laptops', href: '/category/electronics/laptops' },
         { name: 'Accessories', href: '/category/electronics/accessories' },
      ],
   },
   {
      name: 'Home',
      href: '/category/home',
      subcategories: [
         { name: 'Furniture', href: '/category/home/furniture' },
         { name: 'Decor', href: '/category/home/decor' },
         { name: 'Kitchen', href: '/category/home/kitchen' },
      ],
   },
]

export function Navbar() {
   const [isSearchOpen, setIsSearchOpen] = React.useState(false)
   const pathname = usePathname()
   const { setTheme, theme } = useTheme()

   return (
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
         <div className="container mx-auto flex h-16 items-center px-4 sm:px-6 lg:px-8">
            <Sheet>
               <SheetTrigger asChild>
                  <Button variant="ghost" size="icon" className="md:hidden">
                     <Menu className="h-5 w-5" />
                     <span className="sr-only">Toggle menu</span>
                  </Button>
               </SheetTrigger>
               <SheetContent side="left" className="w-[300px] sm:w-[400px]">
                  <div className="flex flex-col gap-6 py-4">
                     <Link href="/" className="flex items-center gap-2">
                        <span className="text-xl font-bold">ShopNow</span>
                     </Link>
                     <div className="flex flex-col space-y-3">
                        <div className="relative w-full">
                           <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                           <Input
                              placeholder="Search products..."
                              className="pl-8"
                           />
                        </div>
                        <nav className="flex flex-col space-y-4">
                           {categories.map((category) => (
                              <div key={category.name} className="space-y-2">
                                 <Link
                                    href={category.href}
                                    className="text-lg font-medium hover:text-primary"
                                 >
                                    {category.name}
                                 </Link>
                                 <div className="ml-4 flex flex-col space-y-2">
                                    {category.subcategories.map(
                                       (subcategory) => (
                                          <Link
                                             key={subcategory.name}
                                             href={subcategory.href}
                                             className="text-sm hover:text-primary"
                                          >
                                             {subcategory.name}
                                          </Link>
                                       )
                                    )}
                                 </div>
                              </div>
                           ))}
                        </nav>
                     </div>
                     <div className="flex flex-col space-y-2">
                        <Button
                           variant="outline"
                           asChild
                           className="justify-start"
                        >
                           <Link href="/account">
                              <User className="mr-2 h-4 w-4" />
                              Account
                           </Link>
                        </Button>
                        <Button
                           variant="outline"
                           asChild
                           className="justify-start"
                        >
                           <Link href="/wishlist">
                              <Heart className="mr-2 h-4 w-4" />
                              Wishlist
                           </Link>
                        </Button>
                        <Button
                           variant="outline"
                           asChild
                           className="justify-start"
                        >
                           <Link href="/cart">
                              <ShoppingCart className="mr-2 h-4 w-4" />
                              Cart
                           </Link>
                        </Button>
                     </div>
                  </div>
               </SheetContent>
            </Sheet>

            {/* Logo */}
            <Link href="/" className="mr-6 flex items-center space-x-2">
               <span className="hidden text-xl font-bold sm:inline-block">
                  ShopNow
               </span>
               <span className="text-xl font-bold sm:hidden">SN</span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex md:flex-1 md:items-center md:justify-start md:space-x-6">
               {categories.map((category) => (
                  <DropdownMenu key={category.name}>
                     <DropdownMenuTrigger asChild>
                        <Button
                           variant="ghost"
                           className={cn(
                              'group flex items-center gap-1 text-base',
                              pathname.startsWith(category.href) &&
                                 'text-primary'
                           )}
                        >
                           {category.name}
                           <ChevronDown className="h-4 w-4 transition-transform group-data-[state=open]:rotate-180" />
                        </Button>
                     </DropdownMenuTrigger>
                     <DropdownMenuContent align="start" className="w-48">
                        {category.subcategories.map((subcategory) => (
                           <DropdownMenuItem key={subcategory.name} asChild>
                              <Link href={subcategory.href}>
                                 {subcategory.name}
                              </Link>
                           </DropdownMenuItem>
                        ))}
                     </DropdownMenuContent>
                  </DropdownMenu>
               ))}
            </nav>

            {/* Search Bar - Desktop */}
            <div className="hidden flex-1 md:block md:max-w-md lg:max-w-lg">
               <div className="relative w-full">
                  <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input placeholder="Search products..." className="pl-8" />
               </div>
            </div>

            {/* Mobile Search Toggle */}
            <Button
               variant="ghost"
               size="icon"
               className="ml-auto md:hidden"
               onClick={() => setIsSearchOpen(!isSearchOpen)}
            >
               {isSearchOpen ? (
                  <X className="h-5 w-5" />
               ) : (
                  <Search className="h-5 w-5" />
               )}
               <span className="sr-only">Toggle search</span>
            </Button>

            {/* user action */}
            <div className="ml-auto flex items-center space-x-1 md:ml-0 md:space-x-2">
               {/* theme Toggle */}
               <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                  className="hidden md:flex"
               >
                  <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                  <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                  <span className="sr-only">Toggle theme</span>
               </Button>

               {/* account */}
               <Button
                  variant="ghost"
                  size="icon"
                  asChild
                  className="hidden md:flex"
               >
                  <Link href="/account">
                     <User className="h-5 w-5" />
                     <span className="sr-only">Account</span>
                  </Link>
               </Button>

               {/* wishlist */}
               <Button
                  variant="ghost"
                  size="icon"
                  asChild
                  className="hidden md:flex"
               >
                  <Link href="/wishlist">
                     <Heart className="h-5 w-5" />
                     <span className="sr-only">Wishlist</span>
                  </Link>
               </Button>

               {/* cart */}
               <Button variant="ghost" size="icon" asChild>
                  <Link href="/cart" className="relative">
                     <ShoppingCart className="h-5 w-5" />
                     <span className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-primary text-[10px] text-primary-foreground">
                        3
                     </span>
                     <span className="sr-only">Cart</span>
                  </Link>
               </Button>
            </div>
         </div>

         {/* Mobile Search Bar - Expandable */}
         {isSearchOpen && (
            <div className="border-t px-4 py-2 md:hidden">
               <div className="relative w-full">
                  <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input placeholder="Search products..." className="pl-8" />
               </div>
            </div>
         )}
      </header>
   )
}
