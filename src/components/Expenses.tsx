'use client'

import { formatedDate } from '@/lib/utils'

import { Card } from './ui/card'
import { useExpense } from '../../context/Expenses'

export default function Expenses () {
  const { expenses } = useExpense()

  return (
    <section className='rounded-lg  text-black'>
      <Card className='p-4'>
        <h2 className='mb-4 text-xl font-semibold'>Recent Expenses</h2>
        <ul className='flex h-[400px] flex-col gap-10 rounded-[inherit] border p-6'>
          {expenses.map(expense => (
            <li key={expense.id} className='flex w-full'>
              <div className='flex w-full  items-center justify-between'>
                <div>
                  <p className='text-lg'>{expense.description}</p>
                  <div className='opacity-60'>
                    <span>{expense.category}</span> •{' '}
                    <span>{formatedDate(expense.date)}</span>
                  </div>
                </div>
                <span className='text-red-500'>- ${expense.amount}</span>
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
