'use client'

import { useEffect } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'

import { startDrive } from '@/components/driver'
import Home from '@/components/Home'
import Landing from '@/components/Landing'
import { auth } from '@/firebase'
import { isFirstVisit } from '@/lib/utils'

export default function Login () {
  const [user, loading, error] = useAuthState(auth)

  useEffect(() => {
    if (user && isFirstVisit()) startDrive()
  }, [user])

  if (error) {
    // Todo: create an error component
    return <h2>There has been an error please try reloading</h2>
  }

  if (user === null && !loading) {
    return (
      <Landing />
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
