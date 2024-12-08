import { BsCircleFill } from "react-icons/bs";
import Link from "next/link";
import { listaDeMenuAcessoRapido } from "@/core/constants/listaDeMenuAcessoRapido";

export default function MenuAcessoRapidoWeb() {
    return (
        <ul className="hidden md:flex flex-col p-2 bg-[--verde]">
            {listaDeMenuAcessoRapido.map((menu, i) => {
                return (
                    <li key={i}>
                        <Link href={menu.link} className='text-lg font-bold my-1 flex items-center gap-1 leading-5 p-1 rounded-md hover:bg-white hover:text-[--verde] xl:py-2'>
                            <BsCircleFill className='text-[.7em]' />
                            <p>{menu.nome}</p>
                        </Link>
                    </li>
                )
            })}
        </ul>
    )
}