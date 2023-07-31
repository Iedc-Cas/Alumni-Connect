"use client";
import Link from "next/link";
import { useState } from "react";

export default function SignupForm({ changeState, addData }) {
    const [emailState, setEmailState] = useState("");
    const [passwordState, setPasswordState] = useState("");
    const [cPasswordState, setCPasswordState] = useState("");

    const _handleSubmit = (e) => {
        e.preventDefault();

        if (!emailState || !passwordState || !cPasswordState) return;

        if (passwordState != cPasswordState) return;

        addData({
            email: emailState,
            password: passwordState,
        });

        changeState();
    };
    return (
        <>
            <div className="absolute top-5 right-5 flex gap-2">
                <p className="text-white text-sm">Alredy have an account?</p>
                <button className="bg-secondary rounded-lg px-2 text-sm">
                    <Link href="/auth/login">LOGIN</Link>
                </button>
            </div>
            <h1 className="text-4xl text-white font-bold">
                WELCOME TO CAS ALUMNI
            </h1>
            <h2 className="text-xl text-white pt-5 font-semibold">
                REGISTER YOU ACCOUNT
            </h2>
            <form
                className="flex flex-col gap-8 pt-10"
                onSubmit={_handleSubmit}
            >
                <div className="flex flex-col max-w-[400px] text-white gap-2">
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        placeholder="Enter your Email here.."
                        className="px-3 py-1 rounded-lg bg-primary border border-secondary placeholder:text-sm"
                        onChange={(e) => setEmailState(e.target.value)}
                    />
                </div>
                <div className="flex flex-col max-w-[400px] text-white gap-2">
                    <label htmlFor="pass">Password</label>
                    <input
                        type="password"
                        placeholder="Create your password"
                        className="px-3 py-1 rounded-lg bg-primary border border-secondary placeholder:text-sm"
                        onChange={(e) => setPasswordState(e.target.value)}
                    />
                </div>
                <div className="flex flex-col max-w-[400px] text-white gap-2">
                    <label htmlFor="cpass">Conform Password</label>
                    <input
                        type="password"
                        placeholder="Conform you password"
                        className="px-3 py-1 rounded-lg bg-primary border border-secondary placeholder:text-sm"
                        onChange={(e) => setCPasswordState(e.target.value)}
                    />
                </div>
                <div className="flex justify-center pt-8 max-w-[400px]">
                    <button className="bg-secondary py-1 w-[100px] rounded-2xl text-black font-semibold">
                        NEXT
                    </button>
                </div>
            </form>
        </>
    );
}
