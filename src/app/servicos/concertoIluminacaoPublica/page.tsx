"use client";
import { useState } from "react";
import Template from "@/components/template/Template";

// // Tipagem para as coordenadas de localização
// interface Coordinates {
//     lat: number;
//     lng: number;
// }

export default function Page() {
    // const [, setLocation] = useState<Coordinates | null>(null);
    const [nome, setNome] = useState("");
    const [rua, setRua] = useState("");
    const [qtdePostes, setQtdePostes] = useState("");

    return (
        <Template>
            <div className="text-black p-4 sm:min-h-[80vh] flex justify-center">
                <form className="border-2 border-[--verde] p-2 flex flex-col gap-3 h-fit my-auto">
                    <fieldset className="flex flex-col gap-1">
                        <label htmlFor="nome">Informe seu nome:</label>
                        <input
                            type="text"
                            className="rounded-md py-1 px-2 w-full"
                            id="nome"
                            value={nome}
                            onChange={(e) => setNome(e.target.value)}
                        />
                    </fieldset>
                    <fieldset className="flex flex-col gap-1">
                        <label htmlFor="rua">Informe o nome da Rua:</label>
                        <input
                            type="text"
                            className="rounded-md py-1 px-2 w-full"
                            id="rua"
                            value={rua}
                            onChange={(e) => setRua(e.target.value)}
                        />
                    </fieldset>
                    <fieldset className="flex flex-col gap-1">
                        <label htmlFor="qtdePostes">Informe a quantidade de postes quebrados:</label>
                        <input
                            type="text"
                            className="rounded-md py-1 px-2 w-full"
                            id="qtdePostes"
                            value={qtdePostes}
                            onChange={(e) => setQtdePostes(e.target.value)}
                        />
                    </fieldset>
                    <button className="uppercase font-bold text-2xl bg-[--verde] text-white">Enviar</button>
                </form>
                {/* <Link href={'/teste'}>Não Clique aqui</Link> */}
            </div>
        </Template>
    );
}