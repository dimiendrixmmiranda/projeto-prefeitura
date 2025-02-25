'use client'
import AncoraContainer from "@/components/ancora/AncoraContainer";
import Template from "@/components/template/Template";
import Link from "next/link";

export default function AspectosEducacionais() {
    return (
        <Template>
            <div className="text-black p-4 max-w-[1200px] mx-auto flex flex-col gap-2">
                {/* colocar uma foto para layout depois */}
                <h2 className="font-black text-2xl leading-7">Aspectos Educacionais do Município</h2>
                <ul className="flex flex-col gap-6">
                    <li className="flex flex-col gap-2">
                        <p style={{ textIndent: '2em' }}>
                            As instituições de ensino de Joaquim Távora são referência na região, oferecendo uma educação de qualidade e infraestrutura adequada para o desenvolvimento dos alunos. O município conta com escolas que atendem desde a educação infantil até o ensino médio, garantindo uma formação sólida em todas as etapas do aprendizado.
                        </p>
                        <p style={{ textIndent: '2em' }}>
                            O corpo docente é composto por profissionais qualificados, comprometidos com metodologias pedagógicas modernas e adaptadas às necessidades dos estudantes. Há um forte incentivo à inovação educacional, com o uso de tecnologias, projetos interdisciplinares e programas de inclusão, ampliando as oportunidades de aprendizado.
                        </p>
                        <p style={{ textIndent: '2em' }}>
                            Além do ensino tradicional, as instituições promovem atividades extracurriculares que contribuem para o desenvolvimento social e cultural dos alunos. Esportes, arte e projetos comunitários fazem parte do ambiente escolar, estimulando habilidades além do conteúdo acadêmico.
                        </p>
                        <p style={{ textIndent: '2em' }}>
                            Com investimentos contínuos na educação, Joaquim Távora fortalece sua rede de ensino, preparando seus estudantes para desafios futuros, seja no ensino superior ou no mercado de trabalho. O compromisso com a excelência educacional tem sido um diferencial para o crescimento do município.
                        </p>
                    </li>
                </ul>
                <Link href={'/menuAcessoRapido/instituicoesDeEnsino'} className="w-full flex justify-center items-center bg-[--verde] text-white p-2 text-xl font-bold text-center leading-6 lg:text-2xl">Veja a lista completa de instituições de ensino disponíveis em nossa cidade!</Link>
                <AncoraContainer></AncoraContainer>
            </div>
        </Template>
    )
}