import AncoraContainer from "@/components/ancora/AncoraContainer";
import Template from "@/components/template/Template";
import Image from "next/image";

export default function Page() {
    return (
        <Template>
            <div className="text-black p-4">
                <form className="p-6 border-2 border-[--verde] relative flex flex-col gap-3 max-w-[500px] mx-auto sm:p-8">
                    <fieldset>
                        <label htmlFor="nome">Informe seu nome completo:</label>
                        <input type="text" name="nome" id="nome" className="w-full h-[30px] rounded-lg p-2 text-sm" />
                    </fieldset>
                    <fieldset>
                        <label htmlFor="cpf">Informe seu nome CPF:</label>
                        <input type="text" name="cpf" id="cpf" className="w-full h-[30px] rounded-lg p-2 text-sm" />
                    </fieldset>
                    <fieldset>
                        <label htmlFor="telefone">Informe seu nome Telefone:</label>
                        <input type="text" name="telefone" id="telefone" className="w-full h-[30px] rounded-lg p-2 text-sm" />
                    </fieldset>
                    <fieldset>
                        <label htmlFor="endereco">Informe seu Endereço:</label>
                        <input type="text" name="endereco" id="endereco" className="w-full h-[30px] rounded-lg p-2 text-sm" />
                    </fieldset>
                    <fieldset>
                        <label htmlFor="bairro">Informe seu Bairro:</label>
                        <input type="text" name="bairro" id="bairro" className="w-full h-[30px] rounded-lg p-2 text-sm" />
                    </fieldset>
                    <fieldset className="grid grid-cols-2 gap-2">
                        <label htmlFor="localizacao" className="col-start-1 col-end-3">Informe a localição (Opcional):</label>
                        <input type="text" name="latitude" id="latitude" className="w-full h-[30px] rounded-lg p-2 text-sm" />
                        <input type="text" name="longitude" id="longitude" className="w-full h-[30px] rounded-lg p-2 text-sm" />
                        <button className="col-start-1 col-end-3 bg-[--verde] text-white font-bold py-1">Pegar Localização</button>
                    </fieldset>
                    <fieldset className="flex flex-col">
                        <label htmlFor="motivoSolicitacao">Motivo da solicitação:</label>
                        <select name="motivoSolicitacao" id="motivoSolicitacao" className="h-[30px] px-2">
                            <option value="riscoDeQueda">Risco de Queda</option>
                            <option value="galhosAtingindoFiacao">Galhos Atingindo Fiação</option>
                            <option value="raizesDanificandoCalcada">Raízes Danificando Calçada</option>
                        </select>
                    </fieldset>
                    <fieldset className="flex flex-col">
                        <label htmlFor="tipoServico">Tipo do serviço:</label>
                        <select name="tipoServico" id="tipoServico" className="h-[30px] px-2">
                            <option value="corteTotal">Corte Total</option>
                            <option value="poda">Poda</option>
                        </select>
                    </fieldset>
                    <fieldset>
                        <label htmlFor="especie">Espécie da Árvore (Opcional):</label>
                        <input type="text" name="especie" id="especie" className="w-full h-[30px] rounded-lg p-2 text-sm" />
                    </fieldset>
                    <fieldset>
                        <label htmlFor="altura">Altura da Árvore (Opcional):</label>
                        <input type="text" name="altura" id="altura" className="w-full h-[30px] rounded-lg p-2 text-sm" />
                    </fieldset>
                    <fieldset>
                        <label htmlFor="area">Foto da Árvore (Opcional):</label>
                        <div className="w-20 h-20 bg-black mx-auto"></div>
                    </fieldset>
                    <button className="bg-[--verde] py-1 text-2xl uppercase font-bold text-white">Enviar</button>
                    <div className="absolute top-2 right-2">
                        <div className="relative w-[30px] h-[30px] sm:w-[40px] sm:h-[40px]">
                            <Image alt="brasao da cidade" src={'/logo-prefeitura.png'} fill className="object-contain"></Image>
                        </div>
                    </div>
                </form>

                <AncoraContainer></AncoraContainer>
            </div>
        </Template>
    )
}