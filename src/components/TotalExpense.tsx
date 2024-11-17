'use client'

import { Card } from './ui/card'
import { useExpense } from '../../context/Expenses'

export default function TotalExpense () {
  const { expenses } = useExpense()

  const totalExpenses = expenses.reduce(
    (sum, expense) => sum + expense.amount,
    0,
  )

  return (
    <section>
      <Card className='min-h-[100px] p-4'>
        <div>
          <h2 className='text-lg font-semibold opacity-50'>Total Expense</h2>
          <span className='text-3xl font-bold'>${totalExpenses}</span>
        </div>
      </Card>
    </section>
  )
}
