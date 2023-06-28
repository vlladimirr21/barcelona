import React, { FC, PropsWithChildren } from 'react'
import styles from './Text.module.css'

// смотрим вообще какой вариант текста есть в проекте - hint подсказка
// для других компонентов аналогично
type Variant = 'h1' | 'h3' | 'body1' | 'body2' | 'hint'

// в этом интерфейсе вариант это один возможных текстов и сам контент типа стринг
interface TextProps {
  variant: Variant
  text: string
}

//по сути текст можно прокинуть как обычный тег р
const Text: FC<TextProps> = ({ variant, text }) => {
  return <p className={styles[variant]}>{text}</p>
}

export default Text
