import React, { createContext, useContext, useEffect, useState } from "react";

import { toast } from "sonner";
import { useUserGoogle } from "@/api/queries/getUserGoogle";
import { UserGoogleSchema, type GoogleUser } from "@/schema/UserGoogleSchema";
import axios from "axios";
import { LoadingSpinner } from "../ui/LoadingSpinner";

type AuthContextType = {
    user: GoogleUser | null;
    isLoading: boolean;
    error: any;
    login: () => void;
    logout: () => void;
  };
  
const AuthContext = createContext<AuthContextType | undefined>(undefined)

export const AuthProvider = ({children}: {children: React.ReactNode }) =>{
   
    const { data, isLoading, error, refetch  } = useUserGoogle();
    const [user, setUser] = useState<GoogleUser | null>(null);
    const login = () => {
     window.location.href = "http://localhost:3000/auth/google"
    }

    useEffect(() => {
        if (data) {
          const parsed = UserGoogleSchema.safeParse(data);
          if (parsed.success) {
            setUser(parsed.data);
          } else {
            setUser(null);
          }
        }
      }, [data]);

    useEffect(() => {
        if (user == null){
          console.log("Usuário não encontrado")
        }else if (error) {
          toast.error('Erro ao carregar os dados do usuário. Tente novamente!');
        }
      }, [user, error]);  

      const logout = async () => {
        try {
            await axios.get('http://localhost:3000/logout', { withCredentials: true });
            setUser(null);
            refetch();
            toast.success('Você saiu com sucesso!');
        } catch (err) {
            toast.error('Erro ao tentar fazer logout.');
        }
    };

    useEffect(() => {
        if (user) {
            toast.success('Login realizado com sucesso!');
        }
    }, [user]);



   return(
    <AuthContext.Provider value={{ user, isLoading, error, login, logout }}>
     { children}
    </AuthContext.Provider>
   )
}

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
      throw new Error('useAuth deve ser usado dentro de um AuthProvider');
    }
    return context;
  };