import { useState } from "react";
import { DarkTheme } from "~/utils";
import { Menu } from "lucide-react";
import { ImageData } from "~/constants";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const { logo } = ImageData;

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const pathname = usePathname();
  console.log(pathname);
  const handleMenu = () => {
    setShowMenu(!showMenu);
  };

  const navData = [
    { title: "Home", url: "/" },
    { title: "About", url: "/about" },
    { title: "Tours", url: "/tour" },
    { title: "Contacts", url: "/contact" },
  ];

  return (
    <>
      <header className="fixed left-1/2 top-5 z-50 flex h-[72px] w-[96%] -translate-x-1/2 items-center justify-between rounded-2xl bg-transparent shadow backdrop-blur-md">
        <div>
          <Image
            width={1000}
            height={1000}
            src={logo}
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
          {navData.map((item, index) => {
            return (
              <Link
                href={item.url}
                key={index}
                className={`transition-bg w-full rounded-lg px-3 py-1.5 text-center duration-300 hover:bg-[rgba(0,0,0,0.05)] dark:hover:bg-[rgba(255,255,255,0.08)] md:w-auto`}
              >
                {item.title}
              </Link>
            );
          })}
        </nav>
        <div className="mr-4 flex items-center gap-2 lg:gap-8">
          <Link href="/login-register">
            <button className="bottone1 text-white md:px-7 md:py-2 md:text-base">
              <strong>LogIn</strong>
            </button>
          </Link>
          <Menu size={32} className="md:hidden" onClick={handleMenu} />
          <DarkTheme />
        </div>
      </header>
    </>
  );
};

export default Navbar;
