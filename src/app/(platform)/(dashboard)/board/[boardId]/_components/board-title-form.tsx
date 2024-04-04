'use client';

import { useRef, ElementRef, useState } from 'react';
import { Board } from '@prisma/client';

import { Button } from '@/components/ui/button';
import { FormInput } from '@/components/forms/form-input';
import { updateBoard } from '@/services/actions/update-board';
import { useAction } from '@/hooks/use-action';
import { toast } from 'sonner';
import { FormErrors } from '@/components/forms/form-errors';

type BoardTitleFormProps = {
  data: Board;
};

export const BoardTitleForm = ({ data }: BoardTitleFormProps) => {
  const { execute, fieldErrors } = useAction(updateBoard, {
    onSuccess: (data) => {
      toast.success(`Renamed to "${data.title}"`, {
        className: 'mt-10',
        position: 'top-right'
      });
      setTitle(data.title);
      disableEditing();
    },
    onError: (error) => {
      toast.error(error, {
        className: 'mt-10',
        position: 'top-right'
      });
    }
  });

  const formRef = useRef<ElementRef<'form'>>(null);
  const inputRef = useRef<ElementRef<'input'>>(null);

  const [title, setTitle] = useState(data.title);
  const [isEditing, setIsEditing] = useState(false);

  const enableEditing = () => {
    setIsEditing(true);
    setTimeout(() => {
      inputRef.current?.focus();
      inputRef.current?.select();
    });
  };

  const disableEditing = () => {
    setIsEditing(false);
  };

  const onSubmit = (formData: FormData) => {
    const title = formData.get('title') as string;

    execute({
      title,
      id: data.id
    });
  };

  const onBlur = () => {
    formRef.current?.requestSubmit();
  };

  if (isEditing) {
    return (
      <form
        action={onSubmit}
        ref={formRef}
        className="flex items-center gap-x-2"
      >
        <FormInput
          ref={inputRef}
          id="title"
          onBlur={onBlur}
          errors={fieldErrors}
          defaultValue={title}
          className="fill text-xl font-bold px-[7px] py-1 h-7 bg-transparent focus-visible:outline-none focus-visible:ring-transparent border-white"
        />
      </form>
    );
  }

  return (
    <Button
      onClick={enableEditing}
      variant="transparent"
      className="font-bold text-xl h-auto w-auto p-1 px-2"
    >
      {title}
    </Button>
  );
};
