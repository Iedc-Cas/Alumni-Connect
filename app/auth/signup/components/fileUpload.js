"use client";
import Link from "next/link";
import { useState } from "react";
import axios from "axios";

export default function FileUpload({ oldData }) {
    const [usernameState, setUsernameState] = useState("");
    const [idProof, setIdProof] = useState(null);

    const handleSignUp = async (e) => {
        e.preventDefault();
        const signUpForm = new FormData();

        if (!usernameState || !idProof) return;

        const imageForm = new FormData();
        imageForm.append("image", idProof);

        try {
            const imgbbResult = await axios.post(
                `https://api.imgbb.com/1/upload?key=${process.env.IMGBB_KEY}`,
                imageForm
            );

            signUpForm.append("username", usernameState);
            signUpForm.append("email", oldData.email);
            signUpForm.append("password", oldData.password);
            signUpForm.append("id-proof", imgbbResult.data.data.url);

            const res = await fetch("/api/signup", {
                method: "POST",
                body: signUpForm,
            });
            alert(await res.json());
        } catch (error) {
            console.log(error);
        }
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
            <form className="flex flex-col gap-8 pt-10" onSubmit={handleSignUp}>
                <div className="flex flex-col max-w-[400px] text-white gap-2">
                    <label htmlFor="email">Username</label>
                    <input
                        type="text"
                        placeholder="Enter your Username here.."
                        className="px-3 py-1 rounded-lg bg-primary border border-secondary placeholder:text-sm"
                        onChange={(e) => setUsernameState(e.target.value)}
                        value={usernameState}
                    />
                </div>
                <div className="pt-10">
                    <h3 className="text-white pb-5">
                        Id proof for attending the college
                    </h3>
                    <input
                        type="file"
                        className="text-secondary"
                        onChange={(e) => setIdProof(e.target.files[0])}
                    />
                </div>
                <div className="flex justify-center max-w-[400px]">
                    <button className="bg-secondary py-1 w-[100px] rounded-2xl text-black font-semibold">
                        SIGN UP
                    </button>
                </div>
            </form>
        </>
    );
}
