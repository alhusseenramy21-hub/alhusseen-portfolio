import Image from "next/image";

export default function Home() {
  const skills = [
    "Mechanical Engineering",
    "Production Engineering",
    "Manufacturing",
    "SolidWorks",
    "AutoCAD",
    "Quality Control",
    "Continuous Improvement",
    "Problem Solving",
    "Google Workspace",
    "Network Administration",
  ];

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <div>
            <span className="rounded-full border border-cyan-500 px-4 py-2 text-cyan-400">
              Mechanical Engineer
            </span>

            <div className="mt-4 flex flex-wrap gap-3">
              <span className="rounded-full bg-green-500/20 px-3 py-1 text-green-400">
                Open To Work
              </span>
              <span className="rounded-full bg-cyan-500/20 px-3 py-1 text-cyan-400">
                Production Engineer
              </span>
              <span className="rounded-full bg-cyan-500/20 px-3 py-1 text-cyan-400">
                Manufacturing Engineer
              </span>
              <span className="rounded-full bg-cyan-500/20 px-3 py-1 text-cyan-400">
                Defense Industry
              </span>
            </div>

            <h1 className="mt-8 text-5xl font-extrabold md:text-7xl">
              Alhusseen Ramy
            </h1>

            <p className="mt-6 max-w-3xl text-xl text-slate-300">
              Mechanical Engineering Graduate from Trakya University, passionate
              about Production Engineering, Manufacturing Systems, Process
              Improvement and the Turkish Defense Industry.
            </p>

            <div className="mt-8 space-y-2 text-slate-300">
              <p>📧 alhusseenramy21@gmail.com</p>
              <p>📍 Istanbul, Türkiye</p>
              <p>🔗 linkedin.com/in/hu-habib</p>
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="https://www.linkedin.com/in/hu-habib"
                target="_blank"
                className="rounded-xl bg-cyan-500 px-6 py-3 font-bold text-black"
              >
                LinkedIn
              </a>

              <a
                href="mailto:alhusseenramy21@gmail.com"
                className="rounded-xl border border-slate-700 px-6 py-3"
              >
                Email Me
              </a>

              <a
                href="/HUSEN%20Habib%20CV.pdf"
                target="_blank"
                className="rounded-xl border border-slate-700 px-6 py-3"
              >
                Download CV
              </a>
            </div>
          </div>

          <div className="flex justify-center">
            <Image
              src="/profile.jpg"
              alt="Alhusseen Ramy"
              width={420}
              height={420}
              className="rounded-3xl border border-cyan-500 object-cover shadow-2xl"
            />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-12">
        <h2 className="mb-6 text-4xl font-bold">About Me</h2>
        <div className="rounded-3xl border border-slate-800 bg-slate-900 p-8">
          <p className="text-lg text-slate-300">
            I am a Mechanical Engineering graduate based in Istanbul, Türkiye.
            I have production internship experience in metal manufacturing and
            three years of professional experience in IT infrastructure,
            networking, system support and technical operations.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-12">
        <h2 className="mb-6 text-4xl font-bold">Experience</h2>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-3xl border border-slate-800 bg-slate-900 p-8">
            <h3 className="text-2xl font-bold">IT Staff</h3>
            <p className="mt-2 text-cyan-400">2023 - Present</p>
            <p className="mt-4 text-slate-300">
              Managed IT infrastructure, networks, Google Workspace, technical
              support, security systems and daily operational continuity.
            </p>
          </div>

          <div className="rounded-3xl border border-slate-800 bg-slate-900 p-8">
            <h3 className="text-2xl font-bold">
              Production Engineering Internship
            </h3>
            <p className="mt-2 text-cyan-400">Berk Makine</p>
            <p className="mt-4 text-slate-300">
              Gained practical exposure to manufacturing operations, production
              workflows, shop-floor activities, process control and continuous
              improvement concepts.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-12">
        <h2 className="mb-6 text-4xl font-bold">Projects</h2>
        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-3xl border border-slate-800 bg-slate-900 p-8">
            <h3 className="text-2xl font-bold">IT Infrastructure Deployment</h3>
            <p className="mt-2 text-cyan-400">Huda American School</p>
            <p className="mt-4 text-slate-300">
              Assisted in establishing and supporting school IT infrastructure,
              network systems, user services and technical operations.
            </p>
          </div>

          <div className="rounded-3xl border border-slate-800 bg-slate-900 p-8">
            <h3 className="text-2xl font-bold">Berk Makine Internship</h3>
            <p className="mt-2 text-cyan-400">Production Engineering</p>
            <p className="mt-4 text-slate-300">
              Observed production workflows, manufacturing systems and process
              improvement activities in a metal manufacturing environment.
            </p>
          </div>

          <div className="rounded-3xl border border-slate-800 bg-slate-900 p-8">
            <h3 className="text-2xl font-bold">Engineering Development</h3>
            <p className="mt-2 text-cyan-400">SolidWorks & AutoCAD</p>
            <p className="mt-4 text-slate-300">
              Developing CAD, manufacturing and production engineering skills
              to support an industrial engineering career path.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-12">
        <h2 className="mb-6 text-4xl font-bold">Skills</h2>
        <div className="grid gap-4 md:grid-cols-5">
          {skills.map((skill) => (
            <div
              key={skill}
              className="rounded-2xl border border-slate-800 bg-slate-900 p-4 text-center"
            >
              {skill}
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-12">
        <h2 className="mb-6 text-4xl font-bold">Languages</h2>
        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-3xl border border-slate-800 bg-slate-900 p-8">
            Arabic - Native
          </div>
          <div className="rounded-3xl border border-slate-800 bg-slate-900 p-8">
            Turkish - B2
          </div>
          <div className="rounded-3xl border border-slate-800 bg-slate-900 p-8">
            English - B2
          </div>
        </div>
      </section>
    </main>
  );
}