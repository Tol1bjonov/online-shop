import Image from 'next/image'
import Link from 'next/link'

import { Button } from '@/components/ui/button'

const featuredProducts = [
   {
      id: 1,
      name: 'Stylish T-Shirt',
      price: 29.99,
      image: '/placeholder.svg?height=400&width=400',
   },
   {
      id: 2,
      name: 'Comfortable Jeans',
      price: 59.99,
      image: '/placeholder.svg?height=400&width=400',
   },
   {
      id: 3,
      name: 'Elegant Watch',
      price: 129.99,
      image: '/placeholder.svg?height=400&width=400',
   },
   {
      id: 4,
      name: 'Leather Shoes',
      price: 89.99,
      image: '/placeholder.svg?height=400&width=400',
   },
]

export function FeaturedProducts() {
   return (
      <section className="py-12">
         <h2 className="mb-8 text-3xl font-bold">Featured Products</h2>
         <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {featuredProducts.map((product) => (
               <div
                  key={product.id}
                  className="rounded-lg bg-card p-4 shadow-sm"
               >
                  <div className="relative aspect-square overflow-hidden rounded-md">
                     <Image
                        src={product.image || '/placeholder.svg'}
                        alt={product.name}
                        fill
                        style={{ objectFit: 'cover' }}
                     />
                  </div>
                  <h3 className="mt-4 font-medium">{product.name}</h3>
                  <p className="text-sm text-muted-foreground">
                     ${product.price.toFixed(2)}
                  </p>
                  <Button asChild className="mt-4 w-full">
                     <Link href={`/product/${product.id}`}>View Product</Link>
                  </Button>
               </div>
            ))}
         </div>
      </section>
   )
}
