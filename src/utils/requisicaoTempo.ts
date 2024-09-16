export const requisicaoTempo = async () => {
    const latitude = -23.865; // Latitude de Joaquim Távora, PR
    const longitude = -50.258; // Longitude de Joaquim Távora, PR

    // Construa a URL da requisição com latitude e longitude
    const url = `https://api.weatherapi.com/v1/forecast.json?key=${process.env.NEXT_PUBLIC_WEATHER_API_KEY}&q=${latitude},${longitude}&hours=24&aqi=no&alerts=no`;

    // Faça a requisição
    const response = await fetch(url);

    if (!response.ok) {
        throw new Error("Erro ao buscar dados de clima");
    }

    const data = await response.json();
    return data;
};