import React, { type FC } from 'react'
import Modal from '../Modal/Modal'
import styles from './Gallery.module.css'
import NewSlider from '../NewSlider/NewSlider'

interface GalleryProps {
  imageUrls: Array<string>
  maxPreviewSize: number
}

const Gallery: FC<GalleryProps> = ({ imageUrls, maxPreviewSize }) => {
  const previews = imageUrls.slice(0, maxPreviewSize)

  const preview = (isLast: boolean, image: string) => {
    return (
      <div className={styles.previewContainer}>
        {isLast && (
          <div className={styles.lastPreviewCounter}>
            <div className={styles.counter}>{`+${
              imageUrls.length - maxPreviewSize
            }`}</div>
          </div>
        )}
        <img className={styles.previewImg} src={image} alt="Preview" />
      </div>
    )
  }

  return (
    <div
      className={styles.container}
      style={{ display: 'flex', flexWrap: 'nowrap' }}
    >
      {previews.map((image, idx) => (
        <Modal openBtn={preview(idx === previews.length - 1, image)}>
          <div className={styles.gallery}>
            <NewSlider
              slides={imageUrls}
              renderSlide={img => (
                <img
                  src={img}
                  alt=""
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                  }}
                />
              )}
              renderControl={(img, onClick, isActive) => (
                <div
                  onClick={onClick}
                  style={{
                    backgroundImage: `url(${img})`,
                    backgroundSize: 'cover',
                    width: '100px',
                    height: '100px',
                    cursor: 'pointer',
                    border: isActive ? '2px solid red' : 'none',
                  }}
                ></div>
              )}
            />
          </div>
        </Modal>
      ))}
    </div>
  )
}

export default Gallery
