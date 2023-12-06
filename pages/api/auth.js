// pages/api/signup.js
import prisma from "./db";
import bcrypt from "bcrypt";

export default async function handler(req, res) {
    if (req.method === "POST") {

        const data = req.body;


        const user = await prisma.customercredentials.findUnique({
            where: {
                email: data.email,
            },
        });
        if (!user) {
            return res.status(400).json({ error: "Email Not Found. Please sign up." });
        }
        const password = bcrypt.hashSync(data.password, process.env.salt);
        if (user.password == password) {
            return res.status(200).json({ message: "Logged In successfully" });
        }

        return res.status(400).json({ error: "Incorrect Credentials" });


    } else {
        return res.status(405).json({ error: "Method Not Allowed" });
    }
}
