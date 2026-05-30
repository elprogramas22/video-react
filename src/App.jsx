import Video from "./components/Video.jsx"
import xdlmao from "./assets/xdlmao.mp4"
import { useState } from "react"
import "./app.css"  
function App() {
  const[recibimiento, setRecibimiento] = useState(0)

  function like(){
    setRecibimiento(recibimiento + 1)
  }
  function dislike(){
    setRecibimiento(recibimiento - 1)
  }

  return(  
      <div className="main">
        <div>
          <Video video={xdlmao} titulo={"el mejor video de la galaxia"}/>
        </div>

        <div className="buttons">
        
          <p>{recibimiento}</p>
          <button onClick={like}>👍 like </button>
          <button onClick={dislike}>👎 dislike</button>
          <p>{recibimiento}</p>
        
        </div>

      </div>
  )
}

export default App
