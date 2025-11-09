'use client'

import AnunciosDaCidade from "@/components/anunciosDaCidade/AnunciosDaCidade"
import Banners from "@/components/banners/Banners"
import MenuAcessoRapido from "@/components/menuAcessoRapido/MenuAcessoRapido"
import MenuDeServicos from "@/components/menuDeServicos/MenuDeServicos"
import Template from "@/components/template/Template"
import GaleriaDeObras from "@/components/galeriaDeObras/GaleriaDeObras"
import ConhecaNossaCidade from "@/components/conhecaNossaCidade/ConhecaNossaCidade"
import Secretarias from "@/components/secretarias/Secretarias"
import CalendarioComEventos from "@/components/calendarioEventos/CalendarioEventos"
import Noticias from "@/components/noticias/Noticias"
import Clima from "@/components/clima/Clima"
import Aniversarios from "@/components/aniversarios/Aniversarios"

export default function Home() {

	return (
		<Template>
			<AnunciosDaCidade />
			<MenuDeServicos />
			<div className="max-w-[1600px] mx-auto flex flex-col gap-4 overflow-hidden">
				<div className="flex flex-col p-4 md:grid md:grid-cols-3 md:gap-4 xl:grid-cols-[300px_1fr] xl:gap-8">
					{/* menu */}
					<div className="flex flex-col gap-4 md:col-span-1 md:col-end-2">
						<MenuAcessoRapido />
						<Banners estilo="hidden md:flex md:flex-col md:gap-2 2xl:gap-3" />
					</div>
					<div className="w-full md:col-start-2 md:col-end-4 xl:col-end-3">
						{/* noticias */}
						<Noticias />
					</div>
				</div>
				<Banners estilo="grid grid-cols-2 gap-2 p-4 md:hidden" />
				<GaleriaDeObras />
				<Secretarias />
				<CalendarioComEventos />
				<ConhecaNossaCidade />
				<div className="flex flex-col gap-4 xl:grid xl:grid-cols-2 xl:pb-8">
					<Clima />
					<Aniversarios/>
				</div>
			</div>
		</Template>
	)
}