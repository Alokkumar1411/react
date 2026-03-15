import React, { useState } from 'react'

const App = () => {
  const [first, setfirst] = useState('')
  const [detail, setdetail] = useState('')
  const [Task, setTask] = useState([])

  const formhandler= (e)=>{
    e.preventDefault(e)
    // console.log(first,detail)
    const copyTask=[...Task];
    copyTask.push({first,detail}) 
    setTask(copyTask)
    // console.log(copyTask)
  
    setfirst('')
    setdetail('')
  }
  return (
   <div className='bg-black  lg:flex text-white h-screen overflow-x-hidden'>
     <form onSubmit={(e)=>{
      formhandler(e)
     }} className='flex lg:w-1/2 gap-3 items-start p-10 flex-col ' >
      <h1 className='text-4xl font-bold'>ADD NOTES</h1>

   
      <input className='px-5 py-2 border-2 rounded w-full' type="text" value={first} onChange={(e)=>{
        setfirst(e.target.value)
      }}
      placeholder='Enter Notes' />


      <textarea className='px-5 h-20 py-2 border-2 rounded w-full' type="text" value={detail} onChange={(e)=>{
        setdetail(e.target.value)
      }} placeholder='Enter Details' />


      <button className='bg-white rounded w-full text-black px-5 py-2 ' >Add Notes</button>
    
    </form>

    <div className=' lg:w-1/2  py-10 px-5'>
    <h1 className='text-4xl font-bold'>YOUR NOTES</h1>
    <div className='flex flex-wrap mt-10 gap-5 h-full overflow-auto'>
        {Task.map(function(elem,idx){
          return <div key={idx} className="h-53 w-40 rounded-2xl text-black bg-cover p-4 bg-[url('https://imgs.search.brave.com/sKuBL99HeDVjryf0DzbovRwbTVg3ULh0RRvnyHwZmrA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wMzcv/MTUyLzY4NC9zbWFs/bC9zdGlja3ktbm90/ZS1wYXBlci1iYWNr/Z3JvdW5kLWZyZWUt/cG5nLnBuZw')]">
            <h3 className='leading-tight font-bold text-xl'>{elem.first}</h3>
            <p className='mt-4 leading-tight font-medium text-gray-600'>{elem.detail}</p>
          </div>

        })}

    </div>
    </div>
   </div>
  )
}

export default App
