'use client'

import { useExpense } from '@/context/Expenses'
import { formatedDate } from '@/lib/utils'

import { Card } from './ui/card'

export default function Expenses () {
  const { expenses } = useExpense()

  return (
    <section className='rounded-lg  text-black'>
      <Card className='p-4'>
        <h2 className='mb-4 text-xl font-semibold'>Recent Expenses</h2>
        <ul className='expenses-history flex h-[400px] flex-col gap-3 overflow-x-auto rounded-[inherit] border p-4'>
          {expenses.map(expense => (
            <li
              key={expense.id}
              className='flex w-full animate-[slideIn_0.3s_ease-out] items-center justify-between rounded-[inherit] bg-white p-3 px-5 transition-all duration-200 hover:bg-gray-50 hover:shadow-md'
            >
              <div className='flex w-full  items-center justify-between'>
                <div>
                  <p className='text-lg'>{expense.description}</p>
                  <div className='opacity-60'>
                    <span className='capitalize'>{expense.category}</span> •{' '}
                    <span>{formatedDate(expense.date)}</span>
                  </div>
                </div>
                <span className='font-semibold text-red-500'>
                  - ${expense.amount}
                </span>
              </div>
            </li>
          ))}

          {expenses.length === 0 && (
            <li>
              <p className='text-center opacity-70'>
                No expenses recorded yet.
              </p>
            </li>
          )}
        </ul>
      </Card>
    </section>
  )
}
