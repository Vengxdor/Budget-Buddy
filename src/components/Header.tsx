import { Ellipsis, Wallet } from 'lucide-react'

import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'

import CreateExpense from './CreateExpense'
import SignOut from './SignOut'

export default function Header () {
  return (
    <header className='mx-auto flex h-[10dvh] w-11/12 items-end justify-between gap-3 pb-4'>
      <div className='flex items-center gap-2'>
        <Wallet className='size-12' />
        <h1 className='text-3xl font-bold'>Budget Buddy</h1>
      </div>
      <div className='flex gap-2'>
        <DropdownMenu>
          <DropdownMenuTrigger>
            <Ellipsis />
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <SignOut />
          </DropdownMenuContent>
        </DropdownMenu>
        <CreateExpense />
      </div>
    </header>
  )
}
