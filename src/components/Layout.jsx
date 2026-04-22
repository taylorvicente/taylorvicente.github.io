import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import portfolioConfig from "../portfolioConfig";

const navItems = [
  { to: "/", label: "PROJECTS" },
  { to: "/research", label: "RESEARCH" },
  { to: "/about", label: "ABOUT" },
];

function NavItem({ to, label }) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        isActive
          ? "font-headline tracking-tighter uppercase font-bold text-on-surface border-b-2 border-on-surface pb-1 opacity-70 transition-opacity duration-150"
          : "font-headline tracking-tighter uppercase font-bold text-outline hover:text-on-surface transition-colors hover:bg-surface-variant/50 px-3 py-2"
      }
    >
      {label}
    </NavLink>
  );
}

export default function Layout({ children }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const currentYear = portfolioConfig.copyright_year || new Date().getFullYear();
  const brand = portfolioConfig.nav_brand || "TAYLOR_VICENTE";
  const name = (portfolioConfig.display_name || "Taylor Vicente").toUpperCase();

  return (
    <div className="bg-background text-on-surface antialiased min-h-screen flex flex-col selection:bg-primary selection:text-on-primary">
      <nav className="bg-surface/80 backdrop-blur-[24px] top-0 z-50 flex flex-col w-full max-w-full sticky">
        <div className="flex justify-between items-center w-full px-8 py-6">
          <Link className="text-xl font-bold tracking-[0.2em] text-on-surface font-headline uppercase shrink-0" to="/">
            {brand}
          </Link>
          <div className="hidden md:flex items-center space-x-12">
            {navItems.map((item) => (
              <NavItem key={item.to} to={item.to} label={item.label} />
            ))}
          </div>
          <a className="hidden md:inline-flex bg-gradient-cta text-on-primary font-headline tracking-tighter uppercase font-bold px-8 py-3 hover:opacity-90 transition-opacity shrink-0" href="/#/about#contact">
            CONTACT
          </a>
          <button
            type="button"
            className="md:hidden text-on-surface p-2 -mr-2"
            aria-expanded={mobileOpen ? "true" : "false"}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            onClick={() => setMobileOpen((v) => !v)}
          >
            <span className="material-symbols-outlined">menu</span>
          </button>
        </div>
        {mobileOpen && (
          <div className="md:hidden flex flex-col gap-4 px-8 pb-6 border-t border-outline/10 bg-surface/95 backdrop-blur-[24px]">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                onClick={() => setMobileOpen(false)}
                className={({ isActive }) =>
                  isActive
                    ? "font-headline tracking-tighter uppercase font-bold text-on-surface border-b-2 border-on-surface pb-1 w-fit opacity-70"
                    : "font-headline tracking-tighter uppercase font-bold text-outline hover:text-on-surface py-1"
                }
              >
                {item.label}
              </NavLink>
            ))}
            <a
              href="/#/about#contact"
              onClick={() => setMobileOpen(false)}
              className="inline-flex bg-gradient-cta text-on-primary font-headline tracking-tighter uppercase font-bold px-8 py-3 hover:opacity-90 transition-opacity w-fit"
            >
              CONTACT
            </a>
          </div>
        )}
      </nav>

      <main className="flex-grow">{children}</main>

      <footer className="bg-surface-dim w-full px-12 py-16 flex flex-col md:flex-row justify-between items-start">
        <div className="mb-12 md:mb-0">
          <div className="text-sm font-bold text-on-surface font-headline tracking-[0.2em] uppercase mb-4">
            {brand}
          </div>
          <div className="font-inter text-[10px] tracking-widest uppercase text-on-surface-variant">
            {`©${currentYear} ${name} // ALL RIGHTS RESERVED`}
          </div>
        </div>
        <div className="flex flex-col space-y-4 md:items-end">
          <a
            className="font-inter text-[10px] tracking-widest uppercase text-on-surface-variant hover:text-on-surface underline decoration-1 underline-offset-4 transition-colors"
            href={portfolioConfig.social_linkedin}
            rel="noopener noreferrer"
            target="_blank"
          >
            LINKEDIN
          </a>
          <a
            className="font-inter text-[10px] tracking-widest uppercase text-on-surface-variant hover:text-on-surface underline decoration-1 underline-offset-4 transition-colors"
            href={portfolioConfig.social_github}
            rel="noopener noreferrer"
            target="_blank"
          >
            GITHUB
          </a>
          <a
            className="font-inter text-[10px] tracking-widest uppercase text-on-surface-variant hover:text-on-surface underline decoration-1 underline-offset-4 transition-colors"
            href={portfolioConfig.social_extra_href || "#"}
          >
            {portfolioConfig.social_extra_label}
          </a>
        </div>
      </footer>
    </div>
  );
}
