import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MaterialUi from './MaterialUi'
import MuiButton from './MuiButton'
import ViewWeatherForecast from './ViewWeatherForecast'
import TriviaApp from './triviaQuiz/TriviaApp'
import { Routes,Route,Link } from 'react-router-dom'
import WelcomePage from './WelcomePage'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div >
      <WelcomePage/>
      <Routes>
        <Route path='/trivia' element={<TriviaApp/>}/>
        <Route path='/forcast' element={<ViewWeatherForecast/>}/>
        <Route path='/materiaui' element={<MaterialUi/>}/>
        <Route path='/buttonui' element={<MuiButton/>}/>
      </Routes>
      {/* <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
    </div>
  )
}

export default App
