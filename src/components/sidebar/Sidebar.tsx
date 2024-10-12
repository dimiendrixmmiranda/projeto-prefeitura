import Link from "next/link";
import Banners from "../banners/Banners";
import { menuLateral } from "@/data/dados";
import { FaCircle } from "react-icons/fa";

interface SidebarProps {
    banner: boolean
}

export default function Sidebar({ banner }: SidebarProps) {
    return (
        <aside className="hidden lg:block h-fit w-full">
            <nav>
                <ul className="flex flex-col gap-1">
                    {
                        menuLateral.map((item, i) => {
                            return (
                                <li key={i} className="w-full h-full p-2 text-black leading-4 font-bold text-[--verde-escuro] hover:bg-[--verde] hover:text-white xl:py-3 xl:text-[1.1em] xl:leading-5">
                                    <Link href={'/'} className="w-full h-full">
                                        <p className="w-full h-full items-center gap-1" style={{ display: 'grid', gridTemplateColumns: 'auto 1fr' }}><FaCircle className="text-[.5em]" />{item}</p>
                                    </Link>
                                </li>
                            )
                        })
                    }
                </ul>
            </nav>
            {
                banner ? <Banners className="mx-auto flex flex-col gap-4 mt-6 items-center"></Banners> : ''
            }

        </aside>
    )
}