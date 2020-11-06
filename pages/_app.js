import { useEffect } from "react";
import Router, { useRouter } from "next/router";
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import * as gtag from "../lib/gtag";
import "../styles/globals.css";

// Bind Router events
Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

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
