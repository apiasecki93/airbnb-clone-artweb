// import Modal from './components/modals/Modal'
import Navbar from './components/navbar/Navbar'
import RegisterModal from './components/modals/RegisterModal'
import LoginModal from './components/modals/LoginModal'
import SearchModal from './components/modals/SearchModal'
import RentModal from './components/modals/RentModal'



import './globals.css'
import { Nunito } from 'next/font/google'
import ToasterProvider from './providers/ToasterProvider'
import getCurrentUser from './actions/getCurrentUser'

const nunitoFont = Nunito({ subsets: ['latin'] })

export const metadata = {
  title: 'Airbnb',
  description: 'Airbnb Clone',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const currentUser = await getCurrentUser();
  return (
    <html lang="en">
      <body className={nunitoFont.className}  >
        {/* <Modal title="Halo" isOpen/> */}
        <ToasterProvider />
        <SearchModal />
        <RentModal />
        <LoginModal />
        <RegisterModal />
        <Navbar currentUser={currentUser}/>
        <div className='pb-20 pt-28'>
          {children}
        </div>
      </body>
    </html>
  )
}
