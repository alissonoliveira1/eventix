import React, { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
import { Toast } from "radix-ui";
import { toast } from "sonner";


interface User {
    name: string;
    email: string;
    picture: string;
}

interface AuthContextType{
    user: User | null;
    loading: boolean;
    login: () => void;
    logout: () => void;

}
const AuthContext = createContext<AuthContextType | undefined>(undefined)

export const AuthProvider = ({children}: {children: React.ReactNode }) =>{
    const [user, setuser] = useState<User | null>(null)
    const [loading, setLoading] = useState(true)
    const [open, setOpen] = React.useState(false);
    const eventDateRef = React.useRef(new Date());
	const timerRef = React.useRef(0);
    const login = () => {
     window.location.href = "http://localhost:3000/auth/google"
    }

    const logout = async () => {
     await axios.get('http://localhost:3000/logout', {withCredentials:true})
     setuser(null)
    }

    

    const fetchUser = async () => {
        try {
            const res = await axios.get('http://localhost:3000/profile', {withCredentials:true})
            if(res.data.user){
                setuser(res.data.user)
                console.log(res.data.user)
                toast.success("Usuário logado com sucesso")
                 
            }else{
                console.log("Dados do Usuário não encontrado")
            }

        } catch (error) {
            console.error("Erro ao buscar usuário:", error)
            setuser(null)
        }
        finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        fetchUser();
      }, []);

   return(
    <AuthContext.Provider value={{ user, loading, login, logout }}>
    {children}
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