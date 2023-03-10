import React, {useState} from 'react'
import './App.css'

function App() {
  const [colors, setColors] = useState();

  const getColors = async() => {
    const response = await fetch('http://localhost:5000/colors')
    const data = await response.json();
    console.log(data);
    setColors(data)
  }

  // Added to get data from cors-disabled-server
  const getUser = async() => {
    //const response = await fetch('http://localhost:8080/user')
    const response = await fetch('http://localhost:5000/user')
    const data = await response.json();
    console.log({data});
  }

  return (
    <div className="App">
      <header className="App-header">
        <p>Welcome to the <b>colors app! 🌈</b></p>
        <button onClick={getColors}>Get Colors!</button>
        <br/>
        <button onClick={getUser}>Get User!</button> 
        <p>{colors && JSON.stringify(colors)}</p>
      </header>
    </div>
  )
}

export default App