import { SessionProvider } from "next-auth/react";
import { type Session } from "next-auth";
import { type AppType } from "next/app";
import { useEffect, useState } from "react";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Lenis from "lenis";

import "~/styles/globals.css";

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => lenis.destroy();
  }, []);

  const [queryClient] = useState(() => new QueryClient());
  return (
    <SessionProvider session={session}>
      <QueryClientProvider client={queryClient}>
        <Component {...pageProps} />
      </QueryClientProvider>
    </SessionProvider>
  );
};

export default MyApp;
