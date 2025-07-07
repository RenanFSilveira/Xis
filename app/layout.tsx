import type React from "react"
import type { Metadata } from "next"
import Script from "next/script"
import "./globals.css"

export const metadata: Metadata = {
  title: "Xis Escola de Prótese",
  description:
    `Conheça esta profissão que quase ninguém conhece! 

Diferente do que muitas pessoas pensam, as próteses dentárias não são confeccionadas por dentistas e sim, por protéticos.

A prótese dentária é uma profissão essencial na área da saúde. O profissional trabalha em conjunto com o dentista e é responsável por criar, reparar e personalizar próteses.

A profissão é ideal para quem busca uma carreira promissora e rentável, mesmo sem experiência prévia e sem precisar cursar uma faculdade.
`,
  generator: 'v0.dev',
  icons: {
    icon: '/images/logo.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <head>
        {/* Google Tag Manager */}
        <Script id="gtm-head" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-NXQWJBFN');
          `}
        </Script>
        {/* End Google Tag Manager */}
        {/* 
          Se quiser usar Google Fonts, adicione aqui:
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
          <link href="https://fonts.googleapis.com/css2?family=SuaFonte:wght@400;500;700&display=swap" rel="stylesheet" />
        */}
      </head>
      <body className="antialiased">
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-NXQWJBFN"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        {/* End Google Tag Manager (noscript) */}
        {children}
      </body>
    </html>
  )
}
