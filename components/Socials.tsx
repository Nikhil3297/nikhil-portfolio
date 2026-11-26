import { socials } from "@/lib/data";

const Socials = () => (
  <div className="flex items-center gap-x-2 text-lg">
    {socials.map(({ name, href, Icon }) => {
      const isExternal = href.startsWith("http");

      return (
        <a
          key={name}
          href={href}
          target={isExternal ? "_blank" : undefined}
          rel={isExternal ? "noreferrer noopener" : undefined}
          title={name}
          aria-label={name}
          className="w-9 h-9 rounded-full flex items-center justify-center hover:bg-accent transition-all duration-300"
        >
          <Icon aria-hidden />
        </a>
      );
    })}
  </div>
);

export default Socials;
