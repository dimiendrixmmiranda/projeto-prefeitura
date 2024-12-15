'use client'
import Template from "@/components/template/Template";
import { listaDeSecretarias } from "@/core/constants/listaDeSecretarias";
import { Secretaria } from "@/core/secretaria/secretaria";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { BsTelephoneFill } from "react-icons/bs";
import { IoLocation } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import styles from './style.module.css'
import AncoraContainer from "@/components/ancora/AncoraContainer";
import { FaClockRotateLeft } from "react-icons/fa6";

export default function Page() {
    const params = useParams();
    const slug = typeof params.slug === 'string' ? params.slug : params.slug?.[0];
    const [secretaria, setSecretaria] = useState<Secretaria | null>(null);

    useEffect(() => {
        if (slug) {
            const secretariaId = slug.split('-')[0];
            const secretariaEncontrada = listaDeSecretarias.find(n => n.id === Number(secretariaId));

            if (secretariaEncontrada) {
                setSecretaria(secretariaEncontrada);
            }
        }
    }, [slug]);


    return (
        <Template>
            {
                secretaria != null ? (
                    <div className={styles.secretaria}>
                        <div className="w-full overflow-hidden border-b-2 border-[--verde] flex justify-center">
                            <div className="relative w-[160px] h-[160px] rounded-full border-2 border-[--verde] overflow-hidden -mb-6 lg:w-[220px] lg:h-[220px]">
                                <Image src={secretaria.imagem} alt={secretaria.nome} fill className="object-cover"></Image>
                            </div>
                        </div>
                        <div className="flex flex-col text-center">
                            <h1 className="font-black text-2xl leading-6">{secretaria.nome}</h1>
                            <h2 className="font-semibold text-lg">{secretaria.encarregado}</h2>
                        </div>
                        <div className="flex flex-col xl:text-xl xl:gap-3 xl:self-center">
                            <h2 className="flex flex-wrap xl:text-[1.1rem]">
                                <b className="flex items-center gap-1"><FaClockRotateLeft />Atendimento:</b>
                                das 7:30h ás 11:30h e 13:00h ás 17:00h
                            </h2>
                            <Link href={'/'}>
                                <h2 className="whitespace-wrap flex gap-2"><b className="flex items-center gap-1"><BsTelephoneFill className='text-[14px]' />Telefone:</b> {secretaria.telefone}</h2>
                            </Link>
                            <Link href={'/'}>
                                <h2 className="whitespace-wrap flex gap-2">
                                    <b className="flex items-center gap-1">
                                        <MdEmail />Email:
                                    </b>
                                    {secretaria.email}
                                </h2>
                            </Link>
                            <Link href={'/'}>
                                <h2 className="whitespace-wrap flex gap-2">
                                    <b className="flex items-center gap-1">
                                        <IoLocation />Local:
                                    </b>
                                    Rua Miguel Dias filho, 212, Green Valle
                                </h2>
                            </Link>
                        </div>
                        <div>
                            <h2 className="font-bold text-xl">Descrição da Secretaria</h2>
                            <p>
                                {secretaria.descricaoEncarregado}
                            </p>
                        </div>
                        <div>
                            <h2 className="font-bold text-xl">Descrição do Encarregado</h2>
                            <p>
                                {secretaria.descricaoEncarregado}
                            </p>
                        </div>
                        <AncoraContainer></AncoraContainer>
                    </div>
                ) : ''
            }
        </Template>
    )
}