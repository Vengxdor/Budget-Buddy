import Expenses from '@/components/Expenses'
import Header from '@/components/Header'

import { ExpensesContextProvider } from '../../context/Expenses'


export default function Home () {
  return (
    <ExpensesContextProvider>
      <Header />
      <main className='min-h-dvh rounded-[50px] pt-4'>
        <div className='mx-auto w-11/12 '>
          <Expenses />
        </div>
      </main>
    </ExpensesContextProvider>
  )
}
