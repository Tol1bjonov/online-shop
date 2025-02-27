'use client'

import * as React from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight } from 'lucide-react'

import { Button } from '@/components/ui/button'

const carouselImages = [
   '/placeholder.svg?height=600&width=1600',
   '/placeholder.svg?height=600&width=1600',
   '/placeholder.svg?height=600&width=1600',
]

export function HeroCarousel() {
   const [currentIndex, setCurrentIndex] = React.useState(0)

   React.useEffect(() => {
      const timer = setInterval(() => {
         setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselImages.length)
      }, 5000) // Change image every 5 seconds

      return () => clearInterval(timer)
   }, [])

   const prevSlide = () => {
      setCurrentIndex(
         (prevIndex) =>
            (prevIndex - 1 + carouselImages.length) % carouselImages.length
      )
   }

   const nextSlide = () => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselImages.length)
   }

   return (
      <div className="relative h-[400px] w-full overflow-hidden rounded-lg">
         {carouselImages.map((image, index) => (
            <div
               key={index}
               className={`absolute h-full w-full transition-opacity duration-1000 ${
                  index === currentIndex ? 'opacity-100' : 'opacity-0'
               }`}
            >
               <Image
                  src={image || '/placeholder.svg'}
                  alt={`Carousel image ${index + 1}`}
                  fill
                  style={{ objectFit: 'cover' }}
               />
            </div>
         ))}
         <Button
            variant="outline"
            size="icon"
            className="absolute left-4 top-1/2 -translate-y-1/2 transform"
            onClick={prevSlide}
         >
            <ChevronLeft className="h-4 w-4" />
         </Button>
         <Button
            variant="outline"
            size="icon"
            className="absolute right-4 top-1/2 -translate-y-1/2 transform"
            onClick={nextSlide}
         >
            <ChevronRight className="h-4 w-4" />
         </Button>
      </div>
   )
}
