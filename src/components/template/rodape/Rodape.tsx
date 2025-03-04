import Image from "next/image";
import Link from "next/link";
import RedeSocial from "@/components/redesSociais/RedeSocial";
import style from './style.module.css'
import RedesSociais from "@/core/redesSociais/RedesSociais";
import { AiFillInstagram } from "react-icons/ai";
import { FaFacebookSquare, FaGithubSquare, FaLinkedin } from "react-icons/fa";

export default function Rodape() {
    const listaDeRedesSociais: RedesSociais[] = [
        {
            icone: <AiFillInstagram />,
            link: 'https://www.instagram.com/eudimimartins/',
            nome: 'Instagram'
        },
        {
            icone: <FaFacebookSquare />,
            link: 'https://www.facebook.com/dimi.martins.376',
            nome: 'Facebook'
        },
        {
            icone: <FaGithubSquare />,
            link: 'https://github.com/dimiendrixmmiranda/dimiendrixmmiranda',
            nome: 'Github'
        },
        {
            icone: <FaLinkedin />,
            link: 'https://www.linkedin.com/in/dimi-endrix-martins-miranda-86a017341/',
            nome: 'Github'
        },
    ]
    return (
        <footer className="flex flex-col">
            <h2 className="bg-green-950 uppercase leading-5 font-bold text-center text-lg self-center p-2 w-full lg:text-2xl lg:p-4">Atendimento: Segunda a Sexta, das 7h30 as 11h30 e das 13h as 17h</h2>
            <div className={style.containerRodape}>
                <Link href={'/'} className="flex gap-1 items-center justify-center md:gap-2">
                    <div className="relative w-[60px] h-[60px] md:w-[40px] xl:w-[70px] xl:h-[70px]">
                        <Image src={'/logo-prefeitura.png'} alt="Brasão de Joaquim Távora - PR" className="object-contain" fill></Image>
                    </div>
                    <div className="flex flex-col whitespace-nowrap gap-1 ">
                        <h2 className="font-semibold text-[.8em] leading-5 sm:leading-5 sm:text-lg">Prefeitura Municipal de</h2>
                        <h1 className="font-black text-lg leading-5 sm:leading-5 sm:text-2xl xl:text-3xl">Joaquim Távora - PR</h1>
                    </div>
                    <div className="relative w-[60px] h-[60px] ml-auto md:ml-0 md:w-[40px] xl:w-[70px] xl:h-[70px]">
                        <Image src={'/brasao-parana.png'} alt="Brasão do Estado do Paraná" className="object-contain" fill></Image>
                    </div>
                </Link>
                <ul className={`flex justify-around items-end pb-2 h-[60px] text-xl gap-2 md:justify-end md:gap-4 lg:text-2xl ${style.redes}`}>
                    {
                        listaDeRedesSociais.map((rede, i) => {
                            return (
                                <RedeSocial icone={rede.icone} link={rede.link} nome={rede.nome} key={i}></RedeSocial>
                            )
                        })
                    }
                </ul>
                <div className={style.fonteSlogan}>
                    <h2>Joaquim Távora: O coração do Norte Pioneiro!</h2>
                </div>
            </div>
            <div className="flex flex-col px-2 py-1 bg-black text-white md:flex-row">
                <div className="flex justify-center items-center w-full">
                    <p className="w-full font-bold uppercase text-center md:text-start">Produzido por dimi endrix martins miranda</p>
                </div>
                <ul className="grid grid-cols-4 md:gap-4">
                    {
                        listaDeRedesSociais.map((rede, i) => {
                            return (
                                <li key={i} className="flex justify-center items-center text-3xl">
                                    <Link href={rede.link}>
                                        {rede.icone}
                                    </Link>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        </footer>
    )
}