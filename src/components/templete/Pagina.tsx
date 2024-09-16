import Cabecalho from "./cabecalho/Cabecalho";
import Main from "./main/Main";
import Footer from "./footer/Footer";

export default function Pagina(props: any) {
    return (
        <div className="min-h-screen bg-blue-50 flex flex-col">
            <Cabecalho />
            <Main>
                {props.children}
            </Main>
            <Footer></Footer>
        </div>
    )
}