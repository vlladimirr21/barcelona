import { ButtonHTMLAttributes, FC, ReactElement } from 'react'
import styles from './Button.module.css'

// использование кнопки для вариантов в проекте

type Variant = 'unlock' | 'send' | 'link' | 'dot'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant: Variant
  text?: string
  icon?: ReactElement
  isDotActive?: boolean
}

const Button: FC<ButtonProps> = ({ variant, text, isDotActive, ...props }) => {
  return (
    <button
      {...props}
      className={`${styles.main} ${styles[variant]} ${
        isDotActive ? styles.dotActive : ''
      }`}
    >
      {text}
    </button>
  )
}

export default Button
