import prisma from "./db";

export default async function handler(req, res) {
    if (req.method === "POST") {

        const data = req.body;


        const customercred = await prisma.customercredentials.findUnique({
            where: {
                email: data.email,
            },
        });
        if (!customercred) {
            return res.status(400).json({ error: "Email Not Found. Please sign up." });
        }

        const customer = await prisma.customer.findUnique({
            where: {
                customer_ssn: customercred.customer_id,
            },
        });
        
        if(!customer){
            return res.status(400).json({ error: "Customer Not Found" });
        }
        
        const ans = customer.first_name + " " + customer.last_name;

        return res.status(200).json({ name: ans });

    } else {
        return res.status(405).json({ error: "Method Not Allowed" });
    }
}
