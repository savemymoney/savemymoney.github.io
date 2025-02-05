import classNames from 'classnames'

export default function MainTitle() {
  return (
    <div
      className={classNames(
        'flex flex-col justify-center items-center',
        'p-4 mt-8 gap-6 md:p-8 md:mt-12 md:gap-10'
      )}
    >
      <h1 className='font-bold text-6xl md:text-9xl'>Save My Money</h1>
      <p className='text-2xl md:text-4xl text-center'>
        🛠️ Tools to calculate and save money 💵
      </p>
    </div>
  )
}
