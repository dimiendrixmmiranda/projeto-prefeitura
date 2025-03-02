import { BsCircleFill } from "react-icons/bs";
import Link from "next/link";
import React from "react";
import menusFiltrados from "@/core/constants/listaDeMenuDeAcessoRapido";

export default function MenuAcessoRapidoWeb() {
    return (
        <ul className="hidden md:flex flex-col p-2 bg-[--verde]">
            {menusFiltrados.map((menu, i) => (
                <React.Fragment key={i}>
                    {menu?.submenu.map((sub, j) => (
                        <li key={j}>
                            <Link
                                href={sub.link}
                                className="text-lg font-bold my-1 items-center gap-1 leading-5 p-1 rounded-md hover:bg-white hover:text-[--verde] xl:py-2"
                                style={{ display: "grid", gridTemplateColumns: "20px 1fr" }}
                            >
                                <BsCircleFill className="text-[.7em]" />
                                <p>{sub.nome}</p>
                            </Link>
                        </li>
                    ))}
                </React.Fragment>
            ))}
        </ul>
    );
    
}