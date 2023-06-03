import Header from '@/components/Header'
import './globals.css'
import Footer from '@/components/Footer'


export const metadata = {
  title: 'Portfolio - Muzammil',
  description: 'Muzammil Loya\'s Portfolio',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className='h-screen'>
      <body className='flex-col h-screen'>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
