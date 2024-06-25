import React from 'react'
import Autoplay from "embla-carousel-autoplay"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "../components/ui/carousel"
import { carouselimages } from '../data'

const Imagecorusel = () => {
  return (
    <div className='shadow-md h-[40rem] w-full grid justify-center'>
      <Carousel  
      plugins={[
        Autoplay({
          delay: 2000,
        }),
      ]}>
        <CarouselContent>
          {
            carouselimages.map((im, index) => (
              <CarouselItem key={index}>
                <img className='h-[40rem] w-full object-cover' src={im.image1} alt="carousel" />
              </CarouselItem>
            ))
          }
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  )
}

export default Imagecorusel
