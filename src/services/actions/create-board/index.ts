'use server';

import { revalidatePath } from 'next/cache';
import { auth } from '@clerk/nextjs';

import { db } from '@/services/db';
import { CreateSafeAction } from '@/services/create-safe-action';

import { InputType, ReturnType } from './types';
import { CreateBoard } from './schema';

const handler = async (data: InputType): Promise<ReturnType> => {
  const { userId, orgId } = auth();

  if (!userId || !orgId) {
    return {
      error: 'Unauthorized'
    };
  }

  const { title, image } = data;

  const [imageId, imageThumbUrl, imageFullUrl, imageLinkHTML, imageUserName] =
    image.split('|');

  if (
    !imageId ||
    !imageThumbUrl ||
    !imageFullUrl ||
    !imageUserName ||
    !imageLinkHTML
  ) {
    return {
      error: 'Missing fields, failed to create board.'
    };
  }

  let board;

  try {
    board = await db.board.create({
      data: {
        title,
        orgId,
        imageId,
        imageThumbUrl,
        imageFullUrl,
        imageUserName,
        imageLinkHTML
      }
    });
  } catch (error) {
    return {
      error: 'Error, please try again later.'
    };
  }

  revalidatePath(`/board/${board.id}`);
  return { data: board };
};

export const createBoard = CreateSafeAction(CreateBoard, handler);
