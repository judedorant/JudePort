import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getProject, projects } from "@/lib/projects";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return { title: "Project not found | Jude Belicano" };

  return {
    title: `${project.title} | Jude Belicano`,
    description: project.summary,
  };
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) notFound();

  return (
    <main className="min-h-screen bg-[#080d18] text-slate-100">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
        <Link href="/" className="text-xl font-bold">
          Jude<span className="text-blue-400">.dev</span>
        </Link>
        <Link href="/#projects" className="text-sm text-slate-300 transition hover:text-blue-400">
          ← All projects
        </Link>
      </nav>

      <article className="mx-auto max-w-5xl px-6 pb-24 pt-10">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-400">
          {project.category} · Project {project.number}
        </p>
        <h1 className="mt-4 max-w-4xl text-4xl font-bold leading-tight sm:text-5xl">
          {project.title}
        </h1>
        <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-400">
          {project.summary}
        </p>

        <div className="relative mt-10 aspect-[16/9] overflow-hidden rounded-2xl border border-slate-800 bg-slate-900">
          <Image
            src={project.image}
            alt={`${project.title} preview`}
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 1024px"
            className="object-cover"
          />
        </div>

        <div className="mt-12 grid gap-10 md:grid-cols-[1fr_.7fr]">
          <div className="space-y-9">
            <section>
              <h2 className="text-2xl font-bold">The challenge</h2>
              <p className="mt-4 leading-7 text-slate-400">{project.challenge}</p>
            </section>
            <section>
              <h2 className="text-2xl font-bold">Approach & solution</h2>
              <p className="mt-4 leading-7 text-slate-400">{project.solution}</p>
            </section>
            <section>
              <h2 className="text-2xl font-bold">Key features</h2>
              <ul className="mt-4 space-y-3">
                {project.features.map((feature) => (
                  <li key={feature} className="flex gap-3 leading-6 text-slate-300">
                    <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-blue-400" />
                    {feature}
                  </li>
                ))}
              </ul>
            </section>
          </div>

          <aside className="h-fit rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
            <h2 className="text-lg font-semibold">Technology stack</h2>
            <div className="mt-4 flex flex-wrap gap-2">
              {project.stack.map((technology) => (
                <span key={technology} className="rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 text-sm text-slate-300">
                  {technology}
                </span>
              ))}
            </div>
            {project.disclaimer && (
              <p className="mt-6 border-t border-slate-800 pt-5 text-xs leading-5 text-slate-500">
                Portfolio note: {project.disclaimer}
              </p>
            )}
          </aside>
        </div>

        <section className="mt-16">
          <h2 className="text-2xl font-bold">Screenshots & visuals</h2>
          <p className="mt-3 text-sm leading-6 text-slate-400">
            Replace the illustrative previews below with sanitized screenshots from work you are authorized to share.
          </p>
          <div className="mt-6 grid gap-6 sm:grid-cols-2">
            {project.gallery.map((image) => (
              <figure key={image.src} className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-900">
                <div className="relative aspect-[16/10]">
                  <Image src={image.src} alt={image.alt} fill sizes="(max-width: 640px) 100vw, 50vw" className="object-cover" />
                </div>
                <figcaption className="p-4 text-sm leading-6 text-slate-400">{image.caption}</figcaption>
              </figure>
            ))}
          </div>
        </section>

        <div className="mt-16 rounded-2xl border border-blue-500/20 bg-blue-500/5 p-7 sm:p-9">
          <h2 className="text-2xl font-bold">Have a similar project?</h2>
          <p className="mt-3 text-slate-400">Let's discuss how a reliable backend or integrated business application could help.</p>
          <Link href="/#contact" className="mt-6 inline-flex rounded-xl bg-blue-500 px-5 py-3 font-semibold text-white transition hover:bg-blue-400">
            Contact me
          </Link>
        </div>
      </article>
    </main>
  );
}
