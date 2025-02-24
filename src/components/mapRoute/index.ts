import dynamic from "next/dynamic";

const MapRoute = dynamic(() => import('./MapRoute'), {
    ssr: false
});

export default MapRoute