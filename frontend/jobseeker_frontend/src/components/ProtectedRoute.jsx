import {Navigate} from "react-router-dom";
import { useState, useEffect } from "react";


function ProtectedRoute({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(null);

  useEffect(() => {
    async function verifyUser() {
      const token = localStorage.getItem("accessToken");

      if (!token) {
        setIsAuthenticated(false);
        return;
      }

      try {
        const response = await fetch(
          "http://localhost:8000/api/accounts/me/",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        setIsAuthenticated(response.ok);

      } catch (error) {
        console.error(error);
        setIsAuthenticated(false);
      }
    }

    verifyUser();

  }, []);

  if (isAuthenticated === null) {
    return <div>Loading...</div>;
  }

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return children;
}

export default ProtectedRoute;