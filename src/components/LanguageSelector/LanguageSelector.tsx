import { Languages } from "lucide-react"
import { LANGUAGES } from "../../constants/languages"
import styles from "./LanguageSelector.module.css"
import { useTranslation } from "react-i18next"

export default function LanguageSelector() {
  const { i18n } = useTranslation()
  function handleChange(e: React.ChangeEvent<HTMLSelectElement>) {
    localStorage.setItem("lang", e.target.value)
    i18n.changeLanguage(e.target.value)
  }
  return (
    <div className={styles.LanguageSelector}>
      <Languages size={18} />
      <select value={i18n.language} onChange={handleChange}>
        {LANGUAGES.map((lang) => (
          <option key={lang.id} value={lang.id}>
            {lang.name}
          </option>
        ))}
      </select>
    </div>
  )
}
