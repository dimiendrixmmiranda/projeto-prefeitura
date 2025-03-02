"use client"
import { useState, useRef } from "react";
import Template from "@/components/template/Template";
import Image from "next/image";
import style from './style.module.css';
import AncoraContainer from "@/components/ancora/AncoraContainer";

export default function Page() {
    const formRef = useRef<HTMLFormElement>(null);
    const [formData, setFormData] = useState({
        nome: "",
        atendimento: "",
        telefone1: "",
        endereco: "",
        latitude: "",
        longitude: "",
        categoria: "",
        whatsapp: "",
        email: "",
        facebook: "",
        instagram: ""
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Dados do formulário:", formData);
    };

    const pegarLocalizacao = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => {
                setFormData((prevData) => ({
                    ...prevData,
                    latitude: position.coords.latitude.toString(),
                    longitude: position.coords.longitude.toString()
                }));
            });
        }
    }   
    
    return (
        <Template>
            <div className="max-w-[1200px] mx-auto">
                <div className="text-black m-2 p-2 border-2 border-[--verde] rounded-lg flex flex-col gap-4 items-center max-w-[570px] w-[95%] mx-auto lg:grid lg:grid-cols-2 lg:max-w-[1000px] lg:my-6">
                    <div className="relative w-[280px] h-[210px] sm:w-[360px] sm:h-[300px] md:w-[450px] md:h-[380px] lg:w-full">
                        <Image alt="comercio" src={'/comercio.svg'} fill className="object-cover" />
                    </div>
                    <form className={style.formulario} ref={formRef} onSubmit={handleSubmit}>
                        <fieldset>
                            <label htmlFor="nome">Digite o nome do seu Comércio:</label>
                            <input type="text" name="nome" id="nome" value={formData.nome} onChange={handleChange} />
                        </fieldset>
                        <fieldset>
                            <label htmlFor="atendimento">Digite seu Horário de Atendimento:</label>
                            <input type="text" name="atendimento" id="atendimento" value={formData.atendimento} onChange={handleChange} />
                        </fieldset>
                        <fieldset>
                            <label htmlFor="telefone1">Telefone:</label>
                            <input type="text" name="telefone1" id="telefone1" value={formData.telefone1} onChange={handleChange} />
                        </fieldset>
                        <fieldset>
                            <label htmlFor="endereco">Endereço:</label>
                            <input type="text" name="endereco" id="endereco" value={formData.endereco} onChange={handleChange} />
                        </fieldset>
                        <fieldset className="grid grid-cols-2 gap-x-4 gap-y-2">
                            <label className="col-start-1 col-end-3">Informe a localização do seu comércio:</label>
                            <input type="text" placeholder="Latitude..." name="latitude" value={formData.latitude} readOnly />
                            <input type="text" placeholder="Longitude..." name="longitude" value={formData.longitude} readOnly />
                            <button type="button" onClick={pegarLocalizacao} className="text-white bg-[--verde] col-start-1 col-end-3 py-1 rounded-lg">
                                Pegar minha localização atual!
                            </button>
                        </fieldset>
                        <fieldset className="flex gap-4">
                            <label htmlFor="categoria">Categoria:</label>
                            <select name="categoria" id="categoria" className="w-full" value={formData.categoria} onChange={handleChange}>
                                <option value="padaria">Padaria</option>
                                <option value="mercado">Mercado</option>
                                <option value="farmacia">Farmácia</option>
                                <option value="petshop">Petshop</option>
                                <option value="veterinaria">Veterinária</option>
                            </select>
                        </fieldset>
                        <fieldset className={style.formularioRedesSociais}>
                            <h2>Informe o link de suas Redes Sociais:</h2>
                            <fieldset>
                                <label htmlFor="whatsapp">WhatsApp</label>
                                <input type="text" name="whatsapp" id="whatsapp" value={formData.whatsapp} onChange={handleChange} />
                            </fieldset>
                            <fieldset>
                                <label htmlFor="email">Email:</label>
                                <input type="text" name="email" id="email" value={formData.email} onChange={handleChange} />
                            </fieldset>
                            <fieldset>
                                <label htmlFor="facebook">Facebook:</label>
                                <input type="text" name="facebook" id="facebook" value={formData.facebook} onChange={handleChange} />
                            </fieldset>
                            <fieldset>
                                <label htmlFor="instagram">Instagram:</label>
                                <input type="text" name="instagram" id="instagram" value={formData.instagram} onChange={handleChange} />
                            </fieldset>
                        </fieldset>
                        <fieldset className="w-full grid grid-cols-2 gap-2">
                            <button type="reset" className="w-full h-full bg-red-600 p-1 text-lg font-bold text-white" style={{ textShadow: '1px 1px 2px black' }}>Cancelar</button>
                            <button type="submit" className="w-full h-full bg-green-600 p-1 text-lg font-bold text-white" style={{ textShadow: '1px 1px 2px black' }}>Enviar</button>
                        </fieldset>
                    </form>
                </div>
                <div className="my-6 max-w-[570px] mx-auto lg:max-w-[1000px] lg:mr-6">
                    <AncoraContainer />
                </div>
            </div>
        </Template>
    );
}
