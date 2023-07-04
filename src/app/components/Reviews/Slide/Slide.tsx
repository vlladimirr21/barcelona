import { FC } from 'react'
import styles from './Slide.module.css'
import { Slide as ISlide } from 'lib/interfaces'
import Text from 'app/shared/Text/Text'
import Like from './Like/Like'
import Gallery from 'app/shared/Gallery/Gallery'

interface SlideProps {
  id: ISlide['id']
  avatarUrl: ISlide['avatarUrl']
  userName: ISlide['userName']
  city: ISlide['city']
  categoryReview: ISlide['categoryReview']
  text: ISlide['text']
  imageUrls: ISlide['imageUrls']
  commentsCount: ISlide['commentsCount']
  likesCount: ISlide['likesCount']
  commentedMonthAgo: ISlide['commentedMonthAgo']
}

const Slide: FC<SlideProps> = ({
  avatarUrl,
  userName,
  city,
  categoryReview,
  text,
  imageUrls,
  commentedMonthAgo,
  commentsCount,
  likesCount,
}) => {
  let reviewDateText = ''

  if (commentedMonthAgo < 12) {
    reviewDateText = `${commentedMonthAgo} месяцев назад`
  }

  if (commentedMonthAgo > 12 && commentedMonthAgo < 24) {
    reviewDateText = `около 2 лет назад`
  }

  return (
    <div className={styles.container}>
      <div className={styles.slideDescribe}>
        <div className={styles.slideHeader}>
          <img src={avatarUrl} alt="avatar" />
          <Text text={''} variant="body1" style={{ marginLeft: '8px' }} />
          <Text text={userName} variant="body1" />
        </div>
        <div className={styles.cityCategory}>
          <Text text={city} variant="city" />
          <Text text={categoryReview} variant="category" />
        </div>

        <Text text={text} variant="body1" />
      </div>
      <div className={styles.slideImage}>
        <Gallery imageUrls={imageUrls} maxPreviewSize={4} />
      </div>
      <div className={styles.slideFooter}>
        <Text text={reviewDateText} variant="body3" />
        <Text text={`·`} variant="body3" style={{ margin: '0 10px' }} />
        <Text
          style={{ marginRight: '28px' }}
          text={`${commentsCount} комментариев`}
          variant="body3"
        />
        <Like defaultLikeCount={likesCount} variant="body3" />
      </div>
    </div>
  )
}

export default Slide
