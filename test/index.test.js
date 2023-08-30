import { App } from '../src/index.js'

const body = document.getElementsByTagName('body')
const div = document.createElement('div')
div.setAttribute('id', 'app')
body.item(0).appendChild(div)

test('dummy for coverage', () => {
  expect(App({})).toBeDefined()
})
