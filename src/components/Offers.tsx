import Image from "next/image";
import Link from "next/link";
import { offerData } from "~/constants";

const Offers = () => {
  return (
    <section
      className="my-12 flex w-full flex-col items-center gap-7 bg-secondaryBG py-12"
      id="offer"
    >
      <h1 className="mb-6 text-3xl font-bold">Get Exclusive Offers !!</h1>
      <div className="flex w-full flex-wrap justify-center gap-3 px-4 md:gap-10">
        {offerData.map((item) => {
          return (
            <div
              key={item.id}
              className="flex items-center rounded-md bg-white p-2 dark:bg-[rgba(255,255,255,0.1)]"
            >
              <Image
                src={item.imgSrc}
                height={1000}
                alt="img"
                width={100}
                className="h-24"
              />
              <div className="flex max-h-[96] flex-col pl-4">
                <p className="mb-2 w-44 text-xs">{item.desc}</p>
                <Link
                  href="/tour"
                  className="mb-2 cursor-pointer text-sm font-bold text-bookBtn hover:text-black dark:hover:text-white"
                >
                  Book Now
                </Link>
                <span className="text-right text-[7px]">
                  *Terms & Conditions Apply
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Offers;
