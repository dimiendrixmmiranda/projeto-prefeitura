import AncoraContainer from "@/components/ancora/AncoraContainer";
import Template from "@/components/template/Template";
import Image from "next/image";

export default function SimbolosMunicipais() {
    return (
        <Template>
            <div className="text-black p-2 max-w-[1200px] mx-auto">
                <h2 className="font-black text-2xl leading-7 my-4">Símbolos do Município</h2>
                <ul className="flex flex-col gap-6 lg:grid">
                    <li className="flex flex-col gap-1 lg:grid lg:grid-cols-2">
                        <h3 className="text-xl font-bold" style={{ gridColumn: '1/3' }}>Bandeira Municipal</h3>
                        <p style={{ textIndent: '2em', gridColumn: '1/2' }}>
                            A bandeira do município foi oficializada pela Lei Municipal nº 400 durante a gestão do prefeito José Bueno Mendes, com os seguintes elementos e significados:</p>
                        <ul className="list-disc ml-4" style={{ gridColumn: '1/2' }}>
                            <li>
                                Cores Verde e Amarelo: Representam a Pátria Brasileira, reforçando o vínculo com a nação.
                            </li>
                            <li>
                                Brasão Municipal: No centro da bandeira, exibe as cores do Estado, verde e branco, junto a um triângulo amarelo.
                            </li>
                            <li>
                                Triângulo Equilátero: Simboliza a união do povo tavorense. Sua cor amarela representa a riqueza e a prosperidade
                            </li>
                        </ul>
                        <p style={{ textIndent: '2em', gridColumn: '1/2' }}>A bandeira, em sua composição geral, transmite a mensagem: &quot;Unidos, temos um município próspero.&quot;</p>
                        <div className="relative w-full max-w-[500px] h-[300px] mx-auto lg:w-[400px]" style={{ gridColumn: '2/3', gridRow: '2/5' }}>
                            <Image alt="Bandeira do município de Joaquim Távora pr" src={'https://www.controlemunicipal.com.br/inga/sistema/imagens/123/gd_020921084542_1531923391bandeirajoaquimtavora_png.png'} fill className="object-cover"></Image>
                        </div>
                    </li>
                    <li className="flex flex-col gap-1">
                        <h3 className="text-xl font-bold">Hino Municipal</h3>
                        <p style={{ textIndent: '2em' }}>Por meio da Lei Municipal nº 407, foi autorizada a criação do Hino do Município, uma bela composição que celebra suas belezas naturais e a coragem dos pioneiros que contribuíram para o desenvolvimento da cidade. O autor do hino, Sebastião de Lima, eternizou na letra os valores e a história do município.</p>
                    </li>
                    <li className="italic my-4 lg:mx-auto">
                        <ul className="flex flex-col gap-6 max-w-[350px] mx-auto lg:grid lg:max-w-[600px]">
                            <li style={{ gridColumn: '1/2', gridRow: '1/2' }}>
                                <p>Afonso Camargo, Batismo primeiro</p>
                                <p>Deste solo de luz e esplendor;</p>
                                <p>Que o valor audaz do pioneiro</p>
                                <p>Fez nascer com ingente labor.</p>
                            </li>
                            <li style={{ gridColumn: '2/3', gridRow: '2/3' }}>
                                <p>Gerônimo Vaz Vieira</p>
                                <p>E Miguel Dias anteviram o sucesso</p>
                                <p>E com a fibra da raça brasileira</p>
                                <p>Fundaram essa terra, hoje cheia de progresso!</p>
                            </li>
                            <li style={{ gridColumn: '1/2', gridRow: '3/4' }}>
                                <p>Joaquim Távora, querido rincão,</p>
                                <p>Chama viva de um ideal,</p>
                                <p>Viverá sempre em nosso coração</p>
                                <p>O teu nome glorioso e imortal!</p>
                            </li>
                            <li style={{ gridColumn: '2/3', gridRow: '4/5' }}>
                                <p>Do alto da Serra da Figueira,</p>
                                <p>Embevecido fico a contemplar</p>
                                <p>O verde Vale da Pirambeira</p>
                                <p>E outras belezas sem par!</p>
                            </li>
                            <li style={{ gridColumn: '1/2', gridRow: '5/6' }}>
                                <p>Penachos verdes erguidos,</p>
                                <p>Como pendões de esperança;</p>
                                <p>Seus cafezais jardins floridos,</p>
                                <p>Num festival de abastança.</p>
                            </li>
                            <li style={{ gridColumn: '2/3', gridRow: '6/7' }}>
                                <p>Que belo exemplo se tome</p>
                                <p>Deste vulto heróico e varonil,</p>
                                <p>Que nos empresta o seu nome,</p>
                                <p>Honra e glória do Brasil!</p>
                            </li>
                        </ul>
                    </li>
                    <li className="flex flex-col gap-1 lg:grid lg:grid-cols-2">
                        <h3 className="text-xl font-bold" style={{ gridColumn: '1/3' }}>Brasão Municipal:</h3>
                        <p style={{ textIndent: '2em', gridColumn: '1/2' }}>
                            O Brasão Municipal foi criado e oficializado pela Lei nº 397, apresentando os seguintes elementos e significados:</p>
                        <ul className="list-disc ml-4" style={{ gridColumn: '1/2' }}>
                            <li>
                                Escudo com Coroa de Cinco Torres: Representa o símbolo heráldico das cidades, destacando o status municipal.
                            </li>
                            <li>
                                Campo em Verde e Branco: As cores simbolizam o Estado ao qual o município pertence.
                            </li>
                            <li>
                                Campo Branco com Laço de Fita: Representa a união do povo e a riqueza agrícola do município.
                            </li>
                            <li>
                                Faixa Branca no Laço: Contém o nome do município e a data de sua formação, destacando a identidade histórica e cultural.
                            </li>
                        </ul>
                        <div className="relative w-[240px] h-[300px] mx-auto" style={{ gridColumn: '2/3', gridRow: '2/4' }}>
                            <Image alt="Bandeira do município de Joaquim Távora pr" src={'/logo-prefeitura.png'} fill className="object-cover"></Image>
                        </div>

                    </li>
                    <li className="flex flex-col gap-1">
                        <h3 className="text-xl font-bold">Hino do Cinquentenário</h3>
                        <p style={{ textIndent: '2em' }}>Por meio da Lei nº 653/88, a Câmara Municipal oficializou o Hino do Cinquentenário em comemoração ao aniversário de 50 anos da cidade, celebrado em 21 de setembro de 1979. O hino foi escolhido em concurso público organizado pela “Comissão dos Festejos” e é de autoria da aluna Carla Cristina Escorsin, da Escola Estadual Professor Francisco Benedetti.</p>
                    </li>
                    <li className="italic my-4 lg:mx-auto">
                        <ul className="flex flex-col gap-6 max-w-[350px] mx-auto lg:grid lg:max-w-[600px]">
                            <li style={{ gridColumn: '1/2', gridRow: '1/2' }}>
                                <p>Já faz cinqüenta anos</p>
                                <p>Que desta terra desabrochou</p>
                                <p>Um fruto de inteiro progresso</p>
                                <p>Que o próprio Deus semeou.</p>
                            </li>
                            <li style={{ gridColumn: '2/3', gridRow: '2/3' }}>
                                <p>Parabéns! Joaquim Távora</p>
                                <p>Terra de amor e Paz</p>
                                <p>Parabéns! Cinqüentenário    (Bis)</p>
                                <p>Que esta cidade faz.</p>
                            </li>
                            <li style={{ gridColumn: '1/2', gridRow: '3/4' }}>
                                <p>São vários anos de labuta</p>
                                <p>Que o povo daqui passou</p>
                                <p>Mas ganhou sua recompensa</p>
                                <p>Vendo a cidade que criou.</p>
                            </li>
                            <li style={{ gridColumn: '2/3', gridRow: '4/5' }}>
                                <p>Parabéns! Joaquim Távora</p>
                                <p>Terra de amor e Paz</p>
                                <p>Parabéns! Cinqüentenário (Bis)</p>
                                <p>Que esta cidade faz.</p>
                            </li>
                            <li style={{ gridColumn: '1/2', gridRow: '5/6' }}>
                                <p>Honras e festas maravilhosas</p>
                                <p>Festejam este aniversário</p>
                                <p>É a nossa bela cidade</p>
                                <p>Que faz seu cinqüentenário.</p>
                            </li>
                            <li style={{ gridColumn: '2/3', gridRow: '6/7' }}>
                                <p>Parabéns! Joaquim Távora</p>
                                <p>Terra de amor e Paz</p>
                                <p>Parabéns! Cinqüentenário (Bis)</p>
                                <p>Que esta cidade faz.</p>
                            </li>
                            <li style={{ gridColumn: '1/2', gridRow: '7/8' }}>
                                <p>Cinqüenta anos lutando</p>
                                <p>E o povo continuará</p>
                                <p>Por esta cidade de progresso</p>
                                <p>De que se orgulha o Paraná.</p>
                            </li>
                        </ul>
                    </li>

                </ul>
                <AncoraContainer></AncoraContainer>
            </div>
        </Template>
    )
}