import Header from '@/components/Header'
import Transations from '@/components/Transactions'

export default function Home () {
  return (
    <>
      <Header />
      <main className='min-h-dvh rounded-[50px] bg-gray-200 '>
        <div className='mx-auto w-11/12 p-4'>
          <Transations />
        </div>
      </main>
    </>
  )
}
