import Image from "next/image";
import { ImageData, holidayData } from "~/constants";

const Holiday = () => {
  return (
    <section
      className="mx-auto mb-20 flex w-[93%] flex-col items-center rounded-2xl bg-secondaryBG px-2 py-4 capitalize dark:bg-borderClrDark lg:mx-20 lg:flex-row"
      id="holiday-themes"
    >
      <Image
        width={1000}
        height={1000}
        src={ImageData.holiday}
        alt="main-Img"
        className="pointer-events-none w-56 lg:ml-[-90px] lg:w-96"
      />
      <div className="flex flex-col gap-1 text-left">
        <h1 className="text-3xl">Explore</h1>
        <h1 className="text-5xl font-bold uppercase">Holidays</h1>
        <h1 className="text-2xl">By Theme</h1>
        <h1 className="w-[268px]">Our Speical curated Packages</h1>
      </div>
      <div className="mt-4 grid grid-cols-3 gap-x-4 lg:ml-14 lg:mt-0">
        {holidayData.map((item) => {
          return (
            <div
              key={item.id}
              className="border-2 border-borderClr bg-white pb-1 text-center dark:border-borderClrDark dark:bg-secondaryBG md:w-[180px]"
            >
              <Image
                src={item.imgSrc}
                width={1000}
                height={1000}
                alt=""
                className="pointer-events-none h-24 w-[180px] p-1 md:h-40"
              />
              <h1 className="py-1 text-xs md:text-sm">{item.name}</h1>
              <hr className="shadow-textLight mx-auto mb-2 h-[1px] w-[90%] bg-textDark shadow-sm" />
              <div className="grid grid-cols-2 gap-x-3 px-2">
                {item.places.map((elem, index) => {
                  return (
                    <a
                      href="#"
                      className="border-primaryLight mx-auto my-1 w-full border-2 py-0.5 text-[9px] capitalize"
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
