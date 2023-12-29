import React from 'react'
import classnames from 'classnames'
import { Link } from '$components/_shared/Link'

import './Button.scss'

interface IProps {
  children: any
  icon?: any
  isGradient?: boolean
  className?: string
  onClick?: (v:any) => void | undefined
  to?: string
  asLink?: boolean
  iconColor?: string
  disabled?: boolean
  htmltype?: string
  toHref?: string
}

const ButtonComponent = (props) => <button {...props} />

const Button = ({
  children,
  htmltype,
  disabled,
  onClick,
  className,
  isGradient,
  icon: Icon,
  iconColor,
  to = '',
  asLink,
  toHref = '',
}: IProps) => {

  const CurrentLink = toHref ? 'a' : Link
  const Component  = (to || toHref) ? CurrentLink : ButtonComponent

  const paramsExtLink = toHref ? {
    href: toHref,
    target: '_blank',
    rel: 'noopener noreferrer',
  } : {}

  const paramsLink = to ? { to } : { htmltype }


  return (
    <Component
      className={classnames(
        'btn',
        Icon && 'btn_with-icon',
        isGradient && 'btn_with-gradient',
        asLink && 'btn_as-link',
        disabled && 'btn_disabled',
        className
      )}
      onClick={onClick ? onClick : undefined}
      {...paramsLink}
      {...paramsExtLink}
    >
      <div className='btn__text'>
        {children}
      </div>
      {Icon && <Icon color={iconColor} />}
    </Component>
  )
}

export default Button
