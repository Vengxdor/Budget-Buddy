type Categories = 'food' | 'car' | 'rent'

type Date = `${number}-${number}-${number}`

export type Expense = {
  id: number,
  amount: number,
  category: string,
  description: string
  date: Date
}