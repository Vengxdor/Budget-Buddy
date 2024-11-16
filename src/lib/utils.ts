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

  const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'short', day: '2-digit' }

  return date.toLocaleDateString('en-US', options)
}
