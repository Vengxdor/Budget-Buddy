'use client'

import React from 'react'
import {
  BarChart,
  Bar,
  Rectangle,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts'

import { formatedDate } from '@/lib/utils'

import { Card } from './ui/card'
import { useExpense } from '../../context/Expenses'

export default function ExpenseChart () {
  const { expenses } = useExpense()

  const lastDays = Array.from({ length: 7 }, (_, i) => {
    const date = new Date()

    date.setDate(date.getDate() - i)

    return date.toISOString().split('T')[0]
  }).reverse()

  const dailyExpenses = lastDays.map(date => ({
    date: formatedDate(date).split(',')[0],
    amount: expenses
      .filter(expense => expense.date === date)
      .reduce((sum, expense) => sum + expense.amount, 0),
  }))

  return (
    <Card className='min-h-[360px] bg-white p-4'>
      <h2 className='mb-4 text-xl font-semibold'>Daily Expenses</h2>
      <ResponsiveContainer className='max-h-[300px]' width='100%' height='100%'>
        <BarChart
          width={500}
          height={300}
          data={dailyExpenses}
          margin={{
            top: 5,
            right: 30,
            left: -15,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray='3 3' />
          <XAxis dataKey='date' />
          <YAxis />
          <Tooltip />
          <Bar
            dataKey='amount'
            fill='#FF0000'
            activeBar={<Rectangle fill='#8884d8' />}
          />
        </BarChart>
      </ResponsiveContainer>
    </Card>
  )
}
