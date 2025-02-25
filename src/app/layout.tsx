import { ProgressBar } from '@/components/progress-bar'
import { ThemeProvider } from '@/components/theme-provider'
import { ThemeToggle } from '@/components/theme-toggle'
import { Button } from '@/components/ui/button'
import { env } from '@/lib/env'
import type { Metadata, Viewport } from 'next'
import PlausibleProvider from 'next-plausible'
import Image from 'next/image'
import Link from 'next/link'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL(env.NEXT_PUBLIC_BASE_URL),
  title: {
    default: 'Spliit · Share Expenses with Friends & Family',
    template: '%s · Spliit',
  },
  description:
    'Spliit is a minimalist web application to share expenses with friends and family. No ads, no account, no problem.',
  openGraph: {
    title: 'Spliit · Share Expenses with Friends & Family',
    description:
      'Spliit is a minimalist web application to share expenses with friends and family. No ads, no account, no problem.',
    images: `/banner.png`,
    type: 'website',
    url: '/',
  },
  twitter: {
    card: 'summary_large_image',
    creator: '@scastiel',
    site: '@scastiel',
    images: `/banner.png`,
    title: 'Spliit · Share Expenses with Friends & Family',
    description:
      'Spliit is a minimalist web application to share expenses with friends and family. No ads, no account, no problem.',
  },
  appleWebApp: {
    capable: true,
    title: 'Spliit',
  },
  applicationName: 'Spliit',
  icons: [
    {
      url: '/android-chrome-192x192.png',
      sizes: '192x192',
      type: 'image/png',
    },
    {
      url: '/android-chrome-512x512.png',
      sizes: '512x512',
      type: 'image/png',
    },
  ],
}

export const viewport: Viewport = {
  themeColor: '#047857',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      {env.PLAUSIBLE_DOMAIN && (
        <PlausibleProvider domain={env.PLAUSIBLE_DOMAIN} trackOutboundLinks />
      )}
      <body className="pt-16 min-h-[100dvh] flex flex-col items-stretch">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <ProgressBar />
          <header className="fixed top-0 left-0 right-0 h-16 flex justify-between bg-white dark:bg-gray-950 bg-opacity-50 dark:bg-opacity-50 p-2 border-b backdrop-blur-sm">
            <Link className="flex items-center gap-2" href="/">
              <h1>
                <Image
                  src="/logo-with-text.png"
                  className="m-1 h-auto"
                  width={(35 * 522) / 180}
                  height={35}
                  alt="Spliit"
                />
              </h1>
            </Link>
            <div role="navigation" aria-label="Menu" className="flex">
              <ul className="flex items-center text-sm">
                <li>
                  <Button variant="link" asChild className="-my-3">
                    <Link href="/groups">Groups</Link>
                  </Button>
                </li>
                <li>
                  <ThemeToggle />
                </li>
              </ul>
            </div>
          </header>

          {children}

          <footer className="sm:p-8 md:p-16 sm:mt-16 sm:text-sm md:text-base md:mt-32 bg-slate-50 dark:bg-slate-800 border-t p-6 mt-8 flex flex-col space-y-2 text-xs [&_a]:underline">
            <div className="sm:text-lg font-semibold text-base flex space-x-2 items-center">
              <Link className="flex items-center gap-2" href="/">
                <Image
                  src="/logo-with-text.png"
                  className="m-1 h-auto"
                  width={(35 * 522) / 180}
                  height={35}
                  alt="Spliit"
                />
              </Link>
            </div>
            <div className="flex flex-col space-y a--no-underline-text-white">
              <span>Made in Montréal, Québec 🇨🇦</span>
              <span>
                Built by{' '}
                <a href="https://scastiel.dev" target="_blank" rel="noopener">
                  Sebastien Castiel
                </a>
              </span>
            </div>
          </footer>
        </ThemeProvider>
      </body>
    </html>
  )
}
