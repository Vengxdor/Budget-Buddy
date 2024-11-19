'use client'

import { createContext, useContext, useEffect, useState } from 'react'

import { auth } from '@/firebase'
import { Expense } from '@/models/expense'

import type { ExpenseType } from '../../types'

type ContextType = {
  expenses: ExpenseType[]
  addExpenses: (expense: ExpenseType) => void
}


const ExpensesContext = createContext<ContextType | null>(null)

export function ExpensesContextProvider ({
  children,
}: {
  children: React.ReactNode
}) {
  const [expenses, setExpenses] = useState<ExpenseType[] | []>([])

  useEffect(() => {
    async function getExpenses () {
      const user = auth.currentUser

      if (!user) return
      const storageExpenses = await Expense.GetExpenses(user?.uid)

      if (!storageExpenses) return []

      setExpenses(storageExpenses)
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
