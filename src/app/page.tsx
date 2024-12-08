'use client'

import Banners from "@/components/banners/Banners"
import ListaDeNoticias from "@/components/listaDeNoticias/ListaDeNoticias"
import MenuAcessoRapido from "@/components/menuAcessoRapido/MenuAcessoRapido"
import MenuAcessoRapidoWeb from "@/components/menuAcessoRapido/MenuAcessoRapidoWeb"
import MenuServico from "@/components/menuServico/MenuServico"
import Obras from "@/components/obras/Obras"
import PontosTuristicos from "@/components/pontosTuristicos/PontosTuristicos"
import Secretarias from "@/components/secretarias/Secretarias"
import Slider from "@/components/slider/Slider"
import Template from "@/components/template/Template"

export default function App() {
	return (
		<div>
			<Template>
				<Slider estilo="h-56 sm:h-60 md:h-[400px] lg:h-[480px] xl:h-[600px]"></Slider>
				<MenuServico></MenuServico>
				<div className="caixa">
					<div className="flex flex-col items-center gap-2">
						<MenuAcessoRapido></MenuAcessoRapido>
						<MenuAcessoRapidoWeb></MenuAcessoRapidoWeb>
						<Banners estilo="hidden lg:grid grid-rows-3 h-full w-full gap-1"></Banners>
					</div>
					<div className="overflow-hidden xl:mx-auto">
						<Slider estilo="h-48 sm:h-60 md:h-[300px] lg:h-[480px] lg:max-w-[900px]"></Slider>
						<ListaDeNoticias></ListaDeNoticias>
					</div>
				</div>
				<Obras></Obras>
				<Secretarias></Secretarias>
				<PontosTuristicos></PontosTuristicos>
			</Template>
		</div>
	)
}