import './globals.css'
import { ReactNode } from 'react'

export const metadata = {
  title: 'Kapil - Test Automation Engineer',
  description: 'Automation Engineer | AI-driven test automation | HK-based',
  openGraph: {
    title: 'Kapil - Test Automation Engineer',
    description: 'Automation Engineer | AI-driven test automation | HK-based',
    url: 'https://example.com',
  }
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <main className="min-h-screen bg-slate-50 text-slate-900">
          {children}
        </main>
      </body>
    </html>
  )
}
