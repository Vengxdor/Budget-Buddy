'use client'

import { collection, query, where } from 'firebase/firestore'
import { createContext, useContext } from 'react'
import { useCollectionData } from 'react-firebase-hooks/firestore'

import { auth, db } from '@/firebase'

import type { ExpenseType } from '../../types'
import type { DocumentData } from 'firebase/firestore'

type ContextType = {
  expenses: ExpenseType[]
}

const ExpensesContext = createContext<ContextType | null>(null)

export function ExpensesContextProvider ({
  children,
}: {
  children: React.ReactNode
}) {
  const user = auth.currentUser
  const expensesRef = collection(db, 'expenses')
  const q = query(
    expensesRef,
    where('uid', '==', user?.uid),
  )

  const [expense] = useCollectionData(q)

  const isExpenses = expense ?? []

  const sortExpensesByDate = (expenses: DocumentData[]) => {
    return expenses.sort((a, b) => b.id - a.id) as ExpenseType[]
  }

  const expenses = sortExpensesByDate(isExpenses)

  return (
    <ExpensesContext.Provider value={{ expenses }}>
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
