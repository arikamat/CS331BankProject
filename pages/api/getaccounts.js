import prisma from "./db";

export default async function handler(req, res) {
    if (req.method === "POST") {

        const data = req.body;


        const customercred = await prisma.customercredentials.findUnique({
            where: {
                email: data.email,
            }
        });
        if (!customercred) {
            return res.status(404).json({ error: 'Customer not found' });
        }
        console.log("here");
        console.log(customercred);
        const accounts = await prisma.customer_to_acct.findMany({
            where: { CA_CUSTOMER_SSN: customercred.customer_id },
            include:{account:true}
        });
        console.log(accounts)
        return res.status(200).json(accounts);

    } else {
        return res.status(405).json({ error: "Method Not Allowed" });
    }
}
