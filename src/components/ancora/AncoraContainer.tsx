import { IoIosArrowDropleftCircle } from "react-icons/io";
import Ancora from "./Ancora";
import { FaArrowCircleUp } from "react-icons/fa";

interface AncoraProps{
    linkVoltar?: string
}

export default function AncoraContainer({linkVoltar}: AncoraProps) {
    return (
        <div className="flex gap-2 justify-center my-4 md:justify-end col-span-2">
            <Ancora icone={<IoIosArrowDropleftCircle />} link={linkVoltar ? linkVoltar : '/'} texto="Voltar"></Ancora>
            <Ancora icone={<FaArrowCircleUp />} link="#topo" texto="Voltar ao Topo"></Ancora>
        </div>
    )
}