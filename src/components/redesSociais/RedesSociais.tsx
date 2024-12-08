'use client'
import Link from "next/link";
import styles from './style.module.css'
import { listaDeRedesSociais } from "@/core/constants/listaDeRedesSociais";

interface RedesSociaisProps{
    estilo: string
}

export default function RedesSociais({estilo}: RedesSociaisProps) {
    return (
        <ul className={estilo}>
            {
                listaDeRedesSociais.map((item, i) => {
                    return (
                        <li className={styles.link} data-content={item.nome} key={i}>
                            <Link href={'/'}>
                                {item.icone}
                            </Link>
                        </li>
                    )
                })
            }
        </ul>
    )
}