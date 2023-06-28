import React, {
  ButtonHTMLAttributes,
  FC,
  PropsWithChildren,
  ReactElement,
} from 'react'
import styles from './Text.module.css'

// использование кнопки для вариантов в проекте

type Variant = 'unlock' | 'send' | 'link'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant: Variant
  text?: string
  icon?: ReactElement
}

const Button: FC<ButtonProps> = ({ variant, text, ...props }) => {
  return <button {...props}>{text}</button>
}

export default Button
