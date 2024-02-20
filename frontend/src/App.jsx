import { useEffect, useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import axios from 'axios';
import './App.css'

function App() {
  const [jokes, setJokes] = useState([])

  useEffect(() => {
    axios.get('/api/jokes')
    .then((response)=> {
      setJokes(response.data);
    })
    .catch((error)=> {
      console.log(error);
    })
  })
  return (
    <>
    <h1>This is a Demo webpage</h1>
    <p>Jokes: {jokes.length}</p>
    <p> dets: {jokes.map((eachJoke, index) => (
      <span key={index}>{eachJoke.name}</span>
    ))}</p>
    </>
  )
}

export default App
