import Document, { Html, Head, Main, NextScript } from "next/document";
const isProduction = process.env.NODE_ENV === "production";

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          {isProduction && (
            <script
              dangerouslySetInnerHTML={{
                __html: `
                (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                })(window,document,'script','dataLayer','GTM-KR6256Z');
                `,
              }}
            />
          )}
          <meta name="application-name" content="Doding Haleluya Digital" />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta
            name="apple-mobile-web-app-status-bar-style"
            content="default"
          />
          <meta
            name="apple-mobile-web-app-title"
            content="Doding Haleluya Digital"
          />
          <meta
            name="description"
            content="Doding Haleluya Digital Simalungun na bayu. Ikembangkon sada putra Simalungun."
          />
          <meta name="format-detection" content="telephone=no" />
          <meta name="mobile-web-app-capable" content="yes" />
          <meta name="theme-color" content="#FFFFFF" />

          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/favicon-16x16.png"
          />
          <link rel="manifest" href="/site.webmanifest" />
          <link rel="shortcut icon" href="/favicon.ico" />
        </Head>
        <body>
          {isProduction && (
            <noscript>
              <iframe
                key="ga"
                src="https://www.googletagmanager.com/ns.html?id=GTM-KR6256Z"
                height="0"
                width="0"
                style={{ display: "none", visibility: "hidden" }}
              ></iframe>
            </noscript>
          )}
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
