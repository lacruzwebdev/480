import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import AuthProvider from "../../providers/AuthProvider"

const queryClient = new QueryClient()

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <QueryClientProvider client={queryClient}>
        <AuthProvider>{children}</AuthProvider>
    </QueryClientProvider>
  )
}
