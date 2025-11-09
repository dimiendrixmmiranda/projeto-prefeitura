import { menu } from "@/constants/menu";
import Link from "next/link";

export default function Menu() {
    return (
        <nav className="z-30 hidden lg:flex items-center flex-1 justify-center xl:flex-none">
            <ul className="flex items-center">
                {
                    menu.map((menu, i) => {
                        return (
                            <li key={i} className="relative group">
                                <button
                                    className="h-fit self-center text-sm p-2 flex items-center gap-2 font-bold transition-all duration-300 group-hover:bg-green-950 hover:bg-green-950 xl:text-base 2xl:text-lg"
                                >
                                    {menu.icone}
                                    {menu.label}
                                </button>
                                <div className="absolute left-0 hidden group-hover:block bg-green-950 rounded-lg shadow-lg">
                                    <ul className="flex flex-col gap-0 border-2 border-green-950">
                                        {menu.submenu && menu.submenu.map((sub, i) => (
                                            <li key={i}>
                                                <Link
                                                    href={sub.link}
                                                    className="px-4 py-2 whitespace-nowrap z-40 text-sm flex items-center duration-300 hover:bg-white hover:text-verde-escuro hover:font-bold"
                                                >
                                                    {sub.label}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </li>
                        )
                    })
                }
            </ul>
        </nav>
    )
}