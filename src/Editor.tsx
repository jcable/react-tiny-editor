import React, { useEffect, useRef, useState, type FunctionComponent, type FocusEventHandler } from 'react'
import sanitizeHtml from 'sanitize-html'
import ContentEditable from './ContentEditable.js'
import Toolbar from './Toolbar.js'
import { defaultTools, toolOptions } from './config.js'
import { execCommand, queryCommandState, queryCommandValue } from './deprecated.js'
import './index.css'

interface Props {
  options?: string
  html?: string
  onBlur?: (e: any) => void
  onChange?: (html: string) => void
}

function parseTools (tools: string): string[] {
  return tools.split('|').map(section => ['|', ...section.split(/ +/)]).flat().filter(tool => tool !== '').slice(1)
}

export function todiv (html: string): string {
  return sanitizeHtml(html, {
    transformTags: {
      strong: 'b',
      em: 'i'
    }
  })
}

export function fromdiv (html: string): string {
  return sanitizeHtml(html, {
    transformTags: {
      b: 'strong',
      i: 'em'
    }
  })
}

const Editor: FunctionComponent<Props> = ({ options, html, onBlur, onChange }) => {
  const [toolstate, setToolstate] = useState(new Map<string, boolean | string>())
  const text = useRef(todiv(html ?? ''))
  const d = useRef<HTMLDivElement>(null)
  const isFirstRender = useRef<boolean>(true)

  const tools = parseTools(options ?? defaultTools)

  const handleBlur: FocusEventHandler<HTMLDivElement> = (e) => {
    // console.log('editor handleBlur', e)
    if (onBlur != null) onBlur(e)
  }

  const handleChange = (e: any): void => {
    console.log('handleChange', e)
    updateToolbar()
    if (onChange != null) {
      onChange(fromdiv(e.target.value))
    }
  }

  const setTool = (tool: string, value: string | boolean): void => {
    if (toolstate.has(tool)) {
      const current = toolstate.get(tool)
      if (current === value) {
        return
      }
    }
    setToolstate(new Map<string, boolean | string>([...toolstate, [tool, value]]))
  }

  const onChangeToolbar = (tool: string, value: string): undefined => {
    console.log('onChangeToolbar', tool, value, d.current)
    const option = toolOptions[tool]
    if (d.current !== null) {
      d.current.focus()
      console.log('execCommand', option.command, value)
      execCommand(option.command, false, value)
    }
  }

  const updateToolbar = (): void => {
    tools.forEach(item => {
      if (item !== '|') {
        const opt = toolOptions[item]
        switch (opt.component) {
          case 'button': {
            const { command } = opt
            const c = queryCommandState(command)
            setTool(item, c)
          }
            break
          case 'select': {
            const { command } = opt
            const c = queryCommandValue(command)
            setTool(item, c)
          }
        }
      }
    })
  }

  const handleKeys = (e: any): void => {
    // console.log('keys', e)
    updateToolbar()
  }

  const handleClick = (e: any): void => {
    // console.log('click', e)
    updateToolbar()
  }

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
    if (isFirstRender.current) {
      // Set default paragraph to <p>
      execCommand('defaultParagraphSeparator', false, 'p')
    }
    isFirstRender.current = false
    return () => { isFirstRender.current = true }
  }, [])

  return <>
    <Toolbar options={tools} state={toolstate} onChange={onChangeToolbar} />
    <ContentEditable innerRef={d} html={text.current} onBlur={handleBlur} onChange={handleChange}
      className='__editor'
      onKeyUp={handleKeys}
      onClick={handleClick}
    />
  </>
}

export default Editor
