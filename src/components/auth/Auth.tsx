'use client'

import { useEffect } from "react";
import useAuth from "@/data/hook/useAuth";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface ForcarAutenticacaoProps {
    children: React.ReactElement;
}

export default function ForcarAutenticacao({ children }: ForcarAutenticacaoProps) {
    const router = useRouter();
    const { usuario, carregando } = useAuth();

    useEffect(() => {
        if (!carregando && !usuario?.email) {
            router.push('/login');
        }
    }, [carregando, usuario, router])

    if (carregando) {
        return (
            <div className="flex justify-center items-center h-screen">
                <Image alt="Loading..." src={'/loading.gif'} width={50} height={50} />
            </div>
        );
    }

    if (!usuario?.email) {
        return null; // Evita renderizar conteúdo enquanto redireciona
    }

    return children;
}
