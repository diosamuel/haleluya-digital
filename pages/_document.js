import Document, { Html, Head, Main, NextScript } from "next/document";
const isProduction = process.env.NODE_ENV === "production";

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="in">
        <Head>
          <meta name="application-name" content="Doding Haleluya Digital" />
          <meta name="google" content="notranslate" />
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
          <meta name="og:image" content="/treble-logo.png" />
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
