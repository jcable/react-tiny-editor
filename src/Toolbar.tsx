import React, { type FunctionComponent } from 'react'
import Button from './Button.js'
import Select from './Select.js'
import Separator from './Separator.js'
import { toolOptions } from './config.js'

interface Props {
  options: string[]
  state: Map<string, boolean | string>
  onChange: (commandId: string, value: string) => undefined
}

const Toolbar: FunctionComponent<Props> = ({ options, state, onChange }: Props) => {
  return <div className='__toolbar'>{
    options.map((toolname: string, index) => {
      if (toolname === '|') {
        return <Separator key={index} />
      } else {
        const opt = toolOptions[toolname]
        const value = state.get(toolname)
        switch (opt.component) {
          case 'select':
          {
            const { command, title, options, defaultValue } = opt
            return <Select
                key={index} title={title}
                defaultValue={defaultValue ?? ''} options={options ?? []}
                value={typeof value === 'string' ? value : undefined}
                onChange={(value) => { onChange(command ?? '', value) }}
              />
          }
          case 'button':
          {
            const { title, tool, icon } = opt
            return <Button
                key={index} title={title} tool={tool}
                active={value === true} icon={icon}
                onClick={onChange}
              />
          }
          default: return ''
        }
      }
    })
  }</div>
}

export default Toolbar
