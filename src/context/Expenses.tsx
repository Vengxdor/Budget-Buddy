'use client'

import { createContext, useContext, useEffect, useState } from 'react'

import { auth } from '@/firebase'
import { Expense } from '@/models/expense'

import type { ExpenseType } from '../../types'

type ContextType = {
  expenses: ExpenseType[]
  addExpenses: (expense: ExpenseType) => void
}

const defaultExpense: ExpenseType[] = [
  {
    id: 1731776006070,
    amount: 60,
    category: 'food',
    description: 'We went out for eating',
    date: '2024-11-16',
    uid: 'qn7YCmY76bPoBaZJPb4qKWQQUIC3',
  },
  {
    id: 1731776006071,
    amount: 1000,
    category: 'rent',
    description: '',
    date: '2024-11-15',
    uid: 'qn7YCmY76bPoBaZJPb4qKWQQUIC3',
  },
]

const ExpensesContext = createContext<ContextType | null>(null)

export function ExpensesContextProvider ({
  children,
}: {
  children: React.ReactNode
}) {
  const [expenses, setExpenses] = useState<ExpenseType[] | []>(defaultExpense)

  useEffect(() => {
    async function getExpenses () {
      const user = auth.currentUser

      if (!user) return
      const storageExpenses = await Expense.GetExpenses(user?.uid)

      console.log(storageExpenses)
    }

    getExpenses().catch((error) => {
      console.error(error)
    })
  }, [])

  const addExpenses = (expense: ExpenseType) => {
    setExpenses((prev) => {
      return [...prev, expense]
    })
  }

  return (
    <ExpensesContext.Provider value={{ expenses, addExpenses }}>
      {children}
    </ExpensesContext.Provider>
  )
}

export const useExpense = () => {
  const context = useContext(ExpensesContext)

  if (!context) {
    throw new Error(
      'useExpense must be wrapped within the component you are trying to access. ',
    )
  }

  return context
}
