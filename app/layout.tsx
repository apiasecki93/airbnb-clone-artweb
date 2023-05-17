// import Modal from './components/modals/Modal'
import Navbar from './components/navbar/Navbar'
import RegisterModal from './components/modals/RegisterModal'



import './globals.css'
import { Nunito } from 'next/font/google'
import ToasterProvider from './providers/ToasterProvider'

const nunitoFont = Nunito({ subsets: ['latin'] })

export const metadata = {
  title: 'Airbnb',
  description: 'Airbnb Clone',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={nunitoFont.className}>
        {/* <Modal title="Halo" isOpen/> */}
        <ToasterProvider />
        <RegisterModal />
        <Navbar />
        {children}</body>
    </html>
  )
}
