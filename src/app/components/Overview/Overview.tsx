import React, { FC } from 'react'
import './Overview'
import Text from 'app/shared/Text/Text'
import styles from './Overview.module.css'
import useCollapse from '../../../lib/hooks/useCollapse'
import Button from 'app/shared/Button/Button'

// сама компонента овервью
const Overview: FC = () => {
  // принимаем все пропсы что и указали
  const { containerStyle, contentRef, toggleCollapse, isCollapsed } =
    // начальная высота
    useCollapse({ initialMaxHeight: 95 })

  return (
    <div className={styles.container}>
      <div className={styles.overviewImg}>
        <img src="overview.png" alt="Barcelona tower" />
      </div>
      {/* Text описали ранее в Text.tsx */}
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <div className={styles.overviewText}>
          <Text variant="h1" text="Барселона — обзор города" />
          <div ref={contentRef} style={containerStyle}>
            <Text
              variant="body1"
              text="Барселона с её золотистыми пляжами, архитектурными шедеврами Гауди,
          многочисленными фестивалями и гастрономическим разнообразием
          понравилась мне в первый же день пребывания и стала местом, в
          котором..."
            />
          </div>
        </div>
        {/* эта кнопка для развернуть и скрыть контент в диве  */}
        <button onClick={toggleCollapse}>
          {isCollapsed ? 'Read more' : 'Hide'}
        </button>
      </div>
    </div>
  )
}

export default Overview
