import Image from "next/image";
import { ImageData } from "~/constants";
import { SearchBar } from "~/components";

const { leaves, leaves2 } = ImageData;

const Hero = () => {
  return (
    <main className="flex h-screen w-full flex-col items-center justify-center">
      <Image
        width={1000}
        height={1000}
        src={leaves}
        alt="leaves"
        className="absolute left-6 top-[15%] w-24 rotate-[20deg] opacity-80 md:top-[75%] md:w-52 lg:top-[70%] lg:w-36"
      />
      <div className="mt-24 w-full text-center md:mt-16 lg:w-[60%]">
        <h1 className="text-3xl font-bold md:pb-5 md:text-7xl lg:pb-2">
          It&apos;s A Big World Out
        </h1>
        <h1 className="pt-2 text-3xl font-bold md:text-7xl">
          There, Go Explore.
        </h1>
      </div>
      <h1 className="my-6 text-center font-semibold md:my-10 md:text-2xl lg:my-10">
        We always Makes our customer happy by providing many choices
      </h1>
      <SearchBar />
      <Image
        width={1000}
        height={1000}
        src={leaves2}
        alt="leaves"
        className="absolute right-8 top-[15%] w-24 -rotate-[20deg] opacity-70 md:w-52 lg:top-[20%] lg:w-36"
      />
    </main>
  );
};

export default Hero;
