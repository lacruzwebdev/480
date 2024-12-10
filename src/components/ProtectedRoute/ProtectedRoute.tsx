import { Navigate } from "react-router-dom"
import useAuth from "../../hooks/useAuth"

export default function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const { user, isLoading } = useAuth()

  if (isLoading && !user) return null
  return user ? <>{children}</> : <Navigate to="/login" />
}
