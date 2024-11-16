type Categories = 'food' | 'car' | 'rent'

export type Expense = {
  id: number,
  amount: number,
  category: string,
  description: string
}