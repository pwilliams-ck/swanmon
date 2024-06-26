import { z } from 'zod';

export const UpdateCard = z.object({
  boardId: z.string(),
  description: z.optional(
    z
      .string({
        required_error: 'Description is required',
        invalid_type_error: 'Description is required',
      })
      .min(3, {
        message: 'Must be 1 or more characters',
      }),
  ),
  title: z.optional(
    z
      .string({
        required_error: 'Title is required',
        invalid_type_error: 'Title is required',
      })
      .min(1, {
        message: 'Must be 1 or more characters',
      }),
  ),
  id: z.string(),
});
