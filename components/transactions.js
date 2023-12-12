import { useContext, useEffect, useState } from "react";
import { LoginCtx } from "@/context/contexts";
import axios from "axios";
import { useRouter } from 'next/navigation'
import Link from "next/link";


export default function Transactions(props) {
    const router = useRouter()
    const { user, setUser, loggedIn, setLoggedIn } = useContext(LoginCtx)
    const [transactions, setTransactions] = useState([]);
    // console.log("props")
    // console.log(props)
    useEffect(() => {
        const fetchData = async () => {
            try {
                if (!loggedIn) {

                    router.push('/login');
                    return;
                }
                if (!("account_number" in props.data)) {
                    router.push('/');
                }
                const transact = await axios.post("/api/gettransactions", props.data);
                const transRes = transact.data
                // console.log(transRes)
                for (const obj in transRes) {
                    // console.log("obj")
                    // console.log(obj)
                    transRes[obj]["TRANSACTION_DATE"] = transRes[obj]["TRANSACTION_DATE"].split('T')[0]
                }
                setTransactions(transRes);
                // console.log(transRes);
            } catch (error) {
                console.log(error)
            }
        };

        fetchData();
    }, [loggedIn, router]);



    return (

        <div className="w-full lg:w-3/4 xl:w-2/3 p-4 bg-white rounded-md shadow-md">
            <div className="container mx-auto p-4">
                <h1 className="text-3xl font-bold mb-4">Transactions</h1>

                <div className="bg-gray-300 flex font-bold">
                    <div className="flex-1 p-2">Transaction ID</div>
                    <div className="flex-1 p-2">Transaction Code</div>
                    <div className="flex-1 p-2">Charge</div>
                    <div className="flex-1 p-2">Date</div>
                    <div className="flex-1 p-2">Amount</div>
                </div>

                {transactions.map(transaction => (
                    <div className="block border-t  flex" key={transaction.TRANSACTION_ID}>
                        <div className="flex-1 p-2">{transaction.TRANSACTION_ID}</div>
                        <div className="flex-1 p-2">{transaction.TRANSACTION_CODE}</div>
                        <div className="flex-1 p-2">${transaction.TRANSACTION_CHARGE}</div>
                        <div className="flex-1 p-2">{transaction.TRANSACTION_DATE}</div>
                        <div className="flex-1 p-2">${transaction.TRANSACTION_AMOUNT}</div>
                    </div>
                ))}
            </div>
        </div>
    );
}