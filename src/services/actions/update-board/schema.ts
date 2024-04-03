import { z } from 'zod';

export const UpdateBoard = z.object({
  title: z
    .string({
      required_error: 'Title is required',
      invalid_type_error: 'Title is required'
    })
    .min(1, {
      message: 'Must be 1 or more characters'
    }),
  id: z.string()
});
