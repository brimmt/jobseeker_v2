import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute";

import Home from "./pages/Home";
import Login from "./pages/Login";

import Dashboard from "./pages/Dashboard";
import Legal from "./pages/Legal";
import Resume from "./pages/Resume";

function App() {
  return (
    <BrowserRouter>

      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/login" element={<Login />} />

        

        <Route path="/dashboard" element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        } />

        <Route path="/resume" element={
          <ProtectedRoute>
            <Resume />
          </ProtectedRoute>
        } />

        <Route path="/legal" element={<Legal />} />

      </Routes>

    </BrowserRouter>
  );
}

export default App;
