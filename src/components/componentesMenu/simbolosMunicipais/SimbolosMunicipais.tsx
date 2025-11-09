import BotaoVoltar from "@/components/base/botaoVoltar/BotaoVoltar"

export default function SimbolosMunicipais() {
    const hinoMunicipal = [
        [
            'Afonso Camargo, Batismo primeiro',
            'Deste solo de luz e esplendor;',
            'Que o valor audaz do pioneiro',
            'Fez nascer com ingente labor.'
        ],
        [
            'Gerônimo Vaz Vieira',
            'E Miguel Dias anteviram o sucesso',
            'E com a fibra da raça brasileira',
            'Fundaram essa terra, hoje cheia de progresso!'
        ],
        [
            'Joaquim Távora, querido rincão,',
            'Chama viva de um ideal,',
            'Viverá sempre em nosso coração',
            'O teu nome glorioso e imortal!'
        ],
        [
            'Do alto da Serra da Figueira,',
            'Embevecido fico a contemplar',
            'O verde Vale da Pirambeira',
            'E outras belezas sem par!'
        ],
        [
            'Penachos verdes erguidos,',
            'Como pendões de esperança;',
            'Seus cafezais jardins floridos,',
            'Num festival de abastança.'
        ],
        [
            'Que belo exemplo se tome',
            'Deste vulto heróico e varonil,',
            'Que nos empresta o seu nome,',
            'Honra e glória do Brasil!'
        ],
    ]
    const hinoCinquentenario = [
        [
            'Já faz cinqüenta anos',
            'Que desta terra desabrochou',
            'Um fruto de inteiro progresso',
            'Que o próprio Deus semeou.'
        ],
        [
            'Parabéns! Joaquim Távora',
            'Terra de amor e Paz',
            'Parabéns! Cinqüentenário (Bis)',
            'Que esta cidade faz.'
        ],
        [
            'São vários anos de labuta',
            'Que o povo daqui passou',
            'Mas ganhou sua recompensa',
            'Vendo a cidade que criou.'
        ],
        [
            'Parabéns! Joaquim Távora',
            'Terra de amor e Paz',
            'Parabéns! Cinqüentenário (Bis)',
            'Que esta cidade faz.'
        ],
        [
            'Parabéns! Joaquim Távora',
            'Terra de amor e Paz',
            'Parabéns! Cinqüentenário (Bis)',
            'Que esta cidade faz.'
        ],
        [
            'Cinqüenta anos lutando',
            'E o povo continuará',
            'Por esta cidade de progresso',
            'De que se orgulha o Paraná.'
        ],
    ]
    return (
        <div className="p-4 flex flex-col gap-4 text-verde-escuro max-w-[1440px] mx-auto lg:p-8">
            <h2 className="text-2xl font-bold text-center md:text-3xl xl:text-4xl">Simbolos Municipais da Cidade de Joaquim Távora - PR</h2>
            <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-4 lg:grid xl:grid-cols-3">
                    <div className="flex flex-col gap-2 col-start-1 col-end-3">
                        <h3 className="font-bold text-xl">Bandeira Municipal</h3>
                        <p>
                            A bandeira do município foi oficializada pela Lei Municipal nº 400 durante a gestão do prefeito José Bueno Mendes, com os seguintes elementos e significados:
                        </p>
                        <ul className="list-disc ml-6">
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
                        <p>
                            A bandeira, em sua composição geral, transmite a mensagem: &quot;Unidos, temos um município próspero.&ldquo;
                        </p>
                    </div>
                    <div className="w-full h-full bg-zinc-900"></div>
                </div>
                <div>
                    <h3 className="font-bold text-xl">Hino Municipal</h3>
                    <p>
                        Por meio da Lei Municipal nº 407, foi autorizada a criação do Hino do Município, uma bela composição que celebra suas belezas naturais e a coragem dos pioneiros que contribuíram para o desenvolvimento da cidade. O autor do hino, Sebastião de Lima, eternizou na letra os valores e a história do município.
                    </p>
                    <div className="mt-6 flex flex-col items-center gap-8 lg:max-w-[600px] lg:mx-auto">
                        {hinoMunicipal.map((estrofe, i) => (
                            <ul
                                key={i}
                                className={`italic leading-relaxed text-center md:text-left ${i % 2 === 0
                                    ? "self-start md:text-left"
                                    : "self-end md:text-right"
                                    }`}
                            >
                                {estrofe.map((linha, j) => (
                                    <li key={j}>{linha}</li>
                                ))}
                            </ul>
                        ))}
                    </div>

                </div>
                <div className="flex flex-col gap-4 lg:grid xl:grid-cols-3">
                    <div className="flex flex-col gap-2 col-start-1 col-end-3">
                        <h3 className="font-bold text-xl">Brasão Municipal</h3>
                        <p>
                            O Brasão Municipal foi criado e oficializado pela Lei nº 397, apresentando os seguintes elementos e significados:
                        </p>
                        <ul className="list-disc ml-6">
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
                    </div>
                    <div className="w-full h-full bg-zinc-900"></div>
                </div>
                <div>
                    <h3 className="font-bold text-xl">Hino do Cinquentenário</h3>
                    <p>
                        Por meio da Lei nº 653/88, a Câmara Municipal oficializou o Hino do Cinquentenário em comemoração ao aniversário de 50 anos da cidade, celebrado em 21 de setembro de 1979. O hino foi escolhido em concurso público organizado pela “Comissão dos Festejos” e é de autoria da aluna Carla Cristina Escorsin, da Escola Estadual Professor Francisco Benedetti.
                    </p>
                    <div className="mt-6 flex flex-col items-center gap-8 lg:max-w-[600px] lg:mx-auto">
                        {hinoCinquentenario.map((estrofe, i) => (
                            <ul
                                key={i}
                                className={`italic leading-relaxed text-center md:text-left ${i % 2 === 0
                                    ? "self-start md:text-left"
                                    : "self-end md:text-right"
                                    }`}
                            >
                                {estrofe.map((linha, j) => (
                                    <li key={j}>{linha}</li>
                                ))}
                            </ul>
                        ))}
                    </div>
                </div>
            </div>
            <BotaoVoltar />
        </div>
    )
}