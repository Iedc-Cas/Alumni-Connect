"use client";


import { useState } from "react";

export default function ItemCard({ name, email, imgUrl }) {
    const [isModalOpen, setModalOpen] = useState(false);

    const changeState = () => {
        setModalOpen(false);
    };

    const openModal = () => {
        setModalOpen(true);
    };

    return (
        <div className="rounded-lg bg-gray-700 px-10 py-1 w-[80%] max-w-[500px] lg:min-w-[500px] relative">
            <h3>Name: {name}</h3>
            <p>Email: {email}</p>
            {isModalOpen && (
                <div className="fixed bg-opacity-50 bg-gray-700 top-0 left-0 right-0 bottom-0 flex justify-center items-center z-40">
                    <div className="p-5 rounded-lg bg-gray-900 max-w-[800px] opacity-100">
                        <h1>{name}</h1>
                        <img src={imgUrl} alt="just image" className="w-full p-4" />
                        <div className="flex gap-1">
                            <button
                                className="py-2 px-1 rounded-lg min-w-[80px] bg-green-500"
                                onClick={changeState}
                            >
                                Approve
                            </button>
                            <button
                                className="py-2 px-1 rounded-lg min-w-[80px] bg-red-500"
                                onClick={changeState}
                            >
                                Reject
                            </button>
                            <button
                                className="py-2 px-1 rounded-lg min-w-[80px] bg-yellow-500"
                                onClick={changeState}
                            >
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            )}
            <button onClick={openModal} className="absolute right-5 bottom-1">
                View
            </button>
        </div>
    );
}
