import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import { usePathname } from "next/navigation";
import { signOut, useSession } from "next-auth/react";
import { Menu, LogOut, CalendarCheck2, X } from "lucide-react";
import toast from "react-hot-toast";
import { motion } from "framer-motion";

import { DarkTheme } from "~/utils";
import { NavMenus } from "~/constants";
import { useAppStore } from "~/store";

const Navbar = () => {
  const { data: session } = useSession();
  const pathname = usePathname();
  const { push } = useRouter();
  const { setLoginModal } = useAppStore();

  const [showMenu, setShowMenu] = useState(false);

  const handleLogout = async () => {
    try {
      void signOut({ redirect: false });
    } catch (error: unknown) {
      console.log(error);
    } finally {
      toast.success("Logout Successfully !");
      void push("/");
    }
  };

  return (
    <header className="fixed left-1/2 top-5 z-50 flex h-[66px] w-[96%] -translate-x-1/2 items-center justify-between rounded-2xl bg-transparent shadow backdrop-blur-md">
      {/* Menu Icon & Logo*/}
      <div className="ml-2 flex items-center">
        <div
          className="relative cursor-pointer md:hidden md:size-8 md:scale-100"
          onClick={() => setShowMenu(!showMenu)}
        >
          {showMenu ? <X /> : <Menu />}
        </div>
        <motion.nav
          initial={{ scale: 0.5 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 0.25 }}
          className={`absolute left-3 top-[70px] z-[9999] flex min-w-[80px] flex-col items-center justify-center gap-2 rounded-lg bg-black/90 p-3 text-base text-lime-100 backdrop-blur-lg md:hidden ${
            showMenu ? "flex" : "hidden"
          }`}
        >
          {NavMenus.map((item, index) => {
            return (
              <Link
                href={item.url}
                key={index}
                className={`${pathname === item.url && "bg-lime-100/15"} transition-bg w-full rounded-lg px-2 py-1 text-left duration-500 hover:bg-[rgba(0,0,0,0.05)] dark:hover:bg-lime-100/15`}
              >
                {item.title}
              </Link>
            );
          })}
        </motion.nav>
        <Link href={"/"}>
          <Image
            width={1000}
            height={1000}
            src={"/logo_crop.png"}
            alt="logo"
            className="-ml-2 h-32 w-32 object-contain md:ml-2 md:h-40 md:w-40"
          />
        </Link>
      </div>

      {/* Menus */}
      <motion.nav
        initial={{ scale: 0.5 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 0.5 }}
        className={`absolute top-16 hidden w-full flex-col items-center gap-5 py-3 text-lg md:static md:flex md:w-auto md:flex-row md:gap-5 lg:gap-10 ${
          showMenu
            ? "right-0 bg-[rgba(0,0,0,0.8)] text-lime-100"
            : "right-[-490px]"
        }`}
      >
        {NavMenus.map((item, index) => {
          return (
            <Link
              href={item.url}
              key={index}
              className={`${pathname === item.url && "text-[#fb923c]"} transition-bg w-full rounded-lg px-3 py-1.5 text-center duration-300 hover:bg-[rgba(0,0,0,0.05)] dark:hover:bg-[rgba(255,255,255,0.08)] md:w-auto`}
            >
              {item.title}
            </Link>
          );
        })}
      </motion.nav>

      {/*  User/Login &  theme icon*/}
      <div
        className={`mr-2 flex items-center md:mr-4 ${session ? "md:gap-2" : "md:gap-5"}`}
      >
        <div
          onClick={() => !session && setLoginModal(true)}
          className="mr-2 md:mr-0"
        >
          <button
            className={`flex items-center justify-between gap-1 text-black dark:text-white md:py-2 md:text-base ${session ? "md:px-4" : "bottone1 md:px-7"}`}
          >
            <span className="text-sm font-thin md:text-base">
              {session ? session.user.username : "LogIn"}
            </span>
            {session && (
              <div className="group relative">
                <Image
                  src={`https://avatar.iran.liara.run/username?username=${session.user.username}`}
                  alt="avatar"
                  height={1000}
                  width={1000}
                  className="size-6 rounded-full border-2 border-white/90 md:size-8"
                />
                <div className="absolute right-0 top-10 z-[9999] flex min-w-[140px] flex-col items-center justify-center gap-1 rounded-lg bg-black/90 p-1 text-[14px] text-white opacity-0 backdrop-blur-lg transition-all duration-300 group-hover:opacity-100">
                  <Link
                    href={"/bookings"}
                    className="flex w-full items-center justify-start gap-2 rounded-lg py-1.5 pl-2 hover:bg-white/15"
                  >
                    <CalendarCheck2 size={16} /> Bookings
                  </Link>
                  <span
                    className="flex w-full items-center justify-start gap-2 rounded-lg py-1.5 pl-2 hover:bg-white/15"
                    onClick={handleLogout}
                  >
                    <LogOut size={16} /> Logout
                  </span>
                </div>
              </div>
            )}
          </button>
        </div>
        <DarkTheme />
      </div>
    </header>
  );
};

export default Navbar;
