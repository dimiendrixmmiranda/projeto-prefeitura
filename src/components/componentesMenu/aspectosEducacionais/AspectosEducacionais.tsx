'use client'
import BotaoVoltar from "@/components/base/botaoVoltar/BotaoVoltar";
import CardComercio from "@/components/base/cardComercio/CardComercio";
import Mapa from "@/components/base/mapa/Mapa";
import Comercio from "@/interfaces/Comercio";
import { useListaDeComercios } from "@/lib/hooks/useListaDeComercios";
import { useEffect, useState } from "react";

export default function AspectosEducacionais() {
    const { comercios } = useListaDeComercios()
    const [escolas, setEscolas] = useState<Comercio[] | null>(null)

    useEffect(() => {
        const escolas = comercios.filter(comercio => comercio.tipo == 'escola')
        setEscolas(escolas)
    }, [comercios])

    return (
        <div className="p-4 flex flex-col gap-4 text-verde-escuro max-w-[1440px] mx-auto lg:p-8">
            <h2 className="text-2xl font-bold text-center md:text-3xl xl:text-4xl">Aspectos Educacionais da Cidade de Joaquim Távora - PR</h2>
            <section>
                <p className="indent-8">
                    Por volta do ano de 1925, aproximadamente, foi fundada a primeira Escola Primária, instalada numa pequena sala, de um prédio simples, de madeira, onde funcionava a prefeitura. O local é o mesmo da atual prefeitura, sito a Rua Miguel Dias, nº 226.
                </p>
                <p className="indent-8">
                    A Educação evoluiu, lentamente até 1935, pela falta de espaço físico e de profissionais habilitados para atuarem nesta área. Os primeiros professores a se instalarem aqui, para dar início ao processo educacional foram: Amélia e Euzebina, ambas de São Paulo e Angelina, de São José dos Pinhais.
                </p>
                <p className="indent-8">
                    Devemos a esses mestres o desenvolvimento da Educação Tavorense, devido ao desejo, necessidade de mudanças, chegaram a Joaquim Távora educadores vindo de outras localidades para somarem esforços, contribuindo para que a cidade chegasse a ser o que é hoje. Outros educadores que deixaram sua parcela de contribuição para o desenvolvimento foram:
                </p>
                <ul className="list-disc ml-6">
                    <li>
                        Marcília Bueno, de Santo Antonio da Platina;
                    </li>
                    <li>
                        Zilda Benedetti, de Curitiba;
                    </li>
                    <li>
                        Jubal Bastos de Moraes, de Curitiba;
                    </li>
                    <li>
                        Antenor Monteiro;
                    </li>
                    <li>
                        João Zacarquim;
                    </li>
                    <li>
                        Maria Monteiro;
                    </li>
                    <li>
                        Nildo Soares;
                    </li>
                    <li>
                        Dinorah Soares
                    </li>
                </ul>
                <p className="indent-8">
                    O ensino diferenciava-se bastante do atual. Era basicamente o tradicional, imperava o autoritarismo do professor. Embora alguns fossem leigos, esforçavam-se ao máximo, exigiam muito dos alunos a fim de manterem o bom nível de ensino. Os métodos eram exclusivamente os tradicionais, mais rígidos que os atuais. A austeridade e exigência dos mestres contribuíram para o sucesso da aprendizagem.
                </p>
                <p className="indent-8">
                    A disciplina era rígida e firme. Imperava o respeito e obediência aos mestres. Aqueles que desobedeciam às normas da escola, eram punidos através de castigos físicos, tanto pelos mestres, como pelos pais. Não existia, na época, o chamado “Conselho de Classe”, nem a figura do Supervisor, Coordenador e Orientador. Apenas uma reunião mensal com a participação do diretor e alguns professores. As escolas, principalmente, da zona rural, foram se multiplicando, tendo em vista o crescimento e progresso de nosso município. Em 26 de junho de 1945, pelo Decreto Lei nº 9, foi fundada a Escola Rural Municipal Dr. Alfredo Gabriel, na gestão do então Prefeito Pedro Zimmermann, tendo como primeiro professor o Sr. Paulo E. Pinheiro. Mais tarde através do Decreto Lei nº 93, passou a denominar-se Escola da Colônia “São Miguel”.
                </p>
                <p className="indent-8">
                    Com sua estadualização ficou dominada “Escola Isolada São Miguel”. Mas, em 04 de abril de 1986 aconteceu um trágico acidente nesta escola, onde a mesma pegou fogo tirando a vida da professora Maria Aparecida Beruski e mais oito alunos que morreram carbonizados. Após o incidente ocorrido nesta Escola, ela foi transferida de local e pela Lei nº634 de 28 de abril de 1986, passando a ser denominada “Escola Rural Estadual Professora Maria Aparecida Beruski”. Em 18 de junho de 1951, pelo Decreto Lei nº 74 foi fundada e Escola Antônio Vitorino localizada na Fazenda da Chapada, na gestão do então prefeito municipal Sr. Teodorico  Gomes de Oliveira localizada no Bairro 40 de Baixo.
                </p>
                <p className="indent-8">
                    Ainda no ano de 1952 no Bairro Dourado, foi criada a Escola Municipal do Bairro Dourado na gestão do prefeito Antônio  Joaquim Vieira. Aos 25 dias do mês de maio de 1957, pelo Decreto Lei nº 184, foi criada no Bairro do Cruzeiro, a Escola Municipal da Cruzadinha, tendo como professora a Srª. Lázara Bueno de Oliveira, mais conhecida como Dona Lazinha, na gestão do então prefeito municipal, Sr. Teodorico Gomes de Oliveira. Posteriormente pelo Decreto  Lei nº 214 de 14 de agosto de 1957, ficou denominada Escola Municipal Nossa Senhora Aparecida. Através do Decreto nº 198 de 28 de fevereiro de 1957, foi fundada uma classe na Escola Isolada São Roque do Pinhal. Dez anos após em 12 de junho de 1967 foi fundada a Casa Escolar Frei Leonardo pelo Decreto Lei nº 5.628. No Bairro do Ceboleiro no ano de 1959 foi fundada a Escola Isolada Fazenda Jacarezinho.
                </p>
                <p className="indent-8">
                    A Escola Estadual Distrital do Joá, localizada no Distrito do Joá foi criada no ano de 1959 sem nenhum Ato Oficial. A autorização para funcionamento de 1ª a 4ª série foi através da Resolução nº 3.167/82 datando 24 de novembro de 1982. Sua autorização  para funcionamento de 5ª a 8ª séries, foi através da Resolução nº 8.240/84 de 12 de dezembro de 1984. Em 1960 surge a Escola Isolada Nova Varsóvia, situada na Colônia Nova Varsóvia. No  Bairro Rancho Alegre no ano de 1966 surge a Escola Isolada Santa Maria. No ano de 1967 é fundada a Escola Isolada Três Galhos, no Bairro Três Galhos. No Bairro Serra da Figueira no ano de 1967 foi fundada a Escola Municipal Serra das Figueira. Através do Decreto nº 34 de 02 de dezembro de 1967  foi criada a Escola Municipal Santa Inês, situada no Bairro Santa Inês. Ainda no ano de 1971, foi fundada a Escola Isolada Antônio Ovídio, localizada no Bairro Antônio Ovídio. No Bairro da Figueira Nova no ano de 1973 surge a Escola Rural Figueira Nova. A Escola Estadual Joaquim Domingues, localizada no Bairro Joaquim Domingues foi fundada no ano de 1974 sem nenhum Ato Oficial. Ainda no ano de 1974 surge mais uma Escola, desta vez foi a Escola Rural Estadual José Joaquim Correa, localizada no bairro José Joaquim Correa, dando início às suas atividades sem Ato Oficial no ano de 1974.
                </p>
                <p className="indent-8">
                    No ano de 1978 foi fundada a Escola Isolada Nossa Senhora da Conceição situada no Bairro Humberto Pederneiras. A Escola Estadual Assad Kalil Richa – Ensino de 1º Grau, criada em nosso município teve autorização para funcionar de 1ª a 4ª série, através da Resolução 876/83 de 10 de março de 1983. A autorização para funcionamento de 5ª a 8ª séries, foi através da Resolução 287/84, datando de 26 de janeiro de 1984 e finalmente reconhecida em 18 de outubro  de 1984 através da Resolução 7.402/84. Todas essas escolas funcionavam no Regime Multisseriado, aproximadamente até 1992. As professoras, na maioria das vezes, se deslocavam da cidade até a  Zona Rural. As escolas da Zona Rural após 1992, devido a municipalização do Ensino de 1º Grau séries iniciais alterou o sistema de funcionamento dessas Escolas.
                </p>
                <p className="indent-8">
                    Hoje o município transporta seus alunos da Zona Rural para a Zona Urbana, alegando menores despesas e melhor qualidade de Ensino. Com isso acabaram-se as classes multisseriadas e as dificuldades dos educadores. As mudanças às vezes nem sempre trazem bons resultados, mas temos que admitir, que a municipalização trouxe algumas inovações. Por exemplo, nas classes multisseriadas, mesmo com a dedicação, responsabilidade e esforço dos professores deixava muito a desejar, porque além de lecionarem com séries mistas tinha sua função multiplicada: professora, zeladora, merendeira e até enfermeira. Nosso município teve o privilégio de contar com o Programa de ensino nota 10 que proporcionou inúmeros cursos de capacitação, como também um curso de especialização (Pós-graduação) que favoreceu muitos professores que puderam se especializar no próprio município sem despesa alguma. Programa de Ensino Nota 10 foi realizado graças ao convênio feito com a prefeitura, Bamerindus e a PUC (Pontíficie Universidade Católica) do Paraná, na gestão do então prefeito, Marcos Antônio Vieira, e da Secretaria de Educação Municipal Raquel Ovçar, que não mediram esforços para que esse evento se concretizasse.
                </p>
                <p className="indent-8">
                    Graças aos cursos de capacitação, a boa vontade e dedicação dos docentes, Joaquim Távora, conta com um quadro de professores tanto estadual como municipal, bem qualificados: a maioria com 3º grau de escolaridade e muitos com nível de Pós-Graduação. Com isso eleva-se o nível de qualidade de ensino e conseqüentemente a qualidade de aprendizagem de nossos alunos que são os maiores beneficiados.
                </p>
                <div className="flex flex-col gap-4">
                    <p className="indent-8">Nos dias atuais, o município conta com 05 Escolas Municipais:</p>
                    <ul className="flex flex-col gap-4 md:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                        {
                            escolas?.map((escola, i) => {
                                return (
                                    <CardComercio comercio={escola} key={i} />
                                )
                            })
                        }
                    </ul>
                    <div>
                        { escolas && <Mapa comercios={escolas} /> }
                    </div>
                </div>
            </section>
            <BotaoVoltar />
        </div>
    )
}