import { Wallet } from 'lucide-react'

import CreateExpense from './CreateExpense'

export default function Header () {
  return (
    <header className='mx-auto flex h-[20dvh] w-11/12 items-end justify-between gap-3 pb-4'>
      <div className='flex items-center gap-2'>
        <Wallet className='size-12' />
        <h1 className='text-3xl font-bold'>Budget Buddy</h1>
      </div>
      <CreateExpense />
    </header>
  )
}
