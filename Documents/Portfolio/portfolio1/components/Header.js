'use client';

import Link from 'next/link'

const LINKEDIN = 'https://www.linkedin.com/in/kapildaksh-portfolio/'
const GITHUB = 'https://github.com/gitkapil'

export default function Header() {
  return (
    <header className="flex items-center justify-between py-4">
      <div className="text-xl font-bold">Kapil</div>

      <nav className="flex items-center gap-6 text-slate-700">
        <div className="space-x-4 hidden md:inline">
          <Link href="/">Home</Link>
          <Link href="/projects">Projects</Link>
          <a href="#contact">Contact</a>
        </div>

        <div className="flex items-center gap-3">
          <a className="text-sm text-slate-600 hover:text-slate-900" href={LINKEDIN} target="_blank" rel="noreferrer">LinkedIn</a>
          <a className="text-sm text-slate-600 hover:text-slate-900" href={GITHUB} target="_blank" rel="noreferrer">GitHub</a>
          <a className="text-sm text-slate-600 hover:text-slate-900" href="/Kapil-Resume.pdf" download>Resume</a>
        </div>
      </nav>
    </header>
  )
}
