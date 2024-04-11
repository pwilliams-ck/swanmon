'use server';

import { revalidatePath } from 'next/cache';
import { auth } from '@clerk/nextjs';

import { db } from '@/services/db';
import { CreateSafeAction } from '@/services/create-safe-action';

import { InputType, ReturnType } from './types';
import { UpdateBoard } from './schema';
import { createAuditLog } from '@/services/create-audit-log';
import { ACTION, ENTITY_TYPE } from '@prisma/client';

const handler = async (data: InputType): Promise<ReturnType> => {
  const { userId, orgId } = auth();

  if (!userId || !orgId) {
    return { error: 'unauthorized' };
  }

  const { title, id } = data;
  let board;

  try {
    board = await db.board.update({
      where: {
        id,
        orgId,
      },
      data: {
        title,
      },
    });
    await createAuditLog({
      entityTitle: board.title,
      entityId: board.id,
      entityType: ENTITY_TYPE.BOARD,
      action: ACTION.UPDATE,
    });
  } catch (error) {
    return { error: 'Failed to update' };
  }

  revalidatePath(`/board/${id}`);
  return { data: board };
};

export const updateBoard = CreateSafeAction(UpdateBoard, handler);
