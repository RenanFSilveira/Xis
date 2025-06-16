"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react"

// Estrutura preparada para receber imagens da pasta public/images
const professionSlides = [
  {
    imagePath: "/images/profession-slide-1.jpg", // Caminho para a imagem na pasta public/images
    alt: "Protético trabalhando em laboratório",
  },
  {
    imagePath: "/images/profession-slide-2.jpg",
    alt: "Laboratório de prótese dentária",
  },
  {
    imagePath: "/images/profession-slide-3.jpg",
    alt: "Diferentes tipos de próteses dentárias",
  },
  {
    imagePath: "/images/profession-slide-4.jpg",
    alt: "Profissional bem-sucedido na área de prótese",
  },
  {
    imagePath: "/images/profession-slide-5.jpg",
    alt: "Oportunidades no mercado de trabalho para protéticos",
  },
]

export default function ProfessionCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)

  // Auto-advance carousel com tempo aumentado
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % professionSlides.length)
    }, 8000) // Aumentado para 8 segundos entre transições

    return () => clearInterval(interval)
  }, [])

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + professionSlides.length) % professionSlides.length)
  }

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % professionSlides.length)
  }

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
  }

  return (
    <section id="profissao" className="py-20 px-6 bg-gray-50">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Conheça a Profissão de Protético Dental</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Descubra tudo sobre esta carreira promissora e as oportunidades que ela oferece
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative h-[500px] rounded-lg overflow-hidden shadow-xl">
            {/* Slides */}
            <div className="relative w-full h-full">
              {professionSlides.map((slide, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                    index === currentIndex ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <Image
                    src={slide.imagePath || "/placeholder.svg"}
                    alt={slide.alt}
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 800px"
                    priority={index === 0}
                  />
                </div>
              ))}
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={goToPrevious}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all duration-200 z-20"
              aria-label="Slide anterior"
            >
              <ChevronLeftIcon size={24} />
            </button>

            <button
              onClick={goToNext}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all duration-200 z-20"
              aria-label="Próximo slide"
            >
              <ChevronRightIcon size={24} />
            </button>

            {/* Dots Indicator */}
            <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-3 z-20">
              {professionSlides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-200 ${
                    index === currentIndex ? "bg-white" : "bg-white/50 hover:bg-white/75"
                  }`}
                  aria-label={`Ir para slide ${index + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Progress Bar */}
          <div className="mt-6 bg-gray-200 rounded-full h-2">
            <div
              className="bg-emerald-600 h-2 rounded-full transition-all duration-300"
              style={{ width: `${((currentIndex + 1) / professionSlides.length) * 100}%` }}
            />
          </div>

          <div className="text-center mt-8">
            <p className="text-gray-600 mb-4">
              Slide {currentIndex + 1} de {professionSlides.length}
            </p>
            <a
              href="#inscreva-se"
              className="inline-block bg-emerald-600 text-white px-8 py-3 rounded-md hover:bg-emerald-700 transition-colors"
            >
              Quero me tornar um Protético
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
