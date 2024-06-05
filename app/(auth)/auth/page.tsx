"use client";
import { useSession, signIn } from "next-auth/react";
import React from "react";
import { redirect } from "next/navigation";

const Login: React.FC = () => {
    return (
        <div className="flex justify-end items-center mr-1">
            <button
                className="flex justify-end ml-auto"
                onClick={() => signIn()}
            >
                Sign In
            </button>
        </div>
    );
};
export default Login;
