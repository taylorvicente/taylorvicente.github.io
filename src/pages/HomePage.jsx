import { Link } from "react-router-dom";

const toiletCaddyImage = new URL("../../Tablet_Holder_Black_Render.png", import.meta.url).href;
const trackProjectImage = new URL("../../Version 2 - Black Header w/Logo - PNG.png", import.meta.url).href;
const headshotImage = new URL("../../headshot.png", import.meta.url).href;

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
          <div className="md:col-span-8 lg:col-span-8 md:col-start-3">
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
          <div className="md:col-span-4 lg:col-span-3 md:col-start-10">
            <div className="bg-surface-container-lowest ambient-shadow p-4">
              <div className="aspect-[3/4] bg-surface-container-high border border-outline/20 flex items-center justify-center overflow-hidden">
                {headshotImage ? (
                  <img src={headshotImage} alt="Taylor Vicente headshot" className="w-full h-full object-cover" />
                ) : (
                  <span className="font-label text-[10px] tracking-widest uppercase text-on-surface-variant text-center px-4">
                    Add headshot image in
                    <br />
                    <code>src/pages/HomePage.jsx</code>
                  </span>
                )}
              </div>
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
              Mechanical, Electrical, &amp; <br /> Software
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12">
            <article className="lg:col-span-12 bg-surface-container-lowest ambient-shadow relative overflow-hidden group">
              <div className="grid grid-cols-1 md:grid-cols-2 h-full">
                <div className="p-10 md:p-16 flex flex-col justify-center order-2 md:order-1">
                  <div className="flex flex-wrap gap-2 mb-6">
                    <span className="bg-secondary-container text-on-secondary-container font-label text-xs uppercase tracking-widest px-3 py-1 font-semibold">Product Design</span>
                    <span className="bg-secondary-container text-on-secondary-container font-label text-xs uppercase tracking-widest px-3 py-1 font-semibold">CAD</span>
                    <span className="bg-secondary-container text-on-secondary-container font-label text-xs uppercase tracking-widest px-3 py-1 font-semibold">Entrepreneurship</span>
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
                    src={toiletCaddyImage}
                  />
                </div>
              </div>
            </article>

            <article className="lg:col-span-5 bg-surface-container-lowest ambient-shadow p-10 flex flex-col h-[500px] relative group overflow-hidden">
              <div className="absolute inset-0 bg-surface-container-high -z-10">
                <img
                  alt="Track - Smart Expenditure Tracking Logo"
                  className="w-full h-full object-cover mix-blend-multiply opacity-20 group-hover:opacity-40 transition-opacity duration-500"
                  src={trackProjectImage}
                />
              </div>
              <div className="flex flex-wrap gap-2 mb-8 relative z-10">
                <span className="bg-surface text-on-surface font-label text-xs uppercase tracking-widest px-3 py-1 font-semibold border border-outline/20">Entrepreneurship</span>
                <span className="bg-surface text-on-surface font-label text-xs uppercase tracking-widest px-3 py-1 font-semibold border border-outline/20">Software Development</span>
              </div>
              <h3 className="font-headline text-2xl font-bold text-on-surface mb-4 relative z-10">
                Track - Smart Expenditure Tracking
              </h3>
              <p className="font-body text-on-surface-variant leading-[1.6] relative z-10">
              163 Million Americans have a self-identified over-spending problem. Commonly, this comes down to a lack of actionable information about our own spending behaviors. Track seeks to solve this problem by providing itemized purchasing information to granularly track expenses and create hyper-personalized budgets.
              </p>
            </article>

            <div className="lg:col-span-7 grid grid-rows-2 gap-8 md:gap-12">
              <article className="bg-surface-container-lowest ambient-shadow p-10 flex flex-col md:flex-row gap-8 items-center relative overflow-hidden group">
                <div className="flex-1 order-2 md:order-1 relative z-10">
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="bg-surface text-on-surface font-label text-xs uppercase tracking-widest px-3 py-1 font-semibold border border-outline/20">SystemVerilog</span>
                    <span className="bg-surface text-on-surface font-label text-xs uppercase tracking-widest px-3 py-1 font-semibold border border-outline/20">FPGA</span>
                  </div>
                  <h3 className="font-headline text-xl font-bold text-on-surface mb-3">Simulated Lunar Lander</h3>
                  <p className="font-body text-on-surface-variant leading-[1.6] text-sm">
                    Implemented a real-time lunar lander simulation using SystemVerilog on an FPGA. The simulation
                    implements a finite state machine architecture used to handle gravity constants, thrust vectors, and fuel depletion logic. 
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
