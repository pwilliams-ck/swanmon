import { z } from 'zod';

export const CreateCard = z.object({
  title: z
    .string({
      required_error: 'Title is required',
      invalid_type_error: 'Title is required',
    })
    .min(1, {
      message: 'Must be 1 or more characters',
    }),
  boardId: z.string(),
  listId: z.string(),
});
