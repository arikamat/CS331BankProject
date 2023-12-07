import { Inter } from 'next/font/google'
import Head from 'next/head'

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
                <Navbar />
                <div className="relative flex flex-col items-center justify-center min-h-screen overflow-hidden">
                    <Homepage />
                </div>
                <Footer />
            </main>



        </div>
    )
}
