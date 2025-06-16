"use client"

import { useState } from "react"
import { ChevronDownIcon, ChevronUpIcon } from "lucide-react"

interface FAQItem {
  question: string
  answer: string
}

const faqData: FAQItem[] = [
  {
    question: "O curso é online ou presencial?",
    answer:
      "Nosso curso é 100% presencial, garantindo máximo aproveitamento das aulas práticas e interação direta com instrutores e colegas em nossa estrutura em Vitória/ES.",
  },
  {
    question: "Preciso ter experiência na área?",
    answer: "Não! Nosso curso foi desenhado para formar profissionais do zero.",
  },
  {
    question: "Quais os métodos de avaliação?",
    answer:
      "Nossa avaliação é contínua e prática. Você será avaliado através de trabalhos práticos individuais e em grupo realizados em laboratório, provas teóricas pontuais e um projeto final integrador ao concluir todos os módulos, garantindo que você realmente domine as competências necessárias.",
  },
  {
    question: "O curso oferece certificado?",
    answer:
      "Sim! Você recebe um certificado de conclusão para cada módulo finalizado e um certificado completo ao final do curso.",
  },
  {
    question: "Qual a duração total do curso?",
    answer: "A formação completa tem duração de 24 meses, dividida em 4 módulos.",
  },
  {
    question: "Quando começa a próxima turma?",
    answer: "A próxima turma inicia em 04/08/2025. As vagas são limitadas!",
  },
  {
    question: "Onde o curso é realizado?",
    answer:
      "Nossas instalações estão localizadas em Vitória, Espírito Santo. Rua José Farias, 160, Bairro Santa Luíza - Vitória/ES CEP 29045-300.",
  },
]

export default function FAQ() {
  const [openItems, setOpenItems] = useState<number[]>([])

  const toggleItem = (index: number) => {
    setOpenItems((prev) => (prev.includes(index) ? prev.filter((item) => item !== index) : [...prev, index]))
  }

  return (
    <section id="faq" className="py-20 px-6 bg-white">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Perguntas Frequentes</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Tire suas dúvidas sobre o curso e nossa metodologia. Se não encontrar a resposta que procura, entre em
            contato conosco!
          </p>
        </div>

        <div className="space-y-4">
          {faqData.map((item, index) => (
            <div key={index} className="bg-gray-50 rounded-lg border border-gray-200 overflow-hidden">
              <button
                className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-100 transition-colors"
                onClick={() => toggleItem(index)}
              >
                <span className="font-semibold text-gray-800 pr-4">{item.question}</span>
                {openItems.includes(index) ? (
                  <ChevronUpIcon className="w-5 h-5 text-gray-500 flex-shrink-0" />
                ) : (
                  <ChevronDownIcon className="w-5 h-5 text-gray-500 flex-shrink-0" />
                )}
              </button>
              {openItems.includes(index) && (
                <div className="px-6 pb-4">
                  <p className="text-gray-600 leading-relaxed">{item.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">Ainda tem dúvidas?</p>
          <a
            href="#inscreva-se"
            className="inline-block bg-emerald-600 text-white px-8 py-3 rounded-md hover:bg-emerald-700 transition-colors"
          >
            Entre em contato
          </a>
        </div>
      </div>
    </section>
  )
}
