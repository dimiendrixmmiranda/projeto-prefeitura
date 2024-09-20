export default function FormularioEmprego() {
    return (
        <div className="w-[95%] mx-auto text-[--marrom] emprego md:max-w-[850px] lg:max-w-none xl:my-4">
            <div className="flex flex-col justify-center items-center md:p-3 md:max-w-[375px] md:self-center md:justify-self-center lg:flex-row lg:max-w-none lg:gap-2">
                <img src="./desemprego.png" alt="" className="max-w-[350px] md:w-full md:object-cover lg:max-w-[300px] xl:max-w-[325px]"/>
                <p className="font-semibold leading-5 text-center text-xl sm:text-2xl sm:leading-6 lg:text-2xl lg:leading-6 xl:text-3xl">
                    Faça seu cadastro e, assim que surgirem novas oportunidades, entraremos em contato com você diretamente. Não perca a chance de encontrar a vaga ideal!
                </p>
            </div>
            <div className="bg-[--marrom] mt-6 max-w-[450px] mx-auto md:p-3 h-fit md:mt-0 md:justify-self-center md:self-center lg:max-w-none">
                <form action="" className="text-white p-4 flex flex-col gap-2 lg:w-full form">
                    <fieldset className="w-full flex flex-col justify-center items-start text-lg">
                        <label htmlFor="nome">Nome Completo:</label>
                        <input className="w-full" type="text" name="nome" id="nome" />
                    </fieldset>
                    <fieldset className="w-full flex flex-col justify-center items-start text-lg">
                        <label htmlFor="email">Email:</label>
                        <input className="w-full" type="email" name="email" id="email" />
                    </fieldset>
                    <fieldset className="w-full flex flex-col justify-center items-start text-lg">
                        <label htmlFor="telefone">Telefone:</label>
                        <input className="w-full" type="tel" name="telefone" id="telefone" />
                    </fieldset>
                    <fieldset className="w-full flex flex-col justify-center items-start text-lg">
                        <label htmlFor="cargos">Cargos Pretendidos:</label>
                        <input className="w-full" type="text" name="cargos" id="cargos" />
                    </fieldset>
                    <fieldset className="w-full flex flex-row justify-around mt-4 xl:gap-5">
                        <button type="reset" className="bg-white text-[--marrom] font-bold cursor-pointer text-xl px-3 py-2 rounded-md xl:w-full">Limpar</button>
                        <button type="submit" className="bg-white text-[--marrom] font-bold cursor-pointer text-xl px-3 py-2 rounded-md xl:w-full">Prosseguir</button>
                    </fieldset>
                </form>
            </div>
        </div>
    )
}