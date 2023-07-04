import { FC } from 'react'
import Slider from './Slider/Slider'
import { Slide as ISlide } from 'lib/interfaces'
import avatar from '../../../lib/imgs/avatar.png'
import gallery1 from '../../../lib/imgs/gallery1.png'
import gallery2 from '../../../lib/imgs/gallery2.png'
import gallery3 from '../../../lib/imgs/gallery3.png'
import gallery4 from '../../../lib/imgs/gallery4.png'

const slides: ISlide[] = [
  {
    id: 1,
    text: 'Барселона – моя третья большая любовь, после Вены и Крита. Это город, в который я каждый раз возвращаюсь с огромным удовольствием, всем рекомендую хоть раз там побывать и осмотреть ...',
    avatarUrl: avatar,
    userName: 'Наталия Полянская',
    imageUrls: [
      gallery1,
      gallery2,
      gallery3,
      gallery4,
      gallery1,
      gallery2,
      gallery3,
    ],
    likesCount: 10,
    commentsCount: 9,
    commentedMonthAgo: 2,
    city: 'БАРСЕЛОНА ',
    categoryReview: '- О ГОРОДЕ:',
  },
  {
    id: 2,
    text: ' Плюсы города: весь город одни плюсы! Минусы города: не видела. В наш марафон по Европе не вписалось 2 испанских города от усталости - решили остаток путешествия провести в Барселоне ...',
    avatarUrl: avatar,
    userName: 'Elena Bulgakova',
    imageUrls: [
      gallery1,
      gallery2,
      gallery3,
      gallery4,
      gallery1,
      gallery2,
      gallery3,
    ],
    likesCount: 5,
    commentsCount: 7,
    commentedMonthAgo: 10,
    city: 'БАРСЕЛОНА ',
    categoryReview: '- О ГОРОДЕ:',
  },
  {
    id: 3,
    text: 'Барселона – моя третья большая любовь, после Вены и Крита. Это город, в который я каждый раз возвращаюсь с огромным удовольствием, всем рекомендую хоть раз там побывать и осмотреть ...',
    avatarUrl: avatar,
    userName: 'Наталия Полянская',
    imageUrls: [
      gallery1,
      gallery2,
      gallery3,
      gallery4,
      gallery1,
      gallery2,
      gallery3,
    ],
    likesCount: 20,
    commentsCount: 4,
    commentedMonthAgo: 15,
    city: 'БАРСЕЛОНА ',
    categoryReview: '- О ГОРОДЕ:',
  },
  {
    id: 4,
    text: 'Барселона – моя третья большая любовь, после Вены и Крита. Это город, в который я каждый раз возвращаюсь с огромным удовольствием, всем рекомендую хоть раз там побывать и осмотреть ...',
    avatarUrl: avatar,
    userName: 'Наталия Полянская',
    imageUrls: [
      gallery1,
      gallery2,
      gallery3,
      gallery4,
      gallery1,
      gallery2,
      gallery3,
    ],
    likesCount: 10,
    commentsCount: 4,
    commentedMonthAgo: 13,
    city: 'БАРСЕЛОНА ',
    categoryReview: '- О ГОРОДЕ:',
  },
]

const Reviews: FC = () => {
  return (
    <div
      style={{
        display: 'flex',
        backgroundColor: 'white',
        padding: '32px',
        marginTop: '20px',
      }}
    >
      <Slider slides={slides} />
    </div>
  )
}

export default Reviews
