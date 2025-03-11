'use client'

import Banners from "@/components/banners/Banners"
import Clima from "@/components/clima/Clima"
import Eventos from "@/components/eventos/Eventos"
import ListaDeNoticias from "@/components/listaDeNoticias/ListaDeNoticias"
import MenuAcessoRapido from "@/components/menuAcessoRapido/MenuAcessoRapido"
import MenuAcessoRapidoWeb from "@/components/menuAcessoRapido/MenuAcessoRapidoWeb"
import MenuServico from "@/components/menuServico/MenuServico"
import Obras from "@/components/obras/Obras"
import PontosTuristicos from "@/components/pontosTuristicos/PontosTuristicos"
import Secretarias from "@/components/secretarias/Secretarias"
import Slider from "@/components/slider/Slider"
import SliderDeNoticias from "@/components/sliderDeNoticias/SliderDeNoticias"
import Template from "@/components/template/Template"

export default function App() {
	return (
		<div>
			<Template>
				<Slider estilo="h-56 sm:h-60 md:h-[400px] lg:h-[480px] xl:h-[600px]"></Slider>
				<MenuServico></MenuServico>
				<div className="box">
					<div className="flex flex-col items-center gap-2">
						<MenuAcessoRapido></MenuAcessoRapido>
						<MenuAcessoRapidoWeb></MenuAcessoRapidoWeb>
						<Banners estilo="hidden grid-rows-3 h-full w-full gap-3 lg:grid xl:max-w-[90%]"></Banners>
					</div>
					<div className="overflow-hidden xl:mx-auto">
						<SliderDeNoticias></SliderDeNoticias>
						<ListaDeNoticias></ListaDeNoticias>
					</div>
				</div>
				<Obras></Obras>
				<Eventos></Eventos>
				<Secretarias></Secretarias>
				<Clima></Clima>
				<PontosTuristicos></PontosTuristicos>
			</Template>
		</div>
	)
}