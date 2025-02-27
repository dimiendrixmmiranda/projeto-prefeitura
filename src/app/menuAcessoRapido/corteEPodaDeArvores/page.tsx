import Template from "@/components/template/Template";

export default function Page(){
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
                        <label htmlFor="localizacao">Informe a localição (Opcional):</label>
                        <input type="text" name="latitude" id="latitude" />
                        <input type="text" name="longitude" id="longitude" />
                        <button>Pegar Localização</button>
                    </fieldset>
                    <fieldset>
                        <label htmlFor="motivoSolicitacao">Motivo da solicitação:</label>
                        <select name="motivoSolicitacao" id="motivoSolicitacao">
                            <option value="riscoDeQueda">Risco de Queda</option>
                            <option value="galhosAtingindoFiacao">Galhos Atingindo Fiação</option>
                            <option value="raizesDanificandoCalcada">Raízes Danificando Calçada</option>
                        </select>
                    </fieldset>
                    <fieldset>
                        <label htmlFor="tipoServico">Tipo do serviço:</label>
                        <select name="tipoServico" id="tipoServico">
                            <option value="corteTotal">Corte Total</option>
                            <option value="poda">Poda</option>
                        </select>
                    </fieldset>
                    <fieldset>
                        <label htmlFor="especie">Espécie da Árvore (Opcional):</label>
                        <input type="text" name="especie" id="especie" />
                    </fieldset>
                    <fieldset>
                        <label htmlFor="altura">Altura da Árvore (Opcional):</label>
                        <input type="text" name="altura" id="altura" />
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