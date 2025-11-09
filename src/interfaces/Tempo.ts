export default interface Tempo {
    current_weather: {
        time: string
        temperature: string
        weathercode: number
        winddirection: number
        windspeed: number
    },
    daily: {
        precipitation_probability_mean: number[]
        precipitation_sum: number[]
        temperature_2m_max: number[]
        temperature_2m_min: number[]
        time: string[]
        sunrise: string[]
        sunset: string[]
    },
    hourly: {
        temperature_2m: number[]
        time: number[]
    }
}
