import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";

export default function Login() {
    const { register, handleSubmit } = useForm();
    const [error, setError] = useState(null);

    const onSubmit = async (data) => {
        try {
            const response = await axios.post("/api/auth", data);
            if (response.status === 200) {
                console.log("Logged In successfully");
            }
        } catch (error) {
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
                <div className="mt-4">
                    <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">
                        Log In
                    </button>
                </div>
            </form>

            <p className="mt-4 text-sm text-center text-gray-700">
                Don't have an account?{" "}
                <Link
                    href="/signup"
                    className="font-medium text-blue-600 hover:underline"
                >
                    Sign Up
                </Link>
            </p>
        </div>
    );
}