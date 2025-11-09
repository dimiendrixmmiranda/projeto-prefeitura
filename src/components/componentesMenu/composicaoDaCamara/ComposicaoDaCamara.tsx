import BotaoVoltar from "@/components/base/botaoVoltar/BotaoVoltar";

export default function ComposicaoDaCamara() {
    return (
        <div className="flex flex-col p-4 gap-4 max-w-[1600px] mx-auto lg:p-8 lg:gap-6">
            <h2 className="uppercase font-bold text-2xl leading-6 text-center lg:text-3xl xl:text-4xl">
                Vereadores em Exercício
            </h2>
            <div className="flex-col justify-center hidden md:flex">
                <div className="relative w-full h-[300px] lg:h-[440px] 2xl:h-[540px]">
                    <div className="absolute left-[0%] top-[20%]">
                        <div className="w-[150px] lg:w-[200px] h-[150px] lg:h-[240px] bg-red-500 rounded-[12px] overflow-hidden 2xl:w-[250px] 2xl:h-[310px]"></div>
                        <h2 className="font-bold text-center text-lg leading-5 mt-2">Dimi Martins</h2>
                        <h3 className="font-semibold text-center leading-5">Presidente</h3>
                        <p className="text-sm text-center leading-5">PDT</p>
                    </div>
                    <div className="absolute left-[27.5%] top-[0%]">
                        <div className="w-[150px] lg:w-[200px] h-[150px] lg:h-[240px] bg-red-500 rounded-[12px] overflow-hidden 2xl:w-[250px] 2xl:h-[310px]"></div>
                        <h2 className="font-bold text-center text-lg leading-5 mt-2">Dimi Martins</h2>
                        <h3 className="font-semibold text-center leading-5">Presidente</h3>
                        <p className="text-sm text-center leading-5">PDT</p>
                    </div>
                    <div className="absolute left-[53.5%] top-[10%]">
                        <div className="w-[150px] lg:w-[200px] h-[150px] lg:h-[240px] bg-red-500 rounded-[12px] overflow-hidden 2xl:w-[250px] 2xl:h-[310px]"></div>
                        <h2 className="font-bold text-center text-lg leading-5 mt-2">Dimi Martins</h2>
                        <h3 className="font-semibold text-center leading-5">Presidente</h3>
                        <p className="text-sm text-center leading-5">PDT</p>
                    </div>
                    <div className="absolute right-0 top-[25%]">
                        <div className="w-[150px] lg:w-[200px] h-[150px] lg:h-[240px] bg-red-500 rounded-[12px] overflow-hidden 2xl:w-[250px] 2xl:h-[310px]"></div>
                        <h2 className="font-bold text-center text-lg leading-5 mt-2">Dimi Martins</h2>
                        <h3 className="font-semibold text-center leading-5">Presidente</h3>
                        <p className="text-sm text-center leading-5">PDT</p>
                    </div>
                </div>
                <div className="flex gap-2 mx-auto xl:gap-4">
                    <div>
                        <div className="w-[140px] h-[140px] bg-red-500 rounded-[12px] overflow-hidden lg:w-[180px] lg:h-[240px] xl:w-[220px] xl:h-[270px]"></div>
                        <h2 className="font-bold text-center text-lg">Dimi Martins</h2>
                        <p className="text-sm text-center leading-5">PDT</p>
                    </div>
                    <div>
                        <div className="w-[140px] h-[140px] bg-red-500 rounded-[12px] overflow-hidden lg:w-[180px] lg:h-[240px] xl:w-[220px] xl:h-[270px]"></div>
                        <h2 className="font-bold text-center text-lg">Dimi Martins</h2>
                        <p className="text-sm text-center leading-5">PDT</p>
                    </div>
                    <div>
                        <div className="w-[140px] h-[140px] bg-red-500 rounded-[12px] overflow-hidden lg:w-[180px] lg:h-[240px] xl:w-[220px] xl:h-[270px]"></div>
                        <h2 className="font-bold text-center text-lg">Dimi Martins</h2>
                        <p className="text-sm text-center leading-5">PDT</p>
                    </div>
                    <div>
                        <div className="w-[140px] h-[140px] bg-red-500 rounded-[12px] overflow-hidden lg:w-[180px] lg:h-[240px] xl:w-[220px] xl:h-[270px]"></div>
                        <h2 className="font-bold text-center text-lg">Dimi Martins</h2>
                        <p className="text-sm text-center leading-5">PDT</p>
                    </div>
                    <div>
                        <div className="w-[140px] h-[140px] bg-red-500 rounded-[12px] overflow-hidden lg:w-[180px] lg:h-[240px] xl:w-[220px] xl:h-[270px]"></div>
                        <h2 className="font-bold text-center text-lg">Dimi Martins</h2>
                        <p className="text-sm text-center leading-5">PDT</p>
                    </div>

                </div>
            </div>
            <div className="grid grid-cols-2 gap-2 md:hidden">
                <div className="">
                    <div className="w-full h-[180px] sm:h-[250px] sm:max-w-[220px] sm:mx-auto bg-red-500 rounded-[12px] overflow-hidden"></div>
                    <h2 className="font-bold text-center text-lg leading-5 mt-2">Dimi Martins</h2>
                    <h3 className="font-semibold text-center leading-5">Presidente</h3>
                    <p className="text-sm text-center leading-5">PDT</p>
                </div>
                <div className="">
                    <div className="w-full h-[180px] sm:h-[250px] sm:max-w-[220px] sm:mx-auto bg-red-500 rounded-[12px] overflow-hidden"></div>
                    <h2 className="font-bold text-center text-lg leading-5 mt-2">Dimi Martins</h2>
                    <h3 className="font-semibold text-center leading-5">Presidente</h3>
                    <p className="text-sm text-center leading-5">PDT</p>
                </div>
                <div className="">
                    <div className="w-full h-[180px] sm:h-[250px] sm:max-w-[220px] sm:mx-auto bg-red-500 rounded-[12px] overflow-hidden"></div>
                    <h2 className="font-bold text-center text-lg leading-5 mt-2">Dimi Martins</h2>
                    <h3 className="font-semibold text-center leading-5">Presidente</h3>
                    <p className="text-sm text-center leading-5">PDT</p>
                </div>
                <div className="">
                    <div className="w-full h-[180px] sm:h-[250px] sm:max-w-[220px] sm:mx-auto bg-red-500 rounded-[12px] overflow-hidden"></div>
                    <h2 className="font-bold text-center text-lg leading-5 mt-2">Dimi Martins</h2>
                    <h3 className="font-semibold text-center leading-5">Presidente</h3>
                    <p className="text-sm text-center leading-5">PDT</p>
                </div>
                <div className="">
                    <div className="w-full h-[180px] sm:h-[250px] sm:max-w-[220px] sm:mx-auto bg-red-500 rounded-[12px] overflow-hidden"></div>
                    <h2 className="font-bold text-center text-lg leading-5 mt-2">Dimi Martins</h2>
                    <h3 className="font-semibold text-center leading-5">Presidente</h3>
                    <p className="text-sm text-center leading-5">PDT</p>
                </div>
                <div className="">
                    <div className="w-full h-[180px] sm:h-[250px] sm:max-w-[220px] sm:mx-auto bg-red-500 rounded-[12px] overflow-hidden"></div>
                    <h2 className="font-bold text-center text-lg leading-5 mt-2">Dimi Martins</h2>
                    <h3 className="font-semibold text-center leading-5">Presidente</h3>
                    <p className="text-sm text-center leading-5">PDT</p>
                </div>
                <div className="">
                    <div className="w-full h-[180px] sm:h-[250px] sm:max-w-[220px] sm:mx-auto bg-red-500 rounded-[12px] overflow-hidden"></div>
                    <h2 className="font-bold text-center text-lg leading-5 mt-2">Dimi Martins</h2>
                    <h3 className="font-semibold text-center leading-5">Presidente</h3>
                    <p className="text-sm text-center leading-5">PDT</p>
                </div>
                <div className="">
                    <div className="w-full h-[180px] sm:h-[250px] sm:max-w-[220px] sm:mx-auto bg-red-500 rounded-[12px] overflow-hidden"></div>
                    <h2 className="font-bold text-center text-lg leading-5 mt-2">Dimi Martins</h2>
                    <h3 className="font-semibold text-center leading-5">Presidente</h3>
                    <p className="text-sm text-center leading-5">PDT</p>
                </div>
                <div className="">
                    <div className="w-full h-[180px] sm:h-[250px] sm:max-w-[220px] sm:mx-auto bg-red-500 rounded-[12px] overflow-hidden"></div>
                    <h2 className="font-bold text-center text-lg leading-5 mt-2">Dimi Martins</h2>
                    <h3 className="font-semibold text-center leading-5">Presidente</h3>
                    <p className="text-sm text-center leading-5">PDT</p>
                </div>
            </div>
            <BotaoVoltar />
        </div>
    )
}