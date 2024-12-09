'use client'

import { useEffect, useState } from 'react'

type AmountInputProps = {
  value: string
  onChange: (value: string) => void
}

export function AmountInput ({ value, onChange }: AmountInputProps) {
  const [displayValue, setDisplayValue] = useState(value)

  useEffect(() => {
    setDisplayValue(value)
  }, [value])

  const handleChange = (newValue: string) => {
    // Remove any non-digit and non-decimal characters
    const sanitizedValue = newValue.replace(/[^\d.,]/g, '')
    // Format the number with comma as decimal separator
    const formattedValue = sanitizedValue.replace(/\./g, ',')

    setDisplayValue(formattedValue)
    onChange(formattedValue)
  }

  return (
    <div className='py-8 text-center'>
      <div className='relative inline-flex items-center'>
        <input
          type='text'
          value={displayValue}
          onChange={(e) => {
            handleChange(e.target.value)
          }}
          className='w-48 bg-transparent text-center text-6xl font-bold outline-none'
          placeholder='0,00'
        />
        <span className='ml-2 text-4xl'>€</span>
      </div>
    </div>
  )
}
