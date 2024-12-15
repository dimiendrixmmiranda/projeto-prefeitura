import AncoraContainer from "@/components/ancora/AncoraContainer";
import CardEscola from "@/components/cardEscola/CardEscola";
import Template from "@/components/template/Template";
import { listaDeEscolas } from "@/core/constants/listaDeEscolas";

export default function AspectosGeograficos() {
    return (
        <Template>
            <div className="text-black p-2 max-w-[1200px] mx-auto">
                <h2 className="font-black text-2xl leading-7 my-4">Aspectos Educacionais do Município</h2>
                <ul className="flex flex-col gap-6">
                    <li className="flex flex-col gap-2">
                        <p style={{ textIndent: '2em' }}>As escolas de Joaquim Távora, no Paraná, desempenham um papel fundamental na formação educacional e social da comunidade local. Com uma rede composta por instituições públicas e privadas, o município oferece ensino de qualidade para crianças, jovens e adultos, abrangendo as etapas da educação infantil ao ensino médio. Cada escola se destaca pelo compromisso com o aprendizado, contando com equipes pedagógicas dedicadas e infraestrutura voltada para o desenvolvimento dos alunos. Além disso, muitas escolas promovem projetos educacionais, culturais e esportivos, reforçando a importância de uma educação inclusiva e transformadora.</p>
                    </li>
                    <ul className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                        {
                            listaDeEscolas.map((escola, i) => {
                                return (
                                    <li key={i} className="mx-auto w-full flex justify-center">
                                        <CardEscola escola={escola}></CardEscola>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </ul>
                <AncoraContainer></AncoraContainer>
            </div>
        </Template>
    )
}