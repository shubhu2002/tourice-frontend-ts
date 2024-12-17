import Head from "next/head";
import { Merriweather, Borel } from "next/font/google";
import { Toaster } from "react-hot-toast";

import { Footer, Navbar, Loader, Login } from "~/components";
import { useAppStore } from "~/store";

const merriweather_font = Merriweather({
  subsets: ["latin"],
  weight: ["300", "400", "700", "900"],
  variable: "--font-merriweather",
});
const borel_font = Borel({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-borel",
});

const Layout = ({ children }: { children: React.ReactNode }) => {
  const { loading, loginModal } = useAppStore();
  return (
    <>
      <Head>
        <title>Tourcice : Tours & Travel</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div
        className={`min-h-screen w-full bg-yellow-50 text-black transition-all duration-150 ease-out dark:bg-[#121212] dark:text-lime-50 ${merriweather_font.className} ${borel_font.variable}`}
      >
        {loading && <Loader />}
        {loginModal && <Login />}
        <Navbar />
        {children}
        <Toaster
          position="top-center"
          toastOptions={{
            style: {
              fontFamily: merriweather_font.style.fontFamily,
              fontWeight: 600,
              fontSize: "14px",
            },
          }}
        />
        <Footer />
      </div>
    </>
  );
};

export default Layout;
