import Ponto from "../ponto/Ponto";

export default interface ColetaDeLixo{
    diaDaSemana: string,
    horario: string,
    pontosCaminhao1: Ponto[],
    pontosCaminhao2: Ponto[]
}