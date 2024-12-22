import React, { useState } from "react";
import { useSession } from "next-auth/react";
import toast from "react-hot-toast";
import { AxiosError } from "axios";
import { IndianRupeeIcon, Star } from "lucide-react";

import type { BookingProps, TourCardPops } from "~/types";
import { useAppStore } from "~/store";
import { apiInstance } from "~/utils";

const Booking = ({ tour }: { tour: TourCardPops }) => {
  const { data: session } = useSession();
  const { setLoading, setConfirmBooking, setLoginModal } = useAppStore();

  const today = React.useMemo(() => new Date(), []);
  const tyear = today.getFullYear();
  const tmonth = today.getMonth() + 1;
  const tdate = today.getDate();

  const [bookingData, setBookingData] = useState<BookingProps>({
    userId: session?.user.username ?? "",
    userEmail: session?.user.email ?? "",
    fullName: "",
    phone: "",
    guests: 0,
    date: "",
    tourName: tour.title,
    totalAmount: 0,
  });

  const serviceFee = (
    (bookingData.guests === 0 ? 0 : 0.01 * tour.price) * bookingData.guests
  ).toFixed(2);

  const totalAmt =
    Number(tour.price) * Number(bookingData.guests) + Number(serviceFee);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setBookingData((prevData) => ({
      ...prevData,
      [name]: name === "phone" || name === "guests" ? Number(value) : value,
    }));
  };

  const handleSubmit = async () => {
    try {
      if (!session) {
        setLoginModal(true);
        return;
      }
      const { fullName, phone, guests, date, tourName } = bookingData;

      if (!fullName || !phone || !guests || !date || !tourName) {
        toast.error("Empty fields ");
        return;
      }

      setLoading(true);

      const { data } = await apiInstance.post<{
        status: boolean;
        data: BookingProps;
      }>("/booking/create", {
        ...bookingData,
        totalAmount: totalAmt,
      });

      if (data.status) {
        toast.success("Booking Confirmed !!");

        setLoading(false);
        setBookingData({
          ...bookingData,
          fullName: "",
          guests: 0,
          phone: "",
          date: "",
          totalAmount: 0,
        });

        setConfirmBooking(true);
      }
    } catch (error: unknown) {
      if (error instanceof AxiosError) {
        setLoading(false);
        toast.error(error.message);
      }
      setLoading(false);
      console.log(error);
    }
  };

  return (
    <>
      <div className="flex w-full flex-col rounded-lg border border-[rgba(109,107,107,0.49)] px-6 py-4">
        <div className="flex w-full justify-between">
          <h1 className="flex items-center text-xl">
            <IndianRupeeIcon size={20} /> {tour.price}/- per person
          </h1>
          <span className="flex items-center gap-1">
            <Star size={16} fill="yellow" stroke="orange" /> {tour.rating}
          </span>
        </div>

        <h1 className="pt-7 text-sm text-white/80">
          Please fill all the information below.
        </h1>
        <div className="flex flex-col gap-4 pt-3">
          <div className="flex flex-col gap-4 rounded-lg border border-inputBorder p-5">
            {/* full name */}
            <div className="txt_field2 relative z-[0] my-2 border-b border-gray-500">
              <input
                type="text"
                name="fullName"
                placeholder="Enter Full Name"
                value={bookingData.fullName}
                required
                pattern="[a-zA-Z\s]+"
                className="h-12 w-full border-none bg-inherit p-1 outline-none placeholder:text-xs placeholder:opacity-50"
                onChange={handleChange}
                autoComplete="off"
              />
              <span></span>
              <label
                htmlFor="fullName"
                className="dark:text-textLight pointer-events-none absolute left-1 top-2/4 z-50 -translate-y-2/4 text-sm text-textDark duration-500 md:text-base"
              >
                Full Name
              </label>
            </div>

            {/* contact no. */}
            <div className="txt_field2 relative my-2 border-b border-gray-500">
              <input
                type="text"
                placeholder="Enter Contact No."
                name="phone"
                value={bookingData.phone}
                required
                pattern="[0-9]{10}"
                onClick={(e) => e.currentTarget.select()}
                title="Enter 10 digits Phone Number"
                className="h-12 w-full border-none bg-inherit p-1 outline-none placeholder:text-xs placeholder:opacity-50"
                onChange={handleChange}
                autoComplete="off"
              />
              <span></span>
              <label
                htmlFor="fullName"
                className="dark:text-textLight pointer-events-none absolute left-1 top-2/4 z-50 -translate-y-2/4 text-sm text-textDark duration-500 md:text-base"
              >
                Contact No.
              </label>
            </div>
            <div className="flex w-full justify-between gap-2">
              <div className="txt_field2 relative my-2 flex w-[55%] flex-1 border-b border-gray-500">
                <input
                  type="date"
                  placeholder="Contact No."
                  min={`${tyear}-${tmonth.toString().padStart(2, "0")}-${tdate
                    .toString()
                    .padStart(2, "0")}`}
                  name="date"
                  value={bookingData.date}
                  required
                  className={`h-12 w-full border-none bg-inherit p-1 outline-none ${bookingData.date ? "text-base opacity-100" : "text-xs opacity-50"}`}
                  onChange={handleChange}
                  autoComplete="off"
                />
                <span></span>
                <label
                  htmlFor="fullName"
                  className="dark:text-textLight pointer-events-none absolute left-1 top-2/4 z-50 -translate-y-2/4 text-sm text-textDark duration-500 md:text-base"
                >
                  Tour Date
                </label>
              </div>
              <div className="txt_field2 relative my-2 flex w-full flex-1 border-b border-gray-500">
                <input
                  type="text"
                  placeholder="Guests"
                  name="guests"
                  value={bookingData.guests}
                  className={`h-12 w-full border-none bg-inherit pt-1 outline-none ${bookingData.guests > 0 ? "text-base opacity-100" : "text-xs opacity-50"}`}
                  min={1}
                  max={10}
                  title="Enter not more than 10 persons"
                  onChange={handleChange}
                  onClick={(e) => e.currentTarget.select()}
                  required
                  autoComplete="off"
                />
                <span></span>
                <label
                  htmlFor="fullName"
                  className="dark:text-textLight pointer-events-none absolute left-0 md:left-1 top-0 z-50 -translate-y-2/4 text-sm text-textDark duration-500 md:text-base"
                >
                  Total Guests
                </label>
              </div>
            </div>
          </div>

          <div className="flex w-full justify-between pt-3 text-sm">
            <h1>Total Guests</h1>
            <span>{bookingData.guests}</span>
          </div>
          <div className="flex w-full justify-between border-b border-inputBorder pb-2 text-sm">
            <h1>
              Other Charges (0.5%) <span></span>
            </h1>
            <span>₹ {serviceFee}</span>
          </div>
          <div className="flex w-full justify-between font-extrabold">
            <h1 className=" ">
              Total <span className="text-xs">(Incl. of all Taxes)</span>
            </h1>
            <span>₹{totalAmt}</span>
          </div>
          <button
            className="!md:px-7 bottone1 !py-2 !text-base"
            onClick={handleSubmit}
          >
            Book Now
          </button>
        </div>
      </div>
    </>
  );
};

export default Booking;
