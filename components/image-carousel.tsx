"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react"

const carouselImages = [
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Xis2.jpg-6k0l5IYbeQBJn0IRXOYW31ejTtrVmO.jpeg",
    alt: "Curso de Prótese Dentária - Alternativa à Odontologia",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Xis4.jpg-99f33dBvpw14aVOiBfcD2ewDSo0x7l.jpeg",
    alt: "Formação Rápida com Retorno Real",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Xis3.jpg-wm32r5j1m3SerAgp6lctU6Ryk7g4Kr.jpeg",
    alt: "Conquiste sua Independência Financeira",
  },
]

export default function ImageCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)

  // Auto-advance carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselImages.length)
    }, 5000) // Change image every 5 seconds

    return () => clearInterval(interval)
  }, [])

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + carouselImages.length) % carouselImages.length)
  }

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselImages.length)
  }

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
  }

  return (
    <div className="relative w-full h-[400px] rounded-lg overflow-hidden shadow-xl bg-gray-100">
      {/* Images */}
      <div className="relative w-full h-full">
        {carouselImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-500 ease-in-out ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={image.src || "/placeholder.svg"}
              alt={image.alt}
              fill
              className="object-contain"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              priority={index === 0}
            />
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={goToPrevious}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all duration-200 z-10"
        aria-label="Imagem anterior"
      >
        <ChevronLeftIcon size={24} />
      </button>

      <button
        onClick={goToNext}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all duration-200 z-10"
        aria-label="Próxima imagem"
      >
        <ChevronRightIcon size={24} />
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
        {carouselImages.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-200 ${
              index === currentIndex ? "bg-white" : "bg-white/50 hover:bg-white/75"
            }`}
            aria-label={`Ir para imagem ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
