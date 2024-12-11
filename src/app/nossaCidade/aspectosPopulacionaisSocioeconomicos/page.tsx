import AncoraContainer from "@/components/ancora/AncoraContainer";
import Template from "@/components/template/Template";

export default function AspectosGeograficos() {
    return (
        <Template>
            <div className="text-black p-2 max-w-[1200px] mx-auto">
                <h2 className="font-black text-2xl leading-7 my-4">Aspectos Populacionais e Socioecônomicos do Município</h2>
                <ul className="flex flex-col gap-6">
                    <li className="flex flex-col gap-1">
                        <h3 className="text-xl font-bold">População e Diversidade Cultural</h3>
                        <p style={{ textIndent: '2em' }}>
                            A população de Joaquim Távora é resultado de uma rica miscigenação entre os grupos colonizadores, compostos por imigrantes estrangeiros, nativos da região e migrantes de outras partes do Brasil. Essa diversidade étnica originou-se da presença de povos eslavos (poloneses, ucranianos, russos), japoneses, portugueses, italianos, alemães, espanhóis e árabes (sírios, libaneses e turcos), cada qual contribuindo de forma significativa para o desenvolvimento e os costumes do município.</p>
                        <p style={{ textIndent: '2em' }}>
                            Os eslavos tiveram grande importância ao fundarem as colônias de Nova Varsóvia e São Miguel, no sudoeste do município. Eles introduziram novas técnicas agrícolas e cultivos diversificados, como trigo, arroz, feijão, milho, batata, centeio, aveia e cevada, além de criar gado leiteiro e para corte. Também fundaram as primeiras serrarias e fábricas de carroças, carrocerias e marcenarias. Seus hábitos culturais, como o culto religioso e festas tradicionais, e alimentares, como pão de centeio e pão de mel, marcaram a região. No entanto, devido às geadas e ao enfraquecimento da agricultura, muitos migraram para grandes centros urbanos, enquanto outros se adaptaram à zona urbana.</p>
                        <p style={{ textIndent: '2em' }}>
                            Os italianos, pioneiros na região, se destacaram na agricultura, com foco na cafeicultura, gado leiteiro e cultivo de milho, arroz e trigo. Contribuíram também para o comércio e indústria, além de deixarem uma herança cultural marcada por pratos como lasanha, macarronada e pizza, hábitos recreativos como truco e bocha, e o espírito festivo com forte influência religiosa católica.</p>
                        <p style={{ textIndent: '2em' }}>
                            Os portugueses desempenharam um papel fundamental na construção de estradas, ferrovias e atividades como olaria, marcenaria, hotelaria e serrarias. Seus hábitos alimentares incluíam pratos como bacalhoada e o uso de azeite e azeitonas, influenciando significativamente a culinária local.</p>
                        <p style={{ textIndent: '2em' }}>
                            Os alemães foram importantes nas atividades comerciais, alvenaria, serrarias e instalações industriais, introduzindo a apicultura e o uso do mel. Trouxeram também mão de obra qualificada para a construção civil e contribuíram com hábitos culturais, como a árvore de Natal e Papai Noel, além de utilizar hortaliças na alimentação.</p>
                        <p style={{ textIndent: '2em' }}>
                            Os espanhóis, inicialmente dedicados à agricultura, posteriormente se destacaram no comércio urbano. Sua culinária influenciou a região com alimentos à base de milho e fubá, como bolos e broas, além de contribuírem com festas e eventos sociais.</p>
                        <p style={{ textIndent: '2em' }}>
                            Os árabes influenciaram principalmente o comércio e a construção civil, difundindo pratos como quibe, esfirra e pimentão recheado na culinária local.</p>
                        <p style={{ textIndent: '2em' }}>
                            Os japoneses se destacaram na agricultura e avicultura, introduzindo técnicas modernas e estimulando o cooperativismo rural. Sua cultura se reflete na alimentação com peixes, legumes e condimentos, além da divulgação de lutas marciais e da filosofia Seicho-no-ie.</p>
                    </li>
                    <li className="flex flex-col gap-1">
                        <h3 className="text-xl font-bold">Aspectos Econômicos</h3>
                        <p style={{ textIndent: '2em' }}>O município possui solos férteis, predominantemente de terra roxa, reconhecidos por sua alta produtividade, e massapé, que, apesar de ser menos profundo, também oferece boas condições para o cultivo. A economia local é diversificada e se apoia principalmente na agricultura, pecuária, comércio e indústria. A produção agrícola é bastante variada, com destaque para o cultivo de grãos, frutas e hortaliças, que atendem tanto ao consumo interno quanto à exportação. As indústrias locais estão fortemente voltadas à avicultura e à produção rural, com fábricas que processam produtos alimentícios e derivados do setor agropecuário. Além disso, o comércio e os serviços urbanos estão em plena expansão, com o crescimento do número de estabelecimentos comerciais, mercados, restaurantes e centros de serviços, impulsionando a economia local e atraindo novos investimentos.</p>
                    </li>
                    <li className="flex flex-col gap-1">
                        <h3 className="text-xl font-bold">Infraestrutura e Localização</h3>
                        <p style={{ textIndent: '2em' }}>Joaquim Távora está estrategicamente localizada e bem conectada a municípios vizinhos, com acesso facilitado por ferrovia e rodovia. A cidade está a apenas 12 km de Quatiguá via ferrovia e 8 km por rodovia, e a 36 km de Santo Antônio da Platina por rodovia. A capital Curitiba está a 472 km por ferrovia e 341 km por rodovia, o que proporciona boas opções de transporte para a região. A cidade conta com ruas asfaltadas ou pavimentadas, o que facilita o tráfego e a mobilidade urbana. A infraestrutura de serviços essenciais, como a agência dos Correios, demonstra o progresso local e o crescimento da cidade, que, apesar de enfrentar os desafios da transição política e econômica nacional, continua a se desenvolver. A presença dessas conexões e serviços é fundamental para sustentar a expansão econômica e atrair investimentos para a região.</p>
                    </li>
                </ul>
                <AncoraContainer></AncoraContainer>
            </div>
        </Template>
    )
}