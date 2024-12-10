import { useTranslation } from "react-i18next"
import Container from "../components/Container"
import DashboardSidebar from "../components/DashboardSidebar/DashboardSidebar"
import WeatherWidget from "../components/WeatherWidget/WeatherWidget"
import styles from "./DashboardPage.module.css"
import { useQuery } from "@tanstack/react-query"
import { fetchWeather } from "../lib/weather"
import Spinner from "../components/Spinner"
import { useState } from "react"

export default function DashboardPage() {
  const [selectedCity, setSelectedCity] = useState("London")
  const {
    i18n: { language },
  } = useTranslation()

  const { isLoading, data, error } = useQuery({
    queryKey: [`weather-${selectedCity}-${language}`],
    queryFn: () => fetchWeather(selectedCity, language),
    staleTime: 60 * 1000,
  })

  if (error) return <Container>{error.message}</Container>

  return (
    <Container className={styles.Wrapper}>
      <main className={styles.Main}>
        {isLoading || !data ? (
          <Spinner color="var(--primary)" />
        ) : (
          <WeatherWidget selectedCity={selectedCity} data={data} />
        )}
      </main>
      <aside className={styles.Sidebar}>
        <DashboardSidebar onCityChange={setSelectedCity} />
      </aside>
    </Container>
  )
}
