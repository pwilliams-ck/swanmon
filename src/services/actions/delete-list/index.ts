'use server';

import { auth } from '@clerk/nextjs';
import { revalidatePath } from 'next/cache';

import { db } from '@/services/db';

import { DeleteList } from './schema';
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
  let list;

  try {
    list = await db.list.delete({
      where: {
        id,
        boardId,
        board: {
          orgId,
        },
      },
    });
  } catch (error) {
    return {
      error: 'Failed to delete.',
    };
  }

  revalidatePath(`/list/${id}`);
  return { data: list };
};

export const deleteList = CreateSafeAction(DeleteList, handler);
