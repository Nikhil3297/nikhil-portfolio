import Socials from "@/components/Socials";
import { site } from "@/lib/data";

const Footer = () => (
  <footer className="relative bg-white border-t border-line pt-8 pb-28 xl:pb-8">
    <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-center">
      <p className="text-sm">
        © {new Date().getFullYear()} {site.fullName}. All rights reserved.
      </p>
      <Socials />
    </div>
  </footer>
);

export default Footer;
