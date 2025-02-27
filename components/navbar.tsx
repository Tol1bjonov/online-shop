// import Logo from './Logo'

// const Navbar = () => {
//    return (
//       <nav className="flex items-center justify-between p-4 shadow-md">
//          <a href="">
//             <Logo />
//          </a>
//          <ul className="flex space-x-4">
//             <li>
//                <a href="#Home">Home</a>
//             </li>
//             <li>Products</li>
//             <li>Cart</li>
//             <li>Login</li>
//          </ul>
//       </nav>
//    )
// }

// export default Navbar

'use client'

import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Logo from './stufs/Logo'
import SearchBar from './stufs/search'
import Card from './stufs/Card'
import { ModeToggle } from './stufs/Mode_toggle'

export function Navbar() {
   const [isMenuOpen, setIsMenuOpen] = useState(false)

   return (
      <nav className="fixed top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 shadow-md py-3">
         <div className="container flex h-16 items-center justify-between mx-auto">
            <Logo />
            <div className="md:hidden">
               <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
               >
                  {isMenuOpen ? (
                     <X className="h-6 w-6" />
                  ) : (
                     <Menu className="h-6 w-6" />
                  )}
               </Button>
            </div>
            <div
               className={`${isMenuOpen ? 'absolute top-16 left-0 w-full border-b bg-background p-4 md:static md:block md:w-auto md:border-none md:p-0' : 'hidden md:block'}`}
            >
               <div className="flex flex-col space-y-4 md:flex-row md:space-y-0 md:space-x-6 items-center">
                  <SearchBar />
                  <Button variant={'outline'}>
                     <Card />
                  </Button>
                  <a
                     href="#contact"
                     className="text-muted-foreground hover:text-foreground text-lg"
                  >
                     Contact
                  </a>
                  <a
                     href="#login"
                     className="text-muted-foreground hover:text-foreground text-lg"
                  >
                     Login
                  </a>
                  <ModeToggle />
               </div>
            </div>
         </div>
      </nav>
   )
}
