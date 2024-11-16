import Expenses from '@/components/Expenses'
import ExpenseChart from '@/components/ExpensesChart'
import Header from '@/components/Header'

import { ExpensesContextProvider } from '../../context/Expenses'

export default function Home () {
  return (
    <ExpensesContextProvider>
      <Header />
      <main className='mx-auto grid w-11/12 gap-3 pt-4'>
        <ExpenseChart />
        <Expenses />
      </main>
    </ExpensesContextProvider>
  )
}
