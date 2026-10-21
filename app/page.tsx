
const skills = [
  "Laravel",
  "PHP",
  "Microsoft SQL Server",
  "MySQL",
  "Next.js",
  "React.js",
  "REST APIs",
  "LDAP / Active Directory",
  "Bluehost",
  "Technical SEO",
];

const projects = [
  {
    number: "01",
    title: "Business Management Systems",
    description:
      "Business applications for merchandising, accounting, loan management, and daily operations.",
    stack: "PHP · Laravel · MSSQL",
  },
  {
    number: "02",
    title: "Point of Sale & Inventory",
    description:
      "A business application concept for managing products, inventory, sales, and transactions.",
    stack: "Laravel · MySQL · React",
  },
  {
    number: "03",
    title: "API & Authentication Integration",
    description:
      "Backend APIs and directory-based authentication for connecting applications and supporting centralized access.",
    stack: "Laravel · REST API · LDAP",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#080d18] text-slate-100">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
        <a href="#" className="text-xl font-bold">
          Jude<span className="text-blue-400">.dev</span>
        </a>
        <div className="flex gap-5 text-sm text-slate-300">
          <a href="#skills" className="hover:text-blue-400">Skills</a>
          <a href="#projects" className="hover:text-blue-400">Projects</a>
          <a href="#contact" className="hover:text-blue-400">Contact</a>
        </div>
      </nav>

      <section className="mx-auto grid max-w-6xl gap-12 px-6 py-24 md:grid-cols-2 md:items-center">
        <div>
          <p className="mb-4 font-medium text-blue-400">
            IT PROGRAMMER · BACKEND DEVELOPER
          </p>
          <h1 className="text-4xl font-bold leading-tight md:text-6xl">
            Building reliable
            <span className="text-blue-400"> software solutions.</span>
          </h1>
          <p className="mt-6 max-w-xl leading-7 text-slate-400">
            I develop business applications, backend services, databases,
            and API integrations using Laravel, PHP, MSSQL, and modern
            JavaScript technologies.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="rounded-lg bg-blue-500 px-6 py-3 font-semibold text-white hover:bg-blue-600"
            >
              Explore Projects
            </a>
            <a
              href="#contact"
              className="rounded-lg border border-slate-700 px-6 py-3 font-semibold hover:border-blue-400"
            >
              Contact Me
            </a>
          </div>
        </div>

        <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6 shadow-2xl">
          <div className="mb-5 flex gap-2">
            <span className="h-3 w-3 rounded-full bg-red-400" />
            <span className="h-3 w-3 rounded-full bg-yellow-400" />
            <span className="h-3 w-3 rounded-full bg-green-400" />
          </div>
          <pre className="overflow-x-auto text-sm leading-7">
            <code>
              <span className="text-purple-400">const</span>{" "}
              developer = {"{\n"}
              {"  "}name: <span className="text-green-300">"Jude Belicano"</span>,
              {"\n"}
              {"  "}focus: <span className="text-green-300">"Backend"</span>,
              {"\n"}
              {"  "}framework: <span className="text-green-300">"Laravel"</span>,
              {"\n"}
              {"  "}database: <span className="text-green-300">"MSSQL"</span>,
              {"\n"}
              {"  "}api: <span className="text-green-300">"REST"</span>
              {"\n"}{"};"}
            </code>
          </pre>
          <div className="mt-6 border-t border-slate-800 pt-4 text-sm text-slate-400">
            <span className="text-green-400">●</span> Focused on practical
            software development
          </div>
        </div>
      </section>

      <section id="skills" className="border-y border-slate-800 bg-slate-900/40">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <h2 className="text-3xl font-bold">Technical Skills</h2>
          <p className="mt-3 text-slate-400">
            Technologies I use for software development and integration.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            {skills.map((skill) => (
              <span
                key={skill}
                className="rounded-lg border border-slate-700 bg-slate-900 px-4 py-3 text-sm text-slate-200"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="mx-auto max-w-6xl px-6 py-20">
        <h2 className="text-3xl font-bold">Featured Projects</h2>
        <p className="mt-3 text-slate-400">
          Examples of business software and backend development work.
        </p>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.number}
              className="rounded-xl border border-slate-800 bg-slate-900/50 p-6 transition hover:border-blue-500/60"
            >
              <p className="text-sm text-blue-400">{project.number}</p>
              <h3 className="mt-4 text-xl font-semibold">{project.title}</h3>
              <p className="mt-4 text-sm leading-6 text-slate-400">
                {project.description}
              </p>
              <p className="mt-6 text-xs text-blue-300">{project.stack}</p>
            </article>
          ))}
        </div>
        <p className="mt-6 text-sm text-slate-500">
          Replace these summaries with verified project details, screenshots,
          and repository links. Only showcase work you are authorized to share.
        </p>
      </section>

      <section id="contact" className="border-t border-slate-800">
        <div className="mx-auto max-w-6xl px-6 py-20 text-center">
          <h2 className="text-3xl font-bold">Let's Build Something Useful</h2>
          <p className="mx-auto mt-4 max-w-xl text-slate-400">
            Open to discussing software development projects and backend
            opportunities.
          </p>
          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noreferrer"
            className="mt-8 inline-block rounded-lg bg-blue-500 px-6 py-3 font-semibold hover:bg-blue-600"
          >
            Connect on LinkedIn
          </a>
        </div>
      </section>

      <footer className="border-t border-slate-800 px-6 py-6 text-center text-sm text-slate-500">
        © 2026 Jude Belicano · Built with Next.js
      </footer>
    </main>
  );
}
