import React, { useEffect } from 'react'
import logo from './logo.svg'
import './App.css'

function App() {
  useEffect(() => {
    window.addEventListener('message', (e) => {
      console.log(e.data)
    })
  }, [])

  return (
    <div className="App">
      <iframe src="face_test/index.html" width="100%" height="1920px" />
    </div>
  )
}

export default App
