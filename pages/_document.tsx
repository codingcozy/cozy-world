import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta
          name="google-site-verification"
          content="a-yehRo3k3xv7fg6LqRaE8jlE42e5wP2bDE_2F849O4"
        />
        <link rel="stylesheet" href="/favicons/favicon.ico" />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/assets/favicons/favicon-16x16.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/assets/favicons/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="96x96"
          href="/assets/favicons/favicon-96x96.png"
        />
        <link rel="icon" href="/favicons/apple-icon-180x180.png" />
        <link rel="apple-touch-icon" href="/favicons/apple-icon-180x180.png" />
        <link rel="apple-touch-startup-image" href="/startup.png" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black" />
        <meta
          name="msapplication-config"
          content="/favicons/browserconfig.xml"
        />
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-QR9L0EBP6T"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-QR9L0EBP6T');`,
          }}
        ></script>
        <Script
          async
          src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4877378276818686`}
          strategy="lazyOnload"
          crossOrigin="anonymous"
        />
        <script
          async
          data-name="BMC-Widget"
          data-cfasync="false"
          src="https://cdnjs.buymeacoffee.com/1.0.0/widget.prod.min.js"
          data-id="cozycoder"
          data-description="Support me on Buy me a coffee!"
          data-message=""
          data-color="#FF813F"
          data-position="Right"
          data-x_margin="18"
          data-y_margin="18"
        ></script>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
