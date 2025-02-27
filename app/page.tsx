import { Navbar } from '@/components/navbar'
import { HeroCarousel } from '@/components/hero-carousel'
import { FeaturedProducts } from '@/components/featured-product'
import { FAQ } from '@/components/faq'
import { Contact } from '@/components/contact'
import { Footer } from '@/components/footer'

export default function Home() {
   return (
      <div className="min-h-screen flex flex-col">
         <Navbar />
         <main className="flex-grow">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
               <section className="py-10">
                  <h1 className="mb-4 text-4xl font-bold">
                     Welcome to ShopNow
                  </h1>
                  <p className="text-xl text-muted-foreground">
                     Discover our latest products and exclusive deals.
                  </p>
               </section>
               <HeroCarousel />
               <FeaturedProducts />
               <FAQ />
               <Contact />
            </div>
         </main>
         <Footer />
      </div>
   )
}
