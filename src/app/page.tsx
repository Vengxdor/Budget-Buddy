import Header from '@/components/Header'
import Transations from '@/components/Transactions'

import { ExpensesContextProvider } from '../../context/Expenses'

export default function Home () {
  return (
    <ExpensesContextProvider>
      <Header />
      <main className='min-h-dvh rounded-[50px] pt-4'>
        <div className='mx-auto w-11/12 '>
          <Transations />
        </div>
      </main>
    </ExpensesContextProvider>
  )
}
