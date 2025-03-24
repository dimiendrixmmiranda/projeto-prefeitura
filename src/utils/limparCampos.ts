export default function limparCampos(funcoes: ((valor: string) => void)[]) {
    funcoes.forEach(funcao => funcao(''));
}
