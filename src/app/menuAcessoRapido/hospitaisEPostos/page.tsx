import CardHospitaisEPostos from "@/components/cardHospitaisEPostos/cardHospitaisEPostos";
import Template from "@/components/template/Template";
import { listaDeHospitaisEPostos } from "@/core/constants/listaDeHospitaisEPostos";

export default function Page() {
    return (
        <Template>
            <div className="flex flex-col text-black">
                <h2>aqui</h2>
                <ul>
                    {
                        listaDeHospitaisEPostos.map((hospitalEPosto, i) => {
                            return (
                                <li key={i}>
                                    <CardHospitaisEPostos hospitalEPosto={hospitalEPosto}></CardHospitaisEPostos>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        </Template>
    )
}