import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { IAuthContext, IAuthContextProviderProps, ISignInData } from "./types";
import { IUser } from "../types/user";
import { api } from "@/services/api";

export const AuthContext = createContext<IAuthContext>({
  user: null,
  signIn: async () => {},
});

export const AuthProvider = ({ children }: IAuthContextProviderProps) => {
  const [user, setUser] = useState<IUser | null>(null);
  const navigate = useNavigate();

  const signIn = async ({ email, password }: ISignInData) => {
    try {
      const response = await api.get<IUser[]>("/users", {
        params: { email, password },
      });

      if (response.data.length === 1) {
        setUser(response.data[0]);
        navigate("/feed");
      } else {
        alert("Usuário não encontrado");
      }
    } catch (error) {
      alert("Erro ao fazer login");
    }
  };

  return (
    <AuthContext.Provider value={{ user, signIn }}>
      {children}
    </AuthContext.Provider>
  );
};
