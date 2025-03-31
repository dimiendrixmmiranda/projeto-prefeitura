import dynamic from "next/dynamic";

const Mapa = dynamic(() => import("./MapaComercio"), {
    ssr: false
});

export default Mapa;