// pages/api/signup.js
import prisma from "./db";
import bcrypt from "bcrypt";

export default async function handler(req, res) {
    if (req.method === "POST") {

        const data = req.body;

        // Check if the email already exists
        const existingUser = await prisma.customercredentials.findUnique({
            where: {
                email: data.email,
            },
        });

        if (existingUser) {
            return res.status(400).json({ error: "Email already exists" });
        }
        const hashedPassword = bcrypt.hashSync(data.password, process.env.salt);
        const existingCustomer = await prisma.customer.findUnique({
            where: {
                customer_ssn: data.ssn,
            },
        });

        if (!existingCustomer) {
            await prisma.customer.create({
                data: {
                    customer_ssn: data.ssn,
                    first_name: data.firstName,
                    middle_name: data.middleName,
                    last_name: data.lastName,
                    street_address: data.address,
                    apt_no: data.apt,
                    city: data.city,
                    state_name: data.state,
                    zip_code: data.zipcode
                },
            });
        }
        // Create a new user in the database
        await prisma.customercredentials.create({
            data: {
                email: data.email,
                password: hashedPassword,
                customer_id: data.ssn
            },
        });

        return res.status(200).json({ message: "User created successfully" });
    } else {
        return res.status(405).json({ error: "Method Not Allowed" });
    }
}
