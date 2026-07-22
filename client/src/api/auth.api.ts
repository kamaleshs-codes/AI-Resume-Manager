import api from "./axios";
import type { LoginRequest, RegisterRequest, User } from '../types/auth.types';

export const loginApi = async (data: LoginRequest) => {
  const response = await api.post("auth/login", data);
  return response.data;
};

export const registerApi = async (data: RegisterRequest) => {
  const response = await api.post("auth/register", data);
  return response.data;
};

export const getCurrentUserApi = async (): Promise<User> => {
  const response = await api.post("auth/me");
  return response.data.data;
};
