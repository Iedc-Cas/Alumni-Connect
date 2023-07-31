"use client";

import { useState } from "react";
import SignupForm from "./components/signup-form";
import FileUpload from "./components/fileUpload";

export default function Login() {
    const [currentForm, setCurrentForm] = useState("first");

    const [allFormData, setAllFormData] = useState({ email: "", password: "" });

    const addDataToFormState1 = (obj) => {
        setAllFormData((prev) => ({ ...prev, ...obj }));
    };

    const _changeState = () => {
        setCurrentForm("second");
    };

    if (currentForm == "second") return <FileUpload oldData={allFormData} />;

    return (
        <SignupForm changeState={_changeState} addData={addDataToFormState1} />
    );
}
