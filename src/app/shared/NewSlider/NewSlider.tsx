import { FC, useState } from 'react'
import styles from './NewSlider.module.css'

interface NewSliderProps {
  slides: any[]
  renderSlide: (params: any) => JSX.Element
  renderControl: (
    params: any,
    onClick: () => void,
    isActive: boolean
  ) => JSX.Element
}

const NewSlider: FC<NewSliderProps> = ({
  slides,
  renderControl,
  renderSlide,
}) => {
  const [currentSlide, setCurrentSlide] = useState(0)

  const goToSlide = (idx: number) => () => {
    setCurrentSlide(idx)
  }

  const slideElements = slides.map(slide => renderSlide(slide))

  return (
    <div style={{ width: '100%' }}>
      <div className={styles.slider}>{slideElements[currentSlide]}</div>

      <div className={styles.controls}>
        <div className={styles.sliderControls}>
          {slides.map((control, idx) =>
            renderControl(control, goToSlide(idx), idx === currentSlide)
          )}
        </div>
      </div>
    </div>
  )
}

export default NewSlider
