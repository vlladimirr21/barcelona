import React from 'react'
import logo from './logo.svg'
import './App.css'
import Overview from './components/Overview/Overview'
import Reviews from './components/Reviews/Reviews'

function App() {
  return (
    <div className="App">
      {/* добавляем наши управляемые компоненты */}
      <Overview />
      <Reviews />
      {/* review */}
      {/* chat user and admin */}
    </div>
  )
}

export default App
