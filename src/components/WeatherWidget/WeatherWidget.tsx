export const revalidate = 86400
import { CloudSun } from "lucide-react"
import styles from "./WeatherWidget.module.css"
import type { FormattedForecast } from "../../types/auth-types"
import { useTranslation } from "react-i18next"
import { motion } from "framer-motion"

export default function WeatherWidget({
  selectedCity,
  data,
}: {
  selectedCity: string
  data: FormattedForecast[] | null
}) {
  if (!data) throw new Error("Widget requires data")

  const { t } = useTranslation()
  const tempMin = Math.floor(data[0].temperature.min)
  const tempMax = Math.floor(data[0].temperature.max)
  const temp = Math.floor((data[0].temperature.min + data[0].temperature.max) / 2)
  const tempDescription = data[0].description
  const todayIcon = data[0].icon
  const forecast = data.slice(1, 5)
  const todayWind = data[0].wind
  const todayHumidity = data[0].humidity

  return (
    <motion.div
      className={styles.WeatherWidget}
      animate={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: 100 }}
      transition={{
        type: "spring",
        stiffness: 100,
        damping: 10,
      }}
    >
      <div className={styles.Title}>
        <CloudSun size={36} strokeWidth={1} />
        <span>{t("weather")}</span>
      </div>
      <h1 className={styles.City}>{selectedCity}</h1>
      <div className={styles.Today}>
        <div className={styles.TodayStats}>
          <span className={styles.TodayTemp}>{`${temp} °C`}</span>
          <span>{`${tempMin} / ${tempMax} °C`}</span>
          <span>{tempDescription}</span>
          <hr />
          <span>
            {t("wind")}: {todayWind} km/h
          </span>
          <span>
            {t("humidity")}: {todayHumidity}%{" "}
          </span>
        </div>
        <div>
          <img src={todayIcon} alt={tempDescription} />
        </div>
      </div>
      <div className={styles.Forecast}>
        {forecast.map((day) => {
          return (
            <div key={day.date}>
              <span>{day.date}</span>
              <div>
                <img src={day.icon} alt={day.description} />
              </div>{" "}
              <span>{day.description}</span> <span>{`${Math.floor(day.temperature.min)} °C`}</span>
            </div>
          )
        })}
      </div>
    </motion.div>
  )
}
