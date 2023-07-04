import {
  FC,
  PropsWithChildren,
  ReactElement,
  cloneElement,
  useState,
} from 'react'
import { createPortal } from 'react-dom'
import styles from './Modal.module.css'

const root = document.getElementById('modal-root')

interface ModalProps extends PropsWithChildren {
  openBtn: ReactElement
}
// чилдрен - сам контент
const Modal: FC<ModalProps> = ({ openBtn, children }) => {
  const [open, setOpen] = useState(false)

  const handleOpen = () => setOpen(true)
  const handleClose = () => {
    setOpen(false)
  }

  const content = (
    <div className={styles.container}>
      <div className={styles.overlay} onClick={handleClose}>
        {/* чтобы не прокидывалось на верхние уровни */}
        <div className={styles.wrapper} onClick={e => e.stopPropagation()}>
          {children}
        </div>
      </div>
    </div>
  )

  const modal = root ? createPortal(content, root) : null

  return (
    <div>
      {cloneElement(openBtn, { onClick: handleOpen })}
      {open ? modal : null}
    </div>
  )
}

export default Modal
