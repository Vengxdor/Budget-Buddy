'use client'

import { DialogClose } from '@radix-ui/react-dialog'
import { PlusCircle } from 'lucide-react'
import { useState } from 'react'

import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { auth } from '@/firebase'
import { EXPENSE_CATEGORIES } from '@/lib/constants'
import { todaysDate } from '@/lib/utils'
import { Expense } from '@/models/expense'

import { Button } from './ui/button'
import { Input } from './ui/input'

import type { ExpenseType } from '../../types'

export default function CreateExpense () {
  const [category, setCategory] = useState('')

  const today = todaysDate()

  const user = auth.currentUser

  const handleAddExpense = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const form = e.target as HTMLFormElement

    if (!user?.uid) return

    const expense: ExpenseType = {
      id: Date.now(),
      amount: parseInt(form.amount.value),
      category,
      description: form.description.value,
      date: form.date.value,
      uid: user.uid,
    }

    await Expense.CreateExpense(expense)

    form.reset()
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className='create-expense-btn'>
          <PlusCircle />
          Add Expense
        </Button>
      </DialogTrigger>
      <DialogContent
        aria-describedby='Add your expense.'
        className='sm:max-w-[425px]'
      >
        <DialogHeader>
          <DialogTitle>Add Expense</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleAddExpense} className='grid gap-4 py-4'>
          <div className='py-8 text-center'>
            <div className='relative inline-flex items-center'>
              <input
                name='amount'
                type='text'
                className='w-48 bg-transparent text-center text-7xl font-bold outline-none'
                placeholder='0.00'
              />
              <span className='text-4xl font-bold'>$</span>
            </div>
          </div>
          <div>
            <Input
              type='date'
              defaultValue={today}
              id='date'
              name='date'
              className='flex py-6'
            />
          </div>
          <div className='group relative'>
            <Input
              id='description'
              name='description'
              className='peer py-6'
              placeholder=' '
            />
            <label
              className='absolute top-[-11px] translate-x-2 bg-white text-sm text-black/60 transition-all duration-300 peer-placeholder-shown:top-0 peer-placeholder-shown:translate-x-3 peer-placeholder-shown:translate-y-[15px] peer-placeholder-shown:text-sm peer-placeholder-shown:text-black peer-focus:top-[-11px] peer-focus:translate-x-2
              peer-focus:translate-y-0 peer-focus:text-sm peer-focus:text-black/60'
              htmlFor='description'
            >
              Description
            </label>
          </div>
          <div>
            <Select
              required
              onValueChange={(c) => {
                setCategory(c)
              }}
            >
              <SelectTrigger className='py-6'>
                <SelectValue placeholder='Category' />
              </SelectTrigger>
              <SelectContent className='w-full'>
                <SelectGroup>
                  {EXPENSE_CATEGORIES.map(category => (
                    <SelectItem key={category.label} value={category.value}>
                      {category.label}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          <DialogFooter>
            <DialogClose asChild>
              <Button className='w-full p-6 ' type='submit'>
                Add Expense
              </Button>
            </DialogClose>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}
