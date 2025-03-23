'use client'
import AncoraContainer from "@/components/ancora/AncoraContainer";
import Slider3d from "@/components/slider3d/Slider3d";
import Template from "@/components/template/Template";
import Obra from "@/core/obra/Obra";
import { db } from "@/lib/firebase";
import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";

export default function Page() {
    const [listaDeObras, setListaDeObras] = useState<Obra[]>([]);

    useEffect(() => {
        const fetchObras = async () => {
            try {
                const querySnapshot = await getDocs(collection(db, "obras"))
                const obrasArray: Obra[] = querySnapshot.docs.map((doc) => {
                    const data = doc.data()
                    return {
                        id: doc.id,
                        titulo: data.titulo,
                        descricao: data.descricao,
                        imagem: data.imagem,
                        governo: data.governo,
                        data: data.data
                    }
                })
                setListaDeObras(obrasArray)
            } catch (error) {
                console.error("Erro ao buscar obras:", error);
            }
        };

        fetchObras();
    }, []);
    return (
        <Template>
            <div className="w-full p-4 my-auto flex flex-col gap-4 md:p-8 lg:min-h-[80vh] lg:justify-center lg:gap-8">
                <h1 className="text-[--verde] uppercase font-black text-2xl text-center leading-7 md:text-4xl">Lista de Obras Concluídas de nossa Cidade!</h1>
                <Slider3d array={listaDeObras}></Slider3d>
                <AncoraContainer></AncoraContainer>
            </div>
        </Template>
    )
}