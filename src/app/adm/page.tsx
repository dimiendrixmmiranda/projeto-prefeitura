'use client'
import ForcarAutenticacao from "@/components/auth/Auth";
import Template from "@/components/template/Template";
import useAuth from "@/data/hook/useAuth";

export default function Page() {
    const { logout } = useAuth()
    return (
        <ForcarAutenticacao>
            <Template>
                <div className="text-black bg-red-500 min-h-[80vh]">
                    <h2>Aqui</h2>
                    <button className="bg-blue-100" onClick={logout}>Logout</button>
                </div>
            </Template>
        </ForcarAutenticacao>
    )
}