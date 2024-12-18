import Link from 'next/link'
import styles from './style.module.css'

interface RedeSocialProps {
    nome: string
    link: string
    icone: React.ReactElement
}

export default function RedeSocial({ nome, link, icone }: RedeSocialProps) {
    return (
        <li className={styles.link} data-content={nome}>
            <Link href={link}>
                {icone}
            </Link>
        </li>
    )
}