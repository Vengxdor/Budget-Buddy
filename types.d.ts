type Categories = 'food' | 'car' | 'rent'

type Date = `${number}-${number}-${number}`

export type ExpenseType = {
  id: number,
  amount: number,
  category: string,
  description: string
  date: Date,
  uid: string
}

export type User = {
  displayName: string | null
  uid: string
  image?: string | null
}