"use client";
import Link from "next/link";
import { useState } from "react";

export default function Signup() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const _handleLogin = async (e) => {
        e.preventDefault();
        const cxt = { username, password };
        const res = await fetch("/api/login", {
            method: "POST",
            body: JSON.stringify(cxt),
        });

        console.log(await res.json());
    };

    return (
        <>
            <div className="absolute top-5 right-5 flex gap-2">
                <p className="text-white text-sm">New to here?</p>
                <button className="bg-secondary rounded-lg px-2 text-sm">
                    <Link href="/auth/signup">SIGN UP</Link>
                </button>
            </div>
            <h1 className="text-4xl text-white font-bold">
                WELCOME TO CAS ALUMNI
            </h1>
            <h2 className="text-xl text-white pt-5 font-semibold">
                LOGIN TO YOUR ACCOUNT
            </h2>

            <form className="flex flex-col gap-8 pt-10" onSubmit={_handleLogin}>
                <div className="flex flex-col max-w-[400px] text-white gap-2">
                    <label htmlFor="email">Email</label>
                    <input
                        type="text"
                        placeholder="Enter your Email here.."
                        className="px-3 py-1 rounded-lg bg-primary border border-secondary placeholder:text-sm"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </div>
                <div className="flex flex-col max-w-[400px] text-white gap-2">
                    <label htmlFor="pass">Password</label>
                    <input
                        type="password"
                        placeholder="Create your password"
                        className="px-3 py-1 rounded-lg bg-primary border border-secondary placeholder:text-sm"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <div className="flex justify-center pt-8 max-w-[400px]">
                    <button className="bg-secondary py-1 w-[100px] rounded-2xl text-black font-semibold">
                        LOGIN
                    </button>
                </div>
            </form>
        </>
    );
}
