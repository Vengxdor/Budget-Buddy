import { deleteDoc, doc, setDoc } from 'firebase/firestore'
import { toast } from 'sonner'

import { db } from '@/firebase'

import type { ExpenseType } from '../../types'

export class Expense {
  static async CreateExpense (expense: ExpenseType) {
    try {
      const docRef = doc(db, 'expenses', expense.id.toString())

      await setDoc(docRef, expense)
    } catch (error) {
      toast.error('There has been an error trying to create this expense. Please try again.')
    }
  }

  static async DeleteExpense (id: number) {
    try {
      const docRef = doc(db, 'expenses', id.toString())

      await deleteDoc(docRef)
    } catch (error) {
      toast.error('There has been an error trying to delete this expense. Please try again.')
    }
  }
}
