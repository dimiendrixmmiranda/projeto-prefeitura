import Link from "next/link";
import { GiPlainCircle } from "react-icons/gi";

export default function Sidebar(){
    return(
        <aside className="hidden lg:block w-[20%] h-fit">
            <nav className="bg-[--verde]">
                <ul className="flex flex-col gap-1">
                    <li className="w-full p-2">
                        <Link href={'/'} className="w-full h-full flex font-bold items-center gap-1 xl:text-lg"><GiPlainCircle />Nossa Cidade</Link>
                    </li>
                    <li className="w-full p-2">
                        <Link href={'/'} className="w-full h-full flex font-bold items-center gap-1 xl:text-lg"><GiPlainCircle />Coleta de Lixo</Link>
                    </li>
                    <li className="w-full p-2">
                        <Link href={'/'} className="w-full h-full flex font-bold items-center gap-1 xl:text-lg"><GiPlainCircle />Corte e Poda de Árvores</Link>
                    </li>
                    <li className="w-full p-2">
                        <Link href={'/'} className="w-full h-full flex font-bold items-center gap-1 xl:text-lg"><GiPlainCircle />Possíveis focos de Dengue</Link>
                    </li>
                    <li className="w-full p-2">
                        <Link href={'/'} className="w-full h-full flex font-bold items-center gap-1 xl:text-lg"><GiPlainCircle />Iluminação Pública</Link>
                    </li>
                    <li className="w-full p-2">
                        <Link href={'/'} className="w-full h-full flex font-bold items-center gap-1 xl:text-lg"><GiPlainCircle />Oleríte</Link>
                    </li>
                    <li className="w-full p-2">
                        <Link href={'/'} className="w-full h-full flex font-bold items-center gap-1 xl:text-lg"><GiPlainCircle />Serviços</Link>
                    </li>
                    <li className="w-full p-2">
                        <Link href={'/'} className="w-full h-full flex font-bold items-center gap-1 xl:text-lg"><GiPlainCircle />Legislação</Link>
                    </li>
                    <li className="w-full p-2">
                        <Link href={'/'} className="w-full h-full flex font-bold items-center gap-1 xl:text-lg"><GiPlainCircle />Licitações</Link>
                    </li>
                    <li className="w-full p-2">
                        <Link href={'/'} className="w-full h-full flex font-bold items-center gap-1 xl:text-lg"><GiPlainCircle />Galeria de Obras</Link>
                    </li>
                    <li className="w-full p-2">
                        <Link href={'/'} className="w-full h-full flex font-bold items-center gap-1 xl:text-lg"><GiPlainCircle />Instituições de Ensino</Link>
                    </li>
                    <li className="w-full p-2">
                        <Link href={'/'} className="w-full h-full flex font-bold items-center gap-1 xl:text-lg"><GiPlainCircle />Hospitais e Postos</Link>
                    </li>
                    <li className="w-full p-2">
                        <Link href={'/'} className="w-full h-full flex font-bold items-center gap-1 xl:text-lg"><GiPlainCircle />Galeria de Prefeitos</Link>
                    </li>
                    <li className="w-full p-2">
                        <Link href={'/'} className="w-full h-full flex font-bold items-center gap-1 xl:text-lg"><GiPlainCircle />Departamentos</Link>
                    </li>
                    <li className="w-full p-2">
                        <Link href={'/'} className="w-full h-full flex font-bold items-center gap-1 xl:text-lg"><GiPlainCircle />Galeria de Eventos</Link>
                    </li>
                    <li className="w-full p-2">
                        <Link href={'/'} className="w-full h-full flex font-bold items-center gap-1 xl:text-lg"><GiPlainCircle />Galeria de Aquisições</Link>
                    </li>
                </ul>
            </nav>
            <ul className="mx-auto flex flex-col gap-4 mt-6">
                <li className="w-full">
                    <img src="./sala_empreendedor.png" alt="" className="w-full"/>
                </li>
                <li className="w-full">
                    <img src="./radar-joaquim.png" alt="" className="w-full"/>
                </li>
                <li className="w-full">
                    <img src="./educacao.png" alt="" className="w-full"/>
                </li>
                <li className="w-full">
                    <img src="./saude.png" alt="" className="w-full"/>
                </li>
                <li className="w-full">
                    <img src="./diario_oficial.jpg" alt="" className="w-full"/>
                </li>
            </ul>
        </aside>
    )
}