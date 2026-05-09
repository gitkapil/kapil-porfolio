'use client';

export default function ProjectCard({ project }) {
  return (
    <article className="p-6 bg-white rounded shadow">
      <h3 className="text-xl font-semibold">{project.title}</h3>
      <div className="text-sm text-slate-600 mt-1">{project.company} — {project.role}</div>
      <div className="mt-3 text-slate-700">
        <p className="font-medium">Problem</p>
        <p className="text-sm">{project.problem}</p>

        <p className="font-medium mt-2">Tech</p>
        <div className="text-sm">{project.tech.join(", ")}</div>

        <p className="font-medium mt-2">Achievements</p>
        <ul className="list-disc list-inside text-sm">
          {project.achievements.map((a) => (
            <li key={a}>{a}</li>
          ))}
        </ul>
      </div>
    </article>
  )
}
