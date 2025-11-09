import BotaoVoltar from "@/components/base/botaoVoltar/BotaoVoltar";

export default function Etimologia() {
    return (
        <div className="p-4 flex flex-col gap-4 text-verde-escuro max-w-[1440px] mx-auto lg:p-8 xl:min-h-[75vh]">
            <h2 className="text-2xl font-bold text-center md:text-3xl xl:text-4xl">Etimologia da Cidade de Joaquim Távora - PR</h2>
            <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-4 lg:grid lg:grid-cols-2 xl:grid-cols-3">
                    <p className="lg:col-end-3 lg:col-start-1">
                        A cidade de Joaquim Távora, localizada no estado do Paraná, recebeu esse nome em homenagem ao tenente Joaquim Távora, um dos protagonistas da Revolução de 1924. Esse movimento marcou profundamente a história política e militar do Brasil, representando a insatisfação de parte das Forças Armadas e de oligarquias regionais com o governo federal da época. Joaquim Távora destacou-se como um dos líderes da rebelião, ao lado do general reformado Isidoro Dias Lopes e do major Miguel Costa, comandante da Força Pública de São Paulo.
                    </p>
                    <p className="lg:col-end-3 lg:col-start-1">
                        A revolta teve origem no descontentamento com o governo de Arthur Bernardes (1922-1926), criticado por seu autoritarismo e pela repressão a movimentos opositores, como o Levante do Forte de Copacabana em 1922. Em julho de 1924, a cidade de São Paulo tornou-se o palco central do conflito, no qual Joaquim Távora perdeu a vida em combate, consolidando sua imagem como mártir da revolução e símbolo de coragem e idealismo.
                    </p>
                    <div className="w-full max-w-[320px] my-auto mx-auto h-[230px] bg-zinc-900 lg:col-start-1 lg:col-end-3 xl:row-start-1 xl:row-end-3 xl:col-start-3 xl:col-end-4"></div>
                </div>
                <p>
                    O nome “Joaquim” tem origem no hebraico Yehoyaqim (יְהוֹיָקִים), que significa “Deus estabelece” ou “elevado por Deus”. Trata-se de um nome de forte carga simbólica, ligado a figuras bíblicas conhecidas por sua fé e liderança, transmitindo um sentido de dignidade e proteção divina. Já o sobrenome “Távora” tem raízes portuguesas, sendo um topônimo que designa uma região banhada pelo rio Távora, na antiga província do Minho, em Portugal. Com o tempo, o termo passou a identificar uma importante família nobre portuguesa, ligada a feitos históricos e à administração do reino.
                </p>
                <p>
                    Assim, o nome Joaquim Távora carrega um significado profundo que une elementos de fé, nobreza e resistência. A escolha desse nome para o município paranaense reflete não apenas uma homenagem a um herói militar, mas também a valorização de ideais de justiça e liberdade que marcaram o período da República Velha. Dessa forma, a cidade se torna um marco da memória histórica e cultural, preservando o legado de luta e esperança que seu nome representa.
                </p>
            </div>
            <BotaoVoltar />
        </div>
    )
}