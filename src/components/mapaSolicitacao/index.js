import dynamic from "next/dynamic";

const Mapa = dynamic(() => import("./MapaSolicitacao"), {
    ssr: false
});

export default Mapa;