import React from 'react'
import { jest, test, expect } from '@jest/globals'
import { fireEvent, render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import { ReactTinyEditor } from '../src/ReactTinyEditor'
import { ReactReallyTinyEditor } from '../src/ReactReallyTinyEditor'

global.document.execCommand = jest.fn<() => boolean>()
global.document.queryCommandState = jest.fn<() => boolean>()
global.document.queryCommandValue = jest.fn<() => string>()

test('editor renders', async () => {
  render(<ReactTinyEditor html='Hello' onChange={() => { console.log('test') } } />)
  expect(screen.getAllByRole<HTMLButtonElement>('button').length).toBe(11)
})

test('really tiny editor renders', async () => {
  render(<ReactReallyTinyEditor html='Hello' onChange={() => { console.log('test') } } />)
  expect(screen.getAllByRole<HTMLButtonElement>('button').length).toBe(11)
})

test('editor on...', async () => {
  render(<ReactTinyEditor html='Hello' options='style font | bold | italic' onChange={() => { console.log('test') } } />)
  const div = await screen.findByText<HTMLDivElement>('Hello')
  fireEvent.focus(div)
  fireEvent.keyDown(div, { key: 'A', code: 'KeyA' })
  fireEvent.keyUp(div, { key: 'A', code: 'KeyA' })
  expect(screen.findByText<HTMLDivElement>('HelloA')).toBeDefined()
  const buttons = screen.getAllByRole<HTMLButtonElement>('button')
  expect(buttons.length).toBe(2)
  fireEvent.click(div) // coverage of onClick
  fireEvent.blur(div) // coverage of onBlur
})
