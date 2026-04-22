const fallback = {
  display_name: "Taylor Vicente",
  nav_brand: "TAYLOR_VICENTE",
  contact_email: "taylorvicente03@gmain.com",
  social_linkedin: "https://www.linkedin.com/in/taylorvicente/",
  social_github: "https://github.com/tvicent",
  social_extra_label: "INSTITUTE_OF_MECHANICAL_ENGINEERS",
  social_extra_href: "",
  copyright_year: 2026,
};

const externalConfig = typeof window !== "undefined" ? window.PORTFOLIO_CONFIG : undefined;

const portfolioConfig = {
  ...fallback,
  ...(externalConfig || {}),
};

export default portfolioConfig;
