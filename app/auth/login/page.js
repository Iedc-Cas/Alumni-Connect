import Link from "next/link";

export default function Signup() {
    return (
        <>
            <div className="absolute top-5 right-5 flex gap-2">
                <p className="text-white text-sm">New to here?</p>
                <button className="bg-secondary rounded-lg px-2 text-sm">
                    <Link href='/auth/signup'>SIGN UP</Link>
                </button>
            </div>
            <h1 className="text-4xl text-white font-bold">
                WELCOME TO CAS ALUMNI
            </h1>
            <h2 className="text-xl text-white pt-5 font-semibold">
                LOGIN TO YOUR ACCOUNT
            </h2>

            <form className="flex flex-col gap-8 pt-10">
                <div className="flex flex-col max-w-[400px] text-white gap-2">
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        placeholder="Enter your Email here.."
                        className="px-3 py-1 rounded-lg bg-primary border border-secondary placeholder:text-sm"
                    />
                </div>
                <div className="flex flex-col max-w-[400px] text-white gap-2">
                    <label htmlFor="pass">Password</label>
                    <input
                        type="password"
                        placeholder="Create your password"
                        className="px-3 py-1 rounded-lg bg-primary border border-secondary placeholder:text-sm"
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
