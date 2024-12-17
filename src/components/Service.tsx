import Image from "next/image";
import { ImageData } from "~/constants";

const Service = () => {
  const { booking, cc, custom, guide } = ImageData;

  return (
    <section className="mb-16 flex w-full flex-col items-center gap-12 py-2">
      <>
        <h1 className="font-Borel mb-4 text-3xl">We Know Best For</h1>
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
        className={`flex h-28 w-28 items-center justify-center rounded-full ${bg}`}
      >
        <Image
          height={1000}
          src={icon}
          alt="logos"
          width={65}
          className="pointer-events-none"
        />
      </div>
      <h1 className="w-28 text-center">{text}</h1>
    </div>
  );
};
