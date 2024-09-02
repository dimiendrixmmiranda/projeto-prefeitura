import Cabecalho from "./cabecalho/Cabecalho";
import Slider from "../slider/Slider";
import Main from "./main/Main";
import MenuServico from "../menuServico/MenuServico";
import Noticias from "../noticias/Noticias";
import Sidebar from "../sidebar/Sidebar";
import Footer from "./footer/Footer";

export default function Pagina(props: any) {
    return (
        <div className="min-h-screen bg-blue-50">
            <Cabecalho />
            <Main>
                <Slider></Slider>
                <MenuServico></MenuServico>
                <div className="flex mt-8 justify-center">
                    <Sidebar></Sidebar>
                    <Noticias></Noticias>
                </div>
            </Main>
            <Footer></Footer>
        </div>
    )
}