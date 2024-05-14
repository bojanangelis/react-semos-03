import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import App02 from './App02'

function App() {
  const [count, setCount] = useState(0)

  let x = 30

  let vrednost01 = 2000

  return (
    <>
    {x > 39 ? <p>Da x e pogolem ili ednakov od 40</p> : <p>Ne e pogolom od 40</p>}
     {/* from parent to child */}
     <App02 vrednost01={vrednost01} /> 
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>x is -- {x}</h1>
      <div className="card">
        <button className='btn' onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
