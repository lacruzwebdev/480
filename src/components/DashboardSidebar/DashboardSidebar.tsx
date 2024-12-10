import { CITIES } from "../../constants/cities"
import Button from "../Button"
import styles from "./DashboardSidebar.module.css"
import { motion } from "framer-motion"

export default function DashboardSidebar({
  onCityChange,
}: {
  onCityChange: (city: string) => void
}) {
  return (
    <div className={styles.Sidebar}>
      <Button className={styles.Link} href="/contact">
        Contact
      </Button>
      {CITIES.map((city, index) => (
        <motion.button
          key={city}
          onClick={() => onCityChange(city)}
          initial={{ opacity: 0, x: 20 }}
          transition={{
            delay: index * 0.1,
          }}
          animate={{ opacity: 1, x: 0 }}
        >
          {city}
        </motion.button>
      ))}
    </div>
  )
}
