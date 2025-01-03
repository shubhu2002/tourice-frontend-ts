import { Instagram, Facebook, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="flex w-full flex-col pt-6 font-medium">
      <hr className="bg-textLight my-6 h-[2px]" />
      <div className="my-6 mb-6 flex w-full flex-col flex-wrap items-center justify-evenly gap-6 md:flex-none md:flex-row">
        <h1 className="w-auto text-xl md:text-2xl">
          Explore The World With Us......
        </h1>
        <div className="flex gap-16">
          <a href="#" className="hover:animate-pulse">
            <Facebook />
          </a>
          <a href="#" className="hover:animate-pulse">
            <Youtube />
          </a>
          <a href="#" className="hover:animate-pulse">
            <Instagram />
          </a>
        </div>
      </div>
      <div className="mx-auto w-[90%] text-center text-sm">
        <h1 className="my-3 text-sm font-normal md:text-base">
          Design & Developed By Shubhanshu Saxena.
        </h1>
      </div>
    </footer>
  );
};

export default Footer;
