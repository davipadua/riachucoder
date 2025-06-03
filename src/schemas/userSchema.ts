import { z } from 'zod';

export const userSchema = z.object({
  id: z.number().int(),
  name: z.object({
    firstname: z.string(),
    lastname: z.string(),
  }),
  email: z.string().email(),
  password: z.string()
})

export type User = z.infer<typeof userSchema>;
