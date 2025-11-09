import { redes } from "@/constants/redes";
import Link from "next/link";

interface RedesProps {
    posicao?: string
    style?: string
}

export default function Redes({ style, posicao }: RedesProps) {
    return (
        <nav className={posicao}>
            {/* <ul className="flex items-center gap-2"> */}
            <ul className={style}>
                {
                    redes.map((rede, i) => {
                        return (
                            <li key={i} className="relative mx-auto">
                                <Link href={rede.link}>{rede.icone}</Link>
                            </li>
                        )
                    })
                }
            </ul>
        </nav>
    )
}