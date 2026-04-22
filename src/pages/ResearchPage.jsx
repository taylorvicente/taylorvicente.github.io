export default function ResearchPage() {
  return (
    <>
      <section className="relative w-full bg-background px-8 md:px-16 lg:px-24 pt-16 pb-20 md:pt-24 md:pb-28">
        <div className="max-w-5xl">
          <span className="font-label text-sm uppercase tracking-[0.15em] text-secondary block mb-4">02 // Research</span>
          <h1 className="font-headline text-[2.5rem] md:text-[3.5rem] leading-[1.1] tracking-[-0.02em] font-bold text-on-surface mb-6">
            Publications &amp; <span className="text-primary">Laboratory Work</span>
          </h1>
          <p className="font-body text-lg text-on-surface-variant max-w-3xl leading-[1.6]">
            Summaries of peer-reviewed work, technical reports, and ongoing investigations. Replace this paragraph
            with your focus areas and institutional affiliations.
          </p>
        </div>
      </section>

      <section className="bg-surface-container-low w-full py-20 px-8 md:px-16 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <span className="font-label text-sm uppercase tracking-[0.15em] text-secondary block mb-4">Section A</span>
          <h2 className="font-headline text-2xl md:text-3xl font-bold text-on-surface mb-12">Publications</h2>
          <div className="space-y-16">
            <article className="bg-surface-container-lowest ambient-shadow p-10 md:p-12">
              <h3 className="font-headline text-xl font-bold text-on-surface mb-3">Paper or report title (placeholder)</h3>
              <p className="font-label text-xs uppercase tracking-widest text-on-surface-variant mb-4">Venue · Year</p>
              <p className="font-body text-on-surface-variant leading-[1.6] mb-6">
                Abstract or contribution summary. Edit this block and add a DOI or PDF link when available.
              </p>
            </article>
            <article className="bg-background p-10 md:p-12">
              <h3 className="font-headline text-xl font-bold text-on-surface mb-3">Second publication (placeholder)</h3>
              <p className="font-label text-xs uppercase tracking-widest text-on-surface-variant mb-4">Journal · Year</p>
              <p className="font-body text-on-surface-variant leading-[1.6]">Short description of methods and results.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="bg-background w-full py-20 px-8 md:px-16 lg:px-24">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5">
            <span className="font-label text-sm uppercase tracking-[0.15em] text-secondary block mb-4">Section B</span>
            <h2 className="font-headline text-2xl md:text-3xl font-bold text-on-surface mb-6">In progress</h2>
            <p className="font-body text-on-surface-variant leading-[1.6]">
              Ongoing experiments, thesis chapters, or industry collaborations you are allowed to discuss publicly.
            </p>
          </div>
          <div className="lg:col-span-7 space-y-6">
            <div className="bg-surface-container-high p-8">
              <h4 className="font-headline font-semibold text-lg text-on-surface mb-2">Active project name</h4>
              <p className="font-body text-on-surface-variant text-sm leading-relaxed">Status and next milestones (placeholder).</p>
            </div>
            <div className="bg-surface-container-high p-8">
              <h4 className="font-headline font-semibold text-lg text-on-surface mb-2">Second workstream</h4>
              <p className="font-body text-on-surface-variant text-sm leading-relaxed">Replace with your content.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-surface-container-low w-full py-20 px-8 md:px-16 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <span className="font-label text-sm uppercase tracking-[0.15em] text-secondary block mb-4">Section C</span>
          <h2 className="font-headline text-2xl md:text-3xl font-bold text-on-surface mb-8">Tools &amp; methods</h2>
          <div className="flex flex-wrap gap-2 mb-12">
            {["FEA", "CFD", "MATLAB", "PYTHON"].map((tool) => (
              <span
                key={tool}
                className="bg-secondary-container text-on-secondary-container font-label text-xs uppercase tracking-widest px-3 py-1 font-semibold"
              >
                {tool}
              </span>
            ))}
          </div>
          <div className="bg-surface-container-high relative overflow-hidden min-h-[240px]">
            <img
              alt="Research lab or instrumentation placeholder"
              className="w-full h-full min-h-[240px] object-cover opacity-90 mix-blend-multiply"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDRPuVzgMmFV231GuoTYXkKH2uN9Ci6zJpsn-l2Lzc4bjvFzjwtBs1l-ttLjpG4dlvkvEG02oj-V3a7xK-cspyuFbCSVae-8_wHFpH-nWBtG9E2YivXA8Vfp6YIF0HRf9DYZM7Q2KEL6ni0DVI384tHn1tssY8_-Hyn008ttVPDPts4gTov3yIof7qA7o-44LRiHqRUoSBZlU1l1OiSBdfs6P5K3FYpUolv0LCp49B-n5wdLJ8qu1A81lBoE3tiWyUgP4eYWP8Aqzs"
            />
          </div>
        </div>
      </section>
    </>
  );
}
