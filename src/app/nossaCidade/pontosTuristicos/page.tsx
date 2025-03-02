import AncoraContainer from "@/components/ancora/AncoraContainer";
import Slider3d from "@/components/slider3d/Slider3d";
import Template from "@/components/template/Template";
import { listaDePontosTuristicos } from "@/core/constants/listaDePontosTuristicos";

export default function Page() {
    return (
        <Template>
            <div className="w-full p-4 my-auto flex flex-col gap-4 md:p-8 lg:min-h-[80vh] lg:justify-center lg:gap-8">
                <h1 className="text-[--verde] uppercase font-black text-2xl text-center leading-7 md:text-4xl">Confira a lista de pontos turísticos de nossa cidade</h1>
                <p className="text-[--verde] max-w-[1200px] mx-auto text-center lg:-mt-3">
                    Aqui em Joaquim Távora, cada cantinho guarda uma história e uma beleza única. Se você busca um destino acolhedor, repleto de charme e natureza, nossa cidade é o lugar perfeito para explorar. Seja para um passeio tranquilo, uma aventura ao ar livre ou para conhecer a cultura local, Joaquim Távora encanta com sua atmosfera acolhedora e paisagens encantadoras. Venha descobrir um lugar onde a tradição e a natureza se encontram, proporcionando momentos inesquecíveis para quem visita.
                </p>
                <Slider3d array={listaDePontosTuristicos}></Slider3d>
                <AncoraContainer></AncoraContainer>
            </div>
        </Template>
    )
}