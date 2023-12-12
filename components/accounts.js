import { useContext, useEffect, useState } from "react";
import { LoginCtx } from "@/context/contexts";
import axios from "axios";
import { useRouter } from 'next/navigation'
import Link from "next/link";


export default function Accounts() {
    const router = useRouter()
    const { user, setUser, loggedIn, setLoggedIn } = useContext(LoginCtx)
    const [accounts, setAccounts] = useState([]);
    useEffect(() => {
        // Define an asynchronous function and call it immediately
        const fetchData = async () => {
            try {
                if (!loggedIn) {
                    router.push('/login');
                    return;
                }
                console.log(user);
                const accts = await axios.post("/api/getaccounts", user);
                const data = [];
                for (const property in accts.data) {
                    const t = accts.data[property].account;
                    t["MOST_RECENT_ACCESS_DATE"] = t["MOST_RECENT_ACCESS_DATE"].split('T')[0]
                    data.push(t)
                }
                setAccounts(data);
                console.log(accounts);
            } catch (error) {
                console.log(error)
            }
        };

        fetchData();
    }, [loggedIn, router]);



    return (

        <div className="w-full lg:w-3/4 xl:w-2/3 p-4 bg-white rounded-md shadow-md">
    <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-4">Accounts</h1>

        <div className="bg-gray-300 flex font-bold">
            <div className="flex-1 p-2">Account Number</div>
            <div className="flex-1 p-2">Account Name</div>
            <div className="flex-1 p-2">Originating Branch ID</div>
            <div className="flex-1 p-2">Balance</div>
            <div className="flex-1 p-2">Most Recent Access Date</div>
        </div>

        {accounts.map(account => (
            <Link key={account.ACCOUNT_NUMBER} href={{
                pathname: '/transactions',
                query: { fromAccountsPage: true , account_number: account.ACCOUNT_NUMBER },
              }}>
                <div className="block border-t hover:bg-gray-200 flex">
                    <div className="flex-1 p-2">{account.ACCOUNT_NUMBER}</div>
                    <div className="flex-1 p-2">{account.NAME}</div>
                    <div className="flex-1 p-2">{account.ORIGINATING_BRANCH_ID}</div>
                    <div className="flex-1 p-2">{account.BALANCE}</div>
                    <div className="flex-1 p-2">{account.MOST_RECENT_ACCESS_DATE}</div>
                </div>
            </Link>
        ))}
    </div>
</div>
    );
}