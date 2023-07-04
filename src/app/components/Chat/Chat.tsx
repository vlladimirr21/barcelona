import { type FC } from 'react'
import styles from './Chat.module.css'
import React, { useState } from 'react'
import { Message } from './interfaces'
import ChatBox from './ChatBox/ChatBox'

interface ChatProps {
  userName: string
  userAvatarUrl: string
  adminAvatarUrl: string
}

const getInitialMsg = (userAv: string, adminAv: string): Message[] => [
  {
    avatarUrl: userAv,
    date: new Date().toISOString(),
    content:
      'Что из себя представляет вулкан? Просто хочу убедиться, что готова к такому путешествию.',
    isAdmin: false,
  },
  {
    avatarUrl: adminAv,
    date: new Date().toISOString(),
    content:
      'Из достопримечательностей могу предложить обратить внимание на вулкан Майон, путешествие запомнится вам надолго хотя бы из-за невероятной сложности подъема на него. ',
    isAdmin: true,
  },
]

const Chat: FC<ChatProps> = ({ userAvatarUrl, userName, adminAvatarUrl }) => {
  const [messages, setMessages] = useState<Message[]>(() =>
    getInitialMsg(userAvatarUrl, adminAvatarUrl)
  )

  const handleCreateMessage = (
    avatarUrl: string,
    isAdmin: boolean,
    content: string
  ) => {
    const message: Message = {
      avatarUrl,
      date: new Date().toISOString(),
      content,
      isAdmin,
    }

    return message
  }

  const handleAddMessage = (message: Message) => {
    setMessages(prev => [...prev, message])
  }

  return (
    <div className={styles.container}>
      <ChatBox
        userName={userName}
        userAvatarUrl={userAvatarUrl}
        messages={messages}
        isAdmin={false}
        handleAddMessage={handleAddMessage}
        handleCreateMessage={handleCreateMessage}
      />

      <ChatBox
        userName="Администратор"
        userAvatarUrl={adminAvatarUrl}
        messages={messages}
        isAdmin
        handleAddMessage={handleAddMessage}
        handleCreateMessage={handleCreateMessage}
      />
    </div>
  )
}

export default Chat
