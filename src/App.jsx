
import { useEffect, useState } from 'react'
import './App.css'

function App() {
 

  const now = new Date() 
const Time = now.toLocaleTimeString()
const [update ,setupdate] = useState(Time)
useEffect(()=>{
setInterval(() => {
const now = new Date() 
const Time = now.toLocaleTimeString() 
setupdate(Time)
}, 1000);
},[])
  return (
    <>
    <center>

    <div className='container'>
  <div className='watch'>
  <div>
    <h3>𝒟𝒾𝑔𝒾𝓉𝒶𝓁 𝒲𝒶𝓉𝒸𝒽</h3>
  </div>
<div className='box'>
  <div>

<h3>{update}</h3>
  </div>
</div>
  </div>
</div>
    </center>
    </>
  )
}

export default App
