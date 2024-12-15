interface DadosDemografia {
    indicator: string;
    data: string | number;
};

export const dadosDemografia: DadosDemografia[] = [
    { indicator: "População Total", data: 11945 },
    { indicator: "População Urbana", data: 9433 },
    { indicator: "População Rural", data: 2512 },
    { indicator: "Homens", data: 5898 },
    { indicator: "Mulheres", data: 6047 },
    { indicator: "IDH-M", data: 0.7 },
    { indicator: "Escolarização (6 a 14 anos)", data: "97,4%" },
    { indicator: "PIB per capita (R$)", data: 56092.66 },
    { indicator: "Área territorial (km²)", data: 289.173 },
    { indicator: "Densidade Demográfica (hab/km²)", data: 41.31 },
];