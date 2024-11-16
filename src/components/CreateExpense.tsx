import { DialogClose } from '@radix-ui/react-dialog'

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

export default function CreateExpense () {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant='outline'>+</Button>
      </DialogTrigger>
      <DialogContent className='sm:max-w-[425px]'>
        <DialogHeader>
          <DialogTitle>Add Expense</DialogTitle>
        </DialogHeader>
        <div className='grid gap-4 py-4'>
          <div>
            <Label htmlFor='amout' className='text-right'>
              Amount
            </Label>
            <Input
              id='amout'
              placeholder='0.00'
              type='number'
              className='col-span-3'
            />
          </div>
          <div>
            <Label htmlFor='Category' className='text-right'>
              Category
            </Label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder='Select a fruit' />
              </SelectTrigger>
              <SelectContent className='w-full'>
                <SelectGroup>
                  <SelectLabel>Fruits</SelectLabel>
                  <SelectItem value='apple'>Apple</SelectItem>
                  <SelectItem value='banana'>Banana</SelectItem>
                  <SelectItem value='blueberry'>Blueberry</SelectItem>
                  <SelectItem value='grapes'>Grapes</SelectItem>
                  <SelectItem value='pineapple'>Pineapple</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          <div>
            <Label htmlFor='Description' className='text-right'>
              Description
            </Label>
            <Input
              placeholder='Enter description'
              id='Description'
              className='col-span-3'
            />
          </div>
        </div>
        <DialogFooter className='flex flex-row justify-end gap-2'>
          <DialogClose asChild>
            <Button variant='outline'>Cancel</Button>
          </DialogClose>
          <Button type='submit'>Add Expense</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
