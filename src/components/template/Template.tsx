import { ReactNode } from "react";
import Cabecalho from "./cabecalho/Cabecalho";
import Main from "./main/main";
import Rodape from "./rodape/Rodape";

interface MainProps {
    children: ReactNode;
}

export default function Template({ children }: MainProps) {
    return (
        <div className="flex flex-col">
            <Cabecalho></Cabecalho>
            <Main>
                {children}
            </Main>
            <Rodape></Rodape>
        </div>
    )
}