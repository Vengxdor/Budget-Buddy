import Expenses from '@/components/Expenses'
import ExpensesCategories from '@/components/ExpensesCategories'
import ExpenseChart from '@/components/ExpensesChart'
import Header from '@/components/Header'
import TotalExpense from '@/components/TotalExpense'

import { ExpensesContextProvider } from '../../context/Expenses'

export default function Home () {
  return (
    <ExpensesContextProvider>
      <Header />
      <main className='mx-auto grid w-11/12 pt-4'>
        <div className='mb-3 grid gap-3 md:grid-cols-2 lg:grid-cols-3'>
          <TotalExpense />
          <ExpenseChart />
          <ExpensesCategories />
        </div>
        <Expenses />
      </main>
    </ExpensesContextProvider>
  )
}
