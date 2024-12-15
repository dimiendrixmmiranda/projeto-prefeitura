import { listaDeMenuServico } from "@/core/constants/listaDeMenuServico";
import Image from "next/image";
import Link from "next/link";

export default function MenuServico() {
    return (
        <div className="whitespace-nowrap overflow-x-scroll overflow-y-hidden mx-auto my-4 md:overflow-hidden">
            <ul className="w-full h-[80px] my-1 md:flex md:justify-around md:h-[100px] md:max-w-[90%] md:mx-auto lg:h-[140px] xl:max-w-[1100px]">
                {
                    listaDeMenuServico.map((menu, i) => {
                        return (
                            <li key={i} className="w-[80px] h-[80px] inline-block mx-1 relative rounded-md overflow-hidden md:h-[100px] md:w-[100px] lg:h-[140px] lg:w-[140px] xl:w-[160px]" style={{boxShadow: '0 0 2px 1px black'}}>
                                <Link href={menu.link}>
                                    <Image alt={menu.texto} src={menu.imagem} fill className="object-cover overflow-hidden p-1"></Image>
                                </Link>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}