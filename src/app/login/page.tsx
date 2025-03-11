'use client';
import AncoraContainer from "@/components/ancora/AncoraContainer";
import Template from "@/components/template/Template";
import useAuth from "@/data/hook/useAuth";
import { useState } from "react";
import { IoPerson } from "react-icons/io5";

export default function Page() {
    const { login } = useAuth()
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')
    const [erro, setErro] = useState<string | null>(null)

    async function submeter() {
        if (email && senha) {
            if (!login) {
                exibirErro("O login ainda não está disponível. Tente novamente mais tarde.");
                return;
            }
            try {
                console.log("Tentando login...");
                await login(email, senha);
                console.log("Login realizado com sucesso");
            } catch (error) {
                console.error("Erro ao fazer login:", error);
                exibirErro("Ocorreu um erro no login. Verifique suas credenciais.");
            }
        } else {
            exibirErro("Preencha todos os campos!");
        }
    }    

    function exibirErro(msg: string, tempoEmSegundos: number = 5) {
        console.log("Erro definido:", msg); // Verifica se o erro foi atualizado
        setErro(msg);
        setTimeout(() => setErro(null), tempoEmSegundos * 1000);
    }

    return (
        <Template>
            <div className="text-black min-h-[80vh] p-4 flex flex-col justify-center items-center">
                <div className="flex flex-col gap-4 p-4 border-2 border-[--verde] rounded-lg w-full max-w-[300px]">
                    <div className="flex flex-col gap-2 justify-center items-center">
                        <IoPerson className="text-7xl" />
                        <h2 className="uppercase font-black">Entre</h2>
                    </div>
                    {erro && (
                        <p className="bg-red-500 text-white text-center p-2 rounded-lg">
                            {erro}
                        </p>
                    )}
                    <div>
                        <fieldset className="flex flex-col gap-1">
                            <label htmlFor="email">Informe seu email:</label>
                            <input type="text" id="email" onChange={(e) => setEmail(e.target.value)} className="px-2 py-1 rounded-lg" />
                        </fieldset>
                        <fieldset className="flex flex-col gap-1">
                            <label htmlFor="senha">Informe sua senha:</label>
                            <input type="password" id="senha" onChange={(e) => setSenha(e.target.value)} className="px-2 py-1 rounded-lg" />
                        </fieldset>
                    </div>
                    <button className="w-full bg-[--verde] text-white uppercase font-bold py-2" onClick={submeter}>Entrar</button>
                </div>
                <AncoraContainer></AncoraContainer>
            </div>
        </Template>
    )
}