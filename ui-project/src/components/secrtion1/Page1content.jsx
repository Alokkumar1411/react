import React from 'react'
import Leftcontent from './Leftcontent'
import Rightcontent from './Rightcontent'

const Page1content = () => {
  return (
    <div className=' flex gap-20 h-[95vh] items-center py-20 px-3'>
        <Leftcontent/>
        <Rightcontent/>

      
    </div>
  )
}

export default Page1content
