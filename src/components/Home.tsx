import Expenses from '@/components/Expenses'
import ExpensesCategories from '@/components/ExpensesCategories'
import ExpenseChart from '@/components/ExpensesChart'
import Header from '@/components/Header'
import TotalExpense from '@/components/TotalExpense'
import { ExpensesContextProvider } from '@/context/Expenses'
import { getPartOfDay } from '@/lib/utils'

import type { User } from 'firebase/auth'

export default function Home ({ user }: { user: User }) {
  return (
    <ExpensesContextProvider>
      <Header />
      <main className='mx-auto grid w-11/12 pt-4'>
        {!!user.displayName && (
          <h2 className='py-4 text-3xl font-semibold'>
            {getPartOfDay()}, {user.displayName}
          </h2>
        )}
        <div className='expense-summarize mb-3 grid gap-3 md:grid-cols-2 lg:grid-cols-3'>
          <TotalExpense />
          <ExpenseChart />
          <ExpensesCategories />
        </div>
        <Expenses />
      </main>
    </ExpensesContextProvider>
  )
}
