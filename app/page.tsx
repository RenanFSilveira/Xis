import Image from "next/image"
import ContactForm from "@/components/contact-form"
import ModuleCard from "@/components/module-card"
import FAQ from "@/components/faq"
// import ProfessionCarousel from "@/components/profession-carousel"
import DetailedInfoSection from "@/components/detailed-info-section"
import FullInfoSection from "@/components/full-info-section"

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
      duration: "320",
    },
    {
      id: 2,
      title: "Módulo II",
      topics: ["Ortodontia I", "Prótese Total Removível I", "Prótese Fixa I", "Prótese Parcial Removível"],
      icon: "🦷",
      duration: "320",
    },
    {
      id: 3,
      title: "Módulo III",
      topics: ["Ortodontia II", "Prótese Total Removível II", "Prótese Fixa II", "Prótese Dental Digital I"],
      icon: "⚙️",
      duration: "320",
    },
    {
      id: 4,
      title: "Módulo IV",
      topics: ["Prótese Fixa III", "Prótese Dental Digital II", "Função e Estética", "Administração de Laboratório"],
      icon: "💻",
      duration: "320",
    },
  ]

  return (
    <main className="min-h-screen bg-white">
      {/* Botão flutuante de WhatsApp */}
      <a
        href="https://wa.me/552731002560"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-emerald-500 text-white p-4 rounded-full shadow-lg z-50 hover:bg-emerald-600 transition-all"
        aria-label="Contato via WhatsApp"
      >
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
        </svg>
      </a>

      {/* Header */}
      <header className="bg-emerald-500 py-[4px] px-6 shadow-sm z-40">
        <div className="container mx-auto flex justify-between items-center">
          <div className="w-36 h-auto relative">
            <Image
              src="/images/logoCompleta.png"
              alt="Xis - Próteses Odontológicas"
              width={144}
              height={48}
              priority
              className="object-contain"
            />
          </div>
          <nav className="hidden md:flex space-x-6">
            <a
              href="#full-info-section"
              className="text-white hover:text-white transition-colors bg-orange-500 px-3 py-1 rounded-md hover:bg-orange-600"
            >
              Leia tudo sobre a profissão e o curso
            </a>
            <a
              href="#faq"
              className="text-white hover:text-white transition-colors bg-orange-500 px-3 py-1 rounded-md hover:bg-orange-600"
            >
              FAQ
            </a>
            <a
              href="#inscreva-se"
              className="text-white hover:text-white transition-colors bg-orange-500 px-3 py-1 rounded-md hover:bg-orange-600"
            >
              Contato
            </a>
          </nav>
          <div className="flex">
            {/* Botão para desktop */}
            <a
              href="#inscreva-se"
              className="hidden md:block bg-orange-500 text-white px-4 py-1 rounded-md hover:bg-orange-600 transition-colors shadow-md"
            >
              Inscreva-se
            </a>

            {/* Botão para mobile */}
            <a
              href="#full-info-section"
              className="block md:hidden bg-orange-500 text-white px-3 py-1 rounded-md hover:bg-orange-600 transition-colors shadow-md text-sm"
            >
              Leia sobre o curso
            </a>
          </div>
            </div>
          </header>
      {/* Hero Section - Reestruturada */}
      <section className="bg-emerald-500 py-20 px-6">
        <div className="container mx-auto">
          {/* Banner e Vídeo lado a lado */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Banner à esquerda */}
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/images/hero-banner.jpg"
                alt="Banner do Curso de Prótese Dentária"
                fill
                className="object-contain"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            </div>

            {/* Vídeo à direita */}
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl bg-gray-100">
              <video controls className="w-full h-full object-cover" poster="/images/tumb.png">
                <source src="/videos/institucional.mp4" type="video/mp4" />
                Seu navegador não suporta o elemento de vídeo.
              </video>
            </div>
          </div>

          {/* CTA único centralizado */}
          <div className="text-center">
            <a
              href="#inscreva-se"
              className="inline-block bg-orange-500 text-white px-12 py-4 rounded-md text-xl font-semibold hover:bg-orange-600 transition-colors shadow-lg"
            >
              Quero me inscrever agora
            </a>
          </div>
        </div>
      </section>

      {/* Sobre Section - Simplificada */}
      <section id="sobre" className="py-20 px-6 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-8 flex items-center justify-center gap-3">
              Por que escolher a
              <div className="relative w-24 h-12">
                <Image src="/images/logo.png" alt="Xis" fill className="object-contain" />
              </div>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-emerald-50 p-8 rounded-lg text-center">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎓</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Formação Modular</h3>
              <p className="text-gray-600">Cada módulo tem duração de 1 semestre letivo.</p>
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
                    faculdade de Odontologia.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Conheça a Profissão - Comentado conforme solicitado */}
      {/* <ProfessionCarousel /> */}

      {/* Módulos Section */}
      <section id="modulos" className="py-20 px-6 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Estrutura do Curso</h2>
            <p className="text-gray-600 max-w-3xl mx-auto mb-8">
              Nosso curso presencial é dividido em módulos, permitindo que você avance em seu próprio ritmo e comece a
              atuar profissionalmente já após o primeiro módulo.
            </p>

            {/* Destaque Prática */}
            <div className="bg-emerald-100 border border-emerald-200 p-6 rounded-lg max-w-2xl mx-auto">
              <h3 className="text-xl font-bold text-emerald-800 mb-2">🔬 Foco na Prática</h3>
              <p className="text-emerald-700">
                Todos os módulos possuem extensa carga horária prática em laboratórios equipados com tudo o que você
                precisa para praticar como um profissional.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {modules.map((module) => (
              <ModuleCard
                key={module.id}
                title={module.title}
                topics={module.topics}
                icon={module.icon}
                duration={module.duration}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Seção com o texto completo sobre o curso e a profissão */}
      <FullInfoSection />

      {/* FAQ Section */}
      <FAQ />

      {/* CTA Final */}
      <section className="py-16 px-6 bg-emerald-500 text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Garanta sua vaga na próxima turma!</h2>
          <div className="bg-emerald-600 p-6 rounded-lg max-w-md mx-auto mb-8">
            <p className="text-xl font-semibold mb-2">
              <strong>Início:</strong> 04/08/2025
            </p>
          </div>
          <p className="text-emerald-50 max-w-2xl mx-auto mb-8">
            Vagas limitadas para a turma de Agosto. Não perca essa oportunidade!
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
              <div className="bg-emerald-500 p-12 text-white md:text-left text-center">
                <h2 className="text-3xl font-bold mb-6">Entre em contato</h2>
                <p className="mb-8">
                  Preencha o formulário ao lado para receber mais informações sobre o curso, valores e datas de início
                  das próximas turmas.
                </p>
                <div className="space-y-4 flex flex-col items-center md:items-start">
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-emerald-600 rounded-full flex items-center justify-center mr-4">
                      <span className="text-xl">📍</span>
                    </div>
                    <span>Rua José Farias, 160 - Santa Luíza</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-emerald-600 rounded-full flex items-center justify-center mr-4">
                      <svg
                        className="w-6 h-6"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
                      </svg>
                    </div>
                    <span>(27) 3100-2560</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-emerald-600 rounded-full flex items-center justify-center mr-4">
                      <span className="text-xl">✉️</span>
                    </div>
                    <span>faleconosco@souxis.com.br</span>
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

      {/* Seção de Informações Detalhadas */}
      <DetailedInfoSection />

      {/* Footer */}
      <footer className="bg-emerald-500 text-white py-12 px-6">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="w-48 h-auto relative mb-4">
                <Image
                  src="/images/logoCompleta.png"
                  alt="Xis - Próteses Odontológicas"
                  width={192}
                  height={80}
                  className="object-contain"
                />
              </div>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-4">Links Rápidos</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#detailed-info" className="text-white hover:text-orange-100 transition-colors">
                    O curso
                  </a>
                </li>
                <li>
                  <a href="#detailed-info" className="text-white hover:text-orange-100 transition-colors">
                    A profissão
                  </a>
                </li>
                <li>
                  <a href="#detailed-info" className="text-white hover:text-orange-100 transition-colors">
                    A escola
                  </a>
                </li>
                <li>
                  <a href="#faq" className="text-white hover:text-orange-100 transition-colors">
                    FAQ
                  </a>
                </li>
                <li>
                  <a href="#inscreva-se" className="text-white hover:text-orange-100 transition-colors">
                    Contato
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-4">Siga-nos</h4>
              <div className="flex space-x-4">
                <a href="#" className="text-white hover:text-orange-100 transition-colors">
                  <span className="sr-only">Instagram</span>
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      fillRule="evenodd"
                      d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
                <a href="#" className="text-white hover:text-orange-100 transition-colors">
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
          <div className="mt-12 pt-8 border-t border-emerald-400 text-center text-emerald-50">
            <p>© {new Date().getFullYear()} Xis - Próteses Odontológicas. Todos os direitos reservados.</p>
            <p className="mt-2 text-sm">Desenvolvido com ❤️ em Vitória/ES</p>
          </div>
        </div>
      </footer>
    </main>
  )
}
