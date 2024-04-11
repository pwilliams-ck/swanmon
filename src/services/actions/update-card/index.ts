'use server';

import { revalidatePath } from 'next/cache';
import { auth } from '@clerk/nextjs';

import { db } from '@/services/db';
import { CreateSafeAction } from '@/services/create-safe-action';

import { InputType, ReturnType } from './types';
import { UpdateCard } from './schema';
import { createAuditLog } from '@/services/create-audit-log';
import { ACTION, ENTITY_TYPE } from '@prisma/client';

const handler = async (data: InputType): Promise<ReturnType> => {
  const { userId, orgId } = auth();

  if (!userId || !orgId) {
    return { error: 'unauthorized' };
  }

  const { id, boardId, ...values } = data;
  let card;

  try {
    card = await db.card.update({
      where: {
        id,
        list: {
          board: {
            orgId,
          },
        },
      },
      data: {
        ...values,
      },
    });
    await createAuditLog({
      entityTitle: card.title,
      entityId: card.id,
      entityType: ENTITY_TYPE.CARD,
      action: ACTION.UPDATE,
    });
  } catch (error) {
    return { error: 'Failed to update' };
  }

  revalidatePath(`/board/${boardId}`);
  return { data: card };
};

export const updateCard = CreateSafeAction(UpdateCard, handler);
