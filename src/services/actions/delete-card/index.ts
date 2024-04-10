'use server';

import { auth } from '@clerk/nextjs';
import { revalidatePath } from 'next/cache';

import { db } from '@/services/db';

import { DeleteCard } from './schema';
import { InputType, ReturnType } from './types';
import { CreateSafeAction } from '@/services/create-safe-action';

const handler = async (data: InputType): Promise<ReturnType> => {
  const { userId, orgId } = auth();

  if (!userId || !orgId) {
    return {
      error: 'Unauthorized',
    };
  }

  const { id, boardId } = data;
  let card;

  try {
    card = await db.card.delete({
      where: {
        id,
        list: {
          board: {
            orgId,
          },
        },
      },
    });
  } catch (error) {
    return {
      error: 'Failed to delete',
    };
  }

  revalidatePath(`/list/${boardId}`);
  return { data: card };
};

export const deleteCard = CreateSafeAction(DeleteCard, handler);
