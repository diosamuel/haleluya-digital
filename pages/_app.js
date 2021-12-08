import { useEffect } from "react";
import { useRouter } from "next/router";
import NProgress from "nprogress";
import "nprogress/nprogress.css";
import "../styles/globals.css";
import "react-awesome-button/dist/styles.css";
import "react-awesome-button/dist/themes/theme-blue.css";

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  useEffect(() => {
    const handleRouteChange = () => {
      window.scrollTo({ top: 0 });
      NProgress.done();
    };
    router.events.on("routeChangeStart", () => NProgress.start());
    router.events.on("routeChangeComplete", handleRouteChange);
    router.events.on("routeChangeError", () => NProgress.done());
    return () => {
      router.events.off("routerChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  return <Component {...pageProps} />;
}

export default MyApp;
