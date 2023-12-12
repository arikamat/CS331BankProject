import Login from "@/components/login";
import Head from "next/head";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Accounts from "@/components/accounts";
export default function DispAccounts() {
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
                    <Accounts/>
                </div>
            </main>
            <Footer />



        </div>

    );
}