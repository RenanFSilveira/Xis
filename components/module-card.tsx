import type { FC } from "react"

interface ModuleCardProps {
  title: string
  description: string
  icon: string
}

const ModuleCard: FC<ModuleCardProps> = ({ title, description, icon }) => {
  return (
    <div className="bg-white p-8 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
      <div className="flex items-start">
        <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
          <span className="text-2xl">{icon}</span>
        </div>
        <div>
          <h3 className="text-xl font-semibold text-gray-800 mb-3">{title}</h3>
          <p className="text-gray-600 mb-4">{description}</p>
          <ul className="space-y-2 text-gray-600">
            <li className="flex items-center">
              <svg
                className="w-5 h-5 text-emerald-500 mr-2"
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
              Aulas teóricas e práticas
            </li>
            <li className="flex items-center">
              <svg
                className="w-5 h-5 text-emerald-500 mr-2"
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
              Material didático exclusivo
            </li>
            <li className="flex items-center">
              <svg
                className="w-5 h-5 text-emerald-500 mr-2"
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
              Certificado reconhecido
            </li>
          </ul>
          <a
            href="#inscreva-se"
            className="inline-block mt-6 text-emerald-600 font-medium hover:text-emerald-700 hover:underline"
          >
            Saiba mais →
          </a>
        </div>
      </div>
    </div>
  )
}

export default ModuleCard
