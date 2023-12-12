import prisma from "./db";

export default async function handler(req, res) {
    if (req.method === "POST") {

        const acc = parseInt(req.body.account_number);


        const transactions = await prisma.transaction.findMany({
            where: {
                TRANSACTION_ACCOUNT_NUMBER: acc,
            }
        });
        if (!transactions) {
            return res.status(404).json({ error: 'Account number not found' });
        }
        
        return res.status(200).json(transactions);

    } else {
        return res.status(405).json({ error: "Method Not Allowed" });
    }
}
