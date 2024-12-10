import sunnyIcon from "../../assets/weather/sunny.svg"
import cloudyIcon from "../../assets/weather/cloudy.svg"
import hailIcon from "../../assets/weather/hail.svg"
import rainIcon from "../../assets/weather/rain.svg"
import sleetIcon from "../../assets/weather/sleet.svg"
import foggyIcon from "../../assets/weather/fog.svg"
import showersIcon from "../../assets/weather/showers.svg"
import snowIcon from "../../assets/weather/snow.svg"
import thunderstormIcon from "../../assets/weather/thunderstorms.svg"
import thunderstormRainIcon from "../../assets/weather/thunderstorms-rain.svg"
import { WeatherIconKeys } from "../../types/auth-types"

const svgIcons = {
  cloudy: cloudyIcon,
  fog: foggyIcon,
  hail: hailIcon,
  rain: rainIcon,
  showers: showersIcon,
  sleet: sleetIcon,
  snow: snowIcon,
  stormyShowers: thunderstormRainIcon,
  sunny: sunnyIcon,
  thunderstorms: thunderstormIcon,
}

export default svgIcons

const iconsMap = {
  "01d": svgIcons.sunny,
  "02d": svgIcons.cloudy,
  "03d": svgIcons.cloudy,
  "04d": svgIcons.cloudy,
  "09d": svgIcons.showers,
  "10d": svgIcons.rain,
  "11d": svgIcons.thunderstorms,
  "13d": svgIcons.snow,
  "50d": svgIcons.fog,
  "01n": svgIcons.sunny,
  "02n": svgIcons.cloudy,
  "03n": svgIcons.cloudy,
  "04n": svgIcons.cloudy,
  "09n": svgIcons.showers,
  "10n": svgIcons.rain,
  "11n": svgIcons.thunderstorms,
  "13n": svgIcons.snow,
  "50n": svgIcons.fog,
}

export const getIcon = (name: WeatherIconKeys): string => {
  if (iconsMap[name]) {
    return iconsMap[name]
  }
  return svgIcons.sunny
}
