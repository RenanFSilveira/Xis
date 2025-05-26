import Image from "next/image"
import { PhoneIcon as Whatsapp } from "lucide-react"
import ContactForm from "@/components/contact-form"
import ModuleCard from "@/components/module-card"
import Testimonial from "@/components/testimonial"
import CTA from "@/components/cta"

export default function Home() {
  // Dados dos módulos do curso
  const modules = [
    {
      id: 1,
      title: "Fundamentos da Prótese",
      description: "Conceitos básicos, materiais e técnicas iniciais.",
      icon: "🔍",
    },
    {
      id: 2,
      title: "Próteses Removíveis",
      description: "Criação de próteses totais e parciais.",
      icon: "🦷",
    },
    {
      id: 3,
      title: "Próteses Fixas",
      description: "Implantes, coroas e pontes.",
      icon: "🔧",
    },
    {
      id: 4,
      title: "Tecnologia CAD/CAM",
      description: "Design e fabricação digital.",
      icon: "💻",
    },
  ]

  // Dados dos depoimentos
  const testimonials = [
    {
      id: 1,
      name: "Carlos Silva",
      role: "Protético Dental",
      content:
        "O curso da Xis transformou minha carreira. A metodologia prática e o conhecimento da Márcia são incomparáveis.",
      avatar: "/placeholder.svg?height=80&width=80",
    },
    {
      id: 2,
      name: "Ana Oliveira",
      role: "Estudante de Odontologia",
      content: "Mesmo sem experiência prévia, consegui aprender técnicas avançadas e já estou trabalhando na área.",
      avatar: "/placeholder.svg?height=80&width=80",
    },
  ]

  return (
    <main className="min-h-screen bg-white">
      {/* Botão flutuante de WhatsApp */}
      <a
        href="https://wa.me/5500000000000"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-600 text-white p-4 rounded-full shadow-lg z-50 hover:bg-green-700 transition-all"
        aria-label="Contato via WhatsApp"
      >
        <Whatsapp size={24} />
      </a>

      {/* Header */}
      <header className="bg-white py-4 px-6 shadow-sm sticky top-0 z-40">
        <div className="container mx-auto flex justify-between items-center">
          <div className="w-40 h-auto relative">
            <Image
              src="/images/logo.png"
              alt="Xis - Próteses Odontológicas"
              width={160}
              height={80}
              priority
              className="object-contain"
            />
          </div>
          <nav className="hidden md:flex space-x-6">
            <a href="#sobre" className="text-gray-700 hover:text-emerald-600 transition-colors">
              Sobre
            </a>
            <a href="#modulos" className="text-gray-700 hover:text-emerald-600 transition-colors">
              Módulos
            </a>
            <a href="#depoimentos" className="text-gray-700 hover:text-emerald-600 transition-colors">
              Depoimentos
            </a>
            <a href="#contato" className="text-gray-700 hover:text-emerald-600 transition-colors">
              Contato
            </a>
          </nav>
          <a
            href="#inscreva-se"
            className="bg-orange-500 text-white px-6 py-2 rounded-md hover:bg-orange-600 transition-colors shadow-md"
          >
            Inscreva-se
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-emerald-50 to-white py-20 px-6">
        <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Torne-se um Especialista em Próteses Odontológicas
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Curso profissionalizante com certificação e metodologia exclusiva desenvolvida por
              <span className="font-semibold text-emerald-700"> Márcia Sales</span>, especialista com mais de 35 anos de
              experiência.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#inscreva-se"
                className="bg-orange-500 text-white px-8 py-3 rounded-md text-center hover:bg-orange-600 transition-colors shadow-md"
              >
                Garanta sua vaga
              </a>
              <a
                href="#modulos"
                className="border-2 border-emerald-600 text-emerald-600 px-8 py-3 rounded-md text-center hover:bg-emerald-50 transition-colors"
              >
                Conheça os módulos
              </a>
            </div>
          </div>
          <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
            <Image
              src="/placeholder.svg?height=400&width=600"
              alt="Profissionais em prótese odontológica em atividade"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Sobre Section */}
      <section id="sobre" className="py-20 px-6 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Por que escolher o curso da Xis?</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Nosso curso foi desenvolvido para formar profissionais de excelência, com foco em qualidade máxima e
              técnicas modernas.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-emerald-50 p-8 rounded-lg text-center">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎓</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Formação Modular</h3>
              <p className="text-gray-600">
                Cada módulo tem duração de 6 meses e permite atuação profissional imediata.
              </p>
            </div>

            <div className="bg-emerald-50 p-8 rounded-lg text-center">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">⭐</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Qualidade Máxima</h3>
              <p className="text-gray-600">Aprenda com os mais altos padrões de qualidade exigidos pelo mercado.</p>
            </div>

            <div className="bg-emerald-50 p-8 rounded-lg text-center">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💻</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Tecnologia CAD/CAM</h3>
              <p className="text-gray-600">Acesso às técnicas mais modernas, incluindo design e fabricação digital.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Intermediário */}
      <CTA
        title="Transforme sua carreira com conhecimento especializado"
        description="Inscreva-se agora e comece sua jornada na área de próteses odontológicas."
        buttonText="Quero me inscrever"
        buttonLink="#inscreva-se"
      />

      {/* Módulos Section */}
      <section id="modulos" className="py-20 px-6 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Estrutura do Curso</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Nosso curso é dividido em módulos independentes, permitindo que você avance em seu próprio ritmo e comece
              a atuar profissionalmente após cada etapa.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {modules.map((module) => (
              <ModuleCard key={module.id} title={module.title} description={module.description} icon={module.icon} />
            ))}
          </div>
        </div>
      </section>

      {/* Depoimentos Section */}
      <section id="depoimentos" className="py-20 px-6 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">O que dizem nossos alunos</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Conheça as histórias de sucesso de quem já transformou sua carreira com nosso curso.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial) => (
              <Testimonial
                key={testimonial.id}
                name={testimonial.name}
                role={testimonial.role}
                content={testimonial.content}
                avatar={testimonial.avatar}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <CTA
        title="Garanta sua vaga no próximo módulo"
        description="As inscrições estão abertas. Não perca esta oportunidade!"
        buttonText="Inscrever-se agora"
        buttonLink="#inscreva-se"
        highlight={true}
      />

      {/* Formulário de Contato */}
      <section id="inscreva-se" className="py-20 px-6 bg-gray-50">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="grid md:grid-cols-2">
              <div className="bg-emerald-600 p-12 text-white md:text-left text-center">
                <h2 className="text-3xl font-bold mb-6">Entre em contato</h2>
                <p className="mb-8">
                  Preencha o formulário ao lado para receber mais informações sobre o curso, valores e datas de início
                  das próximas turmas.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-emerald-500 rounded-full flex items-center justify-center mr-4">
                      <span className="text-xl">📍</span>
                    </div>
                    <span>Vitória, Espírito Santo</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-emerald-500 rounded-full flex items-center justify-center mr-4">
                      <span className="text-xl">📱</span>
                    </div>
                    <span>(27) 99999-9999</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-emerald-500 rounded-full flex items-center justify-center mr-4">
                      <span className="text-xl">✉️</span>
                    </div>
                    <span>contato@xisproteses.com.br</span>
                  </div>
                </div>
              </div>
              <div className="p-12 md:text-left text-center">
                <h3 className="text-2xl font-semibold text-gray-800 mb-6">Solicite informações</h3>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12 px-6">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="w-40 h-auto relative mb-4 bg-white p-2 rounded">
                <Image
                  src="/images/logo.png"
                  alt="Xis - Próteses Odontológicas"
                  width={160}
                  height={80}
                  className="object-contain"
                />
              </div>
              <p className="text-gray-300">
                Formando profissionais de excelência em próteses odontológicas desde 1988.
              </p>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-4">Links Rápidos</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#sobre" className="text-gray-300 hover:text-white transition-colors">
                    Sobre
                  </a>
                </li>
                <li>
                  <a href="#modulos" className="text-gray-300 hover:text-white transition-colors">
                    Módulos
                  </a>
                </li>
                <li>
                  <a href="#depoimentos" className="text-gray-300 hover:text-white transition-colors">
                    Depoimentos
                  </a>
                </li>
                <li>
                  <a href="#inscreva-se" className="text-gray-300 hover:text-white transition-colors">
                    Contato
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-4">Siga-nos</h4>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  <span className="sr-only">Facebook</span>
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      fillRule="evenodd"
                      d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  <span className="sr-only">Instagram</span>
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      fillRule="evenodd"
                      d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  <span className="sr-only">YouTube</span>
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      fillRule="evenodd"
                      d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-700 text-center text-gray-400">
            <p>© {new Date().getFullYear()} Xis - Próteses Odontológicas. Todos os direitos reservados.</p>
            {/* Aqui você pode substituir a fonte padrão por uma fonte customizada */}
            <p className="mt-2 text-sm">Desenvolvido com ❤️ em Vitória/ES</p>
          </div>
        </div>
      </footer>
    </main>
  )
}
