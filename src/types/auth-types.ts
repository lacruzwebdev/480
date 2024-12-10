export type AuthContextType = {
  user: User | null
  login: (email: string, password: string) => Promise<User | { error: string }>
  logout: () => void
  isLoading: boolean
}

export type User = {
  id: number
  email: string
  name: string
}

export type Day = {
  dt: number
  main: WeatherInfo
  weather: WeatherIcon[]
  clouds: Clouds
  wind: Wind
  visibility: number
  pop: number
  dt_txt: string
  rain?: Rain
}

export type WeatherInfo = {
  temp: number
  feels_like: number
  temp_min: number
  temp_max: number
  pressure: number
  sea_level: number
  grnd_level: number
  humidity: number
  temp_kf: number
}

export type WeatherIcon = {
  id: number
  main: string
  description: string
  icon: WeatherIconKeys
}

export type Clouds = {
  all: number
}

export type Wind = {
  speed: number
  deg: number
  gust: number
}

export type Rain = {
  "3h": number
}

export type City = {
  id: number
  name: string
  coord: Coord
  country: string
  population: number
  timezone: number
  sunrise: number
  sunset: number
}

export type Coord = {
  lat: number
  lon: number
}

export type FormattedForecast = {
  date: string
  description: string
  icon: string
  humidity: number
  temperature: {
    current: number
    min: number
    max: number
  }
  wind: number
}

export type WeatherIconKeys =
  | "01d"
  | "02d"
  | "03d"
  | "04d"
  | "09d"
  | "10d"
  | "11d"
  | "13d"
  | "50d"
  | "01n"
  | "02n"
  | "03n"
  | "04n"
  | "09n"
  | "10n"
  | "11n"
  | "13n"
  | "50n"
