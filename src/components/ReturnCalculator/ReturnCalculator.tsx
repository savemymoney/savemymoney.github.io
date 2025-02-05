'use client'

import React, { useState, useEffect } from 'react'

const ReturnCalculator = () => {
  const [investments, setInvestments] = useState([
    { principal: 10000, rate: 5, years: 5 },
  ])
  const [highestReturnIndex, setHighestReturnIndex] = useState<number | null>(0)

  const addInvestment = () => {
    setInvestments([...investments, { principal: 10000, rate: 5, years: 5 }])
  }

  const calculateMaturity = (investment: {
    principal: number
    rate: number
    years: number
  }) =>
    investment.principal * Math.pow(1 + investment.rate / 100, investment.years)

  useEffect(() => {
    const maturityAmounts = investments.map(calculateMaturity)
    const maxMaturity = Math.max(...maturityAmounts)
    const highestReturnIndex = maturityAmounts.indexOf(maxMaturity)
    setHighestReturnIndex(highestReturnIndex)
  }, [investments])

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const { name, value } = e.target
    const parsedValue = parseFloat(value)

    if (isNaN(parsedValue)) return

    setInvestments((prevInvestments) =>
      prevInvestments.map((investment, i) =>
        i === index ? { ...investment, [name]: parsedValue } : investment
      )
    )
  }

  return (
    <form
      className='text-white p-6 rounded-lg shadow-md min-h-screen'
      onSubmit={(e) => e.preventDefault()}
    >
      <h2 className='text-2xl font-bold mb-6 text-center md:text-3xl'>
        Fixed Deposit Calculator
      </h2>

      {investments.map((investment, index) => (
        <div
          key={index}
          className={`mb-4 p-3 rounded-md ${
            highestReturnIndex === index ? 'border-2 border-green-500' : ''
          }`}
        >
          <h3 className='text-xl font-bold mb-2'>Investment {index + 1}</h3>
          <div className='mb-2'>
            <label
              htmlFor={`principal-${index}`}
              className='block text-sm font-medium mb-1'
            >
              Principal Amount:
            </label>
            <input
              type='number'
              id={`principal-${index}`}
              name='principal'
              value={investment.principal}
              onChange={(e) => handleChange(e, index)}
              className='bg-gray-800 px-3 py-2 border border-gray-700 rounded w-full focus:outline-none focus:border-blue-500'
              required
            />
          </div>
          <div className='mb-2'>
            <label
              htmlFor={`rate-${index}`}
              className='block text-sm font-medium mb-1'
            >
              Interest Rate (% per year):
            </label>
            <input
              type='number'
              id={`rate-${index}`}
              name='rate'
              value={investment.rate}
              onChange={(e) => handleChange(e, index)}
              className='bg-gray-800 px-3 py-2 border border-gray-700 rounded w-full focus:outline-none focus:border-blue-500'
              required
            />
          </div>
          <div>
            <label
              htmlFor={`years-${index}`}
              className='block text-sm font-medium mb-1'
            >
              Years:
            </label>
            <input
              type='number'
              id={`years-${index}`}
              name='years'
              value={investment.years}
              onChange={(e) => handleChange(e, index)}
              className='bg-gray-800 px-3 py-2 border border-gray-700 rounded w-full focus:outline-none focus:border-blue-500'
              required
            />
          </div>
          <div className='mt-2 text-lg font-medium'>
            Maturity Amount:{' '}
            <span className='text-green-500'>
              {calculateMaturity(investment).toFixed(2)}
            </span>
          </div>
        </div>
      ))}
      <button
        type='button'
        onClick={addInvestment}
        className='mt-4 font-bold py-2 px-6 rounded focus:outline-none focus:shadow-outline bg-blue-500 hover:bg-blue-700 text-white'
      >
        Add Investment
      </button>
    </form>
  )
}

export default ReturnCalculator
