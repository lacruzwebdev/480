export type AuthContextType = {
  user: User | null
  login: (email: string, password: string) => Promise<User | { error: string }>
  logout: () => void
  isLoading: boolean
}

export type User = {
  id: number
  email: string
  name: string
}
