'use client'

import { Wallet } from 'lucide-react'
import { useAuthState } from 'react-firebase-hooks/auth'

import Home from '@/components/Home'
import { LoginButton } from '@/components/ui/LoginButton'
import { auth } from '@/firebase'


export default function Login () {
  const [user, loading, error] = useAuthState(auth)

  if (error) {
    // Todo: create an error component
    return (
      <h2>There has been an error please try reloading</h2>
    )
  }

  if (user === null && !loading) {
    return (
      <div className='flex items-center gap-2'>
        <Wallet className='size-12' />
        <h1 className='text-3xl font-bold'>Budget Buddy</h1>
        <LoginButton />
      </div>
    )
  }

  if (user) {
    return (
      <>
        {!!loading && <h3>Loading...</h3>}
        <Home user={user} />
      </>
    )
  }
}
