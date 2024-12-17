import { Smile } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

const Confirmed = () => {
  return (
    <section className="absolute inset-0 grid min-h-screen w-full place-items-center bg-black/20 backdrop-blur">
      <motion.div
        className="flex flex-col items-center gap-5 rounded-xl border-2 border-black/50 bg-yellow-50 p-16 text-center dark:border-white/20 dark:bg-stone-900"
        initial={{ scale: 0.5 }}
        transition={{ duration: 0.35 }}
        whileInView={{ scale: 1 }}
      >
        <Smile
          size={96}
          fill="lightgreen"
          stroke="black"
          strokeWidth={1}
          className="dark:stroke-lime-700"
        />
        <h1 className="font-Borel mt-2 text-4xl">Thank You !!</h1>
        <h1 className="text-2xl">Your Booking Is Confirmed .....</h1>
        <Link href="/">
          <button className="bottone1 !px-7 !py-2 !text-base">
            <strong>Back To Home</strong>
          </button>
        </Link>
      </motion.div>
    </section>
  );
};

export default Confirmed;
