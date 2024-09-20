import Aniversariantes from "@/components/aniversariantes/Aniversariantes";
import Banners from "@/components/banners/Banners";
import FormularioEmprego from "@/components/fomularioEmprego/FormularioEmprego";
import MenuServico from "@/components/menuServico/MenuServico";
import Noticias from "@/components/noticias/Noticias";
import SecretariasCarousel from "@/components/secretarias/Secretarias";
import Sidebar from "@/components/sidebar/Sidebar";
import SliderPrincipal from "@/components/slider/SliderPrincipal";
import Slider3d from "@/components/slider3d/Slider3d";
import Pagina from "@/components/templete/Pagina";
import Tempo from "@/components/tempo/Tempo";
import arrayFotosCidade from "@/data/fotosDaCidade";
import arrayDeObras from "@/data/obras";

export default function Home() {
    return (
        <Pagina>
            <SliderPrincipal></SliderPrincipal>
            
            <MenuServico></MenuServico>
            
            <div className="flex mt-8 justify-center h-fit">
                <Sidebar></Sidebar>
                <Noticias></Noticias>
            </div>
            <Banners className="banner lg:hidden"></Banners>

            <Slider3d titulo="Galeria De Obras" arrayImagens={arrayDeObras} galeriaObras={true}></Slider3d>

            <div className="flex flex-col w-[95%] mx-auto gap-4 lg:flex-row flex-nowrap xl:mt-14 xl:w-[90%]">
                <Aniversariantes></Aniversariantes>
                <Tempo></Tempo>
            </div>

            <SecretariasCarousel></SecretariasCarousel>

            <FormularioEmprego></FormularioEmprego>

            <Slider3d titulo="Galeria de Fotos de Joaquim Távora" arrayImagens={arrayFotosCidade} galeriaObras={false}></Slider3d>
        </Pagina>
    );
}
