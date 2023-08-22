import Header from '@/components/Header'
import './globals.css'
import Footer from '@/components/Footer'
import Script from "next/script";

export const metadata = {
  title: "Portfolio - Muzammil",
  description: "Muzammil Loya's Portfolio",
  keywords: ["Web Developer", "Full stack Developer", "Developer for hire"],
  verification: { google: "zlT0pnlw_0XvL7gPOhY1rwmoUUDMQOKcbqyhVRNcEBc" },
  category: "technology",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-screen">
      {/* <!-- Google tag (gtag.js) --> */}
      <Script
        strategy="lazyOnload"
        src="https://www.googletagmanager.com/gtag/js?id=G-7DMPFKPXZH"
      />
      <Script strategy="lazyOnload" id="google-analytics">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
 
          gtag('config', 'G-7DMPFKPXZH');
        `}
      </Script>
      <body className="flex-col h-screen ">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
