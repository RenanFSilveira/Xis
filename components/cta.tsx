import type { FC } from "react"

interface CTAProps {
  title: string
  description: string
  buttonText: string
  buttonLink: string
  highlight?: boolean
}

const CTA: FC<CTAProps> = ({ title, description, buttonText, buttonLink, highlight = false }) => {
  return (
    <section className={`py-16 px-6 ${highlight ? "bg-emerald-600 text-white" : "bg-emerald-50 text-gray-800"}`}>
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">{title}</h2>
        <p className={`max-w-2xl mx-auto mb-8 ${highlight ? "text-emerald-50" : "text-gray-600"}`}>{description}</p>
        <a
          href={buttonLink}
          className={`inline-block px-8 py-3 rounded-md shadow-md ${
            highlight ? "bg-orange-500 text-white hover:bg-orange-600" : "bg-orange-500 text-white hover:bg-orange-600"
          } transition-colors`}
        >
          {buttonText}
        </a>
      </div>
    </section>
  )
}

export default CTA
