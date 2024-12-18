import AncoraContainer from "@/components/ancora/AncoraContainer";
import Template from "@/components/template/Template";
import Image from "next/image";

export default function AspectosHistoricos() {
    return (
        <Template>
            <div className="text-black p-2 max-w-[1200px] mx-auto">
                <h2 className="font-black text-2xl leading-7 my-4">Aspectos Históricos do Município</h2>
                <ul className="flex flex-col gap-6">
                    <li className="flex flex-col gap-1 lg:grid lg:grid-cols-2">
                        <p style={{ textIndent: '2em' }}>
                            O processo histórico que culminou na configuração atual do município pode ser traçado até suas raízes mais remotas, evidenciando uma sequência de desmembramentos ao longo do tempo. De acordo com Ferreira (1996, p. 384), tudo começou com a criação de Paranaguá, em 29 de março de 1648. Posteriormente, Curitiba emancipou-se de Paranaguá em 29 de março de 1693. Jaguariaíva surgiu em 24 de setembro de 1788, desmembrando-se de Curitiba, e, em 24 de março de 1876, foi a vez de São José da Boa Vista emancipar-se de Jaguariaíva. Em 6 de setembro de 1888, Tomazina se originou de São José da Boa Vista, enquanto Jacarezinho emancipou-se de Tomazina em 2 de abril de 1900. Em 31 de março de 1914, Santo Antônio da Platina foi desmembrado de Jacarezinho, e, finalmente, Joaquim Távora tornou-se independente de Santo Antônio da Platina em 10 de abril de 1929.</p>
                        <div className="w-[300px] h-[300px] relative mx-auto lg:w-[400px] lg:h-[300px]">
                            <Image alt="Mapa do Paraná em 1929" src={'https://www.iat.pr.gov.br/sites/agua-terra/arquivos_restritos/files/styles/escala_1140_largura_/public/imagem/2020-04/mapa15g.webp?itok=Vp8TqUqQ'} fill className="object-cover"></Image>
                        </div>
                    </li>
                    <li className="flex flex-col gap-1">
                        <p style={{ textIndent: '2em' }}>
                            Até o final do século XIX, a área atualmente ocupada pelo município era habitada por nações indígenas, que mantiveram contato com exploradores e colonizadores, principalmente vindos de São Paulo e Minas Gerais. Esses desbravadores eram atraídos pela presença de rios como o Tibagi, o Itararé e o Paranapanema. Além disso, como destaca Wachowicz (1987, p. 9), outro fator que incentivou a entrada de fazendeiros na região foi o interesse estratégico no contato com o elemento indígena, visando utilizar os indígenas na desejada comunicação com a província de Mato Grosso.</p>
                        <p style={{ textIndent: '2em' }}>
                            Mesorregião é o nome dado a cada uma das unidades da divisão do Estado do Paraná realizada pelo IAPAR para permitir a organização das demandas e a definição de prioridades regionais, portanto utilizada pela Secretaria de Agricultura do Estado do Paraná.</p>
                        <p style={{ textIndent: '2em' }}>
                            Além dos paulistas e dos mineiros, houve grande influência de imigrantes na formação da sociedade local com a introdução de muitos hábitos culturais trazidos na bagagem como o gosto por músicas e danças diferentes, plantio e utilização de legumes na culinária e conhecimentos de básicas e racionais técnicas agrícolas, comerciais e de construção civil.</p>
                        <p style={{ textIndent: '2em' }}>
                            Ao longo de sua história, diversas correntes imigratórias contribuíram para a formação do município, com destaque para os eslavos (poloneses, ucranianos, russos, entre outros), japoneses, portugueses, italianos, alemães, espanhóis e árabes, incluindo sírios, libaneses, turcos e outros.</p>

                    </li>
                    <li className="flex flex-col gap-1 lg:grid lg:grid-cols-2">
                        <p style={{ textIndent: '2em' }}>
                            A formação nuclear original de Joaquim Távora remonta ao ano de 1915, cuja área era integrante da Fazenda Jaboticabal da Barra Grande de propriedade dos irmãos João Ayres e Job Ayres Dias. Uma das maiores contribuições para o desenvolvimento do lugar se deu por Miguel Dias, o primeiro chefe político do Distrito de <b>Afonso Camargo</b>, nome primitivo do município. Em sua propriedade agrícola, às margens do povoamento, formada de uma grande porcentagem de terra roxa, em 1929 cultivava-se por volta de 30.000 pés de café.</p>
                        <div className="w-[300px] h-[300px] relative mx-auto lg:w-[300px] lg:h-[200px]">
                            <Image alt="Irmãos João Ayres e Job Ayres Dias" src={'https://www.crmpr.org.br/dbimages/11387_img.jpg'} fill className="object-cover"></Image>
                        </div>
                    </li>
                    <li className="flex flex-col gap-1">
                        <p style={{ textIndent: '2em' }}>
                            Jerônimo Vaz Vieira e seu filho, Antônio Joaquim Vieira, também se estabeleceram na região, desempenhando um papel significativo no processo de colonização do município. Na época, a área contava apenas com o patrimônio de Barra Grande, que gradualmente atraiu um grande contingente populacional, impulsionado principalmente pela chegada dos trilhos da Estrada de Ferro da Rede de Viação Paraná–Rio Grande. Uma passagem de Martins (op. cit., p. 110-111) é notável por expressar uma preocupação ecológica diante do desmatamento na região, além de apresentar detalhes peculiares sobre a Estação Afonso Camargo.</p>
                    </li>
                    <li>
                        <p className="max-w-[70%] mx-auto">“Affonso Camargo, ha menos de um anno, era um simples pouso de sertanejos em pleno sertão bravio (...). O ramal a custo attingio aquelle ermo, a 183Km e 800m do seu inicio em Jaguariaiva e hoje Affonso Camargo é uma linda villeta com cerca de 200 predios (...). Se há logar onde se justifiquem as serrarias que abatem as árvores preciosas (...) esse logar é Affonso Camargo (...) florestas irremediavelmente condenadas, vista que a terra magnífica que as mantém, agora a civilização precisa para as culturas systemáticas do Café e do Algodão.</p>
                    </li>
                    <li className="flex flex-col gap-1">
                        <p style={{ textIndent: '2em' }}>
                            Como consequência direta da construção da Estrada de Ferro e ocupação das terras o Norte Pioneiro, o Governo do Estado vislumbrou necessidade de cercar os centros de produção com recursos que os levariam a manter contato direto, fácil e rápido com os mercados consumidores. Portanto, concomitamente, construiu-se a rodovia BR 092 que interliga o Norte Pioneiro com o Estado de São Paulo, por Ourinhos, e com o sudeste do estado do Paraná, pela BR 151 e BR 376.
                        </p>
                        <p style={{ textIndent: '2em' }}>
                            Job Ayres Dias passou a ser chamado de Miguel Dias alegando ter nome estrangeiro difícil de ser pronunciado na região (segundo depoimento informal de parentes). Ao ser elevado à categoria de Distrito administrativo de Santo Antonio da Platina, o povoado recebeu a denominação “Afonso Camargo”, numa homenagem ao então presidente do Estado, Dr. Afonso Alves de Camargo. O processo contou com o apoio do próprio capitão Miguel Dias e dentre outras pessoas, do vereador Herculano Chaves Madureira. Ao desmembrar-se de Santo Antonio da Platina, em 1929, e passou a município com o mesmo nome e, somente em 1930, passou a ser Joaquim Távora e o nome da estação ferroviária Afonso Camargo mudou para Getúlio Dornelles Vargas, o que reflete influencia dos antecedentes e da própria revolução de 1930. (Segundo FERREIRA, 1996; p.68):
                        </p>
                        <p style={{ textIndent: '2em' }}>
                            “ Em julho de 1924 eclode uma rebelião militar em São Paulo, liderada pelo general Isidoro Dias Lopes. Major Miguel Costa e pelo Tenente Joaquim Távora. Participaram da causa os tenentes Juarez Távora, Eduardo Gomes,João Cabanas, Newton Estillae Leal e o mato-grossense Filinto Muller, que mais tarde seria expulso do grupo revolucionário.O movimento encontrou resistência de tropas legalistas, obrigando os revolucionários a abandonarem São Paulo, não sem antes disseminarem nacionalmente a rebelião tenentista. Em outubro de 1924 os paulistas combatiam em território paranaense, contemporaneamente, tropas sediadas no Rio Grande do Sul se rebelavam, respaldados por lideranças gaúchas que se opunham à situação estadual. O autor sustenta a colocação ao escrever sobre o nome próprio do lugarï€‡ como sendo uma “Homenagem ao tenente Joaquim Távora, um dos líderes da Revolução de 1924... que morreu durante os combates” (op.cit.p.38). Confirma-se a afirmação de FERREIRA com o documento expedido pelo Executivo, Decreto nº 332, publicado em Diário Oficial da Sexta-feira, 07 de novembro 1930:
                        </p>
                    </li>
                    <li>
                        <p className="max-w-[70%] mx-auto"> Em julho de 1924, teve início uma rebelião militar em São Paulo, liderada pelo general Isidoro Dias Lopes, pelo major Miguel Costa e pelo tenente Joaquim Távora. Entre os participantes do movimento estavam os tenentes Juarez Távora, Eduardo Gomes, João Cabanas, Newton Estillac Leal e o mato-grossense Filinto Müller, que mais tarde seria expulso do grupo revolucionário. O movimento enfrentou resistência das tropas legalistas, forçando os revolucionários a abandonar São Paulo, mas não sem antes disseminar nacionalmente a ideologia do tenentismo. Em outubro de 1924, os paulistas combatiam em território paranaense enquanto, simultaneamente, tropas no Rio Grande do Sul também se rebelavam, apoiadas por lideranças gaúchas contrárias à situação estadual. O autor reforça essa narrativa ao destacar que o nome do local foi uma homenagem ao tenente Joaquim Távora, um dos líderes da Revolução de 1924... que morreu durante os combates (op. cit., p. 38). Essa afirmação é corroborada pelo documento oficial emitido pelo Executivo, o Decreto nº 332, publicado no Diário Oficial em 7 de novembro de 1930.
                        </p>
                    </li>
                    <li className="flex flex-col gap-1">
                        <p style={{ textIndent: '2em' }}>
                            Proveniente do interior do Ceará, a família Távora possuía uma longa tradição na política regional. Conforme Fausto (1970, p. 80), os Távora sempre se opuseram à velha oligarquia dos Acioli, dominante ao longo da República Velha, e ascenderam ao poder após a Revolução de 1930. O autor, preocupado em explicar a origem dos nomes dos municípios, buscou fontes históricas e etimológicas para fundamentar suas afirmações.
                        </p>
                        <p style={{ textIndent: '2em' }}>
                            Diversos fatores impulsionaram o processo de formação do atual município de Joaquim Távora, destacando-se a construção da Estrada de Ferro, a estrada de rodagem que facilitou o transporte de materiais e o acesso ao Porto de Paranaguá, a Revolução de 1930 e o papel dos proprietários da antiga Fazenda do Jaboticabal, na Barra Grande. A região também foi movimentada por paulistas e mineiros, que se estabeleceram a partir do terceiro quartel do século XIX. Antes disso, essas terras eram habitadas por nações indígenas, e a história registra inúmeras interações entre os primeiros exploradores, colonizadores e os povos indígenas locais.
                        </p>
                        <p style={{ textIndent: '2em' }}>
                            A fundação do núcleo original que deu origem ao atual município de Joaquim Távora remonta ao ano de 1915. Na época, a região fazia parte da Fazenda Jaboticabal de Barra Grande, pertencente a João Ayres e Job Ayres Dias. O capitão Miguel Dias, destacado como o principal povoador do núcleo colonizador e grande produtor de café, desempenhou um papel crucial no crescimento do local, com o apoio das famílias de Joaquim Fonseca, Jerônimo Vaz Vieira e Antônio Joaquim Vieira.
                        </p>
                        <p style={{ textIndent: '2em' }}>
                            Daniel Dias, irmão do capitão Miguel Dias, destacou-se como o principal fundador de Guapirama. Sob o nome de Barra Grande, o povoado prosperou e experimentou um aumento significativo de população com a chegada da estrada de ferro à região. Outro fator determinante para o desenvolvimento local foi a excelente qualidade de suas terras, que atraíram novos moradores e impulsionaram a economia.
                        </p>
                        <p style={{ textIndent: '2em' }}>
                            Quando o povoado foi elevado à categoria de distrito de Santo Antônio da Platina, recebeu o nome de Afonso Camargo, em homenagem ao então presidente do Estado, Dr. Affonso Alves de Camargo. Posteriormente, pela Lei Estadual nº 2.645, de 10 de abril de 1929, foi criado o município de Afonso Camargo, cuja instalação oficial ocorreu em 21 de setembro do mesmo ano.
                        </p>
                        <p style={{ textIndent: '2em' }}>
                            O capitão Miguel Dias foi um dos principais líderes do movimento que culminou na emancipação política do local, contando também com a atuação do vereador Herculano Chaves Madureira. Com a Revolução de 1930, o município passou por significativas mudanças. Por força do Decreto Estadual nº 332, de 6 de novembro de 1930, seu nome foi alterado para Joaquim Távora, em homenagem ao político que apoiou Getúlio Vargas. A estação ferroviária local também foi renomeada, recebendo o nome de Getúlio Dornelles Vargas.
                        </p>
                    </li>
                </ul>
                <AncoraContainer></AncoraContainer>
            </div>
        </Template>
    )
}