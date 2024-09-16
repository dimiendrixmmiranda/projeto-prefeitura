import Link from "next/link";

export default function Banners(props: any) {
    return (
        <ul className={`${props.className}`}>
            <li className="w-full max-w-[240px] flex justify-center items-center" style={{boxShadow: '0 0 3px 2px black'}}>
                <Link href={'/'}>
                    <img src="./banner-sala-empreendedor.png    " alt="" className="w-full" />
                </Link>
            </li>
            <li className="w-full max-w-[240px] flex justify-center items-center" style={{boxShadow: '0 0 3px 2px black'}}>
                <Link href={'/'}>
                    <img src="./banner-radar-transparencia.png" alt="" className="w-full" />
                </Link>
            </li>
            <li className="w-full max-w-[240px] flex justify-center items-center" style={{boxShadow: '0 0 3px 2px black'}}>
                <Link href={'/'}>
                    <img src="./banner-fila-espera-educacao.png" alt="" className="w-full" />
                </Link>
            </li>
            <li className="w-full max-w-[240px] flex justify-center items-center" style={{boxShadow: '0 0 3px 2px black'}}>
                <Link href={'/'}>
                    <img src="./govsaude.png" alt="" className="w-full" />
                </Link>
            </li>
            <li className="w-full max-w-[240px] flex justify-center items-center" style={{boxShadow: '0 0 3px 2px black'}}>
                <Link href={'/'}>
                    <img src="./diario-oficial.png" alt="" className="w-full" />
                </Link>
            </li>
        </ul>
    )
}