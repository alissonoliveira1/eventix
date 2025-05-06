import {z} from 'zod';
import axios from 'axios';
import {useQuery} from '@tanstack/react-query';
import { UserGoogleSchema } from '@/schema/UserGoogleSchema';


type UserGoogle = z.infer<typeof UserGoogleSchema>


const fetchUserGoogle = async (): Promise<UserGoogle> => {
    const res = await axios.get('http://localhost:3000/profile', {withCredentials:true})
    const results = await UserGoogleSchema.safeParseAsync(res.data.user)
  
    if(!results.success){
        throw new Error("Erro ao buscar usuário")
    }
    return results.data  
}

export const useUserGoogle = () => {
    return useQuery<UserGoogle>({
      queryKey: ['usegoogle'],
      queryFn: fetchUserGoogle,
      retry: false,
    });
  };



