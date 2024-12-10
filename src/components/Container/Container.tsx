import styles from "./Container.module.css"

export default function Container({
  as = "div",
  children,
  className,
}: {
  as?: "header" | "main" | "footer" | "div"
  children: React.ReactNode
  className?: string
}) {
  const Tag = as
  return <Tag className={`${styles.Container} ${className ?? ""}`}>{children}</Tag>
}
