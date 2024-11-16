import CreateExpense from './CreateExpense'

export default function Header () {
  return (
    <header className='mx-auto flex h-[20dvh] w-11/12 items-end justify-between gap-3 pb-4'>
      <article className='text-white'>
        <h1 className='text-3xl font-bold'>Money Spend</h1>
        <div>
          <span className=''>$</span>
          <span className='text-5xl font-bold'>15</span>
        </div>
      </article>
      <CreateExpense />
    </header>
  )
}
