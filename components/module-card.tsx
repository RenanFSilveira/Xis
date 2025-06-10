import type { FC } from "react"

interface ModuleCardProps {
  title: string
  topics: string[]
  icon: string
  duration: string
}

const ModuleCard: FC<ModuleCardProps> = ({ title, topics, icon, duration }) => {
  return (
    <div className="bg-white p-8 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
      <div className="flex items-start">
        <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
          <span className="text-2xl">{icon}</span>
        </div>
        <div className="flex-1">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">{title}</h3>

          {/* Informações do módulo */}
          <div className="bg-gray-50 p-4 rounded-lg mb-4">
            <div className="flex justify-between items-center text-sm">
              <span className="font-medium text-gray-700">Carga Horária:</span>
              <span className="text-gray-600">{duration} horas</span>
            </div>
          </div>

          <ul className="space-y-2 text-gray-600 mb-4">
            {topics.map((topic, index) => (
              <li key={index} className="flex items-start">
                <svg
                  className="w-5 h-5 text-emerald-500 mr-2 mt-0.5 flex-shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-sm">{topic}</span>
              </li>
            ))}
          </ul>

          {/* Certificado após as disciplinas */}
          <div className="flex items-center text-sm bg-emerald-50 p-3 rounded-lg">
            <svg
              className="w-4 h-4 text-emerald-500 mr-2"
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
            <span className="font-medium text-emerald-700">Certificado de conclusão específico</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ModuleCard
