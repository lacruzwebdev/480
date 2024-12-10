import { useTranslation } from "react-i18next"
import Container from "../components/Container"
import styles from "./ContactPage.module.css"
import ContactForm from "../components/ContactForm"

export default function ContactPage() {
  const { t } = useTranslation()
  return (
    <Container className={styles.Wrapper}>
      <h1>{t("contact")}</h1>
      <ContactForm />
    </Container>
  )
}
