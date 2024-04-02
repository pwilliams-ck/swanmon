'use server';

import { auth } from '@clerk/nextjs';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

import { db } from '@/services/db';

import { DeleteBoard } from './schema';
import { InputType, ReturnType } from './types';
import { CreateSafeAction } from '@/services/create-safe-action';

const handler = async (data: InputType): Promise<ReturnType> => {
  const { userId, orgId } = auth();

  if (!userId || !orgId) {
    return {
      error: 'Unauthorized'
    };
  }

  const { id } = data;
  let board;

  try {
    board = await db.board.delete({
      where: {
        id,
        orgId
      }
    });
  } catch (error) {
    return {
      error: 'Failed to delete.'
    };
  }

  revalidatePath(`/organization/${orgId}`);
  redirect(`/organization/${orgId}`);
};

export const deleteBoard = CreateSafeAction(DeleteBoard, handler);
