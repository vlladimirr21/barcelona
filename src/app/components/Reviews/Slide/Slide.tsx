import { FC } from 'react'
import styles from './Slide.module.css'
import { Slide as ISlide } from 'lib/interfaces'

interface SlideProps {
  id: ISlide['id']
  avatarUrl: ISlide['avatarUrl']
  userName: ISlide['userName']
  title: ISlide['title']
  text: ISlide['text']
  imageUrls: ISlide['imageUrls']
  commentsCount: ISlide['commentsCount']
  likesCount: ISlide['likesCount']
  commentedMonthAgo: ISlide['commentedMonthAgo']
}

const Slide: FC<SlideProps> = ({
  id,
  avatarUrl,
  userName,
  title,
  text,
  imageUrls,
  commentedMonthAgo,
  commentsCount,
  likesCount,
}) => {
  return <div className={styles.container}>lalalal</div>
}

export default Slide
