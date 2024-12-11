import { IoIosArrowDropleftCircle } from "react-icons/io";
import Ancora from "./Ancora";
import { FaArrowCircleUp } from "react-icons/fa";

export default function AncoraContainer() {
    return (
        <div className="flex gap-2 justify-center my-4 md:justify-end col-span-2">
            <Ancora icone={<IoIosArrowDropleftCircle />} link="/" texto="Voltar"></Ancora>
            <Ancora icone={<FaArrowCircleUp />} link="#topo" texto="Voltar ao Topo"></Ancora>
        </div>
    )
}