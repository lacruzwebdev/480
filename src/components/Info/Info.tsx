import { AlertCircle, CheckCircle } from "lucide-react"
import styles from "./Info.module.css"
type InfoProps = {
  children: React.ReactNode
  type: "success" | "error"
}

export default function Info({ type, children }: InfoProps) {
  const iconMap = {
    success: <CheckCircle />,
    error: <AlertCircle />,
  }
  return (
    <div className={`${styles.Info} ${styles[type]}`}>
      {iconMap[type]}
      {children}
    </div>
  )
}
