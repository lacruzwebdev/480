import styles from "./LoginForm.module.css"
import Button from "../Button"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import useAuth from "../../hooks/useAuth"
import Spinner from "../Spinner"
import { useNavigate } from "react-router-dom"
import { useState } from "react"
import { useTranslation } from "react-i18next"
import FormInput from "../FormInput"
import Info from "../Info"

const formSchema = z.object({
  email: z.string().email("Email no válido"),
  password: z.string(),
})

export default function LoginForm() {
  const [authError, setAuthError] = useState("")
  const navigate = useNavigate()
  const { t } = useTranslation()
  const { login, isLoading } = useAuth()
  const {
    getValues,
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  })

  async function handleLogin() {
    setAuthError("")
    const auth = await login(getValues("email"), getValues("password"))
    if ("error" in auth) {
      setAuthError(auth.error)
      return
    }
    if (auth.id) {
      navigate("/dashboard")
    }
  }

  return (
    <div className={styles.Wrapper}>
      {authError && <Info type="error">{t("authError")}</Info>}
      <form onSubmit={handleSubmit(handleLogin)}>
        <FormInput label={t("email")} name="email" register={register} errors={errors} />
        <FormInput label={t("password")} name="password" register={register} errors={errors} />
        <Button className={styles.Button}>
          {isLoading ? <Spinner color="#FFFFFF" /> : "Login"}
        </Button>
      </form>
    </div>
  )
}
