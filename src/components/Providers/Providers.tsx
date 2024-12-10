import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import LangProvider from "../../providers/LangProvider"
import AuthProvider from "../../providers/AuthProvider"

const queryClient = new QueryClient()

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <QueryClientProvider client={queryClient}>
      <LangProvider>
        <AuthProvider>{children}</AuthProvider>
      </LangProvider>
    </QueryClientProvider>
  )
}
