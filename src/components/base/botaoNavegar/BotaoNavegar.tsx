import Link from "next/link";

interface BotaoNavegarProps {
    link: string
    label: string
    icone: React.ReactElement
    style?: string
}
export default function BotaoNavegar({ link, label, icone, style }: BotaoNavegarProps) {
    return (
        <Link href={link} className={style}>
            <div className="bg-verde-escuro text-white flex items-center gap-1 uppercase font-bold text-2xl p-2 w-fit" style={{ borderRadius: '8px' }}>
                {icone}
                <p style={{textShadow: '1px 1px 2px black'}}>
                    {label}
                </p>
            </div>
        </Link>
    )
}