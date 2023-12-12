import { useRouter } from 'next/router';
import Head from "next/head";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Transactions from '@/components/transactions';

const TransactionsPage = () => {
    const router = useRouter();
    console.log("query")
    console.log(router.query);
    if (router.query.fromAccountsPage !== 'true') {
        console.log("rerouting 12")
        router.push('/');
        return null; // Return null to avoid rendering anything on this page
    }


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
                    <Transactions data={router.query}/>
                </div>
            </main>
            <Footer />



        </div>

    );
};

export default TransactionsPage;
