import Image from "next/image";
import Link from "next/link";
import { Star } from "lucide-react";
import { motion } from "framer-motion";

import type { TourCardPops } from "~/types";
import { useRouter } from "next/router";

const TourCard = ({ tour }: { tour: TourCardPops }) => {
  const { _id, title, price, desc, rating, photo } = tour;
  const { push } = useRouter();
  return (
    <motion.div
      className="w-44 cursor-pointer rounded-lg border-2 border-borderClr p-2 text-xs hover:bg-black/5 dark:border-borderClrDark dark:bg-secondaryBG dark:hover:bg-white/5 md:w-60"
      initial={{ scale: 1 }}
      transition={{ duration: 0.6 }}
      whileHover={{ scale: 1.05 }}
      onClick={() => void push(`/tour/${_id}`)}
    >
      <div className="mb-3 h-40 w-44 overflow-hidden rounded-lg md:h-44 md:w-full">
        <Image
          src={photo}
          width={1000}
          height={1000}
          alt="place"
          className="h-full w-full rounded-lg object-cover"
        />
      </div>
      <div>
        <h1 className="mb-2 text-xs font-bold md:text-base">{title}</h1>
        <h1 className="w-44 text-[9px] md:block md:w-56 md:text-xs">{desc}</h1>
        <h1 className="mb-1 flex items-center justify-between py-2 font-sans">
          {price}/-<span className="">per person</span>
          <Star
            size={16}
            strokeWidth={0.5}
            fill="Yellow"
            stroke="orangered"
            className="md:ml-16"
          />
          {rating}
        </h1>
        <Link
          href={`/tour/${_id}`}
          className="font-bold tracking-widest text-bookBtn hover:text-black dark:hover:text-white"
        >
          Book Now
        </Link>
      </div>
    </motion.div>
  );
};
export default TourCard;
