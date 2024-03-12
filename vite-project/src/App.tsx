import { WeatherAPI } from './api.js'
import { useState } from 'react'
import reactLogo from './assets/react.svg'

import './App.css'  

const APIKEY 
= "393b770889af49eca6e144813241203"

console.dir(WeatherAPI('London', APIKEY)); 

function App() {
  
  const [city, setCity] = useState('')
  const [weather, setWeather] = useState({})

  const getWeather = () => {
    WeatherAPI(city, APIKEY)
      .then(data => {
        setWeather(data)
      })
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={reactLogo} className="App-logo" alt="logo" />
        <h1>Weather App</h1>
      </header>
      <main>
        <div>
          <input type="text" placeholder="City" onChange={(e) => setCity(e.target.value)} />
          <button onClick={getWeather}>Get Weather</button>
        </div>
        <div>
          <h2>{weather.city}</h2>
          <p>{weather.temperature}°C</p>
          <p>{weather.condition}</p>
          {weather.icon && <img src={weather.icon} alt="Weather icon" />}
        </div>
      </main>
    </div>
  )
}

export default App
