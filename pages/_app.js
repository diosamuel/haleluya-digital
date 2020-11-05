import { useEffect } from "react";
import { useRouter } from "next/router";
import * as gtag from "../lib/gtag";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  useEffect(() => {
    const handleRouteChange = (url) => {
      if (process.env.NODE_ENV === "production") {
        gtag.pageview(url);
      }
    };
    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routerChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  return <Component {...pageProps} />;
}

export default MyApp;
