import BotaoVoltar from "@/components/base/botaoVoltar/BotaoVoltar";

export default function Demografia() {
    const dadosDemograficos = [
        { indicador: "População estimada (2025)", valor: "12.341 habitantes" },
        { indicador: "População no último censo (2022)", valor: "11.945 habitantes" },
        { indicador: "Área territorial", valor: "289,173 km²" },
        { indicador: "Densidade demográfica", valor: "41,31 hab/km²" },
        { indicador: "Escolarização (6 a 14 anos)", valor: "100%" },
        { indicador: "IDHM (2010)", valor: "0,700" },
        { indicador: "Mortalidade infantil (2023)", valor: "17,65 óbitos/1.000 nascidos vivos" },
        { indicador: "PIB per capita (2021)", valor: "R$ 56.092,66" },
        { indicador: "Receitas brutas realizadas (2024)", valor: "R$ 88.295.086,16" },
        { indicador: "Despesas brutas empenhadas (2024)", valor: "R$ 70.431.476,79" }
    ]

    return (
        <div className="p-4 flex flex-col gap-4 text-verde-escuro max-w-[1440px] mx-auto lg:p-8 lg:min-h-[75vh]">
            <h2 className="text-2xl font-bold text-center md:text-3xl xl:text-4xl">Demografia da Cidade de Joaquim Távora - PR</h2>
            <div className="flex flex-col gap-4 2xl:grid 2xl:grid-cols-3">
                <div className="flex flex-col gap-4 col-start-1 col-end-3">
                    <p>
                        Joaquim Távora, localizada no norte do Paraná, possui uma população que reflete características comuns de cidades de pequeno porte no interior do Brasil. De acordo com os últimos dados disponíveis, a cidade tem cerca de 10 mil habitantes, com uma leve predominância da população vivendo na área urbana em relação à rural, o que demonstra uma tendência de urbanização típica da região.
                    </p>
                    <p>
                        A composição etária é diversificada, com uma parcela significativa de adultos em idade economicamente ativa, acompanhada por uma presença expressiva de idosos, evidenciando o envelhecimento populacional que ocorre em muitas cidades pequenas. A população jovem também é relevante, especialmente no contexto educacional e cultural, sendo um dos pilares para o desenvolvimento futuro.
                    </p>
                    <p>
                        A cidade apresenta uma demografia predominantemente homogênea, com influências culturais e históricas herdadas da colonização europeia, especialmente de italianos e portugueses, combinadas com a cultura brasileira. Esses aspectos moldam não apenas o perfil demográfico, mas também os costumes e tradições da comunidade.
                    </p>
                    <p>
                        A densidade populacional é baixa, refletindo o caráter interiorano, com bairros espaçados e uma maior proximidade com o ambiente natural. Esse cenário contribui para a qualidade de vida da população, que mantém um estilo de vida tranquilo e conectado às tradições locais.
                    </p>
                </div>
                <div className="w-full h-full bg-zinc-800">
                    <table className="min-w-full border border-gray-300">
                        <thead className="bg-[#236D45] text-white">
                            <tr>
                                <th className="p-2 text-left">Indicador</th>
                                <th className="p-2 text-left">Valor</th>
                            </tr>
                        </thead>
                        <tbody>
                            {dadosDemograficos.map((dado, index) => (
                                <tr key={index} className={index % 2 === 0 ? "bg-gray-100" : "bg-white"}>
                                    <td className="p-2">{dado.indicador}</td>
                                    <td className="p-2">{dado.valor}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
            <BotaoVoltar />
        </div>
    )
}