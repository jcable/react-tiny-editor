import React from 'react'
import { test, expect } from '@jest/globals'
import { fireEvent, render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import { faBold } from '@fortawesome/free-solid-svg-icons'

import Button from '../src/Button.js'

test('button renders', () => {
  // ARRANGE
  render(<Button tool='boo' title='' onClick={() => { console.log('test') } } />)

  // ASSERT
  expect(screen.getAllByRole<HTMLButtonElement>('button').length).toBe(1)
})

test('button click', () => {
  // ARRANGE
  render(<Button tool='bool' title='' icon={faBold} onClick={() => { console.log('test') } } />)

  // ACT
  fireEvent.click(screen.getByRole('button'))

  // ASSERT
  expect(screen.getAllByRole<HTMLButtonElement>('button').length).toBe(1)
})
