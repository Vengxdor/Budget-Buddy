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
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

import { Button } from './ui/button'
import { Input } from './ui/input'
import { Label } from './ui/label'
import { useExpense } from '../../context/Expenses'

export default function CreateExpense () {
  const { addExpenses } = useExpense()
  const [category, setCategory] = useState('')

  const handleAddExpense = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const form = e.target as HTMLFormElement
    const amount = parseInt(form.amount.value)
    const description = form.description.value

    addExpenses({
      id: Date.now(),
      amount,
      category,
      description,
    })

    form.reset()
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>
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
          <div>
            <Label htmlFor='amount' className='text-right'>
              Amount
            </Label>
            <Input
              id='amount'
              name='amount'
              placeholder='0.00'
              type='number'
              className='col-span-3'
              required
            />
          </div>
          <div>
            <Label className='text-right'>Category</Label>
            <Select
              required
              onValueChange={(c) => {
                setCategory(c)
              }}
            >
              <SelectTrigger>
                <SelectValue placeholder='Select category' />
              </SelectTrigger>
              <SelectContent className='w-full'>
                <SelectGroup>
                  <SelectLabel>Categories</SelectLabel>
                  <SelectItem value='food'>Food</SelectItem>
                  <SelectItem value='rent'>Rent</SelectItem>
                  <SelectItem value='car'>Car</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          <div>
            <Label htmlFor='description' className='text-right'>
              Description
            </Label>
            <Input
              placeholder='Enter description'
              id='description'
              className='col-span-3'
              name='description'
            />
          </div>
          <DialogFooter className='flex flex-row justify-end gap-2'>
            <DialogClose asChild>
              <Button variant='outline'>Cancel</Button>
            </DialogClose>
            <DialogClose asChild>
              <Button type='submit'>Add Expense</Button>
            </DialogClose>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}
