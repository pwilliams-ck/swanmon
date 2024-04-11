import { auth, currentUser } from '@clerk/nextjs';
import { ACTION, ENTITY_TYPE } from '@prisma/client';

import { db } from '@/services/db';

type Props = {
  action: ACTION;
  entityType: ENTITY_TYPE;
  entityId: string;
  entityTitle: string;
};

export const createAuditLog = async (props: Props) => {
  try {
    const { orgId } = auth();
    const user = await currentUser();

    if (!user || !orgId) {
      throw new Error('User not found');
    }

    const { entityId, entityType, entityTitle, action } = props;

    await db.auditLog.create({
      data: {
        orgId,
        entityType,
        entityId,
        entityTitle,
        action,
        userId: user.id,
        userImage: user?.imageUrl,
        userName: user?.firstName + ' ' + user?.lastName,
      },
    });
  } catch (error) {
    console.log('[AUDIT_LOG ERROR]', error);
  }
};
