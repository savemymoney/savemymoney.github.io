'use client'

import classNames from 'classnames'
import React, { useState } from 'react'

type UnitCategory = 'weight' | 'volume' | 'unit'

interface Item {
  price: number
  quantity: number
  unit: string
}

const units: Record<UnitCategory, string[]> = {
  weight: ['g', 'kg'],
  volume: ['ml', 'l'],
  unit: ['piece'],
}

const UnitPriceCalculator: React.FC = () => {
  const [comparisonType, setComparisonType] = useState<UnitCategory>('weight')
  const [items, setItems] = useState<Item[]>([
    { price: 0, quantity: 0, unit: units.weight[0] },
  ])

  const handleComparisonTypeChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ): void => {
    const newType = event.target.value as UnitCategory
    setComparisonType(newType)
    setItems((prevItems) =>
      prevItems.map((item) => ({
        ...item,
        unit: units[newType][0],
        quantity: 0,
      }))
    )
  }

  const updateItem = (
    index: number,
    field: keyof Item,
    value: string
  ): void => {
    setItems((prevItems) => {
      const updatedItems = [...prevItems]
      updatedItems[index] = {
        ...updatedItems[index],
        [field]:
          field === 'price' || field === 'quantity'
            ? parseFloat(value) || 0
            : value,
      }
      return updatedItems
    })
  }

  const handleAddItem = (): void => {
    setItems((prevItems) => [
      ...prevItems,
      { price: 0, quantity: 0, unit: units[comparisonType][0] },
    ])
  }

  const calculateUnitPrice = (item: Item): string => {
    const quantityInBaseUnit =
      item.unit === 'kg' || item.unit === 'l'
        ? item.quantity * 1000
        : item.quantity
    return quantityInBaseUnit > 0
      ? (item.price / quantityInBaseUnit).toFixed(2)
      : '0.00'
  }

  const inputClasses = classNames(
    'bg-gray-800 px-3 py-2',
    'border border-gray-700 rounded',
    'focus:outline-none focus:border-blue-500'
  )

  return (
    <div className='text-white p-6 rounded-lg shadow-md min-h-screen'>
      <h2 className='text-2xl font-bold mb-6 text-center md:text-3xl'>
        Unit Price Calculator
      </h2>
      <div className='mb-6 flex flex-col items-start md:flex-row md:items-center md:justify-center'>
        <label
          htmlFor='comparisonType'
          className='block mb-2 md:mb-0 md:text-right md:mr-4'
        >
          Comparison Type:
        </label>
        <select
          id='comparisonType'
          value={comparisonType}
          onChange={handleComparisonTypeChange}
          className={inputClasses}
        >
          {Object.entries(units).map(([unitType]) => (
            <option key={unitType} value={unitType}>
              {unitType === 'unit'
                ? 'Individual Units'
                : unitType.charAt(0).toUpperCase() + unitType.slice(1)}
            </option>
          ))}
        </select>
      </div>

      <div className='md:w-3/4 mx-auto'>
        <div className='grid grid-cols-4 gap-4 mb-4 text-lg font-medium'>
          <div>Price</div>
          <div>Quantity</div>
          <div>Unit</div>
          <div>Price/Unit</div>
        </div>

        {items.map((item, index) => (
          <div key={index} className='grid grid-cols-4 gap-4 mb-2'>
            <input
              type='number'
              placeholder={`Item ${index + 1} Price`}
              id={`item-${index + 1}-price`}
              value={item.price}
              onChange={(e) => updateItem(index, 'price', e.target.value)}
              className={classNames(inputClasses, 'text-right')}
            />
            <input
              type='number'
              placeholder='Quantity'
              id={`item-${index + 1}-quantity`}
              value={item.quantity}
              onChange={(e) => updateItem(index, 'quantity', e.target.value)}
              className={classNames(inputClasses, 'text-right')}
            />
            <select
              id={`item-${index + 1}-unit`}
              value={item.unit}
              onChange={(e) => updateItem(index, 'unit', e.target.value)}
              className={inputClasses}
            >
              {units[comparisonType].map((unit) => (
                <option key={unit} value={unit}>
                  {unit}
                </option>
              ))}
            </select>
            <div>{calculateUnitPrice(item)}</div>
          </div>
        ))}
      </div>

      <div className='flex justify-center mt-6'>
        <button
          onClick={handleAddItem}
          className={classNames(
            'font-bold py-2 px-6 rounded',
            'focus:outline-none focus:shadow-outline',
            'bg-blue-500 hover:bg-blue-700 text-white'
          )}
        >
          Add Item
        </button>
      </div>
    </div>
  )
}

export default UnitPriceCalculator
