import { Link } from "react-router-dom"
import useAuth from "../../hooks/useAuth"
import Button from "../Button"
import Container from "../Container"
import LanguageSelector from "../LanguageSelector"
import styles from "./Navbar.module.css"

export default function Navbar() {
  const { user, logout } = useAuth()
  return (
    <Container as="header" className={styles.Wrapper}>
      <h2>Weather</h2>
      <nav className={styles.Navbar}>
        {user && (
          <>
            <Link to="/dashboard">Dashboard</Link>
            <Link to="/contact">Contact</Link>
          </>
        )}
        <LanguageSelector />
        {user && (
          <div className={styles.UserSection}>
            <p>{user.name}</p>
            <Button onClick={() => logout()}>Cerrar sesión</Button>
          </div>
        )}
      </nav>
    </Container>
  )
}
