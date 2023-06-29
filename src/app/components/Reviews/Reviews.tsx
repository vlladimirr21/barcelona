import { FC } from 'react'
import Slider from './Slider/Slider'
import { Slide } from 'lib/interfaces'

const slides: Slide[] = [
  {
    id: 1,
    text: 'askjdnaksd',
    avatarUrl: '',
    userName: '',
    imageUrls: [],
    likesCount: 10,
    commentsCount: 10,
    commentedMonthAgo: 10,
    title: '',
  },
]

const Reviews: FC = () => {
  return (
    <div style={{ width: '100%' }}>
      <Slider slides={slides} />
    </div>
  )
}

export default Reviews
