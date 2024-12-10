import { useContext } from "react"
import { AuthContext } from "../providers/AuthProvider"

export default function useAuth() {
  const context = useContext(AuthContext)
  if (!context) throw new Error("useAuth must be used within a AuthProvider")
  const { user, login, logout, isLoading } = context

  return { user, login, logout, isLoading }
}
