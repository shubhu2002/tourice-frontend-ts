import Image from "next/image";
import Link from "next/link";
import { Star } from "lucide-react";
import { motion } from "framer-motion";

import type { TourCardPops } from "~/types";

const TourCard = ({ tour }: { tour: TourCardPops }) => {
  return (
    <motion.div
      className="max-h-[340px] w-full cursor-pointer rounded-lg border-2 border-borderClr p-2 text-xs hover:bg-black/5 dark:border-borderClrDark dark:bg-secondaryBG dark:hover:bg-white/5 md:w-[80%]"
      initial={{ scale: 1 }}
      transition={{ duration: 0.6 }}
      whileHover={{ scale: 1.05 }}
    >
      <Link href={`/tours/tour/${tour._id}`}>
        <div className="mb-3 h-full w-full overflow-hidden rounded-lg md:h-44 md:w-full">
          <Image
            src={tour.photo}
            width={1000}
            height={1000}
            alt="place"
            className="h-full w-full rounded-lg object-cover"
          />
        </div>
        <div className="ml-1">
          <h1 className="mb-2 text-xl font-medium">{tour.title}</h1>
          <h1 className="text-xs md:block md:w-[90%]">{tour.desc}</h1>
          <h1 className="flex w-full items-center justify-between py-2 font-sans">
            {tour.price}/-<span className="">per person</span>
            <Star
              size={16}
              strokeWidth={0.5}
              fill="Yellow"
              stroke="orangered"
              className="ml-28"
            />
            {tour.rating}
          </h1>
        </div>
      </Link>
    </motion.div>
  );
};
export default TourCard;
