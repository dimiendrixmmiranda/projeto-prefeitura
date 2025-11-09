import BotaoVoltar from "@/components/base/botaoVoltar/BotaoVoltar";
import Slider from "@/components/base/slider/Slider"
import TituloSecao from "@/components/base/tituloSecao/TituloSecao"
import Slide from "@/interfaces/Slide"
import { AiOutlinePicture } from "react-icons/ai";

export default function ConhecaOPrefeito() {
    const slides: Slide[] = [
        {
            imagem: '/outros/img.jpg',
            nome: 'Confraternização'
        },
        {
            imagem: '/outros/img.jpg',
            nome: 'Confraternização'
        },
        {
            imagem: '/outros/img.jpg',
            nome: 'Confraternização'
        },
        {
            imagem: '/outros/img.jpg',
            nome: 'Confraternização'
        },
        {
            imagem: '/outros/img.jpg',
            nome: 'Confraternização'
        },
        {
            imagem: '/outros/img.jpg',
            nome: 'Confraternização'
        },
    ]

    return (
        <div className="flex flex-col p-4 gap-4 max-w-[1600px] mx-auto lg:p-8 lg:gap-6">
            <div className="flex flex-col gap-2">
                <div className="border-b-2 border-verde-escuro w-full flex pb-2 justify-center">
                    <div className="w-[200px] h-[200px] bg-zinc-900 rounded-full border-2 border-verde-claro z-20 lg:w-[250px] lg:h-[250px] 2xl:w-[320px] 2xl:h-[320px]"></div>
                    <div className="w-[100px] h-[100px] bg-zinc-900 rounded-full border-2 border-verde-claro mt-auto -ml-4 z-10 lg:w-[160px] lg:h-[160px] 2xl:w-[200px] 2xl:h-[200px]"></div>
                </div>
                <h2 className="text-2xl font-bold text-center leading-7 lg:text-4xl">Gelson Nassar e Jair Mazzoti</h2>
            </div>
            <div>
                <h3 className="text-xl font-bold leading-6 lg:text-2xl">Sobre o Prefeito:</h3>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eget varius nibh, ut sagittis dui. Duis vitae dolor in purus egestas mollis. Pellentesque placerat risus libero. Cras eget velit aliquam, accumsan enim eget, congue lectus. Etiam quam neque, consectetur vitae eros eu, fringilla viverra nisl. Fusce tellus ex, aliquet vel leo vel, aliquet cursus risus. Vestibulum cursus euismod condimentum.
                </p>
                <p>
                    Morbi pretium convallis quam, ut sollicitudin velit. Sed et lobortis felis. Nunc at massa metus. Nullam hendrerit blandit blandit. Pellentesque ac lacinia mauris, at iaculis erat. Nulla leo leo, porttitor et finibus lacinia, condimentum sit amet felis. Pellentesque nec luctus est. Nullam in dapibus lorem, quis laoreet lacus. In pulvinar ligula ut lorem finibus mollis. Mauris luctus lectus lectus, ac consequat ante finibus sed. Ut vel nulla sit amet odio fringilla viverra eget vitae arcu. Nam vitae mauris eros. Mauris fermentum sollicitudin auctor. Fusce eu euismod elit, et rutrum nulla. Donec lobortis commodo molestie.
                </p>
            </div>
            <div>
                <h3 className="text-xl font-bold leading-6 lg:text-2xl">Sobre o Vice Prefeito:</h3>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eget varius nibh, ut sagittis dui. Duis vitae dolor in purus egestas mollis. Pellentesque placerat risus libero. Cras eget velit aliquam, accumsan enim eget, congue lectus. Etiam quam neque, consectetur vitae eros eu, fringilla viverra nisl. Fusce tellus ex, aliquet vel leo vel, aliquet cursus risus. Vestibulum cursus euismod condimentum.
                </p>
                <p>
                    Morbi pretium convallis quam, ut sollicitudin velit. Sed et lobortis felis. Nunc at massa metus. Nullam hendrerit blandit blandit. Pellentesque ac lacinia mauris, at iaculis erat. Nulla leo leo, porttitor et finibus lacinia, condimentum sit amet felis. Pellentesque nec luctus est. Nullam in dapibus lorem, quis laoreet lacus. In pulvinar ligula ut lorem finibus mollis. Mauris luctus lectus lectus, ac consequat ante finibus sed. Ut vel nulla sit amet odio fringilla viverra eget vitae arcu. Nam vitae mauris eros. Mauris fermentum sollicitudin auctor. Fusce eu euismod elit, et rutrum nulla. Donec lobortis commodo molestie.
                </p>
            </div>
            <div className="flex flex-col gap-2">
                <h3 className="text-xl font-bold leading-6 lg:text-2xl">Principais Compromissos da Gestão</h3>
                <ul className="list-disc ml-5 3xl:grid 3xl:grid-cols-2 3xl:gap-2">
                    <li className="3xl:flex-wrap 3xl:flex">
                        <b>Transparência e Acesso à Informação:</b> Garantir que a população tenha acesso fácil às ações e gastos públicos.
                    </li>
                    <li className="3xl:flex-wrap 3xl:flex">
                        <b>Educação de Qualidade:</b> Investir em escolas modernas, capacitação de professores e programas educacionais.
                    </li>
                    <li className="3xl:flex-wrap 3xl:flex">
                        <b>Saúde para Todos:</b> Ampliar o atendimento médico e fortalecer a atenção básica em todos os bairros.
                    </li>
                    <li className="3xl:flex-wrap 3xl:flex">
                        <b>Desenvolvimento Econômico:</b> Apoiar o comércio local, gerar empregos e atrair novos investimentos.
                    </li>
                    <li className="3xl:flex-wrap 3xl:flex">
                        <b>Cuidado com o Meio Ambiente:</b> Promover ações de reciclagem, reflorestamento e educação ambiental.
                    </li>
                    <li className="3xl:flex-wrap 3xl:flex">
                        <b>Segurança e Bem-Estar:</b> Reforçar a segurança pública em parceria com as forças policiais.
                    </li>
                    <li className="3xl:flex-wrap 3xl:flex">
                        <b>Cultura e Esporte:</b> Valorizar artistas locais, promover eventos culturais e incentivar o esporte.
                    </li>
                    <li className="3xl:flex-wrap 3xl:flex">
                        <b>Assistência Social e Inclusão:</b> Cuidar das famílias em vulnerabilidade e garantir igualdade de oportunidades.
                    </li>
                    <li className="3xl:flex-wrap 3xl:flex">
                        <b>Gestão Participativa:</b> Ouvir a comunidade e construir soluções junto à população.
                    </li>
                    <li className="3xl:flex-wrap 3xl:flex">
                        <b>Infraestrutura e Mobilidade Urbana:</b> Melhorar ruas, calçadas e promover um trânsito mais seguro.
                    </li>
                </ul>
            </div>
            <div>
                <TituloSecao icone={<AiOutlinePicture />} texto="Galeria de Imagens" />
                <Slider slides={slides} />
            </div>
            <BotaoVoltar/>
        </div>
    )
}