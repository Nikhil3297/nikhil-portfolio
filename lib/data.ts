/**
 * All of the site's content lives in this file (taken from "Nikhil Patil Web Developer.pdf").
 * Edit the values below to update the portfolio — no other file needs to change.
 */
import type { IconType } from "react-icons";
import {
  FaBoxesStacked,
  FaCartShopping,
  FaChartLine,
  FaCss3Alt,
  FaEnvelope,
  FaFigma,
  FaGaugeHigh,
  FaGithub,
  FaHandshake,
  FaGitAlt,
  FaHtml5,
  FaJs,
  FaLeaf,
  FaLinkedinIn,
  FaMagnifyingGlassChart,
  FaPassport,
  FaPhone,
  FaPhp,
  FaPlug,
  FaPuzzlePiece,
  FaReact,
  FaRobot,
  FaShip,
  FaTruckFast,
  FaWordpress,
} from "react-icons/fa6";
import {
  SiBootstrap,
  SiClaude,
  SiCpanel,
  SiElementor,
  SiGoogleanalytics,
  SiGooglechrome,
  SiGoogletagmanager,
  SiMysql,
  SiNextdotjs,
  SiShopify,
  SiTailwindcss,
  SiWoocommerce,
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";

/* ------------------------------------------------------------------ */
/* Site & personal info                                               */
/* ------------------------------------------------------------------ */

export const site = {
  name: "Nikhil Patil",
  fullName: "Nikhil H. Patil",
  initials: "NP",
  role: "Web Developer",
  email: "nikhilpatil793@gmail.com",
  phone: "+91 9930896118",
  location: "Navi Mumbai, Maharashtra",
  // Hero portrait in /public (transparent PNG works best). Set to null to show the animated "NP" orb instead.
  avatar: "/avatar.png" as string | null,
};

export type Social = { name: string; href: string; Icon: IconType };

// Links with an empty href are hidden — paste your LinkedIn / GitHub URLs to show them.
export const socials: Social[] = [
  { name: "Email", href: `mailto:${site.email}`, Icon: FaEnvelope },
  { name: "Phone", href: `tel:${site.phone.replace(/\s/g, "")}`, Icon: FaPhone },
  { name: "LinkedIn", href: "https://www.linkedin.com/in/nikhil-patil73/", Icon: FaLinkedinIn },
  { name: "GitHub", href: "https://github.com/Nikhil3297", Icon: FaGithub },
].filter((social) => social.href);

/* ------------------------------------------------------------------ */
/* Home                                                               */
/* ------------------------------------------------------------------ */

export const home = {
  title: { lead: "Transforming Ideas", mid: "Into", accent: "Digital Reality" },
  intro:
    "I'm Nikhil, a Web Developer from Navi Mumbai with 4+ years of experience building and customizing WordPress, WooCommerce and Shopify websites — 50+ client projects delivered across e-commerce, travel, shipping, real estate and consulting.",
};

/* ------------------------------------------------------------------ */
/* About                                                              */
/* ------------------------------------------------------------------ */

export type Skill = { name: string; Icon: IconType };
export type AboutItem = { title: string; stage?: string; skills?: Skill[]; chips?: string[] };
export type AboutTab = { title: string; items: AboutItem[] };

export const about = {
  title: { lead: "Crafting websites that", accent: "perform", tail: "beautifully." },
  intro:
    "I build and customize websites with WordPress, WooCommerce, Shopify, PHP and JavaScript. I specialise in custom theme development (child themes, hooks and filters, ACF, custom post types), page speed optimisation, technical SEO, site migrations and third-party integrations like payment gateways, CRMs and shipping APIs.",
  counters: [
    { value: 4, suffix: "+", label: "Years of experience." },
    { value: 50, suffix: "+", label: "Client projects delivered." },
    { value: 3, suffix: "", label: "Companies worked with." },
    { value: 25, suffix: "+", label: "Tools & technologies." },
  ] as { value: number; decimals?: number; suffix: string; label: string }[],
  tabs: [
    {
      title: "skills",
      items: [
        {
          title: "CMS & E-commerce",
          skills: [
            { name: "WordPress", Icon: FaWordpress },
            { name: "WooCommerce", Icon: SiWoocommerce },
            { name: "Shopify", Icon: SiShopify },
            { name: "Elementor", Icon: SiElementor },
          ],
          chips: ["Shopify Liquid", "Gutenberg", "Divi", "WPBakery", "ACF"],
        },
        {
          title: "Frontend",
          skills: [
            { name: "HTML5", Icon: FaHtml5 },
            { name: "CSS3", Icon: FaCss3Alt },
            { name: "JavaScript", Icon: FaJs },
            { name: "Bootstrap", Icon: SiBootstrap },
            { name: "Tailwind CSS", Icon: SiTailwindcss },
          ],
        },
        {
          title: "Backend",
          skills: [
            { name: "PHP", Icon: FaPhp },
            { name: "MySQL", Icon: SiMysql },
            { name: "Git", Icon: FaGitAlt },
          ],
          chips: ["Hooks & Filters", "Custom Post Types", "REST API"],
        },
        {
          title: "Familiar with",
          skills: [
            { name: "React", Icon: FaReact },
            { name: "Next.js", Icon: SiNextdotjs },
          ],
        },
        {
          title: "Practices",
          chips: ["Page Speed Optimisation", "Technical SEO", "Site Migration", "Responsive Web Design"],
        },
      ],
    },
    {
      title: "tools",
      items: [
        {
          title: "Editors & Debugging",
          skills: [
            { name: "VS Code", Icon: VscVscode },
            { name: "Chrome DevTools", Icon: SiGooglechrome },
          ],
          chips: ["Sublime Text", "XAMPP", "Query Monitor"],
        },
        {
          title: "AI Tools",
          skills: [
            { name: "Claude Code", Icon: SiClaude },
            { name: "ChatGPT", Icon: FaRobot },
          ],
          chips: ["Google Antigravity"],
        },
        {
          title: "Design",
          skills: [{ name: "Figma", Icon: FaFigma }],
        },
        {
          title: "Hosting & Analytics",
          skills: [
            { name: "cPanel", Icon: SiCpanel },
            { name: "Google Analytics (GA4)", Icon: SiGoogleanalytics },
            { name: "Google Tag Manager", Icon: SiGoogletagmanager },
          ],
          chips: ["SiteGround", "WP Engine", "CDN", "SSL"],
        },
      ],
    },
    {
      title: "education",
      items: [
        {
          title: "B.E. Information Technology - MGM's College of Engineering & Technology, Kamothe",
          stage: "2020",
        },
        { title: "Diploma in Information Technology - Pillai HOC Polytechnic, Rasayani", stage: "2016" },
        { title: "Secondary School Certificate - Ramchandra Mhatre Vidyalaya", stage: "2012" },
      ],
    },
    {
      title: "credentials",
      items: [
        { title: "Full-Stack Web Development - Great Learning (Online Course)", stage: "2024" },
        { title: "Languages - Marathi, English, Hindi" },
      ],
    },
  ] as AboutTab[],
};

/* ------------------------------------------------------------------ */
/* Services                                                           */
/* ------------------------------------------------------------------ */

export type Service = { title: string; description: string; Icon: IconType };

export const services = {
  intro:
    "From full WordPress builds to day-to-day maintenance, here's how I help businesses run fast, reliable websites.",
  items: [
    {
      title: "WordPress Development",
      description: "Custom WordPress websites built with Elementor, designed to be easy for you to manage.",
      Icon: FaWordpress,
    },
    {
      title: "WooCommerce Stores",
      description: "Online stores set up, customised and maintained with WooCommerce.",
      Icon: FaCartShopping,
    },
    {
      title: "Shopify Stores",
      description: "Shopify stores set up and customised: products, payments, shipping, apps and Liquid theme edits.",
      Icon: SiShopify,
    },
    {
      title: "Theme & Plugin Customisation",
      description: "Child themes, hooks and filters, ACF and custom post types, tailored to your business in PHP, CSS and JavaScript.",
      Icon: FaPuzzlePiece,
    },
    {
      title: "Performance Optimisation",
      description: "Faster sites with caching, WebP images, lazy loading, plugin cleanup and CDN setup.",
      Icon: FaGaugeHigh,
    },
    {
      title: "SEO & Analytics",
      description: "SEO best practices with Google Analytics (GA4) and Tag Manager tracking.",
      Icon: FaMagnifyingGlassChart,
    },
    {
      title: "API Integration",
      description: "Payment gateways, SMTP forms, WhatsApp, CRMs and shipping APIs connected to your website.",
      Icon: FaPlug,
    },
  ] as Service[],
};

/* ------------------------------------------------------------------ */
/* Work                                                               */
/* ------------------------------------------------------------------ */

export type Project = {
  title: string;
  domain: string;
  Icon: IconType;
  // Gradient used for the generated thumbnail when there's no screenshot.
  colors: [string, string];
  // Screenshot in /public — replaces the generated thumbnail.
  image?: string;
};

// 4 projects are shown per slide; a "your website could be next" card is added at the end.
export const work = {
  intro:
    "Live websites I've built and maintained for clients in trade, logistics, real estate, travel and consulting. Hover a project to visit it.",
  projects: [
    { title: "Ekaa Marine", domain: "ekaamarine.com", Icon: FaShip, colors: ["#0ea5e9", "#1e3a8a"], image: "/projects/ekaamarine.jpg" },
    { title: "Commix", domain: "itscommix.com", Icon: FaLeaf, colors: ["#16a34a", "#14532d"] },
    { title: "Sora Shipping", domain: "soraship.com", Icon: FaShip, colors: ["#1d4ed8", "#172554"] },
    { title: "Ways2Wander", domain: "ways2wander.com", Icon: FaPassport, colors: ["#e11d48", "#7c2d12"], image: "/projects/ways2wander.jpg" },
    { title: "Sharda Sales", domain: "sharda-sales.com", Icon: FaShip, colors: ["#f59e0b", "#78350f"], image: "/projects/sharda-sales.jpg" },
    { title: "Srijan Enterprises", domain: "srijanenterprises.in", Icon: FaBoxesStacked, colors: ["#2563eb", "#0f172a"], image: "/projects/srijanenterprises.jpg" },
    { title: "Realtevo", domain: "realtevo.in", Icon: FaChartLine, colors: ["#a16207", "#1c1917"], image: "/projects/realtevo.jpg" },
    { title: "AK Enterprises", domain: "ak-enterprise.in", Icon: FaTruckFast, colors: ["#ca8a04", "#1c1917"] },
    { title: "Shivalik Tradelink", domain: "shivaliktradelink.in", Icon: FaBoxesStacked, colors: ["#0284c7", "#082f49"] },
    { title: "Mira Consultants", domain: "miraconsultants.in", Icon: FaHandshake, colors: ["#7c3aed", "#2e1065"] },
    { title: "Antsra", domain: "antsra.com", Icon: FaChartLine, colors: ["#c026d3", "#3b0764"] },
    { title: "Golden Beaver Immigration", domain: "goldenbeaverimmigration.com", Icon: FaPassport, colors: ["#d97706", "#451a03"] },
  ] as Project[],
};

/* ------------------------------------------------------------------ */
/* Experience                                                         */
/* ------------------------------------------------------------------ */

export type Job = { company: string; role: string; period: string; points: string[] };

export const experience: Job[] = [
  {
    company: "Blueiris",
    role: "Web Developer",
    period: "Sep 2024 - Mar 2026",
    points: [
      "Built and customized Shopify stores for 1 year: products, payments, shipping, apps and Liquid edits.",
      "Built WordPress landing pages and fixed layout and code bugs using PHP, CSS and JavaScript.",
      "Improved technical SEO and page speed, set up GA4 and GTM, and published 10–20 SEO blogs a month.",
    ],
  },
  {
    company: "Equitable IT Services",
    role: "WordPress Developer",
    period: "May 2023 - Aug 2024",
    points: [
      "Customized themes and plugins for 10–20 client sites using child themes, hooks, ACF and custom post types.",
      "Sped up client sites with caching, WebP images, lazy loading, plugin cleanup and CDN setup.",
      "Fixed responsive bugs, plugin conflicts, malware infections, and SMTP and checkout issues.",
    ],
  },
  {
    company: "Mumbai Web Design",
    role: "WordPress Developer",
    period: "Dec 2021 - Apr 2023",
    points: [
      "Built and maintained 20+ responsive WordPress websites, including 4+ WooCommerce online stores.",
      "Integrated payment gateways, SMTP forms, WhatsApp, CRMs and shipping APIs; migrated sites between hosts.",
    ],
  },
];

/* ------------------------------------------------------------------ */
/* Contact                                                            */
/* ------------------------------------------------------------------ */

export const contact = {
  title: { lead: "Let's", accent: "connect." },
  intro: "Need a new website, a WordPress or Shopify fix, or help with speed and SEO? Drop me a message.",
};
