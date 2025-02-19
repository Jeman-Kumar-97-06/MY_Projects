import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
  const handleInput = (e) => {
    localStorage.setItem('inputValue_localstorage_challenge',e.target.value)
  }
  return (
    <>
      <h1>This is App</h1>  
      <input type='text' value={localStorage.getItem('inputValue_localstorage_challenge')} onChange={e=>handleInput(e)}/>
    </>
  )
}

export default App
