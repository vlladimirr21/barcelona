import React, { FC, useState, KeyboardEvent } from 'react'
import { Message as IMessage } from '../interfaces'
import Button from 'app/shared/Button/Button'
import styles from './ChatBox.module.css'
import Text from 'app/shared/Text/Text'
import Message from './Message/Message'
import SendIcon from 'lib/icons/SendIcon'

interface ChatBoxProps {
  userName: string
  userAvatarUrl: string
  messages: IMessage[]
  isAdmin: boolean
  handleCreateMessage: (
    avatarUrl: string,
    isAdmin: boolean,
    content: string
  ) => IMessage
  handleAddMessage: (message: IMessage) => void
}

const ChatBox: FC<ChatBoxProps> = ({
  userAvatarUrl,
  userName,
  messages,
  isAdmin,
  handleAddMessage,
  handleCreateMessage,
}) => {
  const [content, setContent] = useState('')

  const handleSendMessage = () => {
    const message = handleCreateMessage(userAvatarUrl, isAdmin, content)
    handleAddMessage(message)
    setContent('')
  }

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSendMessage()
    }
  }

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <img width={44} height={44} src={userAvatarUrl} alt="" />
        <div className={styles.userInfo}>
          <Text text={userName} variant="h3" />
          {/* TODO add userRole */}
          <Text text={'Гид по Баварии'} variant="body2" />
        </div>
      </div>
      <div className={styles.messagesContainer}>
        {messages.map(message => (
          <Message
            avatarUrl={message.avatarUrl}
            date={message.date}
            isAdmin={message.isAdmin}
            message={message.content}
          />
        ))}
      </div>
      <div className={styles.footer}>
        <img width={44} height={44} src={userAvatarUrl} alt="" />
        <input
          placeholder="Введите сообщение..."
          type="text"
          value={content}
          onKeyDown={handleKeyDown}
          onChange={e => setContent(e.target.value)}
        />
        <Button
          variant="send"
          icon={SendIcon}
          onClick={handleSendMessage}
          style={{ backgroundColor: 'transparent' }}
        />
      </div>
    </div>
  )
}

export default ChatBox
