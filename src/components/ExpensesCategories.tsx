'use client'

import React from 'react'
import {
  ResponsiveContainer,
  PieChart as RechartsPieChart,
  Pie,
  Cell,
  Tooltip,
} from 'recharts'

import { useExpense } from '@/context/Expenses'
import { EXPENSE_CATEGORIES } from '@/lib/constants'

import { Card } from './ui/card'

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042']

export default function ExpensesCategories () {
  const { expenses } = useExpense()
  const expensesByCategory = EXPENSE_CATEGORIES.map(category => ({
    name: category.label,
    value: expenses
      .filter(expense => expense.category === category.value)
      .reduce((sum, expense) => sum + expense.amount, 0),
  })).filter(category => category.value > 0)

  return (
    <Card className='h-[400px] p-6'>
      <div className='mb-4 flex items-center gap-2'>
        {/* <PieChart className='size-4' /> */}
        <h3 className='text-xl font-semibold'>Expenses by Category</h3>
      </div>
      <div className='h-[300px]'>
        <ResponsiveContainer width='100%' height='100%'>
          <RechartsPieChart>
            <Pie
              data={expensesByCategory}
              cx='50%'
              cy='50%'
              innerRadius={60}
              outerRadius={80}
              paddingAngle={5}
              dataKey='value'
              label={({ name, value }) => `${name}: $${value.toFixed(2)}`}
            >
              {expensesByCategory.map((_, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
            <Tooltip formatter={value => `$${Number(value).toFixed(2)}`} />
          </RechartsPieChart>
        </ResponsiveContainer>
      </div>
    </Card>
  )
}
