import { driver } from 'driver.js'

import 'driver.js/dist/driver.css'

const driverObj = driver({
  showProgress: true,
  steps: [
    {
      element: '.create-expense-btn',
      popover: {
        title: 'Create expense',
        description: 'Here you can create your expenses.',
      },
    },
    {
      element: '.options-btn',
      popover: { title: 'Options', description: 'If you made a expense by mistake you can delete it here or if you want to sign out.' },
    },
    {
      element: '.expense-summarize',
      popover: { title: 'Expense summarize', description: 'Here is a display of all the expenses.' },
    },
    {
      element: '.expenses-history',
      popover: { title: 'Expenses history', description: 'Here is the history of all of your expenses.' },
    },
  ],
})

export function startDrive () {
  driverObj.drive()
}
