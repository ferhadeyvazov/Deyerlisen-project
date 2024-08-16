import * as z from 'zod'

//LOGIN COMPONENT
const email = z.string().email({message: 'Email düzgün deyil'});
const password = z.string()
.min(10, {message: 'Minimum 10 hərf və reqem olmalidir'});

export const defaultValue = {
    username: '',
    password: '',
}

export const schema = z.object({
  username: email,
  password: password
})
.required()