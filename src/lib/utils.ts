import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn (...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const todaysDate = () => {
  const date = new Date()

  return date.toISOString().split('T')[0]
}

export const formatedDate = (dateString: string) => {
  const date = new Date(dateString)

  const options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'short',
    day: '2-digit',
  }

  return date.toLocaleDateString('en-US', options)
}

export const getPartOfDay = () => {
  const date = new Date()

  const hour = date.getHours()

  if (hour >= 6 && hour < 12) return 'Good morning'

  if (hour >= 12 && hour < 24) return 'Good afternoon'

  return 'Good night'
}


export function isFirstVisit () {
  const hasVisited = document.cookie.split('; ').find(row => row.startsWith('visited='))

  if (!hasVisited) {
    document.cookie = 'visited=true; path=/; max-age=31536000' // 1 year

    return true
  }

  return false
}
