import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import '../globals.css'
import Script from 'next/script'

export const metadata: Metadata = {
    title: 'Formação DEV Express',
    description: 'Aprenda a programar do absoluto zero e se torne um desenvolvedor fullstack',
    openGraph: {
        type: 'website',
        locale: 'pt_BR',
        url: 'https://express.formacao.dev',
        siteName: 'Formação DEV Express',
        title: 'Formação DEV Express',
        description: 'Aprenda a programar do absoluto zero e se torne um desenvolvedor fullstack',
        images: [
            {
                url: 'https://express.formacao.dev/og-image.jpg',
                alt: 'Formação DEV Express',
            },
        ],
    },
}

const font = Montserrat({
    subsets: ['latin'],
})

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="pt-BR">
            <head>
                <Script
                    strategy="beforeInteractive"
                    id="gtm-script"
                    dangerouslySetInnerHTML={{
                        __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                        })(window,document,'script','dataLayer','GTM-PNBLNRD');`,
                    }}
                />
            </head>
            <body className={`${font.className} antialiased dark`}>
                {children}
                <noscript>
                    <iframe
                        src="https://www.googletagmanager.com/ns.html?id=GTM-PNBLNRD"
                        height="0"
                        width="0"
                        style={{ display: 'none', visibility: 'hidden' }}
                    ></iframe>
                </noscript>
            </body>
        </html>
    )
}
