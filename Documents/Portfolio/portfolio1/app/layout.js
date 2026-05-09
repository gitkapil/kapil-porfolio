import './globals.css'

export const metadata = {
  title: 'Kapil - Test Automation Engineer',
  description: 'Automation Engineer | AI-driven test automation | HK-based',
}

export default function RootLayout({ children }) {
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
