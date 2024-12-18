import AncoraContainer from "@/components/ancora/AncoraContainer";
import Template from "@/components/template/Template";
import Image from "next/image";

export default function Etimologia() {
    return (
        <Template>
            <div className="text-black p-2 max-w-[1200px] mx-auto">
                <h2 className="font-black text-2xl leading-7 my-4">Etimologia do Município</h2>
                <ul className="flex flex-col gap-6 lg:grid">
                    <li className="flex flex-col gap-1 lg:grid lg:grid-cols-2">
                        <p style={{ textIndent: '2em', gridRow: '1/2'}}>
                            A cidade de Joaquim Távora, no Paraná, recebeu esse nome em homenagem ao tenente Joaquim Távora, um dos protagonistas da Revolução de 1924. Este movimento foi um marco da história política e militar brasileira, representando a luta de setores descontentes das Forças Armadas e de oligarquias regionais contra o governo federal. Joaquim Távora destacou-se como um dos líderes dessa rebelião militar, ao lado do general reformado Isidoro Dias Lopes e do major Miguel Costa, comandante da Força Pública do Estado de São Paulo.</p>
                        <p style={{ textIndent: '2em', gridRow: '2/3'}}>
                            A revolta teve suas origens no descontentamento com o governo de Arthur Bernardes (1922-1926), que enfrentava fortes críticas por sua postura centralizadora e pela repressão a movimentos opositores, como o Levante do Forte de Copacabana em 1922. Esses eventos acirraram os ânimos entre militares e civis, resultando em um conflito armado em julho de 1924 na cidade de São Paulo, onde Joaquim Távora morreu em combate, consolidando sua figura como mártir da revolução.</p>
                        <div className="relative w-[300px] h-[300px] mx-auto lg:row-span-3 lg:h-[370px]">
                            <Image alt="Joaquim Távora" src={'https://eremjt.com/wp-content/uploads/2016/08/joaquim-tavora-ael-fundo-miguel-costa.jpg?w=272&h=345'} fill className="object-cover"></Image>
                        </div>
                    </li>
                    <li className="flex flex-col gap-1">
                        <h3 className="text-xl font-bold">Etimologia do nome Joaquim Távora</h3>
                        <p style={{ textIndent: '2em' }}>
                            O nome Joaquim deriva do hebraico Yehoyaqim (יְהוֹיָקִים), que significa &quot;Deus estabelece&quot; ou &quot;o elevado por Deus&quot;. Este nome bíblico carrega uma conotação de grandeza e liderança espiritual, associado a personagens de destaque no Antigo Testamento.</p>
                        <p style={{ textIndent: '2em' }}>
                            O sobrenome Távora tem origem geográfica e histórica em Portugal. Designa &quot;rio&quot; ou uma região específica na antiga província do Minho. O termo remete à natureza e aos cursos d’água, sendo também associado a uma linhagem nobre portuguesa que desempenhou papéis importantes na história lusitana.</p>
                    </li>
                    <li className="flex flex-col gap-1">
                        <h3 className="text-xl font-bold">Conexões históricas e geográficas</h3>
                        <p style={{ textIndent: '2em' }}>
                            A escolha do nome Joaquim Távora para a cidade não apenas homenageia o tenente como também simboliza um período de intensas transformações na República Velha. A fundação de cidades com nomes que exaltam figuras militares reforça o espírito de resistência e a memória de ideais democráticos que ecoaram ao longo da história brasileira.</p>
                        <p style={{ textIndent: '2em' }}>
                            Essas características fazem da cidade não apenas um espaço geográfico, mas também um monumento à memória de uma luta por justiça e mudanças sociais.</p>
                    </li>
                </ul>
                <AncoraContainer></AncoraContainer>
            </div>
        </Template>
    )
}