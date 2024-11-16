'use client'

import { createContext, useContext, useState } from 'react'

import type { Expense } from '../types'

type ContextType = {
  expenses: Expense[]
  addExpenses: (expense: Expense) => void
}

const defaultExpense: Expense[] = [
  {
    id: 1731776006070,
    amount: 60,
    category: 'food',
    description: 'We went out for eating',
    date: '2024-11-16',
  },
  {
    id: 1731776006071,
    amount: 1000,
    category: 'rent',
    description: '',
    date: '2024-11-15',
  },
]

const ExpensesContext = createContext<ContextType | null>(null)

export function ExpensesContextProvider ({
  children,
}: {
  children: React.ReactNode
}) {
  const [expenses, setExpenses] = useState<Expense[] | []>(defaultExpense)

  const addExpenses = (expense: Expense) => {
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
