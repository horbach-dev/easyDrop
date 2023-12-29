import React, { useCallback, useState } from 'react'
import InputMask from 'react-input-mask'
import { Form, Input as ANTDInput } from 'antd'
import classnames from 'classnames'

import './Input.scss'

interface IProps {
  name: string,
  label: string,
  className?: string,
  placeholder?: string,
  ref?: any,
  rules?: any,
}


const Input = ({ name, label, className, placeholder = '', rules }: IProps) => {
  const [isFocus, setFocus] = useState(false)

  const onFocus = useCallback(() => {
    setFocus(true)
  }, [isFocus])

  const onBlur = useCallback(() => {
    setFocus(false)
  }, [isFocus])

  const isReq = !!rules?.find(item => item.required)

  return (
    <Form.Item
      className={classnames('form-input', isFocus && 'form-input_focus', isReq && 'form-input_req', className)}
      name={name}
      label={label}
      rules={rules}
    >
      {name === 'phone' ? (
        <InputMask
          mask='+7 (999) 999 99 99'
          placeholder={placeholder}
          onFocus={onFocus}
          onBlur={onBlur}
        >
          {(inputProps) => (
            <ANTDInput
              disableUnderline
              {...inputProps}
            />
          )}
        </InputMask>
      ) : (
        <ANTDInput
          placeholder={placeholder}
          onFocus={onFocus}
          onBlur={onBlur}
        />
      )}
    </Form.Item>
  )
}

export default Input

