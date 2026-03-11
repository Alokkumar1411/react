import React from 'react'
import Leftcontent from './Leftcontent'
import Rightcontent from './Rightcontent'

const Page1content = () => {
  return (
    <div className=' flex gap-10 h-[90vh] items-center py-10 px-3'>
        <Leftcontent/>
        <Rightcontent/>

      
    </div>
  )
}

export default Page1content
