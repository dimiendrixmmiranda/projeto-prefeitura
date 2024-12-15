import AncoraContainer from "@/components/ancora/AncoraContainer";
import Template from "@/components/template/Template";
import { dadosDemografia } from "@/core/constants/dadosDemografia";

export default function AspectosGeograficos() {
    return (
        <Template>
            <div className="text-black p-2 max-w-[1200px] mx-auto">
                <h2 className="font-black text-2xl leading-7 my-4">Demografia do Município</h2>
                <ul className="flex flex-col gap-6 lg:grid" style={{gridTemplateColumns: '1fr 30%'}}>
                    <li className="flex flex-col gap-1">
                        <p style={{ textIndent: '2em' }}>
                            Joaquim Távora, localizada no norte do Paraná, possui uma população que reflete características comuns de cidades de pequeno porte no interior do Brasil. De acordo com os últimos dados disponíveis, a cidade tem cerca de 10 mil habitantes, com uma leve predominância da população vivendo na área urbana em relação à rural, o que demonstra uma tendência de urbanização típica da região.</p>
                        <p style={{ textIndent: '2em' }}>
                            A composição etária é diversificada, com uma parcela significativa de adultos em idade economicamente ativa, acompanhada por uma presença expressiva de idosos, evidenciando o envelhecimento populacional que ocorre em muitas cidades pequenas. A população jovem também é relevante, especialmente no contexto educacional e cultural, sendo um dos pilares para o desenvolvimento futuro.</p>
                        <p style={{ textIndent: '2em' }}>
                            A cidade apresenta uma demografia predominantemente homogênea, com influências culturais e históricas herdadas da colonização europeia, especialmente de italianos e portugueses, combinadas com a cultura brasileira. Esses aspectos moldam não apenas o perfil demográfico, mas também os costumes e tradições da comunidade.</p>
                        <p style={{ textIndent: '2em' }}>A densidade populacional é baixa, refletindo o caráter interiorano, com bairros espaçados e uma maior proximidade com o ambiente natural. Esse cenário contribui para a qualidade de vida da população, que mantém um estilo de vida tranquilo e conectado às tradições locais.</p>
                    </li>
                    <li className="flex flex-col">
                        <h2 className="text-center font-bold text-2xl">Dados de 2024</h2>
                        <table className="mx-auto my-4">
                            <thead>
                                <tr>
                                    <th className="border border-black text-center">Indicador</th>
                                    <th className="border border-black text-center">Dados</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    dadosDemografia.map((linha, i) => {
                                        return (
                                            <tr key={i}>
                                                <td className="border border-black">{linha.indicator}</td>
                                                <td className="border border-black text-center">{linha.data}</td>
                                            </tr>
                                        )
                                    })
                                }
                            </tbody>
                        </table>
                    </li>
                </ul>
                <AncoraContainer></AncoraContainer>
            </div>
        </Template>
    )
}