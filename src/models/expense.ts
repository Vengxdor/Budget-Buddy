import { doc, setDoc } from 'firebase/firestore'

import { db } from '@/firebase'

import type { User } from '../../types'

export class Expense {
  static async CreateUser (user: User) {
    try {
      const docRef = doc(db, 'users', user.uid)

      await setDoc(docRef, user)
    } catch (error) {
      console.error(error)
    }
  }
}
