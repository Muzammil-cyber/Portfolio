import Header from '@/components/Header'
import './globals.css'
import Footer from '@/components/Footer'
import GTag from "./gtag";

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
      <GTag />
      <body className="flex-col h-screen ">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
