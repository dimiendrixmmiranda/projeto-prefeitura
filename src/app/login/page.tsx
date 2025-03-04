'use client';
import AncoraContainer from "@/components/ancora/AncoraContainer";
import Template from "@/components/template/Template";
import { IoPerson } from "react-icons/io5";

export default function Page() {
    return (
        <Template>
            <div className="text-black min-h-[80vh] p-4 flex flex-col justify-center items-center">
                <div className="flex flex-col gap-4 p-4 border-2 border-[--verde] rounded-lg w-full max-w-[300px]">
                    <div className="flex flex-col gap-2 justify-center items-center">
                        <IoPerson className="text-7xl" />
                        <h2 className="uppercase font-black">Entre</h2>
                    </div>
                    <div>
                        <fieldset className="flex flex-col gap-1">
                            <label htmlFor="email">Informe seu email:</label>
                            <input type="text" id="email" className="px-2 py-1 rounded-lg"/>
                        </fieldset>
                        <fieldset className="flex flex-col gap-1">
                            <label htmlFor="senha">Informe sua senha:</label>
                            <input type="password" id="senha" className="px-2 py-1 rounded-lg"/>
                        </fieldset>
                    </div>
                    <button className="w-full bg-[--verde] text-white uppercase font-bold py-2">Entrar</button>
                </div>
                <AncoraContainer></AncoraContainer>
            </div>
        </Template>
    )
}