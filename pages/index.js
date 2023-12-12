import { Inter } from 'next/font/google'
import Head from 'next/head'

import { LoginCtx } from '@/context/contexts'
import { useContext } from 'react'
import Credo from '../components/credo'
import Footer from '../components/footer'
import Homepage from '../components/homepage'
import Navbar from '../components/navbar'

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
        <Navbar/>
        <Credo/>
        <Homepage/>
        <Footer/>
    </main>



        </div>
    )
}
