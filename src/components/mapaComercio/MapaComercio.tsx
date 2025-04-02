import { MapContainer, TileLayer, Popup, Marker } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import styles from "./styles.module.css";
import L from "leaflet";
import { FC } from "react";
import Item from "@/core/ItemMapa/ItemMapa";
import Image from "next/image";
import { SiGooglemaps } from "react-icons/si";
import { FaClock, FaPhone } from "react-icons/fa";
import Link from "next/link";
import { IoLogoFacebook, IoLogoWhatsapp } from "react-icons/io5";
import { AiFillInstagram } from "react-icons/ai";
import { MdEmail } from "react-icons/md";

interface MapProps {
    latitude?: number;
    longitude?: number;
    zoom?: number;
    arrayPontosGeral?: Item[];
}

const MapaComercio: FC<MapProps> = ({
    latitude = -23.55052,
    longitude = -46.633308,
    zoom = 17,
    arrayPontosGeral = [],
}) => {
    return (
        <div className={styles.mapWrapper}>
            <MapContainer
                center={[latitude, longitude]}
                zoom={zoom}
                className={styles.map}
                style={{ width: "100%", height: "100%" }}
                zoomControl={false}
            >
                <TileLayer
                    url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="https://carto.com/">CARTO</a>'
                />
                {Array.isArray(arrayPontosGeral) && arrayPontosGeral.length > 0 &&
                    arrayPontosGeral.map((ponto, index) => {
                        const newMarkerIcon = new L.Icon({
                            iconUrl: ponto.icone,
                            iconSize: [25, 25],
                            iconAnchor: [12.5, 25],
                            popupAnchor: [0, -12.5],
                        });
                        return (
                            <Marker key={index} position={[ponto.latitude, ponto.longitude]} icon={newMarkerIcon}>
                                <Popup>
                                    <div className="flex flex-col justify-center items-center gap-2">
                                        {
                                            ponto.imagem ? (
                                                <div style={{ margin: '0px' }}>
                                                    <div className="relative w-[200px] h-[150px]">
                                                        <Image alt="Imagem da Solicitação" src={ponto.imagem} fill className="object-cover"></Image>
                                                    </div>
                                                </div>
                                            ) : ('')
                                        }
                                        <h2 className="text-2xl leading-7 text-center">{ponto.nome}</h2>
                                        {
                                            ponto.horarioDeAtendimento ? (
                                                <p style={{ margin: '0px', alignSelf: 'start' }} className="flex items-center justify-center"><FaClock />: Horário de atendimento: {ponto.horarioDeAtendimento}</p>
                                            ) : ''
                                        }
                                        {
                                            ponto.endereco ? (
                                                <p style={{ margin: '0px', alignSelf: 'start' }} className="flex items-center justify-center"><SiGooglemaps />:  {ponto.endereco}</p>
                                            ) : ''
                                        }
                                        {
                                            ponto.telefone ? (
                                                <Link href={`tel:${ponto.telefone}`} style={{ margin: '0px', alignSelf: 'start', color: '#3F3F46' }} className="flex items-center justify-center" ><FaPhone />:  {ponto.telefone}</Link>
                                            ) : ''
                                        }
                                        <ul className="flex w-full">
                                            {
                                                ponto.redesSociais?.map((rede, index) =>
                                                    rede.link ? ( // Retorna diretamente sem `{}` e `return`
                                                        <li key={index} className="flex-1 flex justify-center items-center">
                                                            <Link href={rede.link} style={{ color: "#3F3F46" }}>
                                                                {
                                                                    rede.nome.toLowerCase() == 'whatsapp' ? <IoLogoWhatsapp className="text-3xl"/> : ''
                                                                }
                                                                {
                                                                    rede.nome.toLowerCase() == 'instagram' ? <AiFillInstagram className="text-3xl"/> : ''
                                                                }
                                                                {
                                                                    rede.nome.toLowerCase() == 'facebook' ? <IoLogoFacebook className="text-3xl"/> : ''
                                                                }
                                                                {
                                                                    rede.nome.toLowerCase() == 'email' ? <MdEmail className="text-3xl"/> : ''
                                                                }
                                                            </Link>
                                                        </li>
                                                    ) : null
                                                )
                                            }
                                        </ul>
                                    </div>
                                </Popup>
                            </Marker>
                        )
                    })
                }
            </MapContainer>
        </div>
    );
};

export default MapaComercio;
