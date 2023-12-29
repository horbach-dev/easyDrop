import React from 'react'
import classnames from 'classnames'

import './Title.scss'

interface IProps {
  children: string,
  center?: boolean,
  className?: string,
}

const Title = ({ children, className, center }: IProps) => {
  return (
    <h2
      className={classnames('title', className)}
      style={{
        textAlign: center ? 'center' : 'inherit'
      }}
    >
      {children}
    </h2>
  )
}

export default Title
