export default function Transations () {
  return (
    <section className='rounded-3xl bg-white p-3 text-black'>
      <h2 className='mb-4 text-xl font-semibold'>Recent transactions</h2>
      <article className='flex w-full'>
        <div className='flex w-full  items-center justify-between'>
          <div className='flex items-center gap-3'>
            <div className='size-10 rounded-xl bg-cyan-700'></div>
            <div>
              <p className='text-lg'>Zara</p>
              <span className='opacity-60'>27/03/2024</span>
            </div>
          </div>
          <span className='text-red-500'>- $251.21</span>
        </div>
      </article>
    </section>
  )
}
