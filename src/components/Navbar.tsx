import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { signOut, useSession } from "next-auth/react";
import { Menu, LogOut, CalendarCheck2, User } from "lucide-react";

import { DarkTheme } from "~/utils";
import { ImageData, NavMenus } from "~/constants";
import { useAppStore } from "~/store";

const Navbar = () => {
  const { data: session } = useSession();
  const pathname = usePathname();
  const { setLoginModal } = useAppStore();

  const [showMenu, setShowMenu] = useState(false);

  return (
    <header className="fixed left-1/2 top-5 z-50 flex h-[72px] w-[96%] -translate-x-1/2 items-center justify-between rounded-2xl bg-transparent shadow backdrop-blur-md">
      <div>
        <Image
          width={1000}
          height={1000}
          src={ImageData.logo}
          alt="logo"
          className="h-48 w-48"
        />
      </div>
      <nav
        className={`absolute top-16 flex w-full flex-col items-center gap-5 py-3 text-lg transition-all duration-500 ease-in-out md:static md:w-auto md:flex-row md:gap-5 lg:gap-10 ${
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
      </nav>
      <div
        className={`mr-4 flex items-center ${session ? "md:gap-2" : "md:gap-7"}`}
      >
        <div onClick={() => !session && setLoginModal(true)}>
          <button
            className={`flex items-center justify-between gap-3 text-black dark:text-white md:py-2 md:text-base ${session ? "md:px-4" : "bottone1 md:px-7"}`}
          >
            <span className="font-thin">
              {session ? session.user.username : "LogIn"}
            </span>
            {session && (
              <div className="group relative">
                <Image
                  src={`https://avatar.iran.liara.run/username?username=${session.user.username}`}
                  alt="avatar"
                  height={32}
                  width={32}
                  className="rounded-full border-2 border-white/90"
                />
                <div className="absolute right-0 top-10 z-[9999] flex min-w-32 flex-col items-center justify-center gap-1 rounded-lg bg-black/90 p-1 text-[14px] text-white opacity-0 backdrop-blur-lg transition-all duration-300 group-hover:opacity-100">
                  <span className="flex w-full items-center justify-start gap-2 rounded-lg py-1.5 pl-2 hover:bg-white/15">
                    <User size={16} /> Profile
                  </span>
                  <span className="flex w-full items-center justify-start gap-2 rounded-lg py-1.5 pl-2 hover:bg-white/15">
                    <CalendarCheck2 size={16} /> Bookings
                  </span>
                  <span
                    className="flex w-full items-center justify-start gap-2 rounded-lg py-1.5 pl-2 hover:bg-white/15"
                    onClick={() => signOut({ redirect: false })}
                  >
                    <LogOut size={16} /> Logout
                  </span>
                </div>
              </div>
            )}
          </button>
        </div>
        <Menu
          size={32}
          className="md:hidden"
          onClick={() => setShowMenu(!showMenu)}
        />
        <DarkTheme />
      </div>
    </header>
  );
};

export default Navbar;
