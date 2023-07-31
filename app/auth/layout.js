import Image from "next/image";

export default function LoginSignupLayout({ children }) {
    return (
        <section className="signup-bg flex min-h-screen">
            <div className="w-0 sm:w-[30%] md:w-[40%] lg:w-[45%] flex justify-center items-center">
                <p className="absolute top-4 left-4 text-white">Logo</p>
                <Image src="/bg.svg" height={400} width={400} alt="lol" />
            </div>
            <div
                className="
                bg-primary w-[100%] sm:w-[70%] md:w-[60%] lg:w-[55%] sm:rounded-s-[50px] pt-24 pb-10 px-20 relative
                "
            >
                {children}
            </div>
        </section>
    );
}
