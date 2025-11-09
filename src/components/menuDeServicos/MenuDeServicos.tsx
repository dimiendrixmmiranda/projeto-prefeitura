import Image from "next/image";
import Link from "next/link";

export default function MenuDeServicos() {
    return (
        <nav className="p-4">
            <ul className="grid grid-cols-2 justify-center gap-2 md:grid-cols-3 md:max-w-[600px] md:mx-auto lg:grid-cols-6 lg:max-w-[1000px] lg:gap-8 2xl:max-w-[1260px]">
                <li className=" mx-auto w-[130px] h-[130px] border-2 border-zinc-500 hover:scale-110 duration-300 transition-all sm:w-[150px] sm:h-[150px] md:w-[150px] md:h-[150px] 2xl:w-[200px] 2xl:h-[200px] overflow-hidden" style={{ borderRadius: '16px' }}>
                    <Link
                        href="/"
                        className="w-full h-full grid grid-rows-3 p-1 bg-gradient-to-br from-[#2E8B57] via-[#236D45] to-[#145C32]"
                    >
                        <div className="relative w-[80px] h-[80px] overflow-hidden row-start-1 row-end-3 mx-auto sm:w-[100px] sm:h-[100px] 2xl:w-[130px] 2xl:h-[130px]" style={{ borderRadius: '16px' }}>
                            <Image alt="logo" src={'/menuDeServico/portal-transparencia.png'} fill className="object-contain" />
                        </div>
                        <h2 className="text-white text-center text-sm font-terciaria font-bold leading-4 self-center sm:text-base sm:leading-4 lg:text-lg lg:leading-5 2xl:text-xl 2xl:leading-6" style={{ textShadow: '1px 1px 2px black' }}>Portal da Transparência</h2>
                    </Link>
                </li>
                <li className=" mx-auto w-[130px] h-[130px] border-2 border-zinc-500 hover:scale-110 duration-300 transition-all sm:w-[150px] sm:h-[150px] md:w-[150px] md:h-[150px] 2xl:w-[200px] 2xl:h-[200px] overflow-hidden" style={{ borderRadius: '16px' }}>
                    <Link
                        href="/"
                        className="w-full h-full grid grid-rows-3 p-1 bg-gradient-to-br from-[#2E8B57] via-[#236D45] to-[#145C32]"
                    >
                        <div className="relative w-[80px] h-[80px] overflow-hidden row-start-1 row-end-3 mx-auto sm:w-[100px] sm:h-[100px] 2xl:w-[130px] 2xl:h-[130px]" style={{ borderRadius: '16px' }}>
                            <Image alt="logo" src={'/menuDeServico/processos-licitatorios.png'} fill className="object-contain" />
                        </div>
                        <h2 className="text-white text-center text-sm font-terciaria font-bold leading-4 self-center sm:text-base sm:leading-4 lg:text-lg lg:leading-5 2xl:text-xl 2xl:leading-6" style={{ textShadow: '1px 1px 2px black' }}>Processos Licitatórios</h2>
                    </Link>
                </li>
                <li className=" mx-auto w-[130px] h-[130px] border-2 border-zinc-500 hover:scale-110 duration-300 transition-all sm:w-[150px] sm:h-[150px] md:w-[150px] md:h-[150px] 2xl:w-[200px] 2xl:h-[200px] overflow-hidden" style={{ borderRadius: '16px' }}>
                    <Link
                        href="/"
                        className="w-full h-full grid grid-rows-3 p-1 bg-gradient-to-br from-[#2E8B57] via-[#236D45] to-[#145C32]"
                    >
                        <div className="relative w-[80px] h-[80px] overflow-hidden row-start-1 row-end-3 mx-auto sm:w-[100px] sm:h-[100px] 2xl:w-[130px] 2xl:h-[130px]" style={{ borderRadius: '16px' }}>
                            <Image alt="logo" src={'/menuDeServico/ouvidoria-municipal.png'} fill className="object-contain" />
                        </div>
                        <h2 className="text-white text-center text-sm font-terciaria font-bold leading-4 self-center sm:text-base sm:leading-4 lg:text-lg lg:leading-5 2xl:text-xl 2xl:leading-6" style={{ textShadow: '1px 1px 2px black' }}>Ouvidoria Municipal</h2>
                    </Link>
                </li>
                <li className=" mx-auto w-[130px] h-[130px] border-2 border-zinc-500 hover:scale-110 duration-300 transition-all sm:w-[150px] sm:h-[150px] md:w-[150px] md:h-[150px] 2xl:w-[200px] 2xl:h-[200px] overflow-hidden" style={{ borderRadius: '16px' }}>
                    <Link
                        href="/"
                        className="w-full h-full grid grid-rows-3 p-1 bg-gradient-to-br from-[#2E8B57] via-[#236D45] to-[#145C32]"
                    >
                        <div className="relative w-[80px] h-[80px] overflow-hidden row-start-1 row-end-3 mx-auto sm:w-[100px] sm:h-[100px] 2xl:w-[130px] 2xl:h-[130px]" style={{ borderRadius: '16px' }}>
                            <Image alt="logo" src={'/menuDeServico/portal-nfs.png'} fill className="object-contain" />
                        </div>
                        <h2 className="text-white text-center text-sm font-terciaria font-bold leading-4 self-center sm:text-base sm:leading-4 lg:text-lg lg:leading-5 2xl:text-xl 2xl:leading-6" style={{ textShadow: '1px 1px 2px black' }}>Portal NFS-e</h2>
                    </Link>
                </li>
                <li className=" mx-auto w-[130px] h-[130px] border-2 border-zinc-500 hover:scale-110 duration-300 transition-all sm:w-[150px] sm:h-[150px] md:w-[150px] md:h-[150px] 2xl:w-[200px] 2xl:h-[200px] overflow-hidden" style={{ borderRadius: '16px' }}>
                    <Link
                        href="/"
                        className="w-full h-full grid grid-rows-3 p-1 bg-gradient-to-br from-[#2E8B57] via-[#236D45] to-[#145C32]"
                    >
                        <div className="relative w-[80px] h-[80px] overflow-hidden row-start-1 row-end-3 mx-auto sm:w-[100px] sm:h-[100px] 2xl:w-[130px] 2xl:h-[130px]" style={{ borderRadius: '16px' }}>
                            <Image alt="logo" src={'/menuDeServico/solicitacao-de-acesso.png'} fill className="object-contain" />
                        </div>
                        <h2 className="text-white text-center text-sm font-terciaria font-bold leading-4 self-center sm:text-base sm:leading-4 lg:text-lg lg:leading-5 2xl:text-xl 2xl:leading-6" style={{ textShadow: '1px 1px 2px black' }}>Solicitação de Acesso</h2>
                    </Link>
                </li>
                <li className=" mx-auto w-[130px] h-[130px] border-2 border-zinc-500 hover:scale-110 duration-300 transition-all sm:w-[150px] sm:h-[150px] md:w-[150px] md:h-[150px] 2xl:w-[200px] 2xl:h-[200px] overflow-hidden" style={{ borderRadius: '16px' }}>
                    <Link
                        href="/"
                        className="w-full h-full grid grid-rows-3 p-1 bg-gradient-to-br from-[#2E8B57] via-[#236D45] to-[#145C32]"
                    >

                        <div className="relative w-[80px] h-[80px] overflow-hidden row-start-1 row-end-3 mx-auto sm:w-[100px] sm:h-[100px] 2xl:w-[130px] 2xl:h-[130px]" style={{ borderRadius: '16px' }}>
                            <Image alt="logo" src={'/menuDeServico/carta-de-servico.png'} fill className="object-contain" />
                        </div>
                        <h2 className="text-white text-center text-sm font-terciaria font-bold leading-4 self-center sm:text-base sm:leading-4 lg:text-lg lg:leading-5 2xl:text-xl 2xl:leading-6" style={{ textShadow: '1px 1px 2px black' }}>Carta de Serviço</h2>
                    </Link>
                </li>
            </ul>
        </nav>
    )
}