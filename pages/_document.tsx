import { Html, Head, Main, NextScript } from "next/document";

const siteURL = process.env.NEXT_PUBLIC_SITE_URL;

export default function Document() {
  return (
    <Html>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;700&display=swap"
          rel="stylesheet"
        />

        <meta
          name="description"
          content="Soy Carlos Peña, soy desarrollador web especializado principalmente en el Front-End y este es mi sitio web."
        />
        <meta property="og:title" content="Portafolio de Carlos Peña" />
        <meta
          property="og:description"
          content="Soy Carlos, soy desarrollador web y este es mi portafolio."
        />
        <meta property="og:url" content={`${siteURL}`} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content={`${siteURL}/images/preview.jpg`} />
        <meta property="og:image" content={`${siteURL}/images/preview.jpg`} />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
