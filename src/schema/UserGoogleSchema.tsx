import { z } from "zod";

export const UserGoogleSchema = z.object({
    sub: z.string(),
    email: z.string(),
    name: z.string(),
    picture: z.string().optional()
})

export type GoogleUser = z.infer<typeof UserGoogleSchema>;