import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <>
      <section className="relative w-full min-h-[870px] flex items-center bg-background overflow-hidden px-8 md:px-16 lg:px-24">
        <div className="absolute inset-0 pointer-events-none grid grid-cols-12 gap-4 h-full opacity-10">
          <div className="col-span-1 border-r border-outline"></div>
          <div className="col-span-1 border-r border-outline hidden md:block"></div>
          <div className="col-span-1 border-r border-outline hidden lg:block"></div>
        </div>
        <div className="relative z-10 max-w-5xl grid grid-cols-1 md:grid-cols-12 gap-8 items-center w-full">
          <div className="md:col-span-8 lg:col-span-9 md:col-start-3">
          <div className="font-label text-sm uppercase tracking-[0.15em] text-secondary mb-6 flex items-center gap-4">
            <span className="w-12 h-px bg-secondary"></span>
            Mechanical &amp; Computer Engineering
          </div>
          <h1 className="font-headline text-[3rem] md:text-[4rem] lg:text-[5rem] leading-[1.1] tracking-[-0.02em] font-bold text-on-surface mb-8">
            Multi-Disciplinary Engineering <br />
            <span className="text-primary">&amp; Mechanical Design</span>
          </h1>
          <p className="font-body text-lg text-on-surface-variant max-w-2xl leading-[1.6] mb-12">
            Hi, I&apos;m Taylor. I&apos;m a fourth year at Purdue University studying Mechanical Engineering with a
            minor in Computer Engineering. I&apos;m passionate about making things from concept to reality across
            mechanical, electrical, and software engineering.
          </p>
          <div className="flex flex-wrap gap-6">
            <a
              className="bg-gradient-cta text-on-primary font-headline text-sm uppercase tracking-[0.1em] font-bold px-8 py-4 inline-flex items-center gap-3 hover:opacity-90 transition-opacity"
              href="#projects"
            >
              View Projects
            </a>
            <Link
              className="ghost-border text-on-surface font-headline text-sm uppercase tracking-[0.1em] font-bold px-8 py-4 inline-flex items-center gap-3 hover:bg-surface-container-low transition-colors"
              to="/about"
            >
              Technical Resume
            </Link>
          </div>
        </div>
        </div>
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1/3 h-[120%] bg-surface-container-low -z-10 skew-x-[-15deg] hidden lg:block border-l border-outline/20"></div>
      </section>

      <section className="bg-surface-container-low w-full py-32 px-8 md:px-16 lg:px-24" id="projects">
        <div className="max-w-7xl mx-auto">
          <div className="mb-24 md:pl-24">
            <span className="font-label text-sm uppercase tracking-[0.15em] text-secondary block mb-4">01 // Projects</span>
            <h2 className="font-headline text-3xl md:text-4xl tracking-tight font-bold text-on-surface">
              Systems Architecture &amp; <br /> Applied Mechanics
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12">
            <article className="lg:col-span-12 bg-surface-container-lowest ambient-shadow relative overflow-hidden group">
              <div className="grid grid-cols-1 md:grid-cols-2 h-full">
                <div className="p-10 md:p-16 flex flex-col justify-center order-2 md:order-1">
                  <div className="flex flex-wrap gap-2 mb-6">
                    <span className="bg-secondary-container text-on-secondary-container font-label text-xs uppercase tracking-widest px-3 py-1 font-semibold">Product Design</span>
                    <span className="bg-secondary-container text-on-secondary-container font-label text-xs uppercase tracking-widest px-3 py-1 font-semibold">CAD</span>
                  </div>
                  <h3 className="font-headline text-3xl font-bold text-on-surface mb-4">Toilet Caddy</h3>
                  <p className="font-body text-on-surface-variant leading-[1.6] mb-8 text-lg">
                    My first stint at designing a product. I designed a caddy to hold toilet cleaning tablets for
                    residential homes to address a gap in the market and make life easier for my family.
                  </p>
                </div>
                <div className="h-[400px] md:h-auto order-1 md:order-2 bg-surface-container-high relative">
                  <img
                    alt="Toilet Caddy Assembly"
                    className="w-full h-full object-cover mix-blend-luminosity opacity-80 group-hover:opacity-100 group-hover:mix-blend-normal transition-all duration-700"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDJT0FqJIlDbmXyU7zfz_5SMVbCihQC6A9YYygoNE1krfY0jGrMxizoADjD-2JIl8ND7x6W9o70iJD6UwBGtlCf6P9fATBT_LbjnJ1KiadJgw08yagNuYAkQniWL63NPjBPxfI5sGhw6Vz9Pt_II1icbIlJ3YjmomHh99RtTzXyS6x9qP7Iax18uzmE7Eamfq1H9cFdujilzwTEDcn1T2ekyvxhAf357NJaFYw_42n-A3SkyQX2cxZX1cl-Zutsk3wA-CosI7OdiHI"
                  />
                </div>
              </div>
            </article>

            <article className="lg:col-span-5 bg-surface-container-lowest ambient-shadow p-10 flex flex-col h-[500px] relative group overflow-hidden">
              <div className="absolute inset-0 bg-surface-container-high -z-10">
                <img
                  alt="Mechanical turbine rendering"
                  className="w-full h-full object-cover mix-blend-multiply opacity-20 group-hover:opacity-40 transition-opacity duration-500"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCmDF2xoP-X9mUBt8LnzcVXfLtyLE10PkQim90Id4qEL-vnQAhUNevEpd-AdaLq41NrKrSxrDige-gzsslrasou_K_ehrsnC3R4GQAFftBDagV0GW03N_scPDyg0YGAu3bZI6AO06MxnilXL22hfQXmj4Mg_6wo-AMh2f-pKEgosWFrbLAAgKWds1ZiQer5xgsYRvYKUJrlTbVqtCtIgdj0aZEQ6EfBELb3SR7Jz0j8_n2ZPHgRIgX8njcjWmDU-vl53Ax6UkqPiDA"
                />
              </div>
              <div className="flex flex-wrap gap-2 mb-8 relative z-10">
                <span className="bg-surface text-on-surface font-label text-xs uppercase tracking-widest px-3 py-1 font-semibold border border-outline/20">THERMAL</span>
                <span className="bg-surface text-on-surface font-label text-xs uppercase tracking-widest px-3 py-1 font-semibold border border-outline/20">CAD</span>
              </div>
              <h3 className="font-headline text-2xl font-bold text-on-surface mb-4 relative z-10">
                High-Bypass Turbofan Stress Analysis
              </h3>
              <p className="font-body text-on-surface-variant leading-[1.6] relative z-10">
                Finite Element Analysis (FEA) and computational fluid dynamics (CFD) modeling to optimize the
                structural integrity of titanium fan blades under extreme thermal loads.
              </p>
            </article>

            <div className="lg:col-span-7 grid grid-rows-2 gap-8 md:gap-12">
              <article className="bg-surface-container-lowest ambient-shadow p-10 flex flex-col md:flex-row gap-8 items-center relative overflow-hidden group">
                <div className="flex-1 order-2 md:order-1 relative z-10">
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="bg-surface text-on-surface font-label text-xs uppercase tracking-widest px-3 py-1 font-semibold border border-outline/20">PCB DESIGN</span>
                  </div>
                  <h3 className="font-headline text-xl font-bold text-on-surface mb-3">Modular Telemetry Board</h3>
                  <p className="font-body text-on-surface-variant leading-[1.6] text-sm">
                    Custom 6-layer PCB integrating high-frequency RF transmission and analog sensor conditioning for
                    remote structural monitoring.
                  </p>
                </div>
              </article>

              <article className="bg-surface-container-lowest ambient-shadow p-10 flex flex-col md:flex-row gap-8 items-center relative overflow-hidden group">
                <div className="flex-1 order-2 relative z-10">
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="bg-surface text-on-surface font-label text-xs uppercase tracking-widest px-3 py-1 font-semibold border border-outline/20">EMBEDDED C++</span>
                  </div>
                  <h3 className="font-headline text-xl font-bold text-on-surface mb-3">PID Control Algorithm</h3>
                  <p className="font-body text-on-surface-variant leading-[1.6] text-sm">
                    Developed a deterministic RTOS software architecture implementing advanced PID tuning for
                    sub-millimeter actuator precision.
                  </p>
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
