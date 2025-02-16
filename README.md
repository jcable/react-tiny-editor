# react-tiny-editor

A tiny HTML rich text editor for React, based on Fabian Vilers tiny-editor and Ophir Lojkine's react-contenteditable.

A complete rewrite of the above projects as React functional components.

The toolbar is based directly on tiny-editor. The ContentEditable component is a subset of react-contenteditable hard-coded to use a DIV element.

## How to install

```
npm install @ogauk/react-tiny-editor
```

## How to use (Typescript)

```
import React, { type FC } from 'react'
import ReactTinyEditor from '@ogauk/react-tiny-editor'

const App: FC<null> = () => {
  return <ReactTinyEditor html='A <b>test</b> message' onChange={(html) => { console.log('app on change', html) }}/>
}

export default App
```
If you want a smaller bundle and don't mind sanitising the html yourself you can:

import { ReactReallyTinyEditor as ReactTinyEditor } from '@ogauk/react-tiny-editor'

## How to use (Javascript)

```
import React from 'react'
import ReactTinyEditor from '@ogauk/react-tiny-editor'

export default function App() {
  return <ReactTinyEditor html='A <b>test</b> message' onChange={(html) => { console.log('app on change', html) }}/>
}
```

### Options

  The toolbar can be customised. The default toolbar is:

    style font bold italic underline | justifyleft justifycenter justifyright | bullist numlist outdent indent | clear

  Pass a string to the options property of the editor to re-order or omit some tool items or to add/remove separators

  You can also pass an onBlur callback to the editor.
