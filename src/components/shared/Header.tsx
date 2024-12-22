import Image from "next/image";
import { ImageData } from "~/constants";

const Header = ({ title }: { title: string }) => {
  return (
    <section className="relative mb-10 w-full">
      <h1 className="absolute left-1/2 top-1/2 z-40 mt-8 w-full -translate-x-1/2 -translate-y-1/2 text-center font-borel text-4xl tracking-widest text-lime-50 md:text-5xl">
        {title}
      </h1>
      <Image
        src={ImageData.img2}
        alt="img"
        width={1000}
        height={1000}
        className="h-80 w-full bg-center object-cover px-1 brightness-50"
      />
    </section>
  );
};

export default Header;
