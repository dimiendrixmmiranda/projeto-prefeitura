import Image from "next/image";
import Link from "next/link";
import { listaDeRedesSociais } from "@/core/constants/listaDeRedesSociais";
import RedeSocial from "@/components/redesSociais/RedeSocial";
import style from './style.module.css'

export default function Rodape() {
    return (
        <footer className="flex flex-col">
            <h2 className="bg-green-950 uppercase leading-5 font-bold text-center text-lg self-center p-2 w-full lg:text-2xl lg:p-4">Atendimento: Segunda a Sexta, das 7h30 as 11h30 e das 13h as 17h</h2>
            <div className="bg-[--verde] p-2 flex flex-col gap-2 md:grid md:grid-cols-2 lg:grid-cols-3">
                <Link href={'/'} className="flex gap-1 items-center md:gap-2">
                    <div className="relative w-[60px] h-[60px] md:w-[40px]">
                        <Image src={'/logo-prefeitura.png'} alt="Brasão de Joaquim Távora - PR" className="object-contain" fill></Image>
                    </div>
                    <div className="flex flex-col whitespace-nowrap gap-1 ">
                        <h2 className="font-semibold text-[.8em] leading-5 sm:leading-5 sm:text-lg">Prefeitura Municipal de</h2>
                        <h1 className="font-black text-lg leading-5 sm:leading-5 sm:text-2xl ">Joaquim Távora - PR</h1>
                    </div>
                </Link>
                <div className={style.fonteSlogan}>
                    <h2>Joaquim Távora: O coração do Norte Pioneiro!</h2>
                </div>
                <ul className={`flex justify-around items-end pb-2 h-[60px] text-3xl gap-2 md:justify-end md:gap-4 lg:text-4xl ${style.redes}`}>
                    {
                        listaDeRedesSociais.map((rede, i) => {
                            return (
                                <RedeSocial icone={rede.icone} link={rede.link} nome={rede.nome} key={i}></RedeSocial>
                            )
                        })
                    }
                </ul>
            </div>
        </footer>
    )
}