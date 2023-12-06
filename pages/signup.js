import Head from "next/head";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import CreateAcct from "@/components/signup";
export default function LoginPage() {
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
                    <CreateAcct/>
                </div>
            </main>
            <Footer />



        </div>

    );
}