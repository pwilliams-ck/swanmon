'use client';

import { FormSubmit } from '@/components/forms/form-submit';
import { FormTextarea } from '@/components/forms/form-textarea';
import { Button } from '@/components/ui/button';
import { Plus, X } from 'lucide-react';
import { forwardRef } from 'react';

type CardFormProps = {
  listId: string;
  isEditing: boolean;
  enableEditing: () => void;
  disableEditing: () => void;
};

export const CardForm = forwardRef<HTMLTextAreaElement, CardFormProps>(
  ({ listId, isEditing, enableEditing, disableEditing }, ref) => {
    if (isEditing) {
      return (
        <form className="m-1 py-0.5 px-1 space-y-4">
          <FormTextarea
            id="title"
            onKeyDown={() => {}}
            ref={ref}
            placeholder="Enter a title..."
          />
          <input hidden id="listId" name="listId" value={listId} />
          <div className="flex items-center gap-x-1">
            <FormSubmit>Add card</FormSubmit>
            <Button size="sm" variant="ghost">
              <X className="h-5 w-5" onClick={disableEditing} />
            </Button>
          </div>
        </form>
      );
    }
    return (
      <div className="pt-2 px-2">
        <Button
          onClick={enableEditing}
          className="h-auto px-2 py-1.5 w-full justify-start text-muted-foreground text-sm"
          size="sm"
          variant="ghost"
        >
          <Plus className="h-4 w-4 mr-2" /> Add a card
        </Button>
      </div>
    );
  },
);

CardForm.displayName = 'CardForm';
