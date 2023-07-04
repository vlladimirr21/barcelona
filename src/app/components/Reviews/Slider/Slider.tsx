import { FC, useState } from 'react'
import Slide from '../Slide/Slide'
import styles from './Slider.module.css'
import Button from 'app/shared/Button/Button'
import { Slide as ISlide } from 'lib/interfaces'
import Modal from 'app/shared/Modal/Modal'

interface SliderProps {
  slides: ISlide[]
}

const Slider: FC<SliderProps> = ({ slides }) => {
  const [currentSlide, setCurrentSlide] = useState(0)

  const totalSlides = slides.length

  const goToSlide = (idx: number) => {
    setCurrentSlide(idx)
  }

  const slideElements = slides.map(
    ({
      id,
      city,
      categoryReview,
      text,
      commentedMonthAgo,
      commentsCount,
      likesCount,
      avatarUrl,
      userName,
      imageUrls,
    }) => (
      <Slide
        key={id}
        text={text}
        id={id}
        city={city}
        categoryReview={categoryReview}
        commentedMonthAgo={commentedMonthAgo}
        commentsCount={commentsCount}
        likesCount={likesCount}
        avatarUrl={avatarUrl}
        userName={userName}
        imageUrls={imageUrls}
      />
    )
  )

  return (
    <div>
      <div className={styles.slider}>
        {slideElements[currentSlide]}
        {slideElements[(currentSlide + 1) % totalSlides]}
        {slideElements[(currentSlide + 2) % totalSlides]}
      </div>

      <div className={styles.controls}>
        <Modal
          openBtn={
            <Button
              style={{ border: '1px solid red', padding: '10px 20px' }}
              variant="unlock"
              text="Все отзывы"
            />
          }
        >
          <div>Все отзывы</div>
        </Modal>

        <div className={styles.sliderControls}>
          {slides.map((_, idx) => (
            <Button
              variant="dot"
              isDotActive={idx === currentSlide}
              onClick={() => goToSlide(idx)}
              // style={{ backgroundColor: 'transparent' }}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Slider
