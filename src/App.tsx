import {
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";
import LoginForm from "./components/LoginForm";
import Dashboard from "./components/Dashboard";
import { useState, type ReactNode } from "react";
import Home from "./components/Home";
import Contact from "./components/Contact";
import About from "./components/About";
import Accordian from "./components/Accordian";
import type { AccordianItem } from "./components/types";

interface protectedRouteProps {
  children: ReactNode;
}
const App: React.FC = () => {
  // Simple Protected Route Component
  const ProtectedRoute = ({ children }: protectedRouteProps) => {
    const isAuthenticated = localStorage.getItem("isAuthenticated");
    return isAuthenticated ? children : <Navigate to="/" />;
  };

  // const [page, setPage] = useState<string>("Home");

  // const renderPage = () => {
  //   switch (page) {
  //     case "about":
  //       return <About />;
  //     case "contact":
  //       return <Contact />;
  //     default:
  //       return <Home />;
  //   }
  // };

  const items: AccordianItem[] = [
    { id: "1", title: "Section 1", content: "Content 1" },
    { id: "2", title: "Section 2", content: "Content 2" },
    { id: "3", title: "Section 3", content: "Content 3" },
  ];
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

      {/* <button onClick={() => setPage("home")}>Home</button>
      <button onClick={() => setPage("about")}>About Us</button>
      <button onClick={() => setPage("contact")}>Contact Us</button>
      {renderPage()} */}

      <h2>Accordian Examples</h2>
      <Accordian items={items} allowMultiple={false} defaultOpenIds={["3"]} />
    </>
  );
};

export default App;
