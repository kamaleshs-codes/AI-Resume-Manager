import api from "../axios";
import type { LoginRequest, RegisterRequest } from "./auth.types";

export const login = async (data: LoginRequest)=>{
    const response = await api.post("auth/login", data)
    return response.data
}

export const register = async(data: RegisterRequest)=>{
    const response = await api.post("auth/register", data)
    return response.data
}