'use client'

import { useExpense } from '../../context/Expenses'

export default function Transations () {
  const { expenses } = useExpense()

  return (
    <section className='rounded-lg border bg-card p-4 text-black shadow-sm'>
      <h2 className='mb-4 text-xl font-semibold'>Recent Expenses</h2>
      {expenses.length > 0 && (
        <ul className='flex h-[400px] flex-col gap-10 rounded-[inherit] border p-6'>
          {expenses.map(expense => (
            <li key={expense.id} className='flex w-full'>
              <div className='flex w-full  items-center justify-between'>
                <div>
                  <p className='text-lg'>{expense.description}</p>
                  <div className='opacity-60'>
                    <span>{expense.category}</span> - <span>Nov 15, 2024</span>
                  </div>
                </div>
                <span className='text-red-500'>- ${expense.amount}</span>
              </div>
            </li>
          ))}
        </ul>
      )}
      {expenses.length === 0 && (
        <p className='text-center opacity-70'>No expenses recorded yet.</p>
      )}
    </section>
  )
}
