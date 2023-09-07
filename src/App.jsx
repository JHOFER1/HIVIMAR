import { useState } from 'react'
import './index.css'
import { Routes } from './routes/index';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
         <Routes />
    </>
  )
}

export default App
