import React, { type FC } from 'react'
import Editor from './Editor.js'
import { fromdiv, todiv } from './substitutes.js'

interface Props {
  options?: string
  html?: string
  onBlur?: (e: any) => void
  onChange?: (html: string) => void
}

export const ReactReallyTinyEditor: FC<Props> = ({ onBlur, onChange, options, html }) => {
  return <Editor fromdiv={fromdiv} todiv={todiv} onBlur={onBlur} onChange={onChange} html={html} options={options} />
}
