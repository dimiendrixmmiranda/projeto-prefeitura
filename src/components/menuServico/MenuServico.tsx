import Link from "next/link";

export default function MenuServico() {
    return (
        <nav className="w-[95%] xl:w-[99%] mx-auto p-4 bg-zinc-300 mt-8">
            <ul className="flex flex-wrap justify-center gap-2">
                <li className="lg:flex-1">
                    <Link href={'/'} className="flex justify-center items-center">
                        <img src="/menuServico/portal-transparencia.png" alt="" className="xl:w-[160px] rounded-md" />
                    </Link>
                </li>
                <li className="lg:flex-1">
                    <Link href={'/'} className="flex justify-center items-center">
                        <img src="/menuServico/processos_licitatorios.png" alt="" className="xl:w-[160px] rounded-md border" />
                    </Link>
                </li>
                <li className="lg:flex-1">
                    <Link href={'/'} className="flex justify-center items-center">
                        <img src="/menuServico/atendimento_cidadao.png" alt="" className="xl:w-[160px] rounded-md border" />
                    </Link>
                </li>
                <li className="lg:flex-1">
                    <Link href={'/'} className="flex justify-center items-center">
                        <img src="/menuServico/protocolo_internet.png" alt="" className="xl:w-[160px] rounded-md border" />
                    </Link>
                </li>
                <li className="lg:flex-1">
                    <Link href={'/'} className="flex justify-center items-center">
                        <img src="/menuServico/declaracao_issqn.png" alt="" className="xl:w-[160px] rounded-md border" />
                    </Link>
                </li>
                <li className="lg:flex-1">
                    <Link href={'/'} className="flex justify-center items-center">
                        <img src="/menuServico/ouvidoria_municipal.png" alt="" className="xl:w-[160px] rounded-md border" />
                    </Link>
                </li>
                <li className="lg:flex-1">
                    <Link href={'/'} className="flex justify-center items-center">
                        <img src="/menuServico/portal_nfse.png" alt="" className="xl:w-[160px] rounded-md border" />
                    </Link>
                </li>
            </ul>
        </nav>
    )
}