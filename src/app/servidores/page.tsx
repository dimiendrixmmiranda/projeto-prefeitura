'use client';

import Template from "@/components/template/Template";
import useAuth from "@/data/hook/useAuth";
import { IoLogOutSharp } from "react-icons/io5";

export default function Page() {
    const { logout } = useAuth()

    return (
        <Template>
            <div className="bg-red-400">aqui</div>
            <button className="text-red-600 flex flex-col justify-center items-center" onClick={logout}>
                <div className="text-2xl">
                    <IoLogOutSharp />
                </div>
                <p className="leading-4 font-bold">Logaut</p>
            </button>
        </Template>
    )
}