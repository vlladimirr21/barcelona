import { ButtonHTMLAttributes, FC, ReactElement } from 'react'
import styles from './Button.module.css'

type Variant = 'unlock' | 'send' | 'link' | 'dot' | 'icon'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant: Variant
  text?: string
  icon?: ReactElement
  isDotActive?: boolean
}

const Button: FC<ButtonProps> = ({
  variant,
  text,
  isDotActive,
  icon,
  ...props
}) => {
  return (
    <button
      {...props}
      className={`${styles.main} ${styles[variant]} ${
        isDotActive ? styles.dotActive : ''
      }`}
    >
      {icon ?? text}
    </button>
  )
}

export default Button
