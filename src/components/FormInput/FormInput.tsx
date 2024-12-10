import { FieldErrors, UseFormRegister, Path } from "react-hook-form"
import { FieldValues } from "react-hook-form"
import styles from "./FormInput.module.css"

type InputProps<T extends FieldValues> = {
  label: string
  name: Path<T>
  register: UseFormRegister<T>
  errors: FieldErrors<T>
  type?: HTMLInputElement["type"]
}

export default function FormInput<T extends FieldValues>({
  label,
  name,
  register,
  errors,
  type = "text",
}: InputProps<T>) {
  return (
    <div className={styles.Field}>
      <label htmlFor={name} className={styles.Label}>
        {label}
      </label>
      <input
        id={name}
        {...register(name)}
        className={styles.Input}
        aria-invalid={errors[name] ? "true" : "false"}
        type={type}
        required
      />
      <p className={styles.Error}>
        {typeof errors[name]?.message === "string" ? errors[name].message : ""}
      </p>
    </div>
  )
}
