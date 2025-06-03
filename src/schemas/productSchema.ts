import { z } from 'zod';

export const productSchema = z.object({
  id: z.number().int(),
  title: z.string().min(1, "Title is required"),
  price: z.number().positive("Price must be a positive number"),
  description: z.string().optional(),
  category: z.string().optional(),
  image: z.string().url("Image must be a valid URL").optional()
})

export type Product = z.infer<typeof productSchema>;