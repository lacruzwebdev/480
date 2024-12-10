import styles from "./Button.module.css"

type ButtonProps = {
  className?: string
  href?: string
  children: React.ReactNode
} & React.ButtonHTMLAttributes<HTMLButtonElement> &
  React.AnchorHTMLAttributes<HTMLAnchorElement>

export default function Button({ children, className, href, ...rest }: ButtonProps) {
  if (href) {
    return (
      <a href={href} className={`${styles.Button} ${className ?? ""}`} {...rest}>
        {children}
      </a>
    )
  } else {
    return (
      <button className={`${styles.Button} ${className ?? ""}`} {...rest}>
        {children}
      </button>
    )
  }
}
