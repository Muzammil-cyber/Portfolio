"use client";
import Script from "next/script";

const GTag = () => {
  return (
    <>
      <Script
        // strategy="lazyOnload"
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-7DMPFKPXZH"
      />
      <Script
        //   strategy="lazyOnload"
        id="google-analytics"
      >
        {`
      window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());

gtag('config', 'G-7DMPFKPXZH');
      `}
      </Script>
    </>
  );
};

export default GTag;
