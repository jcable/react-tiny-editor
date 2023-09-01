import React from 'react'
import ReactDOM from 'react-dom/client'
import { ReactTinyEditor } from './ReactTinyEditor.js'

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export function App (props) {
  return React.createElement(ReactTinyEditor, {
    html: 'A <strong>test</strong> message',
    onChange: (html) => { console.log('app on change', html) }
  })
}

const app = document.getElementById('app')

if (app != null) {
  ReactDOM.createRoot(app).render(App({}))
}
