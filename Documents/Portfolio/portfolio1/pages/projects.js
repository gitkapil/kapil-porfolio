import Header from '../components/Header'
import Footer from '../components/Footer'
import ProjectCard from '../components/ProjectCard'
import '../app/globals.css'

const projects = [
  {
    title: 'Footabl betting system - Betting Platform Automation',
    company: 'The Hong Kong Jockey Club',
    role: 'Automation Manager / Senior Automation Engineer / Automation Lead',
    tech: ['Selenium', 'Java', 'Jenkins', 'RestAssured', 'Playwright'],
    problem: '20K test cases in Regression took 48 hours',
    achievements: [
      'Built massive automation regression suite',
      'Implemented AI strategy to reduce manual test case creation and automation execution — regression reduced to 6 hours and improved stability',
      'Production defect analysis through AI and optimized defect-prone areas by identifying fragile workflows',
      'Handled distributed teams across multiple geographies',
      'Prepared automation, AI, and workflow strategy for end-to-end STLC'
    ]
  },

  {
    title: 'B2B and B2C mobile transaction App automation (PayMe)',
    company: 'HSBC Hong Kong',
    role: 'Senior Automation Engineer',
    tech: ['Selenium', 'RestAssured', 'Appium'],
    problem: 'No automation testing for third-party APIs and fragile mobile app',
    achievements: ['Built API automation for third-party integrations', 'Created iOS and Android app automation to reduce manual failures']
  },

  {
    title: 'CIRCLE DNA Test - Mobile App & Backend Automation',
    company: 'Prenetics Limited Hong Kong',
    role: 'Senior Automation Engineer',
    tech: ['Selenium', 'RestAssured', 'Appium'],
    problem: 'No automation testing and fragile mobile app',
    achievements: ['Built API automation for third-party integrations', 'Created mobile app automation', 'Prepared automation & AI workflow for end-to-end STLC', 'Built regression suite for microservice backend']
  },

  {
    title: 'Compare finance products',
    company: 'MoneyHero HK',
    role: 'Senior Automation Engineer',
    tech: ['Selenium', 'RestAssured'],
    problem: 'No automation testing',
    achievements: ['Built automation framework from scratch for web and mobile']
  },

  {
    title: 'Insurance / Claim / Finance',
    company: 'Accenture India',
    role: 'Automation Engineer',
    tech: ['Selenium', 'RestAssured'],
    problem: 'Large suites needing automation',
    achievements: ['Developed UI-based automation tool to speed script development by 70%', 'Built frameworks for web and mobile']
  },

  {
    title: 'Causera & Recordlince',
    company: 'Teknotrain Solution Pvt Ltd',
    role: 'Automation Engineer',
    tech: ['Selenium', 'RestAssured'],
    problem: 'No automation testing',
    achievements: ['Built frameworks from scratch and reduced manual test effort by 90%']
  }
]

export default function Projects() {
  return (
    <div className="container mx-auto px-6 py-12">
      <Header />
      <h1 className="text-3xl font-semibold">Projects</h1>

      <div className="mt-6 grid md:grid-cols-2 gap-6">
        {projects.map((p) => (
          <ProjectCard key={p.title} project={p} />
        ))}
      </div>

      <Footer />
    </div>
  )
}
