import Image from "next/image"
import { PhoneIcon as Whatsapp } from "lucide-react"
import ContactForm from "@/components/contact-form"
import ModuleCard from "@/components/module-card"
import Testimonial from "@/components/testimonial"
import CTA from "@/components/cta"
import FAQ from "@/components/faq"
import ImageCarousel from "@/components/image-carousel"

export default function Home() {
  // Dados dos módulos do curso atualizados
  const modules = [
    {
      id: 1,
      title: "Módulo I",
      topics: [
        "Introdução à Prótese Odontológica",
        "Oclusão",
        "Anatomia e Morfologia Dentária",
        "Materiais Odontológicos",
      ],
      icon: "🔍",
      duration: "[Inserir Carga Horária Módulo I]",
      prerequisites: "Ensino Médio completo",
    },
    {
      id: 2,
      title: "Módulo II",
      topics: ["Ortodontia I", "Prótese Total Removível I", "Prótese Fixa I", "Prótese Parcial Removível"],
      icon: "🦷",
      duration: "[Inserir Carga Horária Módulo II]",
      prerequisites: "Módulo I concluído",
    },
    {
      id: 3,
      title: "Módulo III",
      topics: ["Ortodontia II", "Prótese Total Removível II", "Prótese Fixa II", "Prótese Dental Digital I"],
      icon: "🔧",
      duration: "[Inserir Carga Horária Módulo III]",
      prerequisites: "Módulo II concluído",
    },
    {
      id: 4,
      title: "Módulo IV",
      topics: ["Prótese Fixa III", "Prótese Dental Digital II", "Função e Estética", "Administração de Laboratório"],
      icon: "💻",
      duration: "[Inserir Carga Horária Módulo IV]",
      prerequisites: "Módulo III concluído",
    },
  ]

  // Dados dos depoimentos atualizados
  const testimonials = [
    {
      id: 1,
      name: "Dr. Carlos Silva",
      role: "Dentista",
      content:
        "A qualidade dos trabalhos que recebo da Xis é excepcional. A formação técnica dos profissionais é notável e faz toda a diferença no resultado final.",
      avatar: "/placeholder.svg?height=80&width=80",
    },
    {
      id: 2,
      name: "Ana Oliveira",
      role: "Protética Dental",
      content:
        "A metodologia da Xis me deu uma base sólida para trabalhar com confiança. Hoje tenho meu próprio laboratório e atendo diversos consultórios.",
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
      <header className="bg-white py-3 px-6 shadow-sm sticky top-0 z-40">
        <div className="container mx-auto flex justify-between items-center">
          <div className="w-32 h-auto relative">
            <Image
              src="/images/logo.png"
              alt="Xis - Próteses Odontológicas"
              width={128}
              height={64}
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
            <a href="#faq" className="text-gray-700 hover:text-emerald-600 transition-colors">
              FAQ
            </a>
            <a href="#inscreva-se" className="text-gray-700 hover:text-emerald-600 transition-colors">
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
              Faça este curso e conquiste sua independência financeira
            </h1>
            <p className="text-lg text-gray-600 mb-6">
              Curso <strong>presencial</strong> profissionalizante para iniciantes, não requer experiência na área. Alta
              remuneração, rápida formação e mercado com demanda real.
            </p>

            {/* Mercado Aquecido */}
            <div className="bg-emerald-100 border-l-4 border-emerald-500 p-4 mb-6 rounded-r-lg">
              <p className="text-emerald-800 font-semibold">
                <span className="text-emerald-600">🔥 Mercado Aquecido:</span> Milhares de vagas para Técnicos em
                Prótese Dentária estão abertas neste momento em todo o Brasil. Uma profissão com alta demanda e
                excelente remuneração esperando por você!
              </p>
            </div>

            {/* Para quem é este curso */}
            <div className="bg-white border border-gray-200 p-6 rounded-lg mb-8 shadow-sm">
              <h3 className="text-xl font-bold text-gray-800 mb-3">Para quem é este curso?</h3>
              <p className="text-gray-600 mb-3">
                Ideal para você que busca uma nova carreira promissora e rentável, mesmo sem experiência prévia na área
                odontológica.
              </p>
              <p className="text-gray-800">
                <strong>Pré-requisitos:</strong> Ensino Médio completo e muita vontade de aprender uma profissão com
                alta demanda.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#inscreva-se"
                className="bg-orange-500 text-white px-8 py-3 rounded-md text-center hover:bg-orange-600 transition-colors shadow-md"
              >
                Conheça a profissão
              </a>
              <a
                href="#modulos"
                className="border-2 border-emerald-600 text-emerald-600 px-8 py-3 rounded-md text-center hover:bg-emerald-50 transition-colors"
              >
                Conheça os módulos
              </a>
            </div>
          </div>
          {/* VSL Section - Temporarily replaced with image carousel */}
          {/* 
            Future VSL implementation will go here:
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
              <video controls className="w-full h-full object-cover">
                <source src="/path-to-vsl-video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          */}
          <ImageCarousel />
        </div>
      </section>

      {/* Sobre Section */}
      <section id="sobre" className="py-20 px-6 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-4 flex items-center justify-center gap-3">
              Por que escolher a
              <div className="relative w-16 h-8">
                <Image src="/images/logo.png" alt="Xis" fill className="object-contain" />
              </div>
              ?
            </h2>
            <p className="text-gray-600 max-w-4xl mx-auto mb-8">
              Nossa metodologia exclusiva foca na <strong>prática intensiva (70% do curso)</strong>, utilizando
              equipamentos de ponta como <strong>impressoras 3D, scanners intraorais e fresadoras CAD/CAM</strong>,
              preparando você para os desafios reais do mercado.
            </p>

            {/* Certificado Destaque */}
            <div className="inline-flex items-center bg-emerald-50 border border-emerald-200 px-6 py-3 rounded-full">
              <svg
                className="w-6 h-6 text-emerald-600 mr-2"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="text-emerald-800 font-semibold">
                Receba certificados por módulo e um certificado final de{" "}
                <strong>Especialista em Próteses Odontológicas</strong> reconhecido no mercado
              </span>
            </div>
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
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Tecnologia de Ponta e Muita Prática</h3>
              <p className="text-gray-600">
                Domine as técnicas mais modernas, incluindo design e fabricação digital (CAD/CAM), com acesso a
                laboratórios equipados e aulas mão na massa desde o início.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Diferenciais Específicos */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">
            Por que a Xis é a escolha certa para você?
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="flex items-start mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <span className="text-2xl">🔄</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">Para quem busca Transição de Carreira</h3>
                  <p className="text-gray-600">
                    Oferecemos uma formação completa do zero, com forte base prática e suporte para sua inserção rápida
                    no mercado, mesmo sem experiência anterior. Transforme sua vida profissional em uma área rentável e
                    com propósito.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="flex items-start mb-4">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <span className="text-2xl">🦷</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">Para quem sonha com Odontologia</h3>
                  <p className="text-gray-600">
                    Este curso é um excelente primeiro passo! Adquira conhecimento técnico aprofundado sobre próteses,
                    ganhe experiência prática em laboratório e tenha um grande diferencial competitivo ao ingressar na
                    faculdade de Odontologia ou atuar em conjunto com dentistas.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Intermediário */}
      <CTA
        title="Diga Xis e comece uma nova carreira"
        description="Inscreva-se agora e comece sua jornada na área de Prótese Odontológica."
        buttonText="Quero me inscrever"
        buttonLink="#inscreva-se"
      />

      {/* Módulos Section */}
      <section id="modulos" className="py-20 px-6 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Estrutura do Curso</h2>
            <p className="text-gray-600 max-w-3xl mx-auto mb-8">
              Nosso curso <strong>presencial</strong> é dividido em módulos independentes, permitindo que você avance em
              seu próprio ritmo e comece a atuar profissionalmente já após o primeiro módulo.
            </p>

            {/* Destaque Prática */}
            <div className="bg-emerald-100 border border-emerald-200 p-6 rounded-lg max-w-2xl mx-auto">
              <h3 className="text-xl font-bold text-emerald-800 mb-2">🔬 Foco na Prática</h3>
              <p className="text-emerald-700">
                Todos os módulos possuem extensa carga horária prática em laboratório, utilizando os equipamentos e
                materiais mais modernos do mercado.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {modules.map((module) => (
              <ModuleCard
                key={module.id}
                title={module.title}
                topics={module.topics}
                icon={module.icon}
                duration={module.duration}
                prerequisites={module.prerequisites}
              />
            ))}
          </div>

          {/* Métodos de Avaliação */}
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Como serei avaliado?</h3>
            <p className="text-gray-600">
              Nossa avaliação é contínua e prática. Você será avaliado através de trabalhos práticos individuais e em
              grupo realizados em laboratório, provas teóricas pontuais e um projeto final integrador ao concluir todos
              os módulos, garantindo que você realmente domine as competências necessárias.
            </p>
          </div>
        </div>
      </section>

      {/* Depoimentos Section */}
      <section id="depoimentos" className="py-20 px-6 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">O que dizem os profissionais da área</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">Conheça a opinião de quem já está no mercado!</p>
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

      {/* FAQ Section */}
      <FAQ />

      {/* CTA Final */}
      <section className="py-16 px-6 bg-emerald-600 text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Garanta sua vaga na próxima turma!</h2>
          <div className="bg-emerald-500 p-6 rounded-lg max-w-md mx-auto mb-8">
            <p className="text-xl font-semibold mb-2">
              <strong>Início:</strong> 04/08/2025
            </p>
            <p className="text-xl font-semibold">
              <strong>Investimento:</strong> 24x R$800
            </p>
          </div>
          <p className="text-emerald-50 max-w-2xl mx-auto mb-8">
            As inscrições estão abertas por tempo limitado. Não perca esta oportunidade!
          </p>
          <a
            href="#inscreva-se"
            className="inline-block px-8 py-3 rounded-md shadow-md bg-orange-500 text-white hover:bg-orange-600 transition-colors"
          >
            Inscrever-se agora
          </a>
        </div>
      </section>

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
                <div className="space-y-4 flex flex-col items-center md:items-start">
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-emerald-500 rounded-full flex items-center justify-center mr-4">
                      <span className="text-xl">📍</span>
                    </div>
                    <span>Av. Nossa Senhora da Penha - Vitória/ES</span>
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
                  <a href="#faq" className="text-gray-300 hover:text-white transition-colors">
                    FAQ
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
            <p className="mt-2 text-sm">Desenvolvido com ❤️ em Vitória/ES</p>
          </div>
        </div>
      </footer>
    </main>
  )
}
