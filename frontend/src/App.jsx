import { useEffect, useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import axios from 'axios';
import './App.css'

function App() {
  const [jokes, setJokes] = useState([])

  useEffect(() => {
    axios.get('http://localhost:4000/jokes')
    .then((response)=> )
  })
  return (
    <>
    <h1>This is a Demo webpage</h1>
    <p>Jokes: {jokes.length}</p>
    </>
  )
}

export default App
