'use client'
import Template from "@/components/template/Template";
import Image from "next/image";
import style from './style.module.css'
import AncoraContainer from "@/components/ancora/AncoraContainer";

export default function Page() {
    return (
        <Template>
            <div className="max-w-[1000px] mx-auto">
                <div className="text-black m-2 p-2 border-2 border-[--verde] rounded-lg flex flex-col gap-4 items-center max-w-[570px] w-[95%] mx-auto">
                    <div className="relative w-[280px] h-[210px] sm:w-[360px] sm:h-[300px] md:w-[450px] md:h-[380px]">
                        <Image alt="comercio" src={'/comercio.svg'} fill className="object-cover"></Image>
                    </div>
                    <form className={style.formulario}>
                        <fieldset>
                            <label htmlFor="nome">Digite o nome do seu Comércio:</label>
                            <input type="text" name="nome" id="nome" />
                        </fieldset>
                        <fieldset>
                            <label htmlFor="atendimento">Digite seu Horário de Atendimento:</label>
                            <input type="text" name="atendimento" id="atendimento" />
                        </fieldset>
                        <fieldset>
                            <label htmlFor="telefone1">Telefone:</label>
                            <input type="text" name="telefone1" id="telefone1" />
                        </fieldset>
                        <fieldset>
                            <label htmlFor="endereco">Endereco:</label>
                            <input type="text" name="endereco" id="endereco" />
                        </fieldset>
                        <fieldset className={style.formularioRedesSociais}>
                            <h2>Informe o link de suas Redes Sociais:</h2>
                            <fieldset>
                                <label htmlFor="whatsapp">WhastApp</label>
                                <input type="text" name="whatsapp" id="whatsapp" />
                            </fieldset>
                            <fieldset>
                                <label htmlFor="email">Email:</label>
                                <input type="text" name="email" id="email" />
                            </fieldset>
                            <fieldset>
                                <label htmlFor="facebook">Facebook:</label>
                                <input type="text" name="facebook" id="facebook" />
                            </fieldset>
                            <fieldset>
                                <label htmlFor="instagram">Instagram:</label>
                                <input type="text" name="instagram" id="instagram" />
                            </fieldset>
                        </fieldset>
                        <fieldset className="w-full grid grid-cols-2 gap-2">
                            <button className="w-full h-full bg-red-600 p-1 text-lg font-bold text-white" style={{ textShadow: '1px 1px 2px black' }}>Cancelar</button>
                            <button className="w-full h-full bg-green-600 p-1 text-lg font-bold text-white" style={{ textShadow: '1px 1px 2px black' }}>Enviar</button>
                        </fieldset>
                    </form>
                </div>
                <div className="my-6">
                    <AncoraContainer></AncoraContainer>
                </div>
            </div>
        </Template>
    )
}