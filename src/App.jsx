import React from 'react'
import "./Utils.css";
import CardContainer from './components/CardContainer';
function App() {
  return (
   <>
    <main className="container">
        <p className="container-title">
          ECO GAURDIAN BOT
          <br />
          <span className="container-title-location-battery">
            Location And Battery Status
          </span>
        </p>
        <CardContainer/>
    </main>
   </>
  )
}

export default App
