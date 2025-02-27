import Template from "@/components/template/Template";

export default function Page() {
    return (
        <Template>
            <div className="text-black">
                <form className="p-2">
                    <fieldset>
                        <label htmlFor="nome">Informe seu nome completo:</label>
                        <input type="text" name="nome" id="nome" />
                    </fieldset>
                    <fieldset>
                        <label htmlFor="cpf">Informe seu nome CPF:</label>
                        <input type="text" name="cpf" id="cpf" />
                    </fieldset>
                    <fieldset>
                        <label htmlFor="telefone">Informe seu nome Telefone:</label>
                        <input type="text" name="telefone" id="telefone" />
                    </fieldset>
                    <fieldset>
                        <label htmlFor="endereco">Informe seu Endereço:</label>
                        <input type="text" name="endereco" id="endereco" />
                    </fieldset>
                    <fieldset>
                        <label htmlFor="bairro">Informe seu Bairro:</label>
                        <input type="text" name="bairro" id="bairro" />
                    </fieldset>
                    <fieldset>
                        <label htmlFor="localizacao">Informe a localição:</label>
                        <input type="text" name="latitude" id="latitude" />
                        <input type="text" name="longitude" id="longitude" />
                        <button>Pegar minha Localização Atual</button>
                    </fieldset>
                    <fieldset>
                        <label htmlFor="servicoSolicitado">Serviço Solicitado</label>
                        <select name="servicoSolicitado" id="servicoSolicitado">
                            <option value="nivelamento">Nivelamento</option>
                            <option value="cascalhamento">Cascalhamento</option>
                            <option value="limpezaDeValetas">Limpeza De Valetas</option>
                            <option value="patrolamento">Patrolamento</option>
                        </select>
                    </fieldset>
                    <fieldset>
                        <label htmlFor="condicaoAtual">Condição Atual da Estrada</label>
                        <select name="condicaoAtual" id="condicaoAtual">
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
                        <label htmlFor="altura">Foto da Árvore (Opcional):</label>
                        <div className="w-20 h-20 bg-black"></div>
                    </fieldset>
                    <button>Enviar</button>
                </form>
            </div>
        </Template>
    )
}