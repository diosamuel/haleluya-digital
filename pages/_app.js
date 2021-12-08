import { useEffect } from "react";
import Script from "next/script";
import { useRouter } from "next/router";
import NProgress from "nprogress";
import "nprogress/nprogress.css";
import "../styles/globals.css";
import "react-awesome-button/dist/styles.css";
import "react-awesome-button/dist/themes/theme-blue.css";

const isProduction = process.env.NODE_ENV === "production";

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

  return (
    <>
      {isProduction && (
        <Script id="google-tag-manager" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-KR6256Z');
          `}
        </Script>
      )}
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
