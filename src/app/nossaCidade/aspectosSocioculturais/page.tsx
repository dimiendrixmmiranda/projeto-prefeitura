import AncoraContainer from "@/components/ancora/AncoraContainer";
import Template from "@/components/template/Template";

export default function AspectosGeograficos() {
    return (
        <Template>
            <div className="text-black p-2 max-w-[1200px] mx-auto">
                <h2 className="font-black text-2xl leading-7 my-4">Aspectos Socioculturais do Município</h2>
                <ul className="flex flex-col gap-6">
                    <li className="flex flex-col gap-1">
                        <p style={{ textIndent: '2em' }}>
                            Joaquim Távora, localizada no norte do Paraná, é uma cidade que reflete a rica combinação de tradições rurais e a simplicidade acolhedora típica das comunidades do interior brasileiro. Sua cultura está profundamente enraizada na economia agrícola, com destaque para o cultivo de café e grãos, o que não apenas sustenta a economia local, mas também influencia o modo de vida e as celebrações da cidade. Festas ligadas ao campo e eventos religiosos, como as celebrações em homenagem aos padroeiros, são momentos marcantes que reúnem os moradores em torno de sua fé e de sua história, fortalecendo os laços comunitários.</p>
                        <p style={{ textIndent: '2em' }}>
                            A vida social em Joaquim Távora é centrada nos espaços públicos, como praças e campos esportivos, que servem como locais de encontro e lazer. O futebol, por exemplo, é uma das grandes paixões da população, sendo um elemento que reforça o sentimento de união e pertencimento. A gastronomia local também é um reflexo das tradições da cidade, com pratos que destacam os sabores da culinária paranaense e rural, muitas vezes preparados com ingredientes frescos da própria região.</p>
                        <p style={{ textIndent: '2em' }}>
                            Além disso, há uma valorização da história e da educação, com esforços voltados para preservar a memória da cidade e incentivar o aprendizado nas escolas locais. Esse cuidado com o passado e o compromisso com o futuro demonstram o equilíbrio entre tradição e modernidade que caracteriza Joaquim Távora, tornando-a uma cidade que, mesmo pequena, é rica em aspectos socioculturais que refletem o coração de sua comunidade.</p>

                    </li>

                </ul>
                <AncoraContainer></AncoraContainer>
            </div>
        </Template>
    )
}