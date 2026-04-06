import {
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";
import LoginForm from "./components/LoginForm";
import Dashboard from "./components/Dashboard";
import type { ReactNode } from "react";

interface protectedRouteProps {
  children: ReactNode;
}

function App() {
  // Simple Protected Route Component
  const ProtectedRoute = ({ children }: protectedRouteProps) => {
    const isAuthenticated = localStorage.getItem("isAuthenticated");
    return isAuthenticated ? children : <Navigate to="/" />;
  };
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<LoginForm />} />
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
