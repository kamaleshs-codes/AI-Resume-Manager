import { createContext, useEffect, useState } from "react";
import type {
  AuthContextType,
  AuthUser,
  AuthProviderProps,
} from "../types/auth.types";
import {
  getToken,
  getUser,
  saveToken,
  saveUser,
  clearAuth,
} from "../utils/storage";
import { getCurrentUserApi } from "../api/auth.api";
import axios from "axios";

export const AuthContext = createContext<AuthContextType | undefined>(
  undefined,
);

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [token, setToken] = useState<string | null>(() => getToken());
  const [user, setUser] = useState<AuthUser | null>(() => getUser());
  const isAuthenticated = !!token;
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const initializeAuth = async () => {
      if (!token) {
        setLoading(false);
        return;
      }
      try {
        const currentUser = await getCurrentUserApi();
        setUser(currentUser);
      } catch (error) {
        console.log("Auth initialization failed:", error);
        if (axios.isAxiosError(error)) {
          console.log("Status:", error.response?.status);
          console.log("Response", error.response?.data);
        }

        clearAuth();
        setToken(null);
        setUser(null);
      } finally {
        setLoading(false);
      }
    };
    initializeAuth();
  }, []);

  const login = (token: string, user: AuthUser) => {
    saveToken(token);
    saveUser(user);

    setToken(token);
    setUser(user);
  };

  const logout = () => {
    clearAuth();

    setToken(null);
    setUser(null);
  };

  const value: AuthContextType = {
    user,
    token,
    isAuthenticated,
    loading,
    login,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
