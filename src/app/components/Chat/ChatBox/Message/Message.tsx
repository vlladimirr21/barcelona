import { FC } from 'react'
import styles from './Message.module.css'
import Text from 'app/shared/Text/Text'

interface MessageProps {
  avatarUrl: string
  message: string
  date: string
  isAdmin: boolean
}

const Message: FC<MessageProps> = ({ avatarUrl, message, date, isAdmin }) => {
  return (
    <div className={`${styles.container} ${isAdmin ? styles.admin : ''}`}>
      <img width={44} height={44} src={avatarUrl} alt="" />
      <div className={styles.content}>
        <Text variant="body1" text={message} />
        <Text variant="body2" text={date} />
      </div>
    </div>
  )
}

export default Message
