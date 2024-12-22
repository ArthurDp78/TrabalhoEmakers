import { useState } from 'react'
import "./App.css";

function App() {
const [todo, settodos] = useState({ 
  id: 1,
  nome: "criar capacitacao",
  situacao: 0,

},
)

  return(
    <div className = 'todo-block'>
      <div className = 'title_bloc'>to do</div>
      <div clasName = 'content'>
        <p>oi</p>
      </div>
      </div>
  ) 
  
}
export default App
