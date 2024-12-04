import Image from "next/image";
import { ImageData, holidayData } from "~/constants";

const Holiday = () => {
  return (
    <section
      className="bg-secondaryBG dark:bg-borderClrDark mx-auto my-16 flex w-[93%] flex-col items-center rounded-2xl px-2 py-4 capitalize lg:mx-20 lg:flex-row"
      id="holiday-themes"
    >
      <Image
        width={1000}
        height={1000}
        src={ImageData.holiday}
        alt="main-Img"
        className="w-56 lg:ml-[-90px] lg:w-96"
      />
      <div className="flex flex-col gap-1 text-left">
        <h1 className="text-2xl">Explore</h1>
        <h1 className="text-5xl font-bold uppercase">Holidays</h1>
        <h1 className="text-xl">By Theme</h1>
        <h1 className="w-[268px]">Pick From Our Speical curated Packages</h1>
      </div>
      <div className="mt-4 grid grid-cols-3 gap-x-4 lg:ml-14 lg:mt-0">
        {holidayData.map((item) => {
          return (
            <div
              key={item.id}
              className="dark:bg-secondaryBG border-borderClr dark:border-borderClrDark border-2 bg-white pb-1 text-center md:w-[180px]"
            >
              <Image
                src={item.imgSrc}
                width={180}
                height={1000}
                alt=""
                className="h-24 p-1 md:h-40"
              />
              <h1 className="py-1 text-xs md:text-sm">{item.name}</h1>
              <hr className="bg-textDark shadow-textLight mx-auto mb-2 h-[1px] w-[90%] shadow-sm" />
              <div className="flex flex-wrap">
                {item.places.map((elem, index) => {
                  return (
                    <a
                      href="#"
                      className="border-primaryLight mx-auto my-1 border-2 p-1 text-[8px] capitalize"
                      key={index}
                    >
                      {elem}
                    </a>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Holiday;
