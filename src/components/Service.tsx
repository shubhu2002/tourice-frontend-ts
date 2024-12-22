import Image from "next/image";
import { ImageData } from "~/constants";

const Service = () => {
  const { booking, cc, custom, guide } = ImageData;

  return (
    <section className="mb-20 flex w-full flex-col items-center">
      <>
        <h1 className="mb-16 text-[30px] md:text-[44px]">We Know Best For</h1>
      </>
      <div className="grid w-full grid-cols-2 gap-y-9 md:grid-cols-4 lg:w-[80%]">
        <SubService
          icon={booking}
          text="Easy & Fast Booking"
          bg="bg-orange-200"
        />
        <SubService icon={guide} text="Best Guide" bg="bg-lime-200" />
        <SubService
          icon={custom}
          text="Extended Customization"
          bg="bg-orange-200"
        />
        <SubService icon={cc} text="Customer Care 24/7" bg="bg-lime-200" />
      </div>
    </section>
  );
};

export default Service;

interface SubServiceProps {
  icon: string;
  text: string;
  bg: string;
}

const SubService = ({ icon, text, bg }: SubServiceProps) => {
  return (
    <div className="flex flex-col items-center gap-2">
      <div
        className={`flex h-[110px] w-[110px] items-center justify-center rounded-full md:h-28 md:w-28 ${bg}`}
      >
        <Image
          src={icon}
          alt="logos"
          width={1000}
          height={1000}
          className="pointer-events-none w-[60px] object-contain md:w-[65px]"
        />
      </div>
      <h1 className="max-w-28 text-center text-sm md:text-base">{text}</h1>
    </div>
  );
};
