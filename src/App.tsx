import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import "./index.css"
import ProtectedRoute from "./components/ProtectedRoute"
import ContactPage from "./pages/ContactPage"
import DashboardPage from "./pages/DashboardPage"
import LoginPage from "./pages/LoginPage"
import Navbar from "./components/Navbar"

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <DashboardPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/contact"
          element={
            <ProtectedRoute>
              <ContactPage />
            </ProtectedRoute>
          }
        />
        <Route path="/" element={<Navigate to="/login" />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
