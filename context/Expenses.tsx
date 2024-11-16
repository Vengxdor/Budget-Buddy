'use client'

import { createContext, useContext, useState } from 'react'

import type { Expense } from '../types'

type ContextType = {
  expenses: Expense[]
  addExpenses: (expense: Expense) => void
}

const ExpensesContext = createContext<ContextType | null>(null)

export function ExpensesContextProvider ({
  children,
}: {
  children: React.ReactNode
}) {
  const [expenses, setExpenses] = useState<Expense[] | []>([])

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
