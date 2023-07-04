import { CSSProperties, FC } from 'react'
import styles from './Text.module.css'

type Variant =
  | 'h1'
  | 'h3'
  | 'body1'
  | 'body2'
  | 'hint'
  | 'body3'
  | 'city'
  | 'category'

interface TextProps {
  variant: Variant
  text: string
  style?: CSSProperties
}

const Text: FC<TextProps> = ({ variant, text, style }) => {
  return (
    <p className={styles[variant]} style={style}>
      {text}
    </p>
  )
}

export default Text
