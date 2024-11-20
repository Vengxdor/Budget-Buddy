import {
  collection,
  deleteDoc,
  doc,
  getDocs,
  query,
  setDoc,
  where,
} from 'firebase/firestore'
import { toast } from 'sonner'

import { db } from '@/firebase'

import type { ExpenseType } from '../../types'

export class Expense {
  static async CreateExpense (expense: ExpenseType) {
    try {
      const docRef = doc(db, 'expenses', expense.id.toString())

      await setDoc(docRef, expense)
    } catch (error) {
      console.error(error)
    }
  }

  static async GetExpenses (uid: string) {
    try {
      // const docRef = doc(db, 'expenses', uid)
      const q = query(collection(db, 'expenses'), where('uid', '==', uid))
      const querySnapshot = await getDocs(q)
      // Iterate to find the user and set the data to it.
      const userQuery: ExpenseType[] = []

      querySnapshot.forEach((snap) => {
        const data = snap.data() as ExpenseType

        userQuery.push(data)
      })

      if (!userQuery) return

      return userQuery
    } catch (error) {
      console.error(error)
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
