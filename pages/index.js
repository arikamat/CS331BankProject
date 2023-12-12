import { Inter } from 'next/font/google'
import Head from 'next/head'

import Credo from '../components/credo'
import Footer from '../components/footer'
import Homepage from '../components/homepage'
import Navbar from '../components/navbar'


const inter = Inter({ subsets: ['latin'] })
export default function Home() {
  return (
    <div>
      <Head>
        <title>D&A Bank</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Navbar/>
        <Credo/>
        <Homepage/>
        <Footer/>
      </main>

      
      
    </div>
  )
}
