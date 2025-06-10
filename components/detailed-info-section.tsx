"use client"

import { useState } from "react"
import { X } from "lucide-react"

export default function DetailedInfoSection() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const openModal = () => setIsModalOpen(true)
  const closeModal = () => setIsModalOpen(false)

  return (
    <>
      {/* Seção Principal */}
      <section className="py-20 px-6 bg-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Ainda tem alguma dúvida?</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Aqui nós explicamos absolutamente tudo sobre a profissão, o curso e a Xis.
          </p>
          <button
            onClick={openModal}
            className="inline-block bg-emerald-600 text-white px-8 py-3 rounded-md hover:bg-emerald-700 transition-colors font-semibold"
          >
            Leia tudo sobre a profissão e o curso
          </button>
        </div>
      </section>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg max-w-4xl max-h-[90vh] overflow-y-auto relative">
            {/* Botão de fechar */}
            <button
              onClick={closeModal}
              className="fixed top-4 right-4 text-gray-500 hover:text-gray-700 z-50 bg-white rounded-full p-2 shadow-lg"
              aria-label="Fechar modal"
            >
              <X size={24} />
            </button>

            {/* Conteúdo do Modal */}
            <div className="p-8">
              <div className="prose prose-lg max-w-none">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">A PROFISSÃO</h2>

                <h3 className="text-xl font-semibold text-emerald-600 mb-4">
                  Liberdade e flexibilidade na prótese dentária: Uma carreira feita do seu Jeito!
                </h3>

                <p className="text-gray-700 mb-4">
                  Ser protético é ter a liberdade de moldar não apenas sorrisos, mas também o seu próprio futuro! Com a
                  formação completa que a Xis oferece, você pode:
                </p>

                <ul className="list-none space-y-2 mb-6">
                  <li className="flex items-start">
                    <span className="text-emerald-600 mr-2">✅</span>
                    <span>Escolher seu ritmo.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-emerald-600 mr-2">✅</span>
                    <span>Diversificar sua atuação.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-emerald-600 mr-2">✅</span>
                    <span>
                      Manter o equilíbrio entre vida pessoal e profissional: Muitos protéticos têm flexibilidade de
                      horários e a chance de trabalhar remotamente com projetos digitais e em laboratório próprio.
                    </span>
                  </li>
                </ul>

                <p className="text-gray-700 mb-4">
                  A prótese dentária é uma profissão essencial na área da saúde. O profissional trabalha em conjunto com
                  o dentista e é responsável por criar, reparar e personalizar próteses que devolvem não apenas a função
                  mastigatória e estética, mas também a autoestima e a qualidade de vida aos pacientes.
                </p>

                <p className="text-gray-700 mb-4">
                  Diferente do que muitas pessoas pensam, as próteses dentárias não são confeccionadas por dentistas e
                  sim, por protéticos. O trabalho é desenvolvido em laboratórios especializados, com equipamentos,
                  instrumentais e materiais próprios para os respectivos trabalhos. Nesse espaço o protético, a partir
                  de uma demanda recebida de um dentista, utiliza técnicas artesanais e tecnologia de ponta (como
                  CAD/CAM e impressão 3D) para confeccionar as próteses - coroas, pontes, dentaduras - com precisão e
                  estética natural.
                </p>

                <p className="text-gray-700 mb-4">
                  A profissão é ideal para quem busca uma carreira promissora e rentável, na área odontológica, mesmo
                  sem experiência prévia e sem precisar cursar uma faculdade. Por se tratar de uma profissão
                  desconhecida e consequentemente com poucos profissionais formados por ano, o mercado está em constante
                  falta de profissionais e a maioria dos alunos dos cursos de prótese, já inicia a sua carreira antes de
                  se formar.
                </p>

                <p className="text-gray-700 mb-4">
                  Existem várias possibilidades para o profissional se colocar no mercado, além do trabalho em
                  laboratórios de prótese o profissional pode atuar no comércio e na indústria de materiais,
                  instrumentais e equipamentos odontológicos bem como como professor. De toda forma, quer optando por
                  uma ou outra colocação no mercado, não existe dúvidas que o profissional não terá dificuldade de uma
                  colocação ainda durante o curso, não somente pelo pouco conhecimento e pouca divulgação da profissão,
                  como também devido à expansão real da demanda pelo envelhecimento da população, maior conscientização
                  sobre saúde bucal e os avanços da estética, o que faz com que o mercado em da prótese dentária esteja
                  em constante crescimento.
                </p>

                <p className="text-gray-700 mb-6">
                  Atualmente, a prótese dentária já incorpora as tecnologias digitais, ou seja, tanto o protético recebe
                  do dentista as demandas captadas digitalmente, quanto elabora os projetos anatômicos estéticos usando
                  software CAD odontológico, executando arranjo e texturização com processo digital, trabalhos esses,
                  que serão, de acordo com o objetivo, impressos ou fresados. Essa nova fase da odontologia precisa
                  urgentemente ser introduzida nos currículos dos cursos de prótese dentária, visto que em sua grande
                  maioria, os dentistas já a utilizam e o protético que não tiver esses conhecimentos, vai perder a
                  possibilidade de trabalhar com esses dentistas que já estão na odontologia digital. Além disso, o
                  protético que trabalhar com as tecnologias digitais, poderá oferecer essa facilidade ao dentista que
                  não incorporou essas técnicas, tendo dessa forma, esse conhecimento como um diferencial para a
                  captação de serviços dos dentistas.
                </p>

                <h3 className="text-xl font-semibold text-emerald-600 mb-4">Por que se Tornar um Protético?</h3>

                <ul className="list-none space-y-2 mb-6">
                  <li className="flex items-start">
                    <span className="text-emerald-600 mr-2">✅</span>
                    <span>
                      <strong>Mercado em alta:</strong> Com a demanda por tratamentos dentários crescendo, a profissão
                      oferece estabilidade e oportunidades em clínicas, laboratórios, industrias de materiais,
                      instrumentais e equipamentos, lojas de produtos e equipamentos, escolas.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-emerald-600 mr-2">✅</span>
                    <span>
                      <strong>Criatividade + Ciência:</strong> Combina habilidade manual, conhecimento técnico e em
                      materiais (como gessos, revestimentos, porcelanas e resinas) e atenção aos detalhes para
                      resultados perfeitos.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-emerald-600 mr-2">✅</span>
                    <span>
                      <strong>Impacto social:</strong> Sua arte restaura sorrisos e transforma histórias!
                    </span>
                  </li>
                </ul>

                <hr className="my-8" />

                <h2 className="text-2xl font-bold text-gray-800 mb-6">O CURSO</h2>

                <h3 className="text-xl font-semibold text-emerald-600 mb-4">O Futuro da Prótese Dentária é Digital!</h3>

                <p className="text-gray-700 mb-4">
                  Invista no seu futuro com um curso que alia teoria e prática, preparando você para ser um profissional
                  reconhecido no universo da odontologia! Faça prótese na Xis!
                </p>

                <p className="text-gray-700 mb-4">
                  Aqui na Xis, o aluno será capacitado a confeccionar diferentes tipos de próteses dentárias, bem como
                  aparelhos ortodônticos e ortopédicos usando técnicas manuais e digitais; vai utilizar software CAD
                  para desenvolver anatomia digital, usando ferramentas e assistentes de desenho; aprender o
                  planejamento e confecção de estruturas para próteses sobre implantes (unitárias, múltiplas e
                  protocolos), e outros dispositivos para a reabilitação de pacientes visando soluções adequadas para as
                  mais diversas demandas.
                </p>

                <p className="text-gray-700 mb-4">
                  Nossa metodologia exclusiva combina teoria e prática intensiva, preparando o profissional para os
                  desafios reais do mercado. Com um curso completo onde todas as possíveis demandas são ensinadas aos
                  alunos, o profissional egresso encontrará plena condição de atuar em qualquer área da prótese
                  odontológica sem dificuldades.
                </p>

                <h3 className="text-xl font-semibold text-emerald-600 mb-4">
                  Xis Curso de Prótese Dentária: Tradição e Inovação na Odontologia Digital
                </h3>

                <p className="text-gray-700 mb-4">
                  Você quer dominar a arte de criar sorrisos perfeitos com as ferramentas mais avançadas do mercado?
                  Estruturado por uma equipe de profissionais que conhecem e atuam no mercado, nosso curso une o melhor
                  das técnicas tradicionais conjugado com às tecnologias digitais que estão revolucionando a
                  odontologia!
                </p>

                <h4 className="text-lg font-semibold text-gray-800 mb-3">Por Que Nosso Curso é Diferente?</h4>

                <ul className="list-none space-y-3 mb-6">
                  <li className="flex items-start">
                    <span className="text-emerald-600 mr-2">🔹</span>
                    <span>
                      <strong>Oferece Tecnologia de Ponta:</strong> Aprenda a utilizar CAD/CAM (desenho e fabricação
                      assistidos por computador), impressão 3D e scanners para criar próteses precisas e personalizadas;
                      projetar e fabricar próteses com agilidade e máxima precisão
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-emerald-600 mr-2">🔹</span>
                    <span>
                      <strong>Ensina com Equilíbrio entre Teoria e Prática:</strong> Domine desde as técnicas
                      tradicionais até os softwares da odontologia digital, técnicas que reduzem retrabalhos e aumentam
                      a satisfação dos pacientes.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-emerald-600 mr-2">🔹</span>
                    <span>
                      <strong>Qualifica o aluno para a vanguarda do Mercado:</strong> Construa uma carreira sólida a
                      partir de uma formação pautada em excelência e foco na melhor tradição e nas mais atuais técnicas
                      de inovação dentro do mercado de prótese odontológica.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-emerald-600 mr-2">🔹</span>
                    <span>
                      <strong>Oferece muito mais, por menos:</strong> Aprenda a confeccionar todos os tipos de prótese
                      demandada pelo mercado, com todas as técnicas disponíveis, sem gastar a mais com cursos
                      posteriores. (custo médio de um curso de 16h, R$2500,00).
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-emerald-600 mr-2">🔹</span>
                    <span>
                      <strong>Oferece opções de turmas nos três turnos:</strong> matutino, vespertino e noturno
                    </span>
                  </li>
                </ul>

                <div className="bg-gray-50 p-4 rounded-lg mb-6">
                  <h5 className="font-semibold mb-3">Horários das Turmas:</h5>
                  <div className="grid md:grid-cols-3 gap-4 text-sm">
                    <div>
                      <strong>Matutino</strong>
                      <br />
                      aula 1 e 2: 07:50 às 09:30
                      <br />
                      intervalo: 09:30 às 9:50
                      <br />
                      aula 3 e 4: 09:50 às 11:30
                    </div>
                    <div>
                      <strong>Vespertino</strong>
                      <br />
                      aula 1 e 2: 13:20 às 15:00
                      <br />
                      intervalo: 15:00 às 15:20
                      <br />
                      aula 3 e 4: 15:20 às 17:00
                    </div>
                    <div>
                      <strong>Noturno</strong>
                      <br />
                      aula 1 e 2: 18:40 à 20:20
                      <br />
                      intervalo: 20:20 às 20:40
                      <br />
                      aula 3 e 4: 20:40 às 22:20
                    </div>
                  </div>
                </div>

                <hr className="my-8" />

                <h2 className="text-2xl font-bold text-gray-800 mb-6">A ESCOLA</h2>

                <h3 className="text-xl font-semibold text-emerald-600 mb-4">Seja um protético do futuro!</h3>

                <p className="text-gray-700 mb-4">
                  Na Xis você aprende unir trabalho manual e inovação tecnológica para criar sorrisos perfeitos!
                </p>

                <p className="text-gray-700 mb-4">
                  🔹<strong>Seu tempo aqui, vale ouro:</strong> A carga horária da Xis é superior porque o curso é
                  completo. Você se destaca de forma segura e competitiva garantindo seu lugar no mercado! Valorize o
                  seu dinheiro, escolha a melhor formação!
                </p>

                <h3 className="text-xl font-semibold text-emerald-600 mb-4">
                  Xis Curso de Prótese Dentária: Formando protéticos para o presente e o futuro!
                </h3>

                <p className="text-gray-700 mb-4">
                  Vitória agora, tem um curso de prótese dentária à altura do mercado!
                </p>

                <p className="text-gray-700 mb-4">
                  A Xis chega para revolucionar o ensino da prótese dentária no Espírito Santo, oferecendo uma formação
                  completa, atualizada e alinhada com as reais demandas do mercado. Enquanto outras escolas ainda
                  trabalham com grades curriculares defasadas, nós preparamos você para dominar as técnicas tradicionais
                  e as inovações digitais que estão moldando o futuro da profissão.
                </p>

                <h4 className="text-lg font-semibold text-gray-800 mb-3">Porque a Xis é a melhor escola?</h4>

                <ul className="list-none space-y-2 mb-6">
                  <li className="flex items-start">
                    <span className="text-emerald-600 mr-2">✅</span>
                    <span>
                      <strong>Metodologia Descomplicada:</strong> Ideal para iniciantes e quem quer se atualizar.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-emerald-600 mr-2">✅</span>
                    <span>
                      <strong>Laboratórios Equipados:</strong> Tudo que você precisa para praticar como um profissional.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-emerald-600 mr-2">✅</span>
                    <span>
                      <strong>Professores de Excelência:</strong> Aprenda com quem vive a prótese dentária no dia a dia.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-emerald-600 mr-2">✅</span>
                    <span>
                      <strong>Estrutura Curricular Atualizada</strong>
                    </span>
                  </li>
                </ul>

                <h4 className="text-lg font-semibold text-gray-800 mb-3">O Que Você Vai Aprender na Xis?</h4>

                <p className="text-gray-700 mb-4">
                  Em um mercado carente de profissionais de qualificação atualizada, a Xis surge para revolucionar o
                  ensino da prótese dentária no Espírito Santo. Nossa estrutura curricular foi pensada para descomplicar
                  o aprendizado, unindo o essencial das técnicas tradicionais ao que há de mais moderno em tecnologia
                  digital – tudo a partir do ponto zero, com uma abordagem prática e direto ao ponto.
                </p>

                <ul className="list-disc list-inside space-y-2 mb-6 text-gray-700">
                  <li>
                    Uso de softwares profissionais para desenvolver anatomia digital com ferramentas e assistentes de
                    desenho: Aprenda a trabalhar com bibliotecas digitais de dentes, reproduzindo características
                    naturais com precisão.
                  </li>
                  <li>
                    Impressão 3D e Prototipagem: Da teoria à prática: crie modelos, próteses e estruturas com as
                    tecnologias mais avançadas.
                  </li>
                  <li>
                    Caracterização Estética e Texturização: Dê vida aos projetos com técnicas de mapeamento de anatomia
                    e aplicação de texturas realistas.
                  </li>
                  <li>
                    Oclusão Digital e Articulador Virtual: Entenda curva e plano oclusal; guias de função e como
                    trabalhar com articuladores virtuais para resultados perfeitos.
                  </li>
                  <li>
                    Protocolos Digitais Completo: Desenvolva projetos de arranjo dental 3D e estruturas personalizadas
                    prontas para produção.
                  </li>
                  <li>
                    Coroas e pontes provisórias e definitivas: Em metalocerâmica e outros materiais além de sobre
                    implante
                  </li>
                  <li>Prótese total removível (PT): Moldeira individual, montagem, acabamento, caracterização.</li>
                  <li>
                    Prótese parcial removível (PPR): Estudo, planejamento e confecção da estrutura metálica e parte
                    acrílica.
                  </li>
                </ul>

                <h3 className="text-xl font-semibold text-emerald-600 mb-4">Vitória Precisa da Xis – E Você Também!</h3>

                <p className="text-gray-700 mb-4">
                  Aqui, formamos protéticos prontos para liderar. Seja para trabalhar em industrias de materiais,
                  instrumentais e/ou equipamentos odontológicos; lojas de produtos odontológicos; laboratórios; clínicas
                  ou montar seu próprio negócio, a Xis é o ponto de partida para uma carreira de sucesso.
                </p>

                <p className="text-gray-700 mb-4">
                  Garanta sua vaga e seja um dos primeiros a transformar a prótese dentária no ES!
                </p>

                <p className="text-gray-700 mb-4">
                  Vitória merece um curso à altura do mercado e a Xis chegou para ocupar esse espaço!
                </p>

                <div className="text-center mt-8">
                  <p className="text-emerald-600 font-semibold">Souxis.com.br</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
