'use client'

import { useAction } from '@/hooks/use-action'
import { createBoard } from '@/services/actions/create-board'

import { Button } from '@/components/ui/button'
import { FormInput } from './form-input'

export const Form = () => {
  const { execute, fieldErrors } = useAction(createBoard, {
    onSuccess: (data) => {
      console.log(data, 'Success!')
    },
    onError: (error) => {
      console.error(error)
    }
  })

  const onSubmit = (formData: FormData) => {
    const title = formData.get('title') as string

    execute({ title })
  }

  return (
    <form action={onSubmit}>
      <FormInput errors={fieldErrors} />
      <Button type="submit">Submit</Button>
    </form>
  )
}
