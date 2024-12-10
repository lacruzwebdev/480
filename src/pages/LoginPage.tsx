import { Navigate } from "react-router-dom"
import Container from "../components/Container/Container"
import LoginForm from "../components/LoginForm"
import useAuth from "../hooks/useAuth"
import styles from "./Loginpage.module.css"
import { useTranslation } from "react-i18next"

export default function LoginPage() {
  const { user } = useAuth()
  const { t } = useTranslation()
  return (
    <>
      {user ? (
        <Navigate to="/dashboard" />
      ) : (
        <Container className={styles.Wrapper}>
          <div className={styles.LoginForm}>
            <h1>{t("login")}</h1>
            <div className={styles.Info}>
              <p>User: 480@example.com</p>
              <p>Password: 480</p>
            </div>
            <LoginForm />
          </div>
        </Container>
      )}
    </>
  )
}
