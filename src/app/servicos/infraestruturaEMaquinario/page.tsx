import AncoraContainer from "@/components/ancora/AncoraContainer";
import Template from "@/components/template/Template";

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
                        <label htmlFor="servicoSolicitado">Serviço Solicitado</label>
                        <select name="servicoSolicitado" id="servicoSolicitado" className="h-[30px] px-2">
                            <option value="nivelamento">Nivelamento</option>
                            <option value="cascalhamento">Cascalhamento</option>
                            <option value="limpezaDeValetas">Limpeza De Valetas</option>
                            <option value="patrolamento">Patrolamento</option>
                        </select>
                    </fieldset>
                    <fieldset className="flex flex-col">
                        <label htmlFor="condicaoAtual">Condição Atual da Estrada</label>
                        <select name="condicaoAtual" id="condicaoAtual" className="h-[30px] px-2">
                            <option value="corteTotal">Estrada emburacada</option>
                            <option value="corteTotal">Trecho Instranferivel</option>
                            <option value="corteTotal">Trecho Intransitavel</option>
                            <option value="corteTotal">Lama excessiva em dias de chuva</option>
                            <option value="corteTotal">Aterro/encascalhamento desgastado</option>
                            <option value="corteTotal">erosao nas laterais</option>
                            <option value="corteTotal">valetas profundas</option>
                            <option value="corteTotal">obstrução por arvore</option>
                            <option value="corteTotal">alagamentos frequentes</option>
                            <option value="corteTotal">falta de drenagem</option>
                            <option value="corteTotal">necessidade de alargamento</option>
                        </select>
                    </fieldset>
                    <fieldset>
                        <label htmlFor="area">Foto da área (Opcional):</label>
                        <div className="w-20 h-20 bg-black mx-auto"></div>
                    </fieldset>
                    <button className="bg-[--verde] py-1 text-2xl uppercase font-bold text-white">Enviar</button>
                </form>
                <AncoraContainer></AncoraContainer>
            </div>
        </Template>
    )
}