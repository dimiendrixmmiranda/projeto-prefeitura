import menuAcessoRapido from "@/constants/menuAcessoRapido";
import Link from "next/link";

export default function MenuAcessoRapido() {
    return (
        <nav className="hidden md:flex">
            <ul className="flex flex-col">
                {
                    menuAcessoRapido.map((menu, i) => {
                        return (menu.link &&
                            <li key={i}>
                                <Link href={menu.link} className="flex items-center p-2 gap-1 bg-verde-escuro text-white hover:bg-verde-claro duration-300 transition-all lg:text-xl lg:gap-2 lg:p-3" style={{textShadow: '1px 1px 2px black'}}>
                                    {menu.icone}
                                    <p>{menu.label}</p>
                                </Link>
                            </li>
                        )
                    })
                }
            </ul>
        </nav>
    )
}