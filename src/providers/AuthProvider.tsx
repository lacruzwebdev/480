import { createContext, useCallback, useEffect, useState } from "react"
import type { AuthContextType, User } from "../types/auth-types"
import Cookies from "js-cookie"

const MOCK_USER: User = {
  id: 480,
  email: "cuatroochenta@example.com",
  name: "Cuatroochenta",
}

const AuthContext = createContext<AuthContextType | null>(null)

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const storedUser = Cookies.get("user")
    if (storedUser) {
      setUser(JSON.parse(storedUser))
    }
    setIsLoading(false)
  }, [])

  const login = useCallback(async (email: string, password: string) => {
    setIsLoading(true)
    //Mock Auth
    await new Promise((resolve) => setTimeout(resolve, 1000))
    if (email !== "480@example.com" || password !== "480") {
      setIsLoading(false)
      return { error: "Invalid Credentials" }
    }
    setUser(MOCK_USER)
    //Mock JWT
    Cookies.set("user", JSON.stringify(MOCK_USER))
    setIsLoading(false)
    return MOCK_USER
  }, [])

  function logout() {
    setUser(null)
    Cookies.remove("user")
  }

  return (
    <AuthContext.Provider value={{ user, isLoading, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider
export { AuthContext }
