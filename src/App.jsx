import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UserCard from './components/userCard'
import MainContent from './components/mainContent'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1 style={{textAlign : "left"}}>Users </h1>
     <MainContent />
    </>
  )
}

export default App
