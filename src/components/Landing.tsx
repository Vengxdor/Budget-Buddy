import { LineChart, PiggyBank, Receipt, Star } from 'lucide-react'
import React from 'react'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

import { LoginButton } from './ui/LoginButton'

const Landing = () => {
  return (
    <div className='min-h-screen bg-white'>
      {/* Navigation */}
      <nav className='border-b p-4'>
        <div className='container mx-auto flex items-center justify-between'>
          <div className='flex items-center space-x-2'>
            <Receipt className='size-6' />
            <span className='text-2xl font-bold'>Budget Buddy</span>
          </div>
          <LoginButton>Get Started</LoginButton>
        </div>
      </nav>

      {/* Hero Section */}
      <div className='bg-gradient-to-b from-blue-50 to-white py-20 pt-40'>
        <div className='container mx-auto px-4 text-center'>
          <h1 className='mb-6 text-5xl font-bold'>
            Take Control of Your Finances
          </h1>
          <p className='mb-8 text-xl text-gray-600'>
            Track expenses, set budgets, and achieve your financial goals with
            Budget Buddy
          </p>
          <LoginButton className='rounded-lg px-8 py-6 text-lg font-semibold text-white'>
            Start Tracking Free
          </LoginButton>
        </div>
      </div>

      {/* Features Section */}
      <div className='container mx-auto px-4 py-16'>
        <div className='grid gap-8 md:grid-cols-2 lg:grid-cols-3'>
          <Card>
            <CardHeader>
              <CardTitle className='flex items-center gap-2'>
                <LineChart className='size-5 text-primary' />
                Expense Tracking
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className='text-gray-600'>
                Easily track your daily expenses and visualize spending patterns
                with intuitive charts
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className='flex items-center gap-2'>
                <PiggyBank className='size-5 text-primary' />
                Budget Planning
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className='text-gray-600'>
                Set monthly budgets by category and get notifications when
                you&apos;re close to limits
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className='flex items-center gap-2'>
                <Star className='size-5 text-primary' />
                Smart Insights
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className='text-gray-600'>
                Get personalized insights and recommendations to improve your
                spending habits
              </p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Stats Section */}
      <div className='bg-gray-50 py-16'>
        <div className='container mx-auto px-4'>
          <div className='grid gap-8 text-center md:grid-cols-3'>
            <div>
              <h3 className='text-4xl font-bold text-primary'>1M+</h3>
              <p className='text-gray-600'>Active Users</p>
            </div>
            <div>
              <h3 className='text-4xl font-bold text-primary'>$500M+</h3>
              <p className='text-gray-600'>Expenses Tracked</p>
            </div>
            <div>
              <h3 className='text-4xl font-bold text-primary'>4.8/5</h3>
              <p className='text-gray-600'>User Rating</p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className='container mx-auto px-4 py-16 text-center'>
        <h2 className='mb-6 text-3xl font-bold'>
          Ready to Start Your Financial Journey?
        </h2>
        <p className='mb-8 text-gray-600'>
          Join thousands of users who have transformed their financial habits
          with Budget Buddy
        </p>
        <LoginButton className='rounded-lg px-8 py-6 text-lg font-semibold text-white'>
          Create Free Account
        </LoginButton>
      </div>

      {/* Footer */}
      <footer className='border-t bg-gray-50 py-8'>
        <div className='container mx-auto px-4 text-center text-gray-600'>
          <p>© 2024 Budget Buddy. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

export default Landing
