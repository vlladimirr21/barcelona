import {
  CSSProperties,
  RefObject,
  // useCallback,
  useEffect,
  useRef,
  useState,
} from 'react'

// проверка высоты
interface UseCollapseProps {
  initialMaxHeight?: number
}

// сворачиваем коллапс
interface UseCollapseReturn {
  contentRef: RefObject<HTMLDivElement>
  isCollapsed: boolean
  toggleCollapse: () => void
  containerStyle: CSSProperties
  // controlsStyle: CSSProperties
}

// если свернуто то высота заданная
const useCollapse = ({
  initialMaxHeight = 200,
}: UseCollapseProps): UseCollapseReturn => {
  const contentRef = useRef<HTMLDivElement>(null)
  const [isCollapsed, setIsCollapsed] = useState(true)

  const mainContainerStyles: CSSProperties = {
    //определяет содержимое обрезать или просто показать
    // ??
    overflow: 'hidden',
    transition: 'max-height 0.5s opacity 0.5s',
  }

  // тут подгоняем высоту стилями
  const [containerStyle, setContainerStyle] = useState<CSSProperties>({
    maxHeight: `${initialMaxHeight}px`,
    ...mainContainerStyles,
  })

  // здесь функция для обратного процесса
  const toggleCollapse = () => {
    setIsCollapsed(prev => !prev)
  }
  //
  useEffect(() => {
    const contentElement = contentRef.current
    // если
    if (!contentElement) {
      // ничего не возращать
      return
    }
    // ??
    const contentHeight = contentElement.scrollHeight
    // тут проверка состояния колапса
    if (isCollapsed) {
      setContainerStyle({
        maxHeight: `${initialMaxHeight}px`,
        ...mainContainerStyles,
      })
      // setIsCollapsed()
    } else {
      setContainerStyle({
        maxHeight: `${contentHeight}px`,
        ...mainContainerStyles,
      })
    }
  }, [isCollapsed, contentRef.current])
  // ??

  // ??
  return { containerStyle, contentRef, toggleCollapse, isCollapsed }
}

export default useCollapse
