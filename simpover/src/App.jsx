import { useState } from 'react'
import './App.css'
import FileHandler from './FileHandler'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='mainFile'>
    <FileHandler/>
    </div>
    </>
  )
}

export default App
