import React, { useEffect } from "react";
import { useGetSession } from "../customHooks/useGetSession";
import { useNavigate } from "react-router-dom";

export const ProtectedRoute = ({ children }) => {
  const navigate = useNavigate();
  const { data, isLoading, isAuthenticated } = useGetSession();
  console.log(isLoading);
  console.log(data?.session?.user?.aud == "authenticated", navigate);
  useEffect(() => {
    if (!isAuthenticated && !isLoading) {
      navigate("/login");
    }
  }, [isAuthenticated, navigate, isLoading]);

  if (isAuthenticated) return children;
};
