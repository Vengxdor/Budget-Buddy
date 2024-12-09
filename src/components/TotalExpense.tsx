'use client'

import { useExpense } from '@/context/Expenses'

import { Card } from './ui/card'

export default function TotalExpense () {
  const { expenses } = useExpense()

  const totalExpenses = expenses.reduce(
    (sum, expense) => sum + expense.amount,
    0,
  )

  return (
    <section>
      <Card className='total-expenses p-4 lg:min-h-[400px]'>
        <div>
          <h2 className='text-lg font-semibold opacity-50'>Total Expense</h2>
          <span className='text-3xl font-bold'>${totalExpenses}</span>
        </div>
      </Card>
    </section>
  )
}
