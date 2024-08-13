import * as z from 'zod'

export const defaultValue = {
    username: '',
    password: '',
}

export const schema = z.object({
  username: z.string().email(),
  password: z.string().min(10, {message: 'Minimum 10 hərf və reqem olmalidir'})
})