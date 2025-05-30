import type React from "react"
import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "Xis - Curso Profissionalizante em Próteses Odontológicas",
  description:
    "Curso profissionalizante em próteses odontológicas com certificação e metodologia exclusiva desenvolvida por Márcia Sales, especialista com mais de 35 anos de experiência.",
  keywords: "próteses odontológicas, curso profissionalizante, Vitória, ES, Márcia Sales, CAD/CAM, prótese dentária",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      {/* Aqui você pode substituir a fonte padrão por uma fonte customizada */}
      {/* 
        Para usar uma fonte customizada, você pode:
        1. Adicionar um link para uma fonte do Google Fonts:
        <head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
          <link href="https://fonts.googleapis.com/css2?family=SuaFonte:wght@400;500;700&display=swap" rel="stylesheet" />
        </head>
        
        2. Ou usar uma fonte local com @font-face no globals.css
      */}
      <body className="antialiased">{children}</body>
    </html>
  )
}
