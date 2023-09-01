import { fromdiv, todiv } from '../src/substitutes.js'

test('todiv', () => {
  expect(todiv('<strong>a</strong>')).toEqual('<b>a</b>')
})

test('fromdiv', () => {
  expect(fromdiv('<b>a</b>')).toEqual('<strong>a</strong>')
})

