import React from 'react'

const App = () => {


   const btnclicked=(e)=>{
    e.preventDefault()
      console.log("clicked")
    }
  return (
   
    <div>
      <form onSubmit={(e)=>{
        btnclicked(e)
      }}>
        <input type="text" />
        <button>submit</button>
      </form>
    </div>
  )
}

export default App
