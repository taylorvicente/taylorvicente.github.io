import portfolioConfig from "../portfolioConfig";

export default function AboutPage() {
  return (
    <>
      <section className="relative w-full bg-background px-8 md:px-16 lg:px-24 pt-16 pb-16 md:pt-24 md:pb-20">
        <div className="max-w-5xl">
          <span className="font-label text-sm uppercase tracking-[0.15em] text-secondary block mb-4">03 // About</span>
          <h1 className="font-headline text-[2.5rem] md:text-[3.5rem] leading-[1.1] tracking-[-0.02em] font-bold text-on-surface mb-8">
            Profile &amp; <span className="text-primary">Technical Background</span>
          </h1>
          <p className="font-body text-lg text-on-surface-variant max-w-3xl leading-[1.6] mb-8">
            Replace this biography with your education, roles, and what you build.
          </p>
          <p className="font-body text-on-surface-variant max-w-3xl leading-[1.6]">
            Optional second paragraph for fellowships, certifications, and location.
          </p>
        </div>
      </section>

      <section className="bg-surface-container-low w-full py-16 px-8 md:px-16 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <span className="font-label text-sm uppercase tracking-[0.15em] text-secondary block mb-4">Capabilities</span>
          <h2 className="font-headline text-2xl md:text-3xl font-bold text-on-surface mb-8">Core skills</h2>
          <div className="flex flex-wrap gap-2">
            {["SOLIDWORKS", "ANSYS", "MATLAB", "C / C++", "RTOS", "SYSTEMS DESIGN"].map((skill) => (
              <span
                key={skill}
                className="bg-secondary-container text-on-secondary-container font-label text-xs uppercase tracking-widest px-3 py-1 font-semibold"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-background w-full py-16 px-8 md:px-16 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <span className="font-label text-sm uppercase tracking-[0.15em] text-secondary block mb-4">Education &amp; experience</span>
          <h2 className="font-headline text-2xl md:text-3xl font-bold text-on-surface mb-12">Timeline</h2>
          <div className="space-y-0">
            <div className="bg-surface-container-lowest ambient-shadow p-8 md:p-10 mb-8">
              <div className="font-label text-xs uppercase tracking-widest text-on-surface-variant mb-2">2022 — Present</div>
              <h3 className="font-headline text-lg font-bold text-on-surface mb-2">Role or degree (placeholder)</h3>
              <p className="font-body text-on-surface-variant text-sm leading-relaxed">
                Organization and one-line description of responsibilities or thesis topic.
              </p>
            </div>
            <div className="bg-surface-container-high p-8 md:p-10 mb-8">
              <div className="font-label text-xs uppercase tracking-widest text-on-surface-variant mb-2">2018 — 2022</div>
              <h3 className="font-headline text-lg font-bold text-on-surface mb-2">Prior role or degree</h3>
              <p className="font-body text-on-surface-variant text-sm leading-relaxed">Replace with your history.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="bg-surface-container-low w-full py-20 px-8 md:px-16 lg:px-24">
        <div className="max-w-3xl mx-auto">
          <span className="font-label text-sm uppercase tracking-[0.15em] text-secondary block mb-4">Contact</span>
          <h2 className="font-headline text-2xl md:text-3xl font-bold text-on-surface mb-6">Work with me</h2>
          <p className="font-body text-on-surface-variant leading-[1.6] mb-8">
            For collaborations, speaking, or hiring inquiries, reach out by email.
          </p>
          <a
            className="inline-flex bg-gradient-cta text-on-primary font-headline text-sm uppercase tracking-[0.1em] font-bold px-8 py-4 hover:opacity-90 transition-opacity mb-10"
            href={`mailto:${portfolioConfig.contact_email}`}
          >
            {portfolioConfig.contact_email}
          </a>
          <div className="flex flex-col gap-4">
            <a className="ghost-border text-on-surface font-headline text-xs uppercase tracking-[0.15em] font-bold px-6 py-3 inline-flex w-fit items-center gap-2 hover:bg-surface-container-lowest transition-colors" href="#">
              Download CV (PDF)
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
