import { type IconDefinition } from '@fortawesome/free-solid-svg-icons'
import React, { type MouseEventHandler, type FunctionComponent, type ReactNode } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

interface Props {
  title: string
  tool: string
  children?: ReactNode
  onClick: (tool: string, value: string) => undefined
  active?: boolean
  icon?: IconDefinition
}

const Button: FunctionComponent<Props> = ({ tool, title, active, children, icon, onClick }: Props) => {
  const className = '__toolbar-item' + (active === true ? ' active' : '')
  const handleClick: MouseEventHandler<HTMLButtonElement> = (event) => {
    const button = event.currentTarget
    onClick(tool, button.classList.contains('active') ? 'on->off' : 'off->on')
  }
  return <button type='button' title={title} className={className} onClick={handleClick}>
    {icon != null
      ? <FontAwesomeIcon icon={icon} />
      : children ?? ''
  }
  </button>
}

export default Button
