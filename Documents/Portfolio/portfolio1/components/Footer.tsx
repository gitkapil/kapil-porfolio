const LINKEDIN = 'https://www.linkedin.com/in/kapildaksh-portfolio/'
const GITHUB = 'https://github.com/gitkapil'

export default function Footer() {
  return (
    <footer className="mt-12 py-6 border-t text-sm text-slate-600">
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div>© {new Date().getFullYear()} Kapil — Test Automation Engineer (Hong Kong)</div>
        <div className="flex gap-4">
          <a href={LINKEDIN} target="_blank" rel="noreferrer" className="hover:underline">LinkedIn</a>
          <a href={GITHUB} target="_blank" rel="noreferrer" className="hover:underline">GitHub</a>
        </div>
      </div>
    </footer>
  )
}
