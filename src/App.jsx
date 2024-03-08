import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './Counter'
import PlayerCount from './Player'
import Friends from './Friends'
function App() {
  return (
    <>
      <h2>React Core Concept Part-2</h2>
      <Friends></Friends>
      <Counter></Counter>
      <PlayerCount></PlayerCount>
    </>
  )
}

export default App
