import AncoraContainer from "@/components/ancora/AncoraContainer";
import Template from "@/components/template/Template";
import Image from "next/image";

export default function AspectosGeograficos() {
    return (
        <Template>
            <div className="text-black p-2 max-w-[1200px] mx-auto">
                <h2 className="font-black text-2xl leading-7 my-4">Aspectos Geográficos do Município</h2>
                <ul className="flex flex-col gap-6">
                    <li className="flex flex-col gap-1 lg:grid lg:grid-cols-2">
                        <p style={{ textIndent: '2em' }}>Joaquim Távora é um município localizado na região norte do estado do Paraná, inserido na mesorregião Norte Pioneiro, conhecida por seu papel histórico no desenvolvimento agrário e econômico do estado. Faz divisa com os municípios de Quatiguá ao norte, Guapirama a noroeste, Santo Antônio da Platina a oeste, e Carlópolis ao sul e sudeste. A cidade ocupa uma posição privilegiada devido à proximidade com importantes centros urbanos regionais e sua inserção em uma paisagem diversificada, com relevância tanto para a agricultura quanto para a preservação ambiental.</p>
                        <div className="w-full max-w-[360px] h-[400px] relative mx-auto lg:h-[200px] lg:w-[200px]">
                            <Image alt="municipio de joaquim Távora e suas divisas" src={'https://www.controlemunicipal.com.br/inga/sistema/imagens/123/gd_260517110342_mapa_joaquim_tavora_limites_jpg.jpg'} fill className="object-cover"></Image>
                        </div>
                    </li>
                    <li className="flex flex-col gap-1">
                        <h3 className="text-xl font-bold">Localização e Acessos</h3>
                        <p style={{ textIndent: '2em' }}>
                            O município está situado a cerca de 320 km da capital, Curitiba, e sua posição estratégica favorece o escoamento de produtos agrícolas e o intercâmbio cultural e comercial. Está conectado por rodovias estaduais, como a PR-092, que desempenham um papel crucial no transporte regional.</p>
                    </li>
                    <li className="flex flex-col gap-1">
                        <h3 className="text-xl font-bold">Relevo e Solo</h3>
                        <p style={{ textIndent: '2em' }}>O relevo de Joaquim Távora é caracterizado por suaves ondulações, típicas da região do Norte Pioneiro, com altitudes médias em torno de 600 metros acima do nível do mar. Os solos predominantes são férteis, sendo parte de uma área historicamente utilizada para o cultivo de café, embora atualmente a diversificação agrícola inclua grãos, pastagens e culturas perenes.</p>
                        <p style={{ textIndent: '2em' }}>Grande parte do solo do município é constituído da chamada terra roxa, produto da decomposição de rochas eruptivas básicas. São solos de coloração marrom avermelhado bem característica, muito profundos, podendo atingir  até 20 metros ou mais.</p>
                        <p style={{ textIndent: '2em' }}>De decomposição permeável entre 30 a 60 centímetros de profundidade. A matéria orgânica encontra-se em sua maior parte distribuída na camada de 0 a 40 centímetros, observando-se o mesmo com as bases trocáveis. Existe também o solo chamado massapé.</p>
                        <p style={{ textIndent: '2em' }}>São solos de coloração clara ou esbranquiçada, porém não muito profundos como a terra roxa. Em certas regiões do município esse tipo de solo apresenta uma pequena camada arável (20 a 50 centímetros), vindo logo em seguida uma camada impermeável. São em geral solos bastante férteis.</p>
                    </li>
                    <li className="flex flex-col gap-1">
                        <h3 className="text-xl font-bold">Hidrografia</h3>
                        <p style={{ textIndent: '2em' }}>
                            A cidade é atravessada por diversos pequenos rios e córregos, pertencentes à bacia hidrográfica do Rio Paranapanema, que marca a divisa entre os estados do Paraná e São Paulo. A disponibilidade hídrica tem um papel importante tanto no abastecimento urbano quanto na irrigação das áreas agrícolas.</p>
                    </li>
                    <li className="flex flex-col gap-1">
                        <h3 className="text-xl font-bold">Clima</h3>
                        <p style={{ textIndent: '2em' }}>
                            Joaquim Távora possui um clima subtropical úmido (Cfa, segundo a classificação de Köppen), caracterizado por verões quentes e úmidos, invernos amenos e uma boa distribuição de chuvas ao longo do ano. A temperatura média anual é de aproximadamente 20 °C, com variações sazonais que favorecem a diversidade de culturas agrícolas.</p>
                    </li>
                    <li className="flex flex-col gap-1">
                        <h3 className="text-xl font-bold">Vegetação</h3>
                        <p style={{ textIndent: '2em' }}>
                            Originalmente, a vegetação do município era composta pela Mata Atlântica, com presença de florestas estacionais semideciduais. Atualmente, devido à atividade humana, grande parte da vegetação nativa foi substituída por áreas agrícolas e pastagens, embora remanescentes florestais ainda possam ser encontrados, especialmente em áreas de preservação ambiental.</p>
                    </li>
                    <li className="flex flex-col gap-1">
                        <h3 className="text-xl font-bold">Economia Rural e Uso do Solo</h3>
                        <p style={{ textIndent: '2em' }}>
                            A economia rural de Joaquim Távora é uma das principais alavancas de desenvolvimento do município, refletindo a tradição agrícola do Norte Pioneiro do Paraná. O uso do solo é amplamente direcionado para atividades agropecuárias, com destaque para a agricultura familiar, que desempenha um papel fundamental na economia local, além de manter o equilíbrio social e ambiental na região.</p>
                        <p style={{ textIndent: '2em' }}>
                            O município se destaca pelo cultivo de grãos, especialmente soja, milho e feijão, que são as principais culturas comerciais e responsáveis por grande parte do movimento econômico rural. Além disso, a horticultura e a fruticultura vêm ganhando espaço, com o plantio de laranja, banana e outras frutas voltadas tanto para o mercado interno quanto para a exportação regional.</p>
                        <p style={{ textIndent: '2em' }}>
                            Outras culturas menores, mas de relevância para a subsistência e diversificação agrícola, incluem mandioca, batata-doce e abóbora. A agricultura orgânica também começa a emergir em pequenas propriedades, atendendo à crescente demanda por alimentos saudáveis.</p>
                        <p style={{ textIndent: '2em' }}>
                            A pecuária é outro setor relevante na economia rural. A criação de gado de corte e leiteiro ocupa boa parte das propriedades, sendo uma importante fonte de renda para os produtores locais. O leite produzido é, em parte, destinado ao consumo interno, mas também abastece laticínios da região. Além disso, a criação de suínos e aves, especialmente frangos de corte, complementa a cadeia produtiva.</p>
                        <p style={{ textIndent: '2em' }}>
                            Em algumas áreas, o uso do solo inclui a silvicultura, principalmente com o cultivo de eucalipto e pinus. Essas espécies são destinadas tanto à produção de madeira quanto à celulose, gerando emprego e renda. O reflorestamento também é incentivado como uma forma de recuperar áreas degradadas e cumprir as exigências de preservação ambiental.</p>
                        <p style={{ textIndent: '2em' }}>
                            O cooperativismo é uma prática consolidada no município, com cooperativas agrícolas atuando na assistência técnica, no fornecimento de insumos e no escoamento da produção. Esse modelo fortalece os pequenos produtores e permite maior competitividade no mercado, além de fomentar a economia local.</p>
                    </li>
                    <li className="flex flex-col gap-1">
                        <h3 className="text-xl font-bold">Áreas Urbanas e Rurais</h3>
                        <p style={{ textIndent: '2em' }}>
                            O município apresenta um equilíbrio entre áreas urbanas e rurais. A zona urbana é bem estruturada, com serviços básicos acessíveis, enquanto a zona rural é caracterizada por pequenas e médias propriedades familiares, que formam a base da economia local.</p>
                    </li>
                    <li className="flex flex-col gap-1">
                        <h3 className="text-xl font-bold">Aspectos Ambientais</h3>
                        <p style={{ textIndent: '2em' }}>Joaquim Távora, inserido na rica região do Norte Pioneiro do Paraná, apresenta características ambientais que mesclam um histórico de intensa ocupação agrícola com a presença de remanescentes naturais significativos. O município busca o equilíbrio entre o desenvolvimento econômico e a conservação ambiental, enfrentando desafios e adotando iniciativas para proteger seus recursos naturais.</p>
                        <p style={{ textIndent: '2em' }}>Originalmente, Joaquim Távora fazia parte do bioma da Mata Atlântica, com predominância de florestas estacionais semideciduais. Essas florestas eram compostas por espécies arbóreas como peroba, cedro, ipê e jequitibá, além de uma rica diversidade de fauna e flora associada. Atualmente, grande parte dessa vegetação foi convertida em áreas agrícolas e pastagens devido ao processo de colonização e expansão da agropecuária.</p>
                        <p style={{ textIndent: '2em' }}>Apesar disso, remanescentes florestais ainda podem ser encontrados em fragmentos isolados, especialmente em áreas de preservação permanente (APPs), como margens de rios e topos de morros. Esses remanescentes desempenham um papel crucial na manutenção da biodiversidade e na regulação dos serviços ecossistêmicos.</p>
                        <p style={{ textIndent: '2em' }}>O município é banhado por rios e córregos que integram a bacia hidrográfica do Rio Paranapanema, um dos principais sistemas fluviais da região. Esses recursos são fundamentais para o abastecimento humano, a irrigação agrícola e a manutenção dos ecossistemas locais. Entre os cursos dágua mais relevantes destacam-se o Rio das Cinzas e o Rio Itararé, que também desempenham papel estratégico na agricultura irrigada e na piscicultura.</p>
                        <p style={{ textIndent: '2em' }}>O uso sustentável da água é um desafio crescente, dado o impacto das atividades humanas, como a agropecuária intensiva e o desmatamento, que podem comprometer a qualidade e a disponibilidade hídrica. A recuperação de matas ciliares em áreas de nascentes e margens de rios é uma prioridade para a gestão ambiental do município.</p>
                        <p style={{ textIndent: '2em' }}>Embora a transformação da paisagem tenha reduzido a cobertura vegetal original, Joaquim Távora ainda abriga uma diversidade considerável de espécies. Fauna como capivaras, jaguatiricas, tatus e diversas aves encontram refúgio nos remanescentes florestais e nas áreas de preservação.</p>
                        <p style={{ textIndent: '2em' }}>A biodiversidade é protegida, em parte, por programas de conservação e iniciativas locais, como a educação ambiental em escolas e ações de reflorestamento promovidas por organizações governamentais e não governamentais.</p>
                        <p style={{ textIndent: '2em' }}>O uso do solo predominantemente agrícola, associado ao manejo inadequado em algumas áreas, resultou em problemas como a compactação do solo, erosão e assoreamento dos cursos d’água. O monocultivo de grãos, embora economicamente relevante, exige práticas mais sustentáveis para mitigar impactos ambientais, como a rotação de culturas e o plantio direto.</p>
                        <div className="grid w-full gap-5 lg:grid-cols-2 my-4">
                            <div className="w-[300px] h-[300px] relative md:w-[500px]">
                                <Image alt="Rio das Cinzas" src={'https://upload.wikimedia.org/wikipedia/commons/4/47/Rio_das_Cinzas_021206_REFON.jpg'} fill className="object-cover"></Image>
                            </div>
                            <div className="w-[300px] h-[300px] relative md:w-[500px]">
                                <Image alt="Rio das Itarare" src={'https://upload.wikimedia.org/wikipedia/commons/4/47/Rio_Itarar%C3%A9_-_Visto_da_Ponte_Divisa_PR-SP.jpg'} fill className="object-cover"></Image>
                            </div>
                        </div>
                    </li>
                </ul>
                <AncoraContainer></AncoraContainer>
            </div>
        </Template>
    )
}