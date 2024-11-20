'use client'

import { useState } from 'react'
import { toast } from 'sonner'

import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { useExpense } from '@/context/Expenses'
import { formatedDate } from '@/lib/utils'
import { Expense } from '@/models/expense'

import type { ExpenseType } from '../../types'

export default function DeleteExpense () {
  const { expenses } = useExpense()

  const [selectedExpense, setSelectedExpense] = useState<number | null>(null)

  const handleSelect = (id: ExpenseType['id']) => {
    setSelectedExpense(id)
  }

  const handleDelete = async () => {
    if (!selectedExpense)
      return toast.error('Please select the expense that you want to delete.')

    await Expense.DeleteExpense(selectedExpense)
    toast.success('Expense deleted successfully.')
  }

  return (
    <Dialog>
      <DialogTrigger
        onClick={() => {
          setSelectedExpense(null)
        }}
        className='relative flex cursor-pointer select-none items-center gap-2 overflow-y-auto rounded-sm px-2 py-1.5 text-sm outline-none transition-colors hover:bg-[#f4f4f5] focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&>svg]:size-4 [&>svg]:shrink-0'
      >
        Delete expense
      </DialogTrigger>
      <DialogContent className='sm:max-w-[425px]'>
        <DialogHeader>
          <DialogTitle>Delete expense</DialogTitle>
          <DialogDescription>
            You made a expense by mistake? You can delete it.
          </DialogDescription>
        </DialogHeader>
        <ul className='flex h-[400px] flex-col gap-3 overflow-y-auto rounded-[inherit] border p-4'>
          {expenses.map(expense => (
            <li
              key={expense.id}
              onClick={() => {
                handleSelect(expense.id)
              }}
              className={`flex w-full cursor-pointer items-center justify-between
                rounded-[inherit] bg-white p-3 px-5 transition-all duration-200 hover:bg-gray-50 hover:shadow-md
                ${selectedExpense === expense.id && 'bg-gray-50 shadow-md'}`}
            >
              <div className='flex w-full  items-center justify-between'>
                <div>
                  <p className='text-lg'>{expense.description}</p>
                  <div className='opacity-60'>
                    <span className='capitalize'>{expense.category}</span> •{' '}
                    <span>{formatedDate(expense.date)}</span>
                  </div>
                </div>
                <span className='font-semibold text-red-500'>
                  - ${expense.amount}
                </span>
              </div>
            </li>
          ))}

          {expenses.length === 0 && (
            <li>
              <p className='text-center opacity-70'>
                No expenses recorded yet.
              </p>
            </li>
          )}
        </ul>
        <DialogFooter>
          <DialogClose asChild>
            <Button onClick={handleDelete}>Delete</Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
