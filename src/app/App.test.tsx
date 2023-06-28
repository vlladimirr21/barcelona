import React from 'react'
import { render, screen } from '@testing-library/react'
import App from './App'

test('renders learn react link', () => {
  render(<App />)
  const linkElement = screen.getByText(/learn react/i)
  expect(linkElement).toBeInTheDocument()
})

// Блок "О барселоне": Должен быть реализован в виде слайдера. При нажатии на картинки на карточках должен открываться попап с этой картинкой (галерея).
// Блок "Чат с": Должен быть реализован функционал мини-чата на JS (без бэк-энда, данные хранить в виде объектов js) Суть: При отправке сообщения из одного чата, сообщение должно появляться в двух чатах от имени отправителя (если из окна "чат с пользователем" - от имени администратора, если из окна "чат с администратором" - от имени пользователя). Аналогичная логика для второго окна. Разрешено использование js-фреймворков (AngularJS, Vue, React и т.д.)
