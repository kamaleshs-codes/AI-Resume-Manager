import { createContext, useState, type ReactNode } from "react";
import type { AuthContextType, AuthUser } from "./auth.types";
import {
  getToken,
  getUser,
  saveToken,
  saveUser,
  clearAuth,
} from "../../utils/storage";

export const AuthContext = createContext<AuthContextType | undefined>(
  undefined,
);

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [token, setToken] = useState<string | null>(getToken());
  const [user, setUser] = useState<AuthUser | null>(getUser());
  const isAuthenticated = !!token;

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
    login,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
