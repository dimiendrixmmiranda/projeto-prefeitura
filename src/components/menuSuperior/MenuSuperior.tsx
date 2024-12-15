import { listaDeMenus } from "@/core/constants/listaDeMenus";
import Link from "next/link";
import { GoTriangleRight } from "react-icons/go";
import styles from './styles.module.css'

export default function MenuSuperior() {
    return (
        <ul className="hidden gap-2 justify-center items-center text-center lg:flex w-full max-w-[870px] mx-auto">
            {
                listaDeMenus.map((menu, i) => {
                    return (
                        <li className={`flex-1 flex justify-center items-center text-sm font-semibold relative xl:text-[1.05em] ${styles.menuSuperior}`} key={i}>
                            <p className="cursor-pointer w-full h-full flex justify-center items-center whitespace-nowrap py-1 xl:py-2 xl:px-1">
                                {menu.item} <GoTriangleRight />
                            </p>
                            <ul className="bg-[--verde]">
                                {
                                    menu.submenu.map((sub, j) => {
                                        return (
                                            <li key={j} className={menu.submenu.length - 1 <= j ? '' : 'border-b border-black'}>
                                                <Link href={sub.link} className="flex justify-center items-center">
                                                    {sub.nome}
                                                </Link>
                                            </li>
                                        )
                                    })
                                }
                            </ul>
                        </li>
                    )
                })
            }
        </ul>
    )
}