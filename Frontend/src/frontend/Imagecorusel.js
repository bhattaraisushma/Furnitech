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
    <div className='shadow-md  grid justify-center pb-4 z-0'>
      <Carousel  
      plugins={[
        Autoplay({
          delay: 2000,
        }),
      ]}>
        <CarouselContent className='flex items-center w-full justify-evenly px-[20rem] '>
          {
            carouselimages.map((im, index) => (
              <CarouselItem key={index}>
                <img className='h-[28rem] w-[100%]' src={im.image1} alt="carousel" />
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
