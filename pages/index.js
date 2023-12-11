import { Inter } from 'next/font/google'
import Head from 'next/head'

import Footer from '../components/footer'
import Homepage from '../components/homepage'
import Navbar from '../components/navbar'
import { LoginCtx } from '@/context/contexts'
import { useContext } from 'react'

const inter = Inter({ subsets: ['latin'] })
export default function Home() {
    const {user, setUser, loggedIn, setLoggedIn} = useContext(LoginCtx)
    return (
        <div>
            {/* {loggedIn ? <h1> LOGGED IN as  {user.user}</h1> : <h1>Not Logged IN</h1> } */}
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
