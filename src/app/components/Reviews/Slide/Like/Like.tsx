import { useState, type FC } from 'react'
import Button from 'app/shared/Button/Button'
import LikeIcon from 'lib/icons/LikeIcon'
import styles from './Like.module.css'
import Text from 'app/shared/Text/Text'

interface LikeProps {
  defaultLikeCount: number
  variant?: string
  textLike?: string
}

const Like: FC<LikeProps> = ({ defaultLikeCount }) => {
  const [likes, setLikes] = useState(defaultLikeCount)

  const increaseLikes = () => {
    setLikes(prev => (prev += 1))
  }

  return (
    <div className={styles.container}>
      <Button
        variant="send"
        icon={LikeIcon}
        onClick={increaseLikes}
        style={{ backgroundColor: 'transparent' }}
      />
      <Text variant="body3" text={`${likes}`} style={{ marginLeft: '8px' }} />
    </div>
  )
}

export default Like
