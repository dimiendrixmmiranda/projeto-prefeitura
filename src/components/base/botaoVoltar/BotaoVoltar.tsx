import { FaArrowLeft } from "react-icons/fa";
import BotaoNavegar from "../botaoNavegar/BotaoNavegar";

export default function BotaoVoltar() {
    return (
        <div className="self-center w-full flex justify-end">
            <BotaoNavegar label="Voltar" icone={<FaArrowLeft />} link="/" />
        </div>
    )
}