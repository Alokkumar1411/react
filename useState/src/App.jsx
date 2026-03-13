import React, { useState } from 'react'

const App = () => {
   const [first, setfirst] = useState(0)
   function increase(){
    setfirst(first+1)
   }
   function decrease(){
    setfirst(first-1)
   }
  return (

    <div>
      <h1>{first}</h1>
      <button className='button' onClick={increase} >INCREASE</button>
      <button className='button' onClick={decrease}>DECREASE</button>
    </div>
  )
}

export default App
