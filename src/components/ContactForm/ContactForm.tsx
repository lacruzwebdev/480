import { useForm } from "react-hook-form"
import styles from "./ContactForm.module.css"
import { useTranslation } from "react-i18next"
import Button from "../Button"
import FormInput from "../FormInput"
import Info from "../Info"

export default function ContactForm() {
  const { t } = useTranslation()

  const {
    getValues,
    handleSubmit,
    register,
    reset,
    formState,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      dob: "",
      city: "",
      email: "",
      phone: "",
    },
  })

  async function handleLogin() {
    reset()
    alert(JSON.stringify(getValues()))
  }

  return (
    <div className={styles.Wrapper}>
      {formState.isSubmitted && <Info type="success">{t("submitted")}</Info>}
      <form onSubmit={handleSubmit(handleLogin)}>
        <FormInput label={t("name")} name="name" register={register} errors={errors} />
        <FormInput label={t("dob")} type="date" name="dob" register={register} errors={errors} />
        <FormInput label={t("city")} name="city" register={register} errors={errors} />
        <FormInput
          label={t("email")}
          type="email"
          name="email"
          register={register}
          errors={errors}
        />
        <FormInput label={t("phone")} name="phone" register={register} errors={errors} />

        <Button className={styles.Button}>{t("submit")}</Button>
      </form>
    </div>
  )
}
