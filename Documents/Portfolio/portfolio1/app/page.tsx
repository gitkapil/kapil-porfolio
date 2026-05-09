"use client";

import Link from 'next/link'
import Header from '../components/Header'
import Footer from '../components/Footer'
import ThreeScene from '../components/ThreeScene'

export default function Home() {
  return (
    <div className="container mx-auto px-6 py-12">
      <Header />

      <section className="grid md:grid-cols-2 gap-8 items-center mt-12">
        <div>
          <h1 className="text-4xl font-bold">Kapil — Automation Engineer</h1>
          <p className="mt-4 text-lg text-slate-700">
            HK-based test automation lead. I build scalable automation frameworks,
            implement AI-driven testing strategies, shorten regression runs, and
            improve production stability.
          </p>

          <ul className="mt-6 space-y-2 text-slate-700">
            <li>Open to freelance or full-time roles worldwide</li>
            <li>Expert in Selenium, Appium, Playwright, RestAssured, Java, Jenkins</li>
            <li>AI-driven test optimization & production defect analysis</li>
          </ul>

          <div className="mt-6 flex gap-4">
            <Link href="/projects" className="px-4 py-2 bg-slate-900 text-white rounded">View Projects</Link>
            <a className="px-4 py-2 border rounded" href="#contact">Contact</a>
          </div>
        </div>

        <div className="h-80">
          <ThreeScene />
        </div>
      </section>

      <section id="projects" className="mt-12">
        <h2 className="text-2xl font-semibold">Selected Projects</h2>
        <p className="mt-2 text-slate-600">Proven track record in large-scale automation and AI-driven test solutions.</p>
        <div className="mt-4">
          <Link href="/projects" className="text-blue-600">See all projects →</Link>
        </div>
      </section>

      <section id="contact" className="mt-16">
        <h3 className="text-xl font-medium">Contact</h3>
        <p className="mt-2 text-slate-700">Based in Hong Kong — available for remote or on-site roles worldwide. For rates and availability, please reach out.</p>
        <div className="mt-3">
          <a className="inline-block px-4 py-2 bg-slate-900 text-white rounded" href="/Kapil-Resume.pdf" download>Download Resume</a>
          <a className="ml-4 text-slate-700" href="https://www.linkedin.com/in/kapildaksh-portfolio/" target="_blank" rel="noreferrer">LinkedIn</a>
        </div>
      </section>

      <Footer />
    </div>
  )
}
