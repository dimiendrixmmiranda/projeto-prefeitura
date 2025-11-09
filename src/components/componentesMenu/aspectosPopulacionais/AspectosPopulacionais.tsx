import BotaoVoltar from "@/components/base/botaoVoltar/BotaoVoltar";

export default function AspectosPopulacionais() {
    return (
        <div className="p-4 flex flex-col gap-4 text-verde-escuro max-w-[1440px] mx-auto lg:p-8">
            <h2 className="text-2xl font-bold text-center md:text-3xl xl:text-4xl">Aspectos Populacionais da Cidade de Joaquim Távora - PR</h2>
            <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-4 lg:grid lg:grid-cols-2 xl:grid-cols-3">
                    <p className="lg:col-end-3 lg:col-start-1">
                        A população de Joaquim Távora formou-se por uma intensa miscigenação entre imigrantes estrangeiros, nativos da região e migrantes de outras partes do país. Essa mistura resultou em uma rica diversidade étnica, composta por descendentes de eslavos (poloneses, ucranianos e russos), japoneses, portugueses, italianos, alemães, espanhóis e árabes (sírios, libaneses e turcos).
                    </p>
                    <p className="lg:col-end-3 lg:col-start-1">
                        Os eslavos tiveram papel essencial no desenvolvimento do município. Fundaram as colônias de Nova Varsóvia e São Miguel, no sudoeste do território tavorense, introduzindo novas técnicas agrícolas e diversificando o cultivo de produtos como trigo, arroz, feijão, milho, batata, centeio, aveia, cevada e hortaliças. Também incentivaram a criação de gado leiteiro e de corte, o uso de implementos agrícolas de tração animal e a instalação das primeiras serrarias, marcenarias e fábricas de carroças.
                    </p>
                    <div className="w-full max-w-[320px] my-auto mx-auto h-[230px] bg-zinc-900 lg:col-start-1 lg:col-end-3 xl:row-start-1 xl:row-end-3 xl:col-start-3 xl:col-end-4"></div>
                </div>
                <p>
                    Com o tempo, devido às geadas e ao enfraquecimento da agricultura, muitos se deslocaram para os grandes centros urbanos; os que permaneceram migraram para a área urbana, dedicando-se ao comércio e à indústria. Entre seus costumes, destacam-se o forte culto religioso, as festas de casamento e igreja, e a culinária típica, como o pão de centeio e o pão de mel.
                </p>
                <p>
                    Os italianos, um dos primeiros grupos a se estabelecer na região, dedicaram-se à agricultura — principalmente à cafeicultura, à pecuária leiteira e ao cultivo de grãos. Também se destacaram em atividades comerciais e industriais. Sua influência é visível na alimentação, com pratos como lasanha, polenta, macarronada e pizza, além do espírito festivo, do gosto pelos jogos de truco e bocha, e da tradição católica romana, ainda muito presente.
                </p>
                <p>
                    Os portugueses contribuíram significativamente na construção de estradas, ferrovias e no desenvolvimento de atividades como olaria, marcenaria, hotelaria, serrarias, padarias e bares. Da sua culinária, ficaram marcas como a bacalhoada, o uso do azeite e das azeitonas.
                </p>
                <p>
                    Os alemães se destacaram no comércio, na mecânica, na alvenaria e nas serrarias. Introduziram mão de obra qualificada na construção civil e na indústria, especialmente na instalação elétrica, além de impulsionarem a apicultura e o uso do mel. Seus costumes permanecem na tradição do Natal, com a árvore e o Papai Noel, e no consumo de hortaliças na alimentação.
                </p>
                <div className="flex flex-col gap-4 lg:grid lg:grid-cols-2 xl:grid-cols-3">
                    <p className="lg:col-end-3 lg:col-start-1">
                        Os espanhóis, embora em menor número, contribuíram com o desenvolvimento agrícola e, mais tarde, com o comércio e a indústria urbana. Na culinária, trouxeram o uso do fubá e do milho em bolos e broas. Os árabes influenciaram fortemente o comércio e a construção civil. Na alimentação, sua herança é notável em pratos como quibe, esfirra, charuto e pimentão recheado, muito apreciados até hoje.
                    </p>
                    <p className="lg:col-end-3 lg:col-start-1">
                        Os japoneses tiveram grande importância na agricultura e na avicultura, introduzindo novas técnicas de plantio e o uso de insumos químicos. Sua atuação impulsionou a criação de indústrias como Rações Pioneiras e Abatedouro de Frangos Pioneiro, fomentando o cooperativismo rural. Da sua cultura, destacam-se o consumo de peixes, legumes, verduras e doces, além da difusão das lutas marciais e da filosofia Seicho-no-ie.
                    </p>
                    <div className="w-full max-w-[320px] my-auto mx-auto h-[230px] bg-zinc-900 lg:col-start-1 lg:col-end-3 xl:row-start-1 xl:row-end-3 xl:col-start-3 xl:col-end-4"></div>
                </div>
                <p>
                    Com o passar do tempo, Joaquim Távora evoluiu significativamente, mesmo enfrentando os desafios econômicos e políticos que afetam o país. O município mantém sua base na agricultura e pecuária, seguidas pelo comércio e pela indústria, setores que impulsionam seu desenvolvimento.
                </p>
                <p>
                    O solo tavorense é majoritariamente composto por terra roxa, resultante da decomposição de rochas basálticas, fértil e profunda — podendo atingir mais de 20 metros. Também há áreas de massapé, solo mais claro e menos profundo, mas igualmente produtivo. Essas características favorecem a atividade agrícola, principal motor da economia local.
                </p>
                <p>
                    Hoje, Joaquim Távora apresenta um cenário urbano em constante melhoria, com a maioria das ruas asfaltadas ou calçadas, e boas conexões rodoviárias e ferroviárias com municípios vizinhos, como Quatiguá, Siqueira Campos, Tomazina, Japira, Santo Antônio da Platina, Jacarezinho, Carlópolis, Ribeirão Claro e Curitiba. A cidade conta ainda com agência postal e telegráfica (Agência dos Correios), refletindo o avanço das comunicações e a modernização dos serviços públicos.
                </p>
            </div>
            <BotaoVoltar />
        </div>
    )
}