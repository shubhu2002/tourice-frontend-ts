import { AxiosError } from "axios";
import Image from "next/image";
import { useState } from "react";
import toast from "react-hot-toast";
import { ImageData } from "~/constants";
import { apiInstance } from "~/utils";

const Subscribes = () => {
  const [email, setEmail] = useState<string>("");

  const handleSubmit = async () => {
    try {
      if (!email) {
        toast.error("Invalid or empty email !!");
      }
      const { data } = await apiInstance.post<{
        status: boolean;
        data: { email: string };
      }>("/subscribe/create", {
        email,
      });
      if (data.status) {
        toast.success("Congrats, You are now Subscribed !");
        setEmail("");
      }
    } catch (error) {
      if (error instanceof AxiosError) {
        console.log(error.message);
      }
    }
  };
  return (
    <section className="my-16 flex w-full flex-col-reverse items-center justify-around bg-lime-200 py-5 text-black md:flex-row">
      <div className="flex flex-col gap-3 text-center capitalize md:text-left">
        <h1 className="w-full text-xl font-bold md:w-80">
          subscribe now to get useful traveling information
        </h1>
        <div className="dark:bg-primaryDark mx-auto flex h-12 w-[350px] items-center justify-between bg-white px-1 md:mt-4 md:h-9 md:w-96">
          <input
            type="email"
            placeholder="Enter Your Email"
            className="w-full bg-transparent pl-2 pr-3 text-sm outline-none"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button className="bottone1 !rounded !p-2" onClick={handleSubmit}>
            <strong>Subscribe</strong>
          </button>
        </div>
        <p className="px-4 text-xs md:w-96 md:px-0">
          Update yourself with tourice by getting latest offers and updates on
          your mark
        </p>
      </div>
      <Image
        src={ImageData.subscribe}
        alt="img"
        height={1000}
        width={1000}
        className="mb-3 w-28 drop-shadow-2xl md:mb-0 md:w-52"
      />
    </section>
  );
};

export default Subscribes;
