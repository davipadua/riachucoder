import { z } from 'zod';

export const cartSchema = z.object({
  id: z.number().int(),
  userId: z.number().int(),
  date: z.string().refine(date => !isNaN(Date.parse(date)), {
    message: "Date must be a valid date string"
  }),
  products: z.array(
    z.object({
      productId: z.number().int(),
      quantity: z.number().int().positive("Quantity must be a positive integer")
    })
  )
})

// Exporting the types for use in other parts of the application
export type Cart = z.infer<typeof cartSchema>;
