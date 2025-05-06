import axios from "axios"
import { StatesNavbarSchema } from "@/schema/statesnavbarSchema"
import { useQuery } from "@tanstack/react-query"
import type { StatesNavbar } from "@/schema/statesnavbarSchema"



 const fetchStates = async (query:string) => {
    const res = await axios.get(`http://localhost:3000/cidades?query=${query}`)
    const results = await StatesNavbarSchema.safeParseAsync(res.data)
    
    if (!results.success) {
        console.error("Erro de validação:", results.error);
        throw new Error("Invalid data format");
      }
      return results.data;
}

export const useStates = (query:string) => {
    return useQuery<StatesNavbar>({
        queryKey: ['states',query],
        queryFn:() => fetchStates(query),
        retry: false,
     
    })
}