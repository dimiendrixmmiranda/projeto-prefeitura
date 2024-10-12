'use client'
import { listaDeSecretarias } from "@/core/constants";
import { Secretaria } from "@/core/secretaria/secretaria";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import Pagina from "../../../components/templete/Pagina";
import Image from "next/image";
import Link from "next/link";
import { BsTelephoneFill } from "react-icons/bs";
import Sidebar from "@/components/sidebar/Sidebar";
import Ancora from "@/components/ancora/Ancora";

export default function Page() {
    const params = useParams()
    const slug = typeof params.slug === 'string' ? params.slug : params.slug?.[0]
    const [secretaria, setSecretaria] = useState<Secretaria | null>(null)

    useEffect(() => {
        if (slug) {
            const noticiaId = slug?.split('-')[0];
            const noticiaEncontrada = listaDeSecretarias.find(n => n.id === Number(noticiaId));
            noticiaEncontrada != null ? setSecretaria(noticiaEncontrada) : ''
        }
    }, [slug])
    return (
        <Pagina>
            <div className="max-w-[95%] mx-auto" style={{ display: 'grid', gridTemplateColumns: '25% 1fr' }}>
                <div className="hidden lg:block bg-transparent">
                    <h2 className='uppercase font-black text-3xl text-black text-center py-2 mt-4'>Menu</h2>
                    <Sidebar banner={false}></Sidebar>
                </div>
                <div className="w-full h-full min-h-[80vh] bg-zinc-300 flex flex-col items-center pt-5 p-2 text-black col-span-2 lg:col-span-1 ">
                    <h2 className="uppercase text-3xl font-black text-[--marrom] xl:text-5xl">Secretarias</h2>
                    <div className="bg-white flex flex-col items-center p-2 rounded-lg max-w-[700px] mx-auto my-4 md:p-4" style={{ boxShadow: '0 0 2px 3px var(--marrom)' }}>
                        <div className="relative w-[150px] h-[150px] rounded-full overflow-hidden md:w-[220px] md:h-[220px]">
                            {
                                secretaria != undefined ?
                                    <Image src={secretaria?.imagem} alt={secretaria?.nome} fill className="object-cover "></Image>
                                    : ''
                            }
                        </div>
                        <div className="text-center text-[--marrom]">
                            <h2 className="font-bold md:text-lg">{secretaria?.encarregado}</h2>
                            <h1 className="font-black text-2xl md:text-3xl">{secretaria?.nome}</h1>
                            <Link href={`tel:${secretaria?.telefone}`} className="flex justify-center items-center">
                                <p className="flex justify-center items-center"><BsTelephoneFill className="text-sm" /> Telefone: </p>
                                <p>{secretaria?.telefone}</p>
                            </Link>
                            <div className="flex flex-col">
                                <h2 className="font-semibold">Local de Atendimento:</h2>
                                <ul className="flex flex-col text-start leading-5 font-semibold sm:text-center">
                                    <li>Prefeitura Muncipal de Joaquim Távora - PR</li>
                                    <li>Rua João Rodrigues de Almeida nº 387 - São Lucas</li>
                                    <li>Atendimento: das 08h ás 11h e 13h ás 17h</li>
                                </ul>
                                <Link href={'https://maps.app.goo.gl/maSZSuALichRVgZj7'} target="_blanck" className="bg-[--marrom] text-white font-bold text-xl p-2 my-4 max-w-[240px] mx-auto rounded-md">Me leve até lá!</Link>
                            </div>
                            <div className="flex flex-col gap-2 mt-2">
                                <h3 className="font-bold text-xl leading-5">Responsabilidades da Secretaria:</h3>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis porta risus a ligula lacinia, at tincidunt libero vestibulum. Nulla facilisi. In luctus ac ante in viverra. Donec ornare molestie lectus in ultrices. Donec aliquam vehicula fermentum. Donec interdum mauris vel elementum tincidunt. Nunc commodo ipsum at tellus pellentesque feugiat et vel metus. Nunc lorem nulla, laoreet a massa ut, venenatis varius sapien. Nullam nibh sapien, varius non ultrices ac, pellentesque in lorem.
                                </p>
                            </div>
                        </div>
                    </div>
                    <Ancora estilo="w-full max-w-[700px] flex justify-around text-white lg:justify-end lg:gap-4 lg:mt-5 lg:text-lg"></Ancora>
                </div>
            </div>
        </Pagina>
    )
}