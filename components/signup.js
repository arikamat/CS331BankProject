import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";

export default function CreateAcct() {
    const { register, handleSubmit } = useForm();
    const [error, setError] = useState(null);

    const onSubmit = async (data) => {
        const ssn = parseInt(data.ssn)
        if(isNaN(ssn)){
            setError("SSN must be numeric");
            return;
        }
        data.ssn = parseInt(data.ssn);
        try {
            const response = await axios.post("/api/create", data);
            if (response.status === 200) {
                console.log("User created successfully");
            }
        } catch (error) {
            console.log(error);
            setError(error.response.data.error);
        }
    }
    return (
        <div className="w-full p-6 bg-white rounded-md shadow-md lg:max-w-xl">
            <h1 className="text-3xl font-bold text-center text-gray-700">Logo</h1>
            <h1 className="text-3xl font-bold text-center text-gray-700">Sign Up</h1>

            <form className="mt-6" onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-4">
                    <label
                        htmlFor="ssn"
                        className="block text-sm font-semibold text-gray-800"
                    >
                        SSN
                    </label>
                    <input
                        id="ssn"
                        type="password"
                        className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md focus:border-gray-400 focus:ring-gray-300 focus:outline-none focus:ring focus:ring-opacity-40"
                        {...register("ssn")}
                    />
                </div>
                <div className="mb-4">
                    <label
                        htmlFor="fn"
                        className="block text-sm font-semibold text-gray-800"
                    >
                        First Name
                    </label>
                    <input
                        id="fn"
                        type="text"
                        className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md focus:border-gray-400 focus:ring-gray-300 focus:outline-none focus:ring focus:ring-opacity-40"
                        {...register("firstName")}
                    />
                </div>
                <div className="mb-4">
                    <label
                        htmlFor="mn"
                        className="block text-sm font-semibold text-gray-800"
                    >
                        Middle Name
                    </label>
                    <input
                        id="mn"
                        type="text"
                        className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md focus:border-gray-400 focus:ring-gray-300 focus:outline-none focus:ring focus:ring-opacity-40"
                        {...register("middleName")}
                    />
                </div>
                <div className="mb-4">
                    <label
                        htmlFor="ln"
                        className="block text-sm font-semibold text-gray-800"
                    >
                        Last Name
                    </label>
                    <input
                        id="ln"
                        type="text"
                        className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md focus:border-gray-400 focus:ring-gray-300 focus:outline-none focus:ring focus:ring-opacity-40"
                        {...register("lastName")}
                    />
                </div>
                <div className="mb-4">
                    <label
                        htmlFor="add"
                        className="block text-sm font-semibold text-gray-800"
                    >
                        Home Address
                    </label>
                    <input
                        id="add"
                        type="text"
                        className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md focus:border-gray-400 focus:ring-gray-300 focus:outline-none focus:ring focus:ring-opacity-40"
                        {...register("address")}
                    />
                </div>
                <div className="mb-4">
                    <label
                        htmlFor="apt"
                        className="block text-sm font-semibold text-gray-800"
                    >
                        Apt. No
                    </label>
                    <input
                        id="apt"
                        type="text"
                        className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md focus:border-gray-400 focus:ring-gray-300 focus:outline-none focus:ring focus:ring-opacity-40"
                        {...register("apt")}
                    />
                </div>
                <div className="mb-4">
                    <label
                        htmlFor="city"
                        className="block text-sm font-semibold text-gray-800"
                    >
                        City
                    </label>
                    <input
                        id="city"
                        type="text"
                        className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md focus:border-gray-400 focus:ring-gray-300 focus:outline-none focus:ring focus:ring-opacity-40"
                        {...register("city")}
                    />
                </div>
                <div className="mb-4">
                    <label
                        htmlFor="state"
                        className="block text-sm font-semibold text-gray-800"
                    >
                        State
                    </label>
                    <input
                        id="state"
                        type="text"
                        className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md focus:border-gray-400 focus:ring-gray-300 focus:outline-none focus:ring focus:ring-opacity-40"
                        {...register("state")}
                    />
                </div>
                <div className="mb-4">
                    <label
                        htmlFor="zip"
                        className="block text-sm font-semibold text-gray-800"
                    >
                        Zip Code
                    </label>
                    <input
                        id="zip"
                        type="text"
                        className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md focus:border-gray-400 focus:ring-gray-300 focus:outline-none focus:ring focus:ring-opacity-40"
                        {...register("zipcode")}
                    />
                </div>
                <div className="mb-4">
                    <label
                        htmlFor="email"
                        className="block text-sm font-semibold text-gray-800"
                    >
                        Email
                    </label>
                    <input
                        id="email"
                        type="email"
                        className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md focus:border-gray-400 focus:ring-gray-300 focus:outline-none focus:ring focus:ring-opacity-40"
                        {...register("email")}
                    />
                </div>
                <div className="mb-2">
                    <label
                        htmlFor="password"
                        className="block text-sm font-semibold text-gray-800"
                    >
                        Password
                    </label>
                    <input
                        id="password"
                        type="password"
                        className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md focus:border-gray-400 focus:ring-gray-300 focus:outline-none focus:ring focus:ring-opacity-40"
                        {...register("password")}
                    />
                </div>

                {error && (
                    <p className="text-red-500 text-sm mt-2">
                        <strong>{error}</strong>
                    </p>
                )}
                <div className="mt-2">
                    <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">
                        Sign Up
                    </button>
                </div>
            </form>

            <p className="mt-4 text-sm text-center text-gray-700">
                Already have an account?{" "}
                <Link
                    href="/login"
                    className="font-medium text-blue-600 hover:underline"
                >
                    Log in
                </Link>
            </p>
        </div>
    );
}