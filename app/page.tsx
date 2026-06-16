import Image from "next/image";export default function Home() {
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
      {/* Hero */}
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
        Mechanical Engineering Graduate from Trakya University,
        passionate about Production Engineering, Manufacturing Systems,
        Process Improvement and the Turkish Defense Industry.
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
      </div>
    </div>

    <div className="flex justify-center">
      <Image
        src="/profile.jfif.jfif"
        alt="Alhusseen Ramy"
        width={420}
        height={420}
        className="rounded-3xl border border-cyan-500 object-cover shadow-2xl"
      />
    </div>
  </div>
</section>
      <section className="mx-auto max-w-7xl px-6 py-24">
        <span className="rounded-full border border-cyan-500 px-4 py-2 text-cyan-400">
          Mechanical Engineer
        </span>

        <h1 className="mt-8 text-5xl font-extrabold md:text-7xl">
          Alhusseen Ramy
        </h1>

        <p className="mt-6 max-w-3xl text-xl text-slate-300">
          Mechanical Engineering Graduate from Trakya University,
          passionate about Production Engineering, Manufacturing Systems,
          Process Improvement and the Turkish Defense Industry.
        </p>

        <div className="mt-8 flex flex-wrap gap-4">
          <button className="rounded-xl bg-cyan-500 px-6 py-3 font-bold text-black">
            Contact Me
          </button>

          <a
  href="/HUSEN Habib CV.pdf"
  target="_blank"
  className="rounded-xl border border-slate-700 px-6 py-3"
>
  Download CV
</a>
        </div>
      </section>

      {/* About */}
      <section className="mx-auto max-w-7xl px-6 py-12">
        <h2 className="mb-6 text-4xl font-bold">About Me</h2>

        <div className="rounded-3xl border border-slate-800 bg-slate-900 p-8">
          <p className="text-lg text-slate-300">
            I am a Mechanical Engineering graduate currently based in
            Istanbul, Türkiye. Alongside my engineering background,
            I have 3 years of professional experience in IT systems,
            infrastructure, networking and technical support.
          </p>

          <p className="mt-4 text-lg text-slate-300">
            My long-term goal is to build a successful career within
            production engineering and the Turkish defense industry.
          </p>
        </div>
      </section>

      {/* Experience */}
      <section className="mx-auto max-w-7xl px-6 py-12">
        <h2 className="mb-6 text-4xl font-bold">Experience</h2>

        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-3xl border border-slate-800 bg-slate-900 p-8">
            <h3 className="text-2xl font-bold">IT Staff</h3>

            <p className="mt-2 text-cyan-400">
              2023 - Present
            </p>

            <p className="mt-4 text-slate-300">
              Managing infrastructure, networks, user support,
              Google Workspace administration and system operations.
            </p>
          </div>

          <div className="rounded-3xl border border-slate-800 bg-slate-900 p-8">
            <h3 className="text-2xl font-bold">
              Production Engineering Internship
            </h3>

            <p className="mt-2 text-cyan-400">
              Berk Makine
            </p>

            <p className="mt-4 text-slate-300">
              Observed manufacturing operations, production workflows,
              industrial processes, quality activities and process improvement.
            </p>
          </div>
        </div>
      </section>

      {/* Education */}
      <section className="mx-auto max-w-7xl px-6 py-12">
        <h2 className="mb-6 text-4xl font-bold">Education</h2>

        <div className="rounded-3xl border border-slate-800 bg-slate-900 p-8">
          <h3 className="text-2xl font-bold">
            Trakya University
          </h3>

          <p className="mt-2 text-cyan-400">
            Mechanical Engineering
          </p>

          <p className="mt-4 text-slate-300">
            Engineering education focused on manufacturing,
            production systems, mechanical design and industrial processes.
          </p>
        </div>
      </section>

      {/* Skills */}
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
{/* Projects */}
<section className="mx-auto max-w-7xl px-6 py-12">
  <h2 className="mb-6 text-4xl font-bold">Projects</h2>

  <div className="grid gap-6 md:grid-cols-3">

    <div className="rounded-3xl border border-slate-800 bg-slate-900 p-8">
      <h3 className="text-2xl font-bold">
        IT Infrastructure Deployment
      </h3>

      <p className="mt-2 text-cyan-400">
        Huda American School
      </p>

      <p className="mt-4 text-slate-300">
        Assisted in establishing and supporting the school's IT
        infrastructure, network systems, user services and daily
        technical operations.
      </p>
    </div>

    <div className="rounded-3xl border border-slate-800 bg-slate-900 p-8">
      <h3 className="text-2xl font-bold">
        Production Engineering Internship
      </h3>

      <p className="mt-2 text-cyan-400">
        Berk Makine
      </p>

      <p className="mt-4 text-slate-300">
        Participated in observing manufacturing operations,
        production workflows, process monitoring and industrial
        production activities.
      </p>
    </div>

    <div className="rounded-3xl border border-slate-800 bg-slate-900 p-8">
      <h3 className="text-2xl font-bold">
        Mechanical Engineering Development
      </h3>

      <p className="mt-2 text-cyan-400">
        Continuous Learning
      </p>

      <p className="mt-4 text-slate-300">
        Developing skills in SolidWorks, AutoCAD, manufacturing
        systems, production engineering and industrial processes.
      </p>
    </div>

  </div>
</section>
      {/* Languages */}
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

      {/* Contact */}
      <section className="mx-auto max-w-7xl px-6 py-12 pb-24">
        <h2 className="mb-6 text-4xl font-bold">Contact</h2>

        <div className="rounded-3xl border border-cyan-500 bg-slate-900 p-8">
          <p className="text-xl">
            Istanbul, Türkiye
          </p>

          <p className="mt-3 text-slate-300">
            Available for Production Engineer opportunities.
          </p>

          <p className="mt-3 text-slate-300">
            Languages: Arabic, Turkish, English
          </p>
        </div>
      </section>
    </main>
  );
}