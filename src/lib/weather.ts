import dayjs from "dayjs"
import "dayjs/locale/es"
import { getIcon } from "../components/WeatherWidget/icons"
import { Day, FormattedForecast } from "../types/auth-types"
import { DEFAULT_LANGUAGE } from "../constants/languages"

export const formatDate = (dte: number, lang: string = DEFAULT_LANGUAGE) => {
  dayjs.locale(lang)
  if (dte && dayjs(dte).isValid()) {
    return dayjs.unix(dte).format("ddd D MMM")
  }
  return ""
}

export const mapForecast = (forecast: Day[], lang: string = DEFAULT_LANGUAGE) => {
  const mappedForecast: FormattedForecast[] = []
  const existingDates = new Set()

  for (let i = 0; i < forecast.length; i += 1) {
    const formattedDate = formatDate(forecast[i].dt, lang)
    if (!existingDates.has(formattedDate)) {
      existingDates.add(formattedDate)
      mappedForecast.push({
        date: formatDate(forecast[i].dt, lang),
        description: forecast[i].weather[0] ? forecast[i].weather[0].description : "",
        icon: forecast[i].weather[0] && getIcon(forecast[i].weather[0].icon),
        temperature: {
          current: Math.floor(forecast[i].main.temp),
          min: Math.floor(forecast[i].main.temp_min),
          max: Math.floor(forecast[i].main.temp_max),
        },
        wind: Math.floor(forecast[i].wind.speed),
        humidity: forecast[i].main.humidity,
      })
    }
  }
  return mappedForecast
}

export const mapData = (daysData: Day[], lang: string = DEFAULT_LANGUAGE) => {
  let mapped
  if (daysData.length > 0) {
    mapped = mapForecast(daysData, lang)
  }
  return mapped
}

export async function fetchWeather(city: string, language: string) {
  const endpoint = "https://api.openweathermap.org/data/2.5/forecast"
  const key = import.meta.env.VITE_WEATHER_API_KEY
  const unit = "metric"
  const res = await fetch(`${endpoint}?appid=${key}&q=${city}&units=${unit}&lang=${language}`)

  if (!res.ok) throw new Error("Error fetching data")

  const data = await res.json()

  return mapData(data.list, language)
}
