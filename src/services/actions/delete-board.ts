'use server'

import { db } from '@/services/db'
import { revalidatePath } from 'next/cache'

export const deleteBoard = async (id: string) => {
  await db.board.delete({
    where: {
      id
    }
  })

  revalidatePath('/organization/org_2e4iEMKjLjFgaPMVzFKvX53vc5T')
}
