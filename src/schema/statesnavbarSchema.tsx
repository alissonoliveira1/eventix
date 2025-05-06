import { z } from "zod";


const StateSchema  = z.object({
    estado: z.string(),
    sigla: z.string(),
    cidade: z.string(),
 })

 export const StatesNavbarSchema = z.array(StateSchema)
  export type StatesNavbar = z.infer<typeof StatesNavbarSchema>;