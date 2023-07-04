import './App.css'
import Chat from './components/Chat/Chat'
import Overview from './components/Overview/Overview'
import Reviews from './components/Reviews/Reviews'
import userAvatar from '../lib/imgs/avatarUser.png'
import adminAvatar from '../lib/imgs/avatar.png'

function App() {
  return (
    <div className="App">
      <Overview />
      <Reviews />
      <Chat
        adminAvatarUrl={adminAvatar}
        userAvatarUrl={userAvatar}
        userName="Наталия Полянская"
      />
    </div>
  )
}

export default App

// Блок "О барселоне": Должен быть реализован в виде слайдера. При нажатии на картинки на карточках должен открываться попап с этой картинкой (галерея).
// Блок "Чат с": Должен быть реализован функционал мини-чата на JS (без бэк-энда, данные хранить в виде объектов js) Суть: При отправке сообщения из одного чата, сообщение должно появляться в двух чатах от имени отправителя (если из окна "чат с пользователем" - от имени администратора, если из окна "чат с администратором" - от имени пользователя). Аналогичная логика для второго окна. Разрешено использование js-фреймворков (AngularJS, Vue, React и т.д.)
