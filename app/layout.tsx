"use client";
import { Inter } from 'next/font/google'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { ThemeProvider } from '@/components/theme-provider'
import Head from 'next/head'
import '@/styles/globals.css'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <Head>
        <title>Android CLI</title>
        <link rel="icon" href="androidcli/app/favicon.ico" /> 
        <meta name="description" content="Android CLI – Your ultimate mobile command-line tool" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <body className={`flex flex-col min-h-screen ${inter.className}`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Navbar />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}

