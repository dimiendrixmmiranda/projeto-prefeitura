import { listaDeMenuServico } from "@/core/constants/listaDeMenuServico";
import Image from "next/image";
import Link from "next/link";

export default function MenuServico() {
    return (
        <div className="whitespace-nowrap overflow-x-scroll my-4 md:overflow-hidden">
            <ul className="w-full h-[130px] my-1 md:flex md:justify-center md:h-[150px] lg:h-[170px] xl:gap-4">
                {
                    listaDeMenuServico.map((menu, i) => {
                        return (
                            <li key={i} className="w-[120px] h-[120px] inline-block mx-1 relative rounded-md overflow-hidden md:w-[140px] md:h-[140px] lg:w-[160px] lg:h-[160px]" style={{boxShadow: '0 0 2px 1px black'}}>
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