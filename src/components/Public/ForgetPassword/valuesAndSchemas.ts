import * as z from 'zod'

export const schema = z.object({
    username: z.string().email({message: "Email düzgün deyil"})
})
